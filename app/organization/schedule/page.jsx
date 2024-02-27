"use client"
import React, { useContext, useMemo } from "react"
import Export from "../../_components/AppComps/Export"
// import FilterGroup from '../../_components/AppComps/FilterGroup'
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

function Schedule() {
  const { shiftRequests, overtimeRequests, loadingShiftRequests } = useContext(
    ShiftAndOvertimeRequestsContext
  )
  const { allShifts, shiftsInCurrentWeek, currentWeek } = useContext(DashboardContext)
  const { start, end, allDays } = useMemo(() => {
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
      start: getPreviousMonday(currentWeek.start),
      end: getNextSunday(currentWeek.end),
      allDays,
    }
  }, [currentWeek.start, currentWeek.end])

  const shiftsInThisWeek = useMemo(() => {
    return allShifts.filter((shift) => {
      return (
        new Date(shift.startTime).getTime() >= start.getTime() &&
        new Date(shift.startTime).getTime() <= end.getTime()
      )
    })
  }, [allShifts, start, end])

  const shiftsGroupedByAssigneesIntoDays = useMemo(() => {
    const groupingByAssignees = groupShiftsByAssignee(shiftsInCurrentWeek)
    for (const key in groupingByAssignees) {
      groupingByAssignees[key] = {
        assignee: groupingByAssignees[key][0]?.assignee,
        shifts: groupShiftsByDayOfTheWeek(groupingByAssignees[key]),
      }
    }
    return groupingByAssignees
  }, [shiftsInThisWeek])

  return (
    <section className="p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading as="h1">Schedule</Heading>
        <Export />
      </div>
      <div className="mb-[24px]">
        <ScheduleTable
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
