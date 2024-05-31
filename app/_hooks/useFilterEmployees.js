import { useMemo, useState } from "react"

export default function useFilterEmployees(employees = [], searchText = "") {
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
          employee?.position?.toLowerCase() === positionFilter.toLowerCase()) &&
        (!searchText ||
          JSON.stringify(employee)
            .toLowerCase()
            .includes(searchText.toLowerCase()))
      )
    })
  }, [employees, departmentFilter, positionFilter, locationFilter, searchText])

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
