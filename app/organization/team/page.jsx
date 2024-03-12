"use client"
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import TeamStatistics from "./TeamStatistics"
import RecentlyViewedTeamMembers from "./RecentlyViewedTeamMembers"
import AllTeamMembers from "./AllTeamMembers"
import TeamAppgroup from "../../_components/AppComps/TeamAppgroup"
import { TeamContext } from "../../_providers/TeamProvider"
import useRenderEmployeesFilters from "../../_hooks/useRenderEmployeesFilter"
import SelectTrigger, { Option } from "../../_components/AppComps/Select"
import DropDown from "../../_components/AppComps/Dropdown"
import FilterSvg from "../../_assets/svgs/FilterSvg"
import { getPastNumOfDays } from "../../_utils"
import NewMemberForm from "./NewMemberForm/NewMemberForm"
import useAxios from "../../_hooks/useAxios"
import { OrganizationContext } from "../../_providers/OrganizationProvider"

const durationOptions = [
  { displayValue: "7 days", fromDate: getPastNumOfDays(7) },
  { displayValue: "14 days", fromDate: getPastNumOfDays(14) },
  { displayValue: "30 days", fromDate: getPastNumOfDays(30) },
  { displayValue: "3 Months", fromDate: getPastNumOfDays(90) },
  { displayValue: "12 Months", fromDate: getPastNumOfDays(365) },
  { displayValue: "2 Years", fromDate: getPastNumOfDays(730) },
  { displayValue: "5 Years", fromDate: getPastNumOfDays(1825) },
]

function Team() {
  const fetchData = useAxios()
  const { organization } = useContext(OrganizationContext)

  const {
    teamMembers,
    recentlyViewedTeamMembers,
    hasInitialized,
    initialize,
    teamStats,
    loading,
    loadingStats,
    fetchStatsForDuration,
    updateRecentlyViewed,
    updateTeamMembers,
    removeArchivedTeamMember,
    removeArchivedRecentlyViewed,
    incrementActiveTeamMembersCount,
    decrementActiveTeamMembersCount
  } = useContext(TeamContext)

  useEffect(() => {
    if (!hasInitialized) initialize()
  }, [hasInitialized, initialize])

  const [search, setSearch] = useState("")
  const [durationFilter, setDurationFilter] = useState(() => ({
    displayValue: "7 days",
    fromDate: getPastNumOfDays(7),
  }))
  const filteredTeamMembers = useMemo(() => {
    return search.length === 0
      ? teamMembers
      : teamMembers.filter((it) =>
          JSON.stringify(Object.values(it).join(" "))
            .toLowerCase()
            .includes(search.toLowerCase())
        )
  }, [teamMembers, search])

  const { filteredEmployees, renderEmployeeFilters } =
    useRenderEmployeesFilters(filteredTeamMembers)

  const [teamMemberFormData, setTeamMemberFormData] = useState(null)

  const handleViewTeamMember = useCallback(
    async (teamMemberId) => {
      const res = await fetchData(
        `/users/employees/${organization?._id}/${teamMemberId}`,
        "put",
        { lastViewedByEmployerAt: new Date(Date.now()) }
      )
      if (res.statusCode === 200) {
        updateRecentlyViewed([res.teamMember])
        setTeamMemberFormData({
          isEdit: true,
          isNew: false,
          user: res.teamMember,
        })
      }
    },
    [organization?._id]
  )

  return (
    <>
      <section className="mx-2 p-3 h-screen flex flex-col gap-4">
        <div className="flex items-center justify-between py-3">
          <h1 className="custom-h1">Team</h1>
          <TeamAppgroup
            openNewMemberModal={() =>
              setTeamMemberFormData({ isNew: true, isEdit: false })
            }
          />
        </div>
        <div className="flex gap-2 items-center justify-start">
          <input
            type="text"
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#F4F5F7] focus:outline-none border-none focus:shadow-none text-[14px] placeholder:text-inherit text-[#7A869A] px-2 py-[4px] rounded-[3px]"
            name="members"
          />
          <ul className="hidden md:flex gap-2">
            {renderEmployeeFilters({})}
            <DropDown
              dropDownTrigger={
                <SelectTrigger shouldApplyStyles>
                  {durationFilter.displayValue}
                </SelectTrigger>
              }
              dropdownContent={
                <>
                  {durationOptions.map((opt) => (
                    <Option
                      key={opt.displayValue}
                      onClick={() => {
                        fetchStatsForDuration(opt.fromDate)
                        setDurationFilter(opt)
                      }}
                      isSelected={
                        durationFilter.fromDate.toLocaleDateString() ===
                        opt.fromDate.toLocaleDateString()
                      }
                    >
                      {opt.displayValue}
                    </Option>
                  ))}
                </>
              }
            />
          </ul>

          <div className="border py-2 px-1 w-fit rounded flex justify-between items-center md:hidden">
            <p className="px-2">Filter</p>
            <div className="px-2">
              <FilterSvg />
            </div>
          </div>
        </div>

        <TeamStatistics
          totalCountOfActiveEmployees={teamStats.totalNumOfActiveEmployees}
          totalNumberOfWorkedHours={teamStats.totalNumOfWorkedHours}
          loading={loading}
          loadingStats={loadingStats}
        />
        {(recentlyViewedTeamMembers.length > 0 || loading) && (
          <RecentlyViewedTeamMembers
            loading={loading}
            users={recentlyViewedTeamMembers}
            viewTeamMember={handleViewTeamMember}
          />
        )}
        <AllTeamMembers
          viewTeamMember={handleViewTeamMember}
          loading={loading}
          users={filteredEmployees}
        />
      </section>
      <>
        <NewMemberForm
          show={teamMemberFormData !== null}
          teamMemberFormData={teamMemberFormData}
          onCancel={() => setTeamMemberFormData(null)}
          organizationId={organization?._id}
          handleUserResponse={(user) => {
            teamMemberFormData.isEdit && updateRecentlyViewed([user])
            teamMemberFormData.isNew && incrementActiveTeamMembersCount()
            updateTeamMembers([user])
          }}
          handleArchivedUser={(user) => {
            decrementActiveTeamMembersCount()
            removeArchivedTeamMember(user)
            removeArchivedRecentlyViewed(user)
          }}
        />
      </>
    </>
  )
}

export default Team
