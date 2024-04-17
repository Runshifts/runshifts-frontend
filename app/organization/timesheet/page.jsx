"use client"
import { useContext, useEffect } from "react"
import ApproveAll from "../../_components/AppComps/ApproveAll"
import TimesheetTable from "./TimesheetTable"
import { useSelector, useDispatch } from "react-redux"
import { fetchTimeSheet } from "../../_redux/thunks/timesheet.thunk"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import Heading from "../../_components/Headings"
import DateRangePicker from "../../_components/AppComps/Datepicker"
import useRenderShiftFilters from "../../_hooks/useRenderShiftFilters"
import useGetWeekRanges from "../../_hooks/useGetWeekRanges"
import { groupShiftsByAssignee } from "../../_utils/shifts"

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
  }, [dispatch, organization?._id, currentWeek.start, shifts])

  const shiftsGroupedByAssignee = groupShiftsByAssignee(shifts)

  return (
    <section className="mx-2 p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading as="h1">Timesheet</Heading>
        <ApproveAll />
      </div>
      <div className="flex items-center gap-2 list-none">
        <DateRangePicker
          currentWeek={currentWeek}
          goToNextWeek={goToNextWeek}
          goToPrevWeek={goToPrevWeek}
        />
        {renderShiftFilters({
          onWeekFilterSelect: (_, idx) => jumpToWeek(idx),
        })}
      </div>

      <TimesheetTable />
    </section>
  )
}

export default Timesheet
