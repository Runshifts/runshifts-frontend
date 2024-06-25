"use client"
import React, { useContext, useEffect, useMemo } from "react"
import DateRangePicker from "../_components/AppComps/Datepicker"
import Calender from "../_components/StaffDashboardComponents/EmployeeCalender"
import {
  SentSwaps,
  ReceivedSwaps,
} from "../_components/StaffDashboardComponents/ShiftSwapRequests"
import Heading from "../_components/Headings"
import ShiftSwapRequests from "../_components/StaffDashboardComponents/ShiftSwapRequests"
import { UserContext } from "../_providers/UserProvider"
import { filterShiftsByWeek, groupShiftsByDayOfTheWeek } from "../_utils/shifts"
import { useDispatch } from "react-redux"
import { setCurrentWeek } from "../_redux/shifts.slice"
import useGetWeekRanges from "../_hooks/useGetWeekRanges"
import useManageFetchWeeklySchedule from "../_hooks/useManageFetchWeeklySchedule"

export default function VolunteerDashboard() {
  const { user } = useContext(UserContext)
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

  const usersShifts = useMemo(() => {
    return groupShiftsByDayOfTheWeek(
      listOfShiftsInCurrentWeek.filter(
        (shift) =>
          shift.assignee?._id === user?._id && shift.isDroppedOff === false
      )
    )
  }, [listOfShiftsInCurrentWeek, user?._id])

  const usersOvertimes = useMemo(
    () =>
      groupShiftsByDayOfTheWeek(
        filterShiftsByWeek(listOfOvertimesInCurrentWeek, currentWeek)
      ),
    [listOfOvertimesInCurrentWeek, currentWeek]
  )
  return (
    <section className="md:px-[21px] flex flex-col gap-4">
      <div className="flex flex-col gap-[24px] pt-6 pb-4">
        <Heading as="h1">Welcome {user?.firstName || user?.fullName}</Heading>
        <DateRangePicker
          goToNextWeek={goToNextWeek}
          goToPrevWeek={goToPrevWeek}
          currentWeek={currentWeek}
        />
      </div>
      <div className="rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex flex-col gap-[8px] p-[8px] md:p-4">
        <h2 className="text-[12px] md:text-base font-[600] text-[#292D32] leading-[150%]">
          Calender
        </h2>
        <Calender
          shifts={usersShifts}
          loading={loadingShifts}
          overtimes={usersOvertimes}
          showOvertimes={true}
        />
      </div>
      <div className="mb-4 shadow-[0px_2px_8px_0px_#0000001F] flex flex-col gap-[8px] p-[8px] md:p-4 rounded-md overflow-hidden shadow-[0px_2px_8px_0px_#0000001F] bg-white">
        <div className="w-full">
          <h2 className="font-semibold text-lg text-[#292D32] py-2 ">
            Shift swap requests
          </h2>
          <ShiftSwapRequests />
        </div>
      </div>
    </section>
  )
}
