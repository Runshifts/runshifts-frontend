import { useCallback, useContext } from "react"
import useFilterShifts from "./useFilterShifts"
import {
  DepartmentsOrPositionsFilter,
  LocationFilter,
  WeekFilter,
} from "../_components/AppComps/FilterGroup"
import { LocationsContext } from "../_providers/LocationsProvider"
import { DepartmentsAndPositionsContext } from "../_providers/DepartmentsAndPositionsProvider"

export default function useRenderShiftFilters(shiftsToFilter, weekRanges = []) {
  const {
    filteredShifts,
    positionFilter,
    departmentFilter,
    locationFilter,
    weekFilter,
    setWeekFilter,
    setPositionFilter,
    setDepartmentFilter,
    setLocationFilter,
  } = useFilterShifts(shiftsToFilter)

  const { locations } = useContext(LocationsContext)
  const { departments, positions } = useContext(DepartmentsAndPositionsContext)

  const renderShiftFilters = useCallback(
    (props = {}) => {
      const {
        ComponentToRender,
        onWeekFilterSelect,
        onPositionFilterSelect,
        onDepartmentFilterSelect,
        onLocationFilterSelect,
        showPositionFilter = true,
        showDepartmentFilter = true,
        showLocationFilter = true,
      } = props
      if (typeof ComponentToRender === "function")
        return (
          <ComponentToRender
            {...{
              positionFilter,
              departmentFilter,
              locationFilter,
              weekFilter,
              setWeekFilter,
              setPositionFilter,
              setDepartmentFilter,
              setLocationFilter,
              onWeekFilterSelect,
              onPositionFilterSelect,
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
              <DepartmentsOrPositionsFilter
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
          {showPositionFilter && (
            <li>
              <DepartmentsOrPositionsFilter
                updateCurrentValue={(newFilterValue, idx) => {
                  setPositionFilter(newFilterValue)
                  newFilterValue !== null &&
                    typeof onPositionFilterSelect === "function" &&
                    onPositionFilterSelect(newFilterValue, idx)
                }}
                currentValue={positionFilter}
                name="Positions"
                options={positions}
              />
            </li>
          )}
        </>
      )
    },
    [
      positionFilter,
      departmentFilter,
      locationFilter,
      weekFilter,
      setWeekFilter,
      setPositionFilter,
      setDepartmentFilter,
      setLocationFilter,
      locations,
      departments,
      positions,
      weekRanges,
    ]
  )

  return {
    renderShiftFilters,
    filteredShifts,
    positionFilter,
    departmentFilter,
    locationFilter,
    weekFilter,
    setWeekFilter,
    setPositionFilter,
    setDepartmentFilter,
    setLocationFilter,
    locations,
    departments,
    positions,
  }
}
