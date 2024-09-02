"use client"
import { DepartmentsOrPositionsFilter, LocationFilter } from "./FilterGroup"
import useFilterEmployees from "../../_hooks/useFilterEmployees"
import useHandleMultipleEmployeesSelection from "../../_hooks/useHandleMultipleEmployeesSelection"
import { useState } from "react"
import EmployeeSelect from "./EmployeeSelect"

function ReportFilterGroup({
  employees = [],
  onEmployeeSelect,
  onEmployeeRemove,
  locations,
  departments,
  positions,
}) {
  const [searchText, setSearchText] = useState("")
  const {
    filteredEmployees,
    departmentFilter,
    locationFilter,
    positionFilter,
    setDepartmentFilter,
    setLocationFilter,
    setRoleFilter,
  } = useFilterEmployees(employees, searchText)
  const {
    selectedEmployees,
    handleRemoveEmployee,
    handleSelectEmployee,
    removeLastSelected,
  } = useHandleMultipleEmployeesSelection({
    onEmployeeRemove,
    onEmployeeSelect,
  })
  return (
    <section>
      <div className="flex items-center justify-start gap-2">
        <div className="hidden md:flex gap-2">
          <EmployeeSelect
            employees={filteredEmployees}
            selectedEmployees={selectedEmployees}
            handleSearchChange={(val) => setSearchText(val)}
            handleRemove={handleRemoveEmployee}
            handleSelect={handleSelectEmployee}
            removeLastSelected={removeLastSelected}
          />
          <LocationFilter
            options={locations}
            currentValue={locationFilter}
            updateCurrentValue={(val) => setLocationFilter(val)}
            isActive={locationFilter !== null}
          />
          <DepartmentsOrPositionsFilter
            name="Department"
            options={departments}
            currentValue={departmentFilter}
            updateCurrentValue={(val) => setDepartmentFilter(val)}
            isActive={departmentFilter !== null}
          />
          <DepartmentsOrPositionsFilter
            name="Position"
            options={positions}
            currentValue={positionFilter}
            updateCurrentValue={(val) => setRoleFilter(val)}
            isActive={positionFilter !== null}
          />
        </div>
      </div>
    </section>
  )
}

export default ReportFilterGroup
