"use client"
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import Calender from "../../_components/StaffDashboardComponents/EmployeeCalender"
import Heading from "../../_components/Headings"
import { UserContext } from "../../_providers/UserProvider"
import {
  filterShiftsByWeek,
  groupShiftsByDayOfTheWeek,
} from "../../_utils/shifts"
import DateRangePicker from "../../_components/AppComps/Datepicker"
import AcceptAllShiftsButton from "../../_components/StaffDashboardComponents/AcceptAllShiftsButton"
import OvertimeApplicationFormModal from "../../_components/StaffDashboardComponents/OvertimeApplication"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addNewShifts, setCurrentWeek } from "../../_redux/shifts.slice"
import useGetWeekRanges from "../../_hooks/useGetWeekRanges"
import useManageFetchWeeklySchedule from "../../_hooks/useManageFetchWeeklySchedule"
import RequestedShifts from "../../_components/StaffDashboardComponents/RequestedShifts"
import { fetchShiftAndOvertimeRequests } from "../../_redux/thunks/shiftsAndOvertimeRequests.thunk"
export default function VolunteerMyShiftsPage() {
  const { shifts } = useSelector((store) => store.shiftsAndOvertimes)
  const requestableOvertimeShifts = useMemo(
    () => shifts.filter((shift) => !shift.assignee),
    [shifts]
  )
  const [showOvertimeApplicationModal, setShowOvertimeApplicationModal] =
    useState(false)
  const { user } = useContext(UserContext)
  const dispatch = useDispatch()
  const { goToNextWeek, currentWeek, goToPrevWeek } = useGetWeekRanges(
    new Date(Date.now()),
    7
  )
  useEffect(() => {
    dispatch(setCurrentWeek(currentWeek))
  }, [dispatch, currentWeek])

  const {
    listOfShiftsInCurrentWeek,
    listOfOvertimesInCurrentWeek,
    loadingShifts,
  } = useManageFetchWeeklySchedule()

  const { organization } = useSelector((store) => store.organization)

  const shiftsGroupedByDays = useMemo(() => {
    return groupShiftsByDayOfTheWeek([
      ...listOfShiftsInCurrentWeek,
      ...listOfOvertimesInCurrentWeek,
    ])
  }, [listOfShiftsInCurrentWeek, listOfOvertimesInCurrentWeek])

  const handleAcceptAllSucccess = useCallback(() => {
    const updateShift = (shift) =>
      shift.isDroppedOff === false &&
      shift.isAccepted === false &&
      shift.assignee?._id === user?._id &&
      new Date(shift.startTime) > new Date()
        ? { ...shift, isAccepted: true }
        : shift
    dispatch(
      addNewShifts({ shifts: listOfShiftsInCurrentWeek.map(updateShift) })
    )
  }, [listOfShiftsInCurrentWeek, user?._id, dispatch])

  useEffect(() => {
    dispatch(
      fetchShiftAndOvertimeRequests({ organizationId: organization?._id })
    )
  }, [dispatch, organization])

  return (
    <section className="min-h-screen px-4 pb-4">
      <div className="flex flex-col gap-6 justify-between pt-6 pb-4">
        <div className="flex justify-between">
          <Heading>My Shifts</Heading>
          <div>
            <button
              disabled={requestableOvertimeShifts.length === 0}
              onClick={() => setShowOvertimeApplicationModal(true)}
              className="p-2 mx-1 bg-[#5BC62D] text-white text-sm rounded-sm disabled:bg-gray-300"
            >
              Request overtime
            </button>
            <OvertimeApplicationFormModal
              requestableOvertimeShifts={requestableOvertimeShifts}
              show={showOvertimeApplicationModal}
              handleHide={() => setShowOvertimeApplicationModal(false)}
            />
            <button className="p-2 mx-1 text-[#42526E] bg-white text-sm rounded-sm">
              Request time off
            </button>
          </div>
        </div>
        <DateRangePicker
          goToNextWeek={goToNextWeek}
          goToPrevWeek={goToPrevWeek}
          currentWeek={currentWeek}
        />
      </div>
      <div className="rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex flex-col gap-[8px] p-[8px] md:p-4 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-[12px] md:text-base font-[600] text-[#292D32] leading-[150%]">
            Shifts
          </h2>
          <AcceptAllShiftsButton
            isDisabled={loadingShifts}
            organizationId={organization?._id}
            currentWeek={currentWeek}
            handleSuccess={handleAcceptAllSucccess}
          />
        </div>
        <Calender
          loading={loadingShifts}
          shifts={shiftsGroupedByDays}
          useDetailedPill={true}
          showOvertimes={false}
        />
      </div>
      {/* <div className="mb-4 rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex flex-col gap-[8px] p-[8px] md:p-4">
        <ShiftSwapRequests
          swapRequests={swapRequests}
          loading={loadingSwapRequests}
        />
      </div> */}
      <div className="rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex flex-col gap-[8px] p-[8px] md:p-4">
        <RequestedShifts />
      </div>
    </section>
  )
}
