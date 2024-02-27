"use client"
import React, { useContext, useMemo, useState } from "react"
import Export from "../../_components/AppComps/Export"
import ScheduleTable from "./ScheduleTable"
import ShiftAndOvertimeRequestsProvider, {
  ShiftAndOvertimeRequestsContext,
} from "@/app/_providers/ShiftAndOvertimeRequestsProvider"
import Heading from "@/app/_components/Headings"
import ShiftRequestsSection from "./ShiftRequestsSection"
import OvertimeRequestsSection from "./OvertimeRequestsSection"
import { DashboardContext } from "@/app/_providers/DashboardContext"
import { getNextSunday, getPreviousMonday } from "@/app/_utils"
import {
  groupShiftsByAssignee,
  groupShiftsByDayOfTheWeek,
} from "@/app/_utils/shifts"
import DateRangePicker from "@/app/_components/AppComps/Datepicker"
import useRenderShiftFilters from "@/app/_hooks/useRenderShiftFilters"
import { OrganizationContext } from "@/app/_providers/OrganizationProvider"

function Schedule() {
  const [selectedUser, setSelectedUser] = useState(null)
  const { shiftRequests, overtimeRequests, loadingShiftRequests } = useContext(
    ShiftAndOvertimeRequestsContext
  )
  const { employees } = useContext(OrganizationContext)

  const {
    shiftsInCurrentWeek,
    currentWeek,
    goToNextWeek,
    goToPrevWeek,
    jumpToWeek,
    weekRanges,
    indexOfThePresentWeek,
    loadingShifts,
  } = useContext(DashboardContext)

  const presentWeek = useMemo(
    () => ({
      ...(weekRanges[indexOfThePresentWeek] || {
        start: getPreviousMonday(new Date(Date.now())),
        end: getNextSunday(new Date(Date.now())),
      }),
    }),
    [indexOfThePresentWeek]
  )
  const isDuplicationAllowed = useMemo(() => {
    return currentWeek.start.getTime() >= presentWeek.start.getTime()
  }, [presentWeek.start, currentWeek.start])

  const { filteredShifts, renderShiftFilters, setWeekFilter } =
    useRenderShiftFilters(shiftsInCurrentWeek, weekRanges)

  const { allDays } = useMemo(() => {
    const start = getPreviousMonday(new Date(currentWeek.start))
    const end = getNextSunday(new Date(currentWeek.start))
    const allDays = [new Date(start)]
    while (start.getTime() < end.getTime()) {
      const nextDate = new Date(allDays[allDays.length - 1])
      nextDate.setHours(nextDate.getHours() + 24)
      allDays.push(nextDate)
      start.setHours(start.getHours() + 24)
    }
    return {
      allDays,
    }
  }, [currentWeek.start, currentWeek.end])

  const shiftsGroupedByAssigneesIntoDays = useMemo(() => {
    let finalFilteredShifts =
      selectedUser === null
        ? filteredShifts
        : filteredShifts.filter((it) => it?.assignee?._id === selectedUser?._id)
    const groupingByAssignees = groupShiftsByAssignee(finalFilteredShifts)
    for (const key in groupingByAssignees) {
      groupingByAssignees[key] = {
        assignee: groupingByAssignees[key][0]?.assignee,
        shifts: groupShiftsByDayOfTheWeek(groupingByAssignees[key]),
      }
    }
    return groupingByAssignees
  }, [filteredShifts, selectedUser])

  return (
    <section className="p-3 h-screen">
      <div className="flex items-start flex-col gap-6 pt-6 pb-4">
        <div className="flex items-center justify-between w-full">
          <Heading as="h1">Schedule</Heading>
          <Export isDuplicationAllowed={isDuplicationAllowed} />
        </div>
        <ul className="flex list-none gap-2">
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
          {renderShiftFilters({
            onWeekFilterSelect: (_, idx) => jumpToWeek(idx),
          })}
        </ul>
      </div>
      <div className="mb-[24px]">
        <ScheduleTable
          employees={employees}
          selectedUser={selectedUser}
          handleUserFilterSelect={(selection) => setSelectedUser(selection)}
          canBeDuplicated={isDuplicationAllowed}
          loading={loadingShifts}
          shiftsGroupedByAssignees={shiftsGroupedByAssigneesIntoDays}
          allDays={allDays}
          showAddShiftModal={() => {}}
          duplicateShift={() => {}}
        />
      </div>
      <div className="text-[#252525] min-h-[55dvh] flex flex-col items-start gap-y-[30px] my-4 p-4 shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.12)] bg-white rounded-lg shadow-xl">
        <ShiftRequestsSection
          loading={loadingShiftRequests}
          shiftRequests={shiftRequests}
        />
        <OvertimeRequestsSection
          loading={loadingShiftRequests}
          overtimeRequests={overtimeRequests}
        />
      </div>
    </section>
  )
}

export default function ProviderWrapper() {
  return (
    <ShiftAndOvertimeRequestsProvider>
      <Schedule />
    </ShiftAndOvertimeRequestsProvider>
  )
}
