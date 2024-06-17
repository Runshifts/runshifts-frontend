import { useMemo } from "react"
import { groupShiftsByAssignee, groupShiftsByHoursWithDateKey } from "../_utils/shifts"

export default function useGetTodaysShiftsTableGrouping(allShifts) {
  const todaysShifts = useMemo(() => {
    return allShifts.filter((shift) => {
      return (
        new Date(shift.startTime).toDateString() ===
        new Date(Date.now()).toDateString()
      )
    })
  }, [allShifts])

  const todaysShiftsGroupedByAssigneesIntoHours = useMemo(() => {
    const groupingByAssignees = groupShiftsByAssignee(
      todaysShifts.filter(
        (shift) => shift.isAccepted === true && shift.isDroppedOff === false
      )
    )
    for (const key in groupingByAssignees) {
      if (groupingByAssignees[key].length === 0) continue
      groupingByAssignees[key] = {
        assignee: groupingByAssignees[key][0]?.assignee,
        shiftsStart: groupShiftsByHoursWithDateKey(
          groupingByAssignees[key],
          "startTime"
        ),
        shiftsEnd: groupShiftsByHoursWithDateKey(
          groupingByAssignees[key],
          "endTime"
        ),
      }
    }
    return groupingByAssignees
  }, [todaysShifts])
  return { todaysShiftsGroupedByAssigneesIntoHours, todaysShifts }
}
