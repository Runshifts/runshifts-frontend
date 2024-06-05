import { useMemo, useState } from "react"
import { filterShiftsByWeek } from "../_utils/shifts"

export default function useFilterShifts(shifts = []) {
  const [locationFilter, setLocationFilter] = useState(null)
  const [departmentFilter, setDepartmentFilter] = useState(null)
  const [weekFilter, setWeekFilter] = useState(null)
  const [positionFilter, setPositionFilter] = useState(null)

  const filteredShifts = useMemo(() => {
    const filtered = shifts.filter((shift) => {
      return (
        (!locationFilter ||
          (shift.location && shift.location === locationFilter) ||
          shift.location?._id === locationFilter) &&
        (!departmentFilter ||
          shift.assignee?.department?.toLowerCase() ===
            departmentFilter.toLowerCase()) &&
        (!positionFilter ||
          (shift.assignee?.position &&
            shift.assignee?.position === positionFilter?._id) ||
          shift.assignee?.position?.name?.toLowerCase() ===
            positionFilter.toLowerCase())
      )
    })
    if (weekFilter) return filterShiftsByWeek(filtered, weekFilter)
    return filtered
  }, [shifts, departmentFilter, positionFilter, locationFilter, weekFilter])

  return {
    filteredShifts,
    setDepartmentFilter,
    setLocationFilter,
    setPositionFilter,
    setWeekFilter,
    departmentFilter,
    locationFilter,
    positionFilter,
    weekFilter,
  }
}
