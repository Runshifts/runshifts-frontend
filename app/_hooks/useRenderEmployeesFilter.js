import { useCallback } from "react"
import {
  DepartmentsOrPositionsFilter,
  LocationFilter,
} from "../_components/AppComps/FilterGroup"
import useFilterEmployees from "./useFilterEmployees"
import { useSelector } from "react-redux"

export default function useEmployeeFilters(employeesToFilter) {
  const {
    filteredEmployees,
    positionFilter,
    departmentFilter,
    locationFilter,
    setPositionFilter,
    setDepartmentFilter,
    setLocationFilter,
  } = useFilterEmployees(employeesToFilter)

  const { locations, departments, positions } = useSelector(
    (store) => store.organization
  )
  const renderEmployeeFilters = useCallback(
    (props) => {
      const {
        ComponentToRender,
        onPositionFilterSelect,
        onDepartmentFilterSelect,
        onLocationFilterSelect,
      } = props || {}
      if (typeof ComponentToRender === "function")
        return (
          <ComponentToRender
            {...{
              positionFilter,
              departmentFilter,
              setPositionFilter,
              setDepartmentFilter,
              onPositionFilterSelect,
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
            <DepartmentsOrPositionsFilter
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
            <DepartmentsOrPositionsFilter
              updateCurrentValue={(newFilterValue, idx) => {
                setPositionFilter(newFilterValue)
                newFilterValue !== null &&
                  typeof onPositionFilterSelect === "function" &&
                  onPositionFilterSelect(newFilterValue, idx)
              }}
              currentValue={positionFilter}
              name="Position"
              options={positions}
            />
          </li>
        </>
      )
    },
    [
      positionFilter,
      departmentFilter,
      setPositionFilter,
      setDepartmentFilter,
      locations,
      departments,
      positions,
      locationFilter,
      setLocationFilter,
    ]
  )

  return {
    renderEmployeeFilters,
    filteredEmployees,
    positionFilter,
    departmentFilter,
    setPositionFilter,
    setLocationFilter,
    setDepartmentFilter,
    departments,
    positions,
    locations,
    locationFilter,
  }
}
