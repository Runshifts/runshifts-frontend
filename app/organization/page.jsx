"use client"
import React, { useContext, useEffect, useMemo } from "react"
import DateRangePicker from "../_components/AppComps/Datepicker"
import Table from "../_components/DashboardComponents/Table"
import Snapshot from "../_components/DashboardComponents/Snapshot"
import Wages from "../_components/DashboardComponents/Wages"
import Heading from "../_components/Headings"
import Calender from "../_components/DashboardComponents/Calender"
import { UserContext } from "../_providers/UserProvider"
import { groupShiftsByDayOfTheWeek } from "../_utils/shifts"
import useRenderShiftFilters from "../_hooks/useRenderShiftFilters"
import useManageFetchWeeklySchedule from "../_hooks/useManageFetchWeeklySchedule"
import useGetWeekRanges from "../_hooks/useGetWeekRanges"
import { useDispatch } from "react-redux"
import { setCurrentWeek } from "../_redux/shifts.slice"
import { useSelector } from "react-redux"
import useGetTodaysShiftsTableGrouping from "../_hooks/useGetTodaysShiftsTableGrouping"
import { fetchTodaysSnapshot } from "../_redux/thunks/shifts.thunk"

export default function Dashboard() {
  const { user } = useContext(UserContext)
  const { organization } = useSelector((store) => store.organization)
  const { todaysSnapshot } = useSelector((store) => store.shiftsAndOvertimes)
  const dispatch = useDispatch()
  const { goToNextWeek, currentWeek, goToPrevWeek, weekRanges, jumpToWeek } =
    useGetWeekRanges(new Date(Date.now()), 7)
  useEffect(() => {
    dispatch(setCurrentWeek(currentWeek))
  }, [dispatch, currentWeek])

  const {
    listOfShiftsInCurrentWeek,
    listOfOvertimesInCurrentWeek,
    loadingShifts,
  } = useManageFetchWeeklySchedule()

  const { filteredShifts, renderShiftFilters } = useRenderShiftFilters(
    [...listOfShiftsInCurrentWeek, ...listOfOvertimesInCurrentWeek],
    weekRanges
  )
  const shiftsInCurrentWeekGroupedByDate = useMemo(() => {
    return groupShiftsByDayOfTheWeek(filteredShifts)
  }, [filteredShifts])

  const { todaysShiftsGroupedByAssigneesIntoHours } =
    useGetTodaysShiftsTableGrouping([
      ...listOfShiftsInCurrentWeek,
      ...listOfOvertimesInCurrentWeek,
    ])
  useEffect(() => {
    if (organization?._id && todaysSnapshot === null)
      dispatch(fetchTodaysSnapshot({ organizationId: organization?._id }))
  }, [dispatch, organization?._id, todaysSnapshot])
  return (
    <section className="p-3 min-h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading className="capitalize">Welcome {user?.firstName}</Heading>
      </div>
      <div className="py-4 flex gap-[8px] justify-between lg:justify-start items-center">
        <DateRangePicker
          goToNextWeek={() => goToNextWeek()}
          goToPrevWeek={() => goToPrevWeek()}
          currentWeek={currentWeek}
        />

        {/* <MobileFilter /> */}
        <ul className="hidden lg:flex flex-wrap gap-[8px]">
          {renderShiftFilters({
            onWeekFilterSelect: (_, idx) => {
              dispatch(setCurrentWeek(weekRanges[idx]))
              jumpToWeek(idx)
            },
          })}
        </ul>
      </div>
      <div className="bg-[#efeded] flex flex-col gap-y-[8px] rounded p-[16px] overflow-x-auto scrollbar-hide">
        <h1 className="font-semibold text-[#292D32] text-[1rem] leading-normal">
          Calendar
        </h1>
        <DateRangePicker
          goToNextWeek={() => goToNextWeek()}
          goToPrevWeek={() => goToPrevWeek()}
          currentWeek={currentWeek}
        />
        <Calender
          loading={loadingShifts}
          shifts={shiftsInCurrentWeekGroupedByDate}
        />
        <h1 className="font-semibold text-lg text-info-700 mx-3 py-2">
          Today&apos;s schedule
        </h1>
        <Table
          title="Name"
          groupedShifts={todaysShiftsGroupedByAssigneesIntoHours}
        />
      </div>
      <Snapshot snapshotData={todaysSnapshot} />
      <Wages snapshotData={todaysSnapshot} />
    </section>
  )
}
