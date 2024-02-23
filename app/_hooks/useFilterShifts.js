import { useMemo, useState } from "react"

export default function useFilterShifts(shifts = []) {
  const [locationFilter, setLocationFilter] = useState(null)
  const [departmentFilter, setDepartmentFilter] = useState(null)
  const [weekFilter, setWeekFilter] = useState(null)
  const [roleFilter, setRoleFilter] = useState(null)

  const filteredShifts = useMemo(() => {
    return shifts.filter((shift) => {
      return (
        (!locationFilter || shift.location?._id === locationFilter) &&
        (!departmentFilter ||
          shift.assignee?.department?.name?.toLowerCase() ===
            departmentFilter.toLowerCase()) &&
        (!roleFilter ||
          shift.assignee?.role?.name?.toLowerCase() ===
            roleFilter.toLowerCase()) &&
        (!weekFilter ||
          (new Date(shift.startTime).getTime() >=
            new Date(weekFilter.start).getTime() &&
            new Date(shift.startTime).getTime() <=
              new Date(weekFilter.end).getTime()))
      )
    })
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
