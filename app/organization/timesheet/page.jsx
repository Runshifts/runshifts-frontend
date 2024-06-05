"use client"
import { useContext, useEffect, useMemo } from "react"
import ApproveAll from "../../_components/AppComps/ApproveAll"
import TimesheetTable from "./TimesheetTable"
import { useSelector, useDispatch } from "react-redux"
import { fetchTimeSheet } from "../../_redux/thunks/timesheet.thunk"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import Heading from "../../_components/Headings"
import DateRangePicker from "../../_components/AppComps/Datepicker"
import useRenderShiftFilters from "../../_hooks/useRenderShiftFilters"
import useGetWeekRanges from "../../_hooks/useGetWeekRanges"
import { filterShiftsByWeek, groupShiftsByAssignee } from "../../_utils/shifts"
import useGetTimesheetActions from "../../_hooks/useGetTimesheetActions"

function Timesheet() {
  const { organization } = useContext(OrganizationContext)
  const { weekRanges, goToNextWeek, goToPrevWeek, currentWeek, jumpToWeek } =
    useGetWeekRanges(new Date(), 7)
  const { shifts, cache } = useSelector((store) => store.timesheet)
  const { renderShiftFilters } = useRenderShiftFilters(shifts, weekRanges)
  const dispatch = useDispatch()

  useEffect(() => {
    if (cache[currentWeek.start.toDateString()] !== true && organization)
      dispatch(
        fetchTimeSheet({
          date: currentWeek.start,
          organizationId: organization?._id,
        })
      )
  }, [dispatch, organization, currentWeek.start, shifts, cache])

  const shiftsInCurrentWeek = useMemo(
    () => filterShiftsByWeek(shifts, currentWeek),
    [shifts, currentWeek]
  )

  const shiftsGroupedByAssignee = groupShiftsByAssignee(shiftsInCurrentWeek)
  const { approveMultipleShifts, loading } = useGetTimesheetActions()
  return (
    <section className="mx-2 p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading as="h1">Timesheet</Heading>
        <ApproveAll
          disabled={
            shiftsInCurrentWeek.length === 0 ||
            loading.multipleShifts ||
            shiftsInCurrentWeek.every((shift) => shift.isApproved)
          }
          approveAllShifts={() =>
            approveMultipleShifts(shiftsInCurrentWeek.map((it) => it._id))
          }
        />
      </div>
      <div className="flex flex-wrap items-center gap-2 list-none pb-4">
        <DateRangePicker
          currentWeek={currentWeek}
          goToNextWeek={goToNextWeek}
          goToPrevWeek={goToPrevWeek}
        />
        {renderShiftFilters({
          onWeekFilterSelect: (_, idx) => jumpToWeek(idx),
          weekFilter: currentWeek,
        })}
      </div>

      <div className="flex items-start w-full overflow-auto min-h-[50dvh] shadow-[0px_2px_8px_0px_#0000001F]">
        <TimesheetTable shiftsGroupedByEmployee={shiftsGroupedByAssignee} />
      </div>
    </section>
  )
}

export default Timesheet
