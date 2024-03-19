"use client"
import React, { useContext, useMemo } from "react"
import DateRangePicker from "../_components/AppComps/Datepicker"
import Calender from "./EmployeeCalender"
import ShiftSwap from "./ShiftSwap"
import MyActivities from "./MyActivities"
import Heading from "../_components/Headings"
import { EmployeeDashboardContext } from "../_providers/Employee/EmployeeDashboardContext"
import { UserContext } from "../_providers/UserProvider"
import { groupShiftsByDayOfTheWeek } from "../_utils/shifts"

function EmployeeDashboard() {
  const { user } = useContext(UserContext)
  const {
    goToNextWeek,
    goToPrevWeek,
    currentWeek,
    loadingShifts,
    shiftsInCurrentWeek,
    activityData,
    loadingActivity,
    overtimesInCurrentWeek,
  } = useContext(EmployeeDashboardContext)

  const usersShifts = useMemo(() => {
    return groupShiftsByDayOfTheWeek(
      shiftsInCurrentWeek.filter((shift) => shift.assignee?._id === user?._id)
    )
  }, [shiftsInCurrentWeek, user?._id])

  const usersOvertimes = useMemo(() => {
    return groupShiftsByDayOfTheWeek(
      overtimesInCurrentWeek.filter((overtime) => overtime.owner?._id === user?._id)
    )
  }, [overtimesInCurrentWeek, user?._id])

  return (
    <section className="md:px-[21px] h-screen flex flex-col gap-4">
      <div className="flex flex-col gap-[24px] pt-6 pb-4">
        <Heading as="h1">Welcome {user?.firstName}</Heading>
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
        />
      </div>
      <div className="rounded-md overflow-hidden shadow-[0px_2px_8px_0px_#0000001F]">
        <ShiftSwap />
      </div>
      <div className="rounded-md overflow-hidden shadow-[0px_2px_8px_0px_#0000001F] ">
        <MyActivities activityData={activityData} isLoading={loadingActivity} />
      </div>
    </section>
  )
}

export default EmployeeDashboard
