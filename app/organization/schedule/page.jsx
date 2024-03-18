"use client"
import React, { useCallback, useContext, useMemo, useState } from "react"
import CreateAndDuplicateShiftButtons from "../../_components/AppComps/CreateAndDuplicateShiftButtons"
import ScheduleTable from "./ScheduleTable"
import { ShiftAndOvertimeRequestsContext } from "../../_providers/Employer/ShiftAndOvertimeRequestsProvider"
import Heading from "../../_components/Headings"
import ShiftRequestsSection from "./ShiftRequestsSection"
import OvertimeRequestsSection from "./OvertimeRequestsSection"
import { DashboardContext } from "../../_providers/Employer/DashboardContext"
import { getNextSunday, getPreviousMonday } from "../../_utils"
import {
  groupShiftsByAssignee,
  groupShiftsByDayOfTheWeek,
} from "../../_utils/shifts"
import DateRangePicker from "../../_components/AppComps/Datepicker"
import useRenderShiftFilters from "../../_hooks/useRenderShiftFilters"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import NewShiftForm from "./NewShiftForm/NewShiftForm"
import useHandleShiftDuplication from "../../_hooks/useHandleShiftDuplication"

export default function Schedule() {
  const [newShiftDetails, setNewShiftDetails] = useState(null)

  const [selectedUser, setSelectedUser] = useState(null)
  const { shiftRequests, overtimeRequests, loadingShiftRequests } = useContext(
    ShiftAndOvertimeRequestsContext
  )
  const { employees, organization } = useContext(OrganizationContext)

  const {
    shiftsInCurrentWeek,
    currentWeek,
    goToNextWeek,
    goToPrevWeek,
    jumpToWeek,
    weekRanges,
    indexOfThePresentWeek,
    loadingShifts,
    updateAllShifts,
  } = useContext(DashboardContext)

  const { duplicateWeek, inProgress, duplicateSingleShift } =
    useHandleShiftDuplication({
      week: currentWeek,
      updateShifts: updateAllShifts,
    })

  const handleAddShiftClick = useCallback(
    ({ dayOfTheWeek, assignee, createMultiple }) => {
      const shiftDate =
        typeof dayOfTheWeek === "number" ? new Date(currentWeek.start) : null
      shiftDate?.setDate(shiftDate.getDate() + dayOfTheWeek)
      setNewShiftDetails({
        assignee,
        shiftDate,
        createMultiple,
      })
    },
    [currentWeek.start]
  )

  const weekWithPresentDateInIt = useMemo(
    () => ({
      ...(weekRanges[indexOfThePresentWeek] || {
        start: getPreviousMonday(new Date(Date.now())),
        end: getNextSunday(new Date(Date.now())),
      }),
    }),
    [indexOfThePresentWeek, weekRanges]
  )
  const isPastWeek = useMemo(() => {
    return currentWeek.start.getTime() < weekWithPresentDateInIt.start.getTime()
  }, [weekWithPresentDateInIt.start, currentWeek.start])
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
      <>
        <NewShiftForm
          show={newShiftDetails !== null}
          newShiftDetails={newShiftDetails}
          onCancel={() => setNewShiftDetails(null)}
          handleNewShift={(newShift) => {
            updateAllShifts([newShift])
          }}
          currentWeek={currentWeek}
        />
      </>
      <div className="flex items-start flex-col gap-6 pt-6 pb-4">
        <div className="flex items-center justify-between w-full">
          <Heading as="h1">Schedule</Heading>
          <CreateAndDuplicateShiftButtons
            loading={inProgress}
            duplicateWeek={() => duplicateWeek(organization?._id)}
            showAddShiftModal={handleAddShiftClick}
          />
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
          <ul className="hidden md:flex gap-2">
            {renderShiftFilters({
              onWeekFilterSelect: (_, idx) => jumpToWeek(idx),
            })}
          </ul>
        </ul>
      </div>
      <div className="mb-[24px]">
        <ScheduleTable
          employees={employees}
          selectedUser={selectedUser}
          handleUserFilterSelect={(selection) => setSelectedUser(selection)}
          isPastWeek={isPastWeek}
          loading={loadingShifts}
          shiftsGroupedByAssignees={shiftsGroupedByAssigneesIntoDays}
          allDays={allDays}
          showAddShiftModal={handleAddShiftClick}
          duplicateShift={async (shiftId) => {
            await duplicateSingleShift(organization?._id, shiftId)
          }}
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
