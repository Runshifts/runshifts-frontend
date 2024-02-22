"use client"
import React, { useContext } from "react"
import DateRangePicker from "../_components/AppComps/Datepicker"
import Table from "./Table"
import Snapshot from "./Snapshot"
import Wages from "./Wages"
import Export from "../_components/AppComps/Export"
import FilterGroup from "../_components/AppComps/FilterGroup"
import Heading from "../_components/Headings"
import Calender from "./Calender"
import { DashboardContext } from "../_providers/DashboardContext"
import { UserContext } from "../_providers/UserProvider"
import { LocationsContext } from "../_providers/LocationsProvider"
import { DepartmentsAndRolesContext } from "../_providers/DepartmentsAndRolesProvider"

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
  } = useContext(DashboardContext)

  const { locations } = useContext(LocationsContext)
  const { departments, roles } = useContext(DepartmentsAndRolesContext)
  const { user } = useContext(UserContext)
  console.log(departments, roles)
  return (
    <section className="p-3 min-h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading className="capitalize">Welcome {user?.firstName}</Heading>
        <Export />
      </div>
      <FilterGroup
        goToNextWeek={goToNextWeek}
        goToPrevWeek={goToPrevWeek}
        currentWeek={currentWeek}
        weekRanges={weekRanges}
        locations={locations}
        departments={departments}
        roles={roles}
      />
      <div className="bg-[#efeded] flex flex-col gap-y-[8px] rounded p-[16px] overflow-x-auto scrollbar-hide">
        <h1 className="font-semibold text-[#292D32] text-[1rem] leading-normal">
          Calendar
        </h1>
        <DateRangePicker
          goToNextWeek={goToNextWeek}
          goToPrevWeek={goToPrevWeek}
          currentWeek={currentWeek}
        />
        <Calender loading={loadingShifts} shifts={shiftsInCurrentWeek} />
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
