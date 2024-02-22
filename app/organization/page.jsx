"use client"
import React, { useContext, useMemo } from "react"
import DateRangePicker from "../_components/AppComps/Datepicker"
import Table from "./Table"
import Snapshot from "./Snapshot"
import Wages from "./Wages"
import Export from "../_components/AppComps/Export"
import {
  DepartmentsOrRolesFilter,
  LocationFilter,
  MobileFilter,
  WeekFilter,
} from "../_components/AppComps/FilterGroup"
import Heading from "../_components/Headings"
import Calender from "./Calender"
import { DashboardContext } from "../_providers/DashboardContext"
import { UserContext } from "../_providers/UserProvider"
import { LocationsContext } from "../_providers/LocationsProvider"
import { DepartmentsAndRolesContext } from "../_providers/DepartmentsAndRolesProvider"
import useFilterShifts from "../_hooks/useFilterShifts"
import { groupShiftsByDayOfTheWeek } from "../_utils/shifts"

function Dashboard() {
  const {
    goToNextWeek,
    goToPrevWeek,
    currentWeek,
    shiftsInCurrentWeek,
    tableGrouping,
    todaysSnapshot,
    loadingShifts,
    weekRanges,
    jumpToWeek,
  } = useContext(DashboardContext)

  const { locations } = useContext(LocationsContext)
  const { departments, roles } = useContext(DepartmentsAndRolesContext)
  const { user } = useContext(UserContext)

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
  } = useFilterShifts(shiftsInCurrentWeek)

  const shiftsInCurrentWeekGroupedByDate = useMemo(() => {
    return groupShiftsByDayOfTheWeek(filteredShifts)
  }, [filteredShifts])

  return (
    <section className="p-3 min-h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading className="capitalize">Welcome {user?.firstName}</Heading>
        <Export />
      </div>
      <div className="py-4 flex gap-[8px] justify-between lg:justify-start items-center">
        <DateRangePicker
          goToNextWeek={() => {
            setWeekFilter(null)
            goToNextWeek()
          }}
          goToPrevWeek={() => {
            goToPrevWeek()
            setWeekFilter(null)
          }}
          currentWeek={currentWeek}
        />
        <MobileFilter />
        <ul className="hidden lg:flex flex-wrap gap-[8px]">
          <li>
            <LocationFilter
              updateCurrentValue={setLocationFilter}
              currentValue={locationFilter}
              options={locations}
            />
          </li>
          <li>
            <DepartmentsOrRolesFilter
              updateCurrentValue={setDepartmentFilter}
              currentValue={departmentFilter}
              name="Departments"
              options={departments}
            />
          </li>
          <li>
            <WeekFilter
              options={weekRanges}
              updateCurrentValue={(newFilterValue, idx) => {
                setWeekFilter(newFilterValue)
                newFilterValue !== null && jumpToWeek(idx)
              }}
              currentValue={weekFilter}
            />
          </li>
          <li>
            <DepartmentsOrRolesFilter
              updateCurrentValue={setRoleFilter}
              currentValue={roleFilter}
              name="Roles"
              options={roles}
            />
          </li>
        </ul>
      </div>
      <div className="bg-[#efeded] flex flex-col gap-y-[8px] rounded p-[16px] overflow-x-auto scrollbar-hide">
        <h1 className="font-semibold text-[#292D32] text-[1rem] leading-normal">
          Calendar
        </h1>
        <DateRangePicker
          goToNextWeek={() => {
            setWeekFilter(null)
            goToNextWeek()
          }}
          goToPrevWeek={() => {
            goToPrevWeek()
            setWeekFilter(null)
          }}
          currentWeek={currentWeek}
        />
        <Calender
          loading={loadingShifts}
          shifts={shiftsInCurrentWeekGroupedByDate}
        />
        <h1 className="font-semibold text-lg text-info-700 mx-3 py-2">
          Today&apos;s schedule
        </h1>
        <Table groupedShifts={tableGrouping} />
      </div>
      <Snapshot snapshotData={todaysSnapshot} />
      <Wages snapshotData={todaysSnapshot} />
    </section>
  )
}

export default Dashboard
