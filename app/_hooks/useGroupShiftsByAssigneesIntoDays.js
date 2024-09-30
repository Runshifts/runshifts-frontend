import { useMemo } from "react"
import { groupShiftsByAssignee, groupShiftsByDayOfTheWeek } from "../_utils/shifts"

export default function useGroupShiftsByAssigneesIntoDays(shifts) {
  return useMemo(() => {
    const groupingByAssignees = groupShiftsByAssignee(shifts)
    for (const key in groupingByAssignees) {
      groupingByAssignees[key] = {
        assignee: groupingByAssignees[key][0]?.assignee,
        shifts: groupShiftsByDayOfTheWeek(groupingByAssignees[key]),
      }
    }
    return groupingByAssignees
  }, [shifts])
}
