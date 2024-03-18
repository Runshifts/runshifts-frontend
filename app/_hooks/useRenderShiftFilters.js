import { useCallback, useContext } from "react"
import useFilterShifts from "./useFilterShifts"
import {
  DepartmentsOrRolesFilter,
  LocationFilter,
  WeekFilter,
} from "../_components/AppComps/FilterGroup"
import { LocationsContext } from "../_providers/LocationsProvider"
import { DepartmentsAndRolesContext } from "../_providers/DepartmentsAndRolesProvider"

export default function useRenderShiftFilters(shiftsToFilter, weekRanges = []) {
  const {
    filteredShifts,
    roleFilter,
    departmentFilter,
    locationFilter,
    weekFilter,
    setWeekFilter,
    setRoleFilter,
    setDepartmentFilter,
    setLocationFilter,
  } = useFilterShifts(shiftsToFilter)

  const { locations } = useContext(LocationsContext)
  const { departments, roles } = useContext(DepartmentsAndRolesContext)

  const renderShiftFilters = useCallback(
    (props = {}) => {
      const {
        ComponentToRender,
        onWeekFilterSelect,
        onRoleFilterSelect,
        onDepartmentFilterSelect,
        onLocationFilterSelect,
        showRoleFilter = true,
        showDepartmentFilter = true,
        showLocationFilter = true,
      } = props
      if (typeof ComponentToRender === "function")
        return (
          <ComponentToRender
            {...{
              roleFilter,
              departmentFilter,
              locationFilter,
              weekFilter,
              setWeekFilter,
              setRoleFilter,
              setDepartmentFilter,
              setLocationFilter,
              onWeekFilterSelect,
              onRoleFilterSelect,
              onDepartmentFilterSelect,
              onLocationFilterSelect,
            }}
          />
        )
      return (
        <>
          {showLocationFilter && (
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
          )}
          {showDepartmentFilter && (
            <li>
              <DepartmentsOrRolesFilter
                updateCurrentValue={(newFilterValue, idx) => {
                  setDepartmentFilter(newFilterValue)
                  newFilterValue !== null &&
                    typeof onDepartmentFilterSelect === "function" &&
                    onDepartmentFilterSelect(newFilterValue, idx)
                }}
                currentValue={departmentFilter}
                name="Departments"
                options={departments}
              />
            </li>
          )}
          {weekRanges.length > 0 && (
            <li>
              <WeekFilter
                options={weekRanges}
                updateCurrentValue={(newFilterValue, idx) => {
                  setWeekFilter(newFilterValue)
                  newFilterValue !== null &&
                    typeof onWeekFilterSelect === "function" &&
                    onWeekFilterSelect(newFilterValue, idx)
                }}
                currentValue={weekFilter}
              />
            </li>
          )}
          {showRoleFilter && (
            <li>
              <DepartmentsOrRolesFilter
                updateCurrentValue={(newFilterValue, idx) => {
                  setRoleFilter(newFilterValue)
                  newFilterValue !== null &&
                    typeof onRoleFilterSelect === "function" &&
                    onRoleFilterSelect(newFilterValue, idx)
                }}
                currentValue={roleFilter}
                name="Roles"
                options={roles}
              />
            </li>
          )}
        </>
      )
    },
    [
      roleFilter,
      departmentFilter,
      locationFilter,
      weekFilter,
      setWeekFilter,
      setRoleFilter,
      setDepartmentFilter,
      setLocationFilter,
      locations,
      departments,
      roles,
      weekRanges,
    ]
  )

  return {
    renderShiftFilters,
    filteredShifts,
    roleFilter,
    departmentFilter,
    locationFilter,
    weekFilter,
    setWeekFilter,
    setRoleFilter,
    setDepartmentFilter,
    setLocationFilter,
    locations,
    departments,
    roles,
  }
}
