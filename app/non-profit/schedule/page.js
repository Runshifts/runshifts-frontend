"use client"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import CreateAndDuplicateShiftButtons from "../../_components/AppComps/CreateAndDuplicateShiftButtons"
import ScheduleTable from "../../_components/ScheduleComponents/ScheduleTable"
import Heading from "../../_components/Headings"
import ShiftRequestsSection from "../../_components/ScheduleComponents/ShiftRequestsSection"
import OvertimeRequestsSection from "../../_components/ScheduleComponents/OvertimeRequestsSection"
import { getNextSunday, getPreviousMonday } from "../../_utils"
import DateRangePicker from "../../_components/AppComps/Datepicker"
import useRenderShiftFilters from "../../_hooks/useRenderShiftFilters"
import NewShiftForm from "../../_components/ScheduleComponents/NewShiftForm/NewShiftForm"
import useHandleShiftDuplication from "../../_hooks/useHandleShiftDuplication"
import { addNewShifts, setCurrentWeek } from "../../_redux/shifts.slice"
import useGetWeekRanges from "../../_hooks/useGetWeekRanges"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import useManageFetchWeeklySchedule from "../../_hooks/useManageFetchWeeklySchedule"
import useGetAllDaysOfTheWeek from "../../_hooks/useGetAllDaysOfTheWeek"
import useGroupShiftsByAssigneesIntoDays from "../../_hooks/useGroupShiftsByAssigneesIntoDays"
import { fetchShiftAndOvertimeRequests } from "../../_redux/thunks/shiftsAndOvertimeRequests.thunk"

export default function Schedule() {
  const [newShiftDetails, setNewShiftDetails] = useState(null)
  const dispatch = useDispatch()
  const [selectedUser, setSelectedUser] = useState(null)
  const {
    shiftRequests,
    overtimeRequests,
    loading: loadingShiftRequests,
  } = useSelector((store) => store.shiftsAndOvertimeRequests)
  const { employees, organization } = useSelector((store) => store.organization)

  const { goToNextWeek, currentWeek, goToPrevWeek, weekRanges, jumpToWeek } =
    useGetWeekRanges(new Date(Date.now()), 7)
  useEffect(() => {
    dispatch(setCurrentWeek(currentWeek))
  }, [dispatch, currentWeek])

  useEffect(() => {
    dispatch(
      fetchShiftAndOvertimeRequests({ organizationId: organization?._id })
    )
  }, [dispatch, organization])

  const {
    listOfShiftsInCurrentWeek,
    listOfOvertimesInCurrentWeek,
    loadingShifts,
  } = useManageFetchWeeklySchedule()

  const { filteredShifts, renderShiftFilters } = useRenderShiftFilters(
    [...listOfShiftsInCurrentWeek, ...listOfOvertimesInCurrentWeek],
    weekRanges
  )
  const { duplicateWeek, inProgress, duplicateSingleShift } =
    useHandleShiftDuplication({
      week: currentWeek,
      updateShifts: (shifts) => dispatch(addNewShifts(shifts)),
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
      start: getPreviousMonday(new Date(Date.now())),
      end: getNextSunday(new Date(Date.now())),
    }),
    []
  )
  const isPastWeek = useMemo(() => {
    return currentWeek.start.getTime() < weekWithPresentDateInIt.start.getTime()
  }, [weekWithPresentDateInIt.start, currentWeek.start])

  const allDays = useGetAllDaysOfTheWeek(currentWeek)
  const finalFilteredShifts = useMemo(() => {
    return selectedUser === null
      ? filteredShifts
      : filteredShifts.filter((it) => it?.assignee?._id === selectedUser?._id)
  }, [filteredShifts, selectedUser])

  const shiftsGroupedByAssigneesIntoDays =
    useGroupShiftsByAssigneesIntoDays(finalFilteredShifts)

  return (
    <section>
      <>
        <NewShiftForm
          show={newShiftDetails !== null}
          newShiftDetails={newShiftDetails}
          onCancel={() => setNewShiftDetails(null)}
          handleNewShift={(newShift) => dispatch(addNewShifts([newShift]))}
          currentWeek={currentWeek}
        />
      </>
      <div className="flex items-start flex-col gap-6 pt-6 pb-4 relative z-[20]">
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
            goToNextWeek={() => goToNextWeek()}
            goToPrevWeek={() => goToPrevWeek()}
            currentWeek={currentWeek}
          />
          <ul className="hidden md:flex gap-2">
            {renderShiftFilters({
              onWeekFilterSelect: (_, idx) => {
                dispatch(setCurrentWeek(weekRanges[idx]))
                jumpToWeek(idx)
              },
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
      {(loadingShiftRequests ||
        shiftRequests.length > 0 ||
        overtimeRequests.length > 0) && (
        <div className="text-[#252525] min-h-[55dvh] flex flex-col items-start gap-y-[30px] my-4 p-4 shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.12)] bg-white rounded-lg shadow-xl">
          {(shiftRequests.length > 0 || loadingShiftRequests) && (
            <ShiftRequestsSection
              loading={loadingShiftRequests}
              shiftRequests={shiftRequests}
            />
          )}
          {(overtimeRequests.length > 0 || loadingShiftRequests) && (
            <OvertimeRequestsSection
              loading={loadingShiftRequests}
              overtimeRequests={overtimeRequests}
            />
          )}
        </div>
      )}
    </section>
  )
}
