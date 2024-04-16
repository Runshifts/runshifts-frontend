import { useMemo, useState } from "react"

export default function useFilterEmployees(employees = []) {
  const [departmentFilter, setDepartmentFilter] = useState(null)
  const [positionFilter, setRoleFilter] = useState(null)
  const [locationFilter, setLocationFilter] = useState(null)

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      return (
        (!locationFilter || employee.location?._id === locationFilter) &&
        (!departmentFilter ||
          employee?.department?.toLowerCase() ===
            departmentFilter.toLowerCase()) &&
        (!positionFilter ||
          employee?.position?.toLowerCase() === positionFilter.toLowerCase())
      )
    })
  }, [employees, departmentFilter, positionFilter, locationFilter])

  return {
    filteredEmployees,
    setDepartmentFilter,
    setRoleFilter,
    setLocationFilter,
    departmentFilter,
    positionFilter,
    locationFilter,
  }
}
