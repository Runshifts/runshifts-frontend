import { useMemo, useState } from "react"

export default function useFilterEmployees(employees = []) {
  const [departmentFilter, setDepartmentFilter] = useState(null)
  const [roleFilter, setRoleFilter] = useState(null)
  const [locationFilter, setLocationFilter] = useState(null)

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      return (
        (!locationFilter || employee.location?._id === locationFilter) &&
        (!departmentFilter ||
          employee?.department?.name?.toLowerCase() ===
            departmentFilter.toLowerCase()) &&
        (!roleFilter ||
          employee?.role?.name?.toLowerCase() === roleFilter.toLowerCase())
      )
    })
  }, [employees, departmentFilter, roleFilter, locationFilter])

  return {
    filteredEmployees,
    setDepartmentFilter,
    setRoleFilter,
    setLocationFilter,
    departmentFilter,
    roleFilter,
    locationFilter,
  }
}
