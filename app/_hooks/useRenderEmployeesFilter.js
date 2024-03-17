import { useCallback, useContext } from "react"
import { DepartmentsOrRolesFilter, LocationFilter } from "../_components/AppComps/FilterGroup"
import { LocationsContext } from "../_providers/LocationsProvider"
import { DepartmentsAndRolesContext } from "../_providers/DepartmentsAndRolesProvider"
import useFilterEmployees from "./useFilterEmployees"

export default function useEmployeeFilters(employeesToFilter) {
  const {
    filteredEmployees,
    roleFilter,
    departmentFilter,
    locationFilter,
    setRoleFilter,
    setDepartmentFilter,
    setLocationFilter
  } = useFilterEmployees(employeesToFilter)

  const { locations } = useContext(LocationsContext)
  const { departments, roles } = useContext(DepartmentsAndRolesContext)

  const renderEmployeeFilters = useCallback(
    (props) => {
      const {
        ComponentToRender,
        onRoleFilterSelect,
        onDepartmentFilterSelect,
        onLocationFilterSelect,
      } = props || {}
      if (typeof ComponentToRender === "function")
        return (
          <ComponentToRender
            {...{
              roleFilter,
              departmentFilter,
              setRoleFilter,
              setDepartmentFilter,
              onRoleFilterSelect,
              onDepartmentFilterSelect,
              onLocationFilterSelect,
            }}
          />
        )
      return (
        <>
          <li>
            <LocationFilter
              updateCurrentValue={(newFilterValue, idx) => {
                setLocationFilter(newFilterValue)
                newFilterValue !== null &&
                  typeof onLocationFilterSelect === "function" &&
                  onLocationFilterSelect(newFilterValue, idx)
              }}
              currentValue={locationFilter}
              options={locations}
            />
          </li>
          <li>
            <DepartmentsOrRolesFilter
              updateCurrentValue={(newFilterValue, idx) => {
                setDepartmentFilter(newFilterValue)
                newFilterValue !== null &&
                  typeof onDepartmentFilterSelect === "function" &&
                  onDepartmentFilterSelect(newFilterValue, idx)
              }}
              currentValue={departmentFilter}
              name="Department"
              options={departments}
            />
          </li>
          <li>
            <DepartmentsOrRolesFilter
              updateCurrentValue={(newFilterValue, idx) => {
                setRoleFilter(newFilterValue)
                newFilterValue !== null &&
                  typeof onRoleFilterSelect === "function" &&
                  onRoleFilterSelect(newFilterValue, idx)
              }}
              currentValue={roleFilter}
              name="Position"
              options={roles}
            />
          </li>
        </>
      )
    },
    [
      roleFilter,
      departmentFilter,
      setRoleFilter,
      setDepartmentFilter,
      locations,
      departments,
      roles,
      locationFilter,
      setLocationFilter
    ]
  )

  return {
    renderEmployeeFilters,
    filteredEmployees,
    roleFilter,
    departmentFilter,
    setRoleFilter,
    setLocationFilter,
    setDepartmentFilter,
    departments,
    roles,
    locations,
    locationFilter,
  }
}
