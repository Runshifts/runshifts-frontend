"use client"
import { useContext, useEffect, useState } from "react"
import TrackerTable from "./TrackerTable"
import DateFilter from "./DateFilter"
import { TrackerContext } from "../../_providers/Employer/TrackerProvider"
import useRenderShiftFilters from "../../_hooks/useRenderShiftFilters"
import PageSearchInput from "../../_components/AppComps/PageSearchInput"
import Heading from "../../_components/Headings"
import { BREAKDOWN_VARIANTS } from "./Breakdown"
import { ShiftAndOvertimeRequestsContext } from "../../_providers/Employer/ShiftAndOvertimeRequestsProvider"

function Tracker() {
  const [search, setSearch] = useState("")
  const {
    loading,
    initialize,
    hasInitialized,
    dateFilter,
    updateDateFilter,
    shiftsInSelectedDate,
  } = useContext(TrackerContext)

  const { shiftRequests } = useContext(ShiftAndOvertimeRequestsContext)

  useEffect(() => {
    if (hasInitialized === false) initialize()
  }, [initialize, hasInitialized])

  const { renderShiftFilters, filteredShifts } = useRenderShiftFilters(
    [
      ...shiftsInSelectedDate.clockedIn.map((it) => ({
        ...it,
        filter: BREAKDOWN_VARIANTS.CLOCKED_IN,
      })),
      ...shiftsInSelectedDate.clockedOut.map((it) => ({
        ...it,
        filter: BREAKDOWN_VARIANTS.CLOCKED_OUT,
      })),
      ...shiftsInSelectedDate.currentlyOnBreak.map((it) => ({
        ...it,
        filter: BREAKDOWN_VARIANTS.ON_BREAK,
      })),
    ].filter((shift) =>
      `${shift.assignee?.firstName} ${shift.assignee?.lastName} ${shift.assignee?.fullName} ${shift.assignee?.email}`
        .trim()
        .toLowerCase()
        .includes(search.trim().toLowerCase())
    )
  )

  return (
    <section className="mx-2 h-screen flex flex-col gap-4">
      <div className="flex flex-col gap-4 justify-between pt-[24px] pb-4">
        <Heading as="h1">Tracker</Heading>
        <ul className="flex gap-[8px]">
          <PageSearchInput
            type="text"
            placeholder="Search members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="members"
          />
          {renderShiftFilters({ showRoleFilter: false })}
          <DateFilter
            dateFilter={dateFilter}
            updateDateFilter={updateDateFilter}
          />
        </ul>
      </div>
      <TrackerTable
        filteredShifts={filteredShifts}
        isCurrentDate={dateFilter.toDateString() === new Date().toDateString()}
        loading={loading}
        incomingShiftRequests={shiftRequests}
      />
    </section>
  )
}

export default Tracker
