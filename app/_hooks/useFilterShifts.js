import { useMemo, useState } from "react"
import { filterShiftsByWeek } from "../_utils/shifts"

export default function useFilterShifts(shifts = []) {
  const [locationFilter, setLocationFilter] = useState(null)
  const [departmentFilter, setDepartmentFilter] = useState(null)
  const [weekFilter, setWeekFilter] = useState(null)
  const [roleFilter, setRoleFilter] = useState(null)

  const filteredShifts = useMemo(() => {
    const filtered = shifts.filter((shift) => {
      return (
        (!locationFilter ||
          (shift.location && shift.location === locationFilter) ||
          shift.location?._id === locationFilter) &&
        (!departmentFilter ||
          (shift.assignee?.department &&
            shift.assignee?.department === departmentFilter?._id) ||
          shift.assignee?.department?.name?.toLowerCase() ===
            departmentFilter.toLowerCase()) &&
        (!roleFilter ||
          (shift.assignee?.role && shift.assignee?.role === roleFilter?._id) ||
          shift.assignee?.role?.name?.toLowerCase() ===
            roleFilter.toLowerCase())
      )
    })
    if (weekFilter) return filterShiftsByWeek(filtered, weekFilter)
    return filtered
  }, [shifts, departmentFilter, roleFilter, locationFilter, weekFilter])

  return {
    filteredShifts,
    setDepartmentFilter,
    setLocationFilter,
    setRoleFilter,
    setWeekFilter,
    departmentFilter,
    locationFilter,
    roleFilter,
    weekFilter,
  }
}
