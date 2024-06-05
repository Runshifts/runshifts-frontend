"use client"
import React, { useContext, useMemo } from "react"
import DateRangePicker from "../_components/AppComps/Datepicker"
import Calender from "./EmployeeCalender"
import { SentSwaps, ReceivedSwaps } from "./my-shifts/ShiftSwapRequests"
import MyActivities from "./MyActivities"
import Heading from "../_components/Headings"
import { EmployeeDashboardContext } from "../_providers/Employee/EmployeeDashboardContext"
import { UserContext } from "../_providers/UserProvider"
import { filterShiftsByWeek, groupShiftsByDayOfTheWeek } from "../_utils/shifts"

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
    allOvertimes,
  } = useContext(EmployeeDashboardContext)

  const usersShifts = useMemo(() => {
    return groupShiftsByDayOfTheWeek(
      shiftsInCurrentWeek.filter((shift) => shift.assignee?._id === user?._id && shift.isDroppedOff === false)
    )
  }, [shiftsInCurrentWeek, user?._id])

  const usersOvertimes = useMemo(
    () => groupShiftsByDayOfTheWeek(filterShiftsByWeek(allOvertimes, currentWeek)),
    [allOvertimes, currentWeek]
  )
  return (
    <section className="md:px-[21px] flex flex-col gap-4">
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
          showOvertimes={true}
        />
      </div>
      <div className="mb-4 shadow-[0px_2px_8px_0px_#0000001F] flex flex-col gap-[8px] p-[8px] md:p-4 rounded-md overflow-hidden shadow-[0px_2px_8px_0px_#0000001F] bg-white">
        <div className="">
          <h2 className="font-semibold text-lg text-[#292D32] py-2 ">
            Shift swap requests
          </h2>
          <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-4">
            <SentSwaps />
            <ReceivedSwaps />
          </div>
        </div>
      </div>
      <div className="rounded-md overflow-hidden shadow-[0px_2px_8px_0px_#0000001F] ">
        <MyActivities activityData={activityData} isLoading={loadingActivity} />
      </div>
    </section>
  )
}

export default EmployeeDashboard
