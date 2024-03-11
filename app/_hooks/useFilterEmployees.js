import { useMemo, useState } from "react"

export default function useFilterEmployees(employees = []) {
  const [departmentFilter, setDepartmentFilter] = useState(null)
  const [roleFilter, setRoleFilter] = useState(null)

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      return (
        (!departmentFilter ||
          employee.assignee?.department?.name?.toLowerCase() ===
            departmentFilter.toLowerCase()) &&
        (!roleFilter ||
          employee.assignee?.role?.name?.toLowerCase() ===
            roleFilter.toLowerCase())
      )
    })
  }, [employees, departmentFilter, roleFilter])

  return {
    filteredEmployees,
    setDepartmentFilter,
    setRoleFilter,
    departmentFilter,
    roleFilter,
  }
}
