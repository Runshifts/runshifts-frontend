"use client"
import React, { useContext, useMemo } from "react"
import DateRangePicker from "../_components/AppComps/Datepicker"
import Table from "./Table"
import Snapshot from "./Snapshot"
import Wages from "./Wages"
import { MobileFilter } from "../_components/AppComps/FilterGroup"
import Heading from "../_components/Headings"
import Calender from "./Calender"
import { DashboardContext } from "../_providers/Employer/DashboardContext"
import { UserContext } from "../_providers/UserProvider"
import { groupShiftsByDayOfTheWeek } from "../_utils/shifts"
import useRenderShiftFilters from "../_hooks/useRenderShiftFilters"

export default function Dashboard() {
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
    overtimesInCurrentWeek
  } = useContext(DashboardContext)
  const { user } = useContext(UserContext)

  const { filteredShifts, renderShiftFilters, setWeekFilter } =
    useRenderShiftFilters([...shiftsInCurrentWeek, ...overtimesInCurrentWeek], weekRanges)
  const shiftsInCurrentWeekGroupedByDate = useMemo(() => {
    return groupShiftsByDayOfTheWeek(filteredShifts)
  }, [filteredShifts])

  return (
    <section className="p-3 min-h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading className="capitalize">Welcome {user?.firstName}</Heading>
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
          {renderShiftFilters({
            onWeekFilterSelect: (_, idx) => jumpToWeek(idx),
          })}
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
        <Table title="Name" groupedShifts={tableGrouping} />
      </div>
      <Snapshot snapshotData={todaysSnapshot} />
      <Wages snapshotData={todaysSnapshot} />
    </section>
  )
}
