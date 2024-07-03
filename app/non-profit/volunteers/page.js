"use client"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import RecentlyViewedTeamMembers from "../../_components/TeamComponents/RecentlyViewedTeamMembers"
import AllTeamMembers from "../../_components/TeamComponents/AllTeamMembers"
import TeamAppgroup from "../../_components/AppComps/TeamAppgroup"
import useRenderEmployeesFilters from "../../_hooks/useRenderEmployeesFilter"
import SelectTrigger, { Option } from "../../_components/AppComps/Select"
import DropDown from "../../_components/AppComps/Dropdown"
import FilterSvg from "../../_assets/svgs/FilterSvg"
import { getPastNumOfDays } from "../../_utils"
import NewMemberForm from "../../_components/TeamComponents/NewMemberForm/NewMemberForm"
import useAxios from "../../_hooks/useAxios"
import PageSearchInput from "../../_components/AppComps/PageSearchInput"
import Heading from "../../_components/Headings"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {
  fetchTeamData,
  fetchStatsForDuration,
  fetchArchivedTeamMembers,
} from "../../_redux/thunks/organization.thunk"
import {
  decrementActiveTeamMembersCount,
  handleArchivedUser,
  handleRestoreUser,
  incrementActiveTeamMembersCount,
  updateRecentlyViewed,
  updateTeamMembers,
  updateTeamStats,
} from "../../_redux/organization.slice"

const durationOptions = [
  { displayValue: "7 days", fromDate: getPastNumOfDays(7) },
  { displayValue: "14 days", fromDate: getPastNumOfDays(14) },
  { displayValue: "30 days", fromDate: getPastNumOfDays(30) },
  { displayValue: "3 Months", fromDate: getPastNumOfDays(90) },
  { displayValue: "12 Months", fromDate: getPastNumOfDays(365) },
  { displayValue: "2 Years", fromDate: getPastNumOfDays(730) },
  { displayValue: "5 Years", fromDate: getPastNumOfDays(1825) },
]

export default function Team() {
  const dispatch = useDispatch()
  const fetchData = useAxios()
  const {
    organization,
    hasInitializedTeam,
    loadingTeamStats,
    teamMembers,
    archivedTeamMembers,
    recentlyViewedEmployees,
    teamStatsCache,
    loadingTeamData,
  } = useSelector((store) => store.organization)

  const handleFetchStatsForDuration = useCallback(
    (fromDate) => {
      if (!organization?._id || loadingTeamStats) return
      if (teamStatsCache[fromDate.toLocaleDateString()] >= 0) {
        dispatch(
          updateTeamStats({
            totalNumOfWorkedHours:
              teamStatsCache[fromDate.toLocaleDateString()],
          })
        )
        return
      }
      dispatch(
        fetchStatsForDuration({ organizationId: organization?._id, fromDate })
      )
    },
    [loadingTeamStats, organization?._id, teamStatsCache, dispatch]
  )

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
        res.teamMember?.isArchived === false &&
          dispatch(updateRecentlyViewed([res.teamMember]))
        setTeamMemberFormData({
          isEdit: true,
          isNew: false,
          user: res.teamMember,
        })
      }
    },
    [organization?._id]
  )

  useEffect(() => {
    if (organization !== null && !hasInitializedTeam) {
      dispatch(fetchTeamData(organization?._id))
      dispatch(fetchArchivedTeamMembers(organization?._id))
    }
  }, [dispatch, organization?._id, hasInitializedTeam])

  return (
    <>
      <section className="mx-2 px-3 pb-3 h-screen flex flex-col gap-4">
        <div className="flex items-center justify-between py-3">
          <Heading as="h1">Team</Heading>
          <TeamAppgroup
            buttonTitle="Add new volunteer"
            openNewMemberModal={() =>
              setTeamMemberFormData({ isNew: true, isEdit: false })
            }
          />
        </div>
        <div className="flex gap-2 items-center justify-start">
          <PageSearchInput
            type="text"
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
                        handleFetchStatsForDuration(opt.fromDate)
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
        {(recentlyViewedEmployees.length > 0 || loadingTeamData) && (
          <RecentlyViewedTeamMembers
            loading={loadingTeamData}
            users={recentlyViewedEmployees}
            viewTeamMember={handleViewTeamMember}
            type="non-profit"
          />
        )}
        <AllTeamMembers
          viewTeamMember={handleViewTeamMember}
          archivedTeamMembers={archivedTeamMembers}
          loading={loadingTeamData}
          users={filteredEmployees}
          type="non-profit"
        />
      </section>
      <>
        <NewMemberForm
          type="volunteer"
          show={teamMemberFormData !== null}
          teamMemberFormData={teamMemberFormData}
          onCancel={() => setTeamMemberFormData(null)}
          organizationId={organization?._id}
          handleUserResponse={(user, isEdit) => {
            isEdit && dispatch(updateRecentlyViewed([user]))
            !isEdit && dispatch(incrementActiveTeamMembersCount())
            dispatch(updateTeamMembers([user]))
          }}
          handleArchivedUser={(user) => {
            dispatch(decrementActiveTeamMembersCount())
            if (user.isArchived) dispatch(handleArchivedUser(user))
            else dispatch(handleRestoreUser(user))
          }}
        />
      </>
    </>
  )
}
