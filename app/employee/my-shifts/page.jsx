"use client"
import React, { useCallback, useContext, useMemo } from "react"
import Calender from "../EmployeeCalender"
import Heading from "../../_components/Headings"
import { EmployeeDashboardContext } from "../../_providers/Employee/EmployeeDashboardContext"
import { UserContext } from "../../_providers/UserProvider"
import { groupShiftsByDayOfTheWeek } from "../../_utils/shifts"
import DateRangePicker from "../../_components/AppComps/Datepicker"
import ShiftSwapReq from "./ShiftSwapReq"
import AcceptAllShiftsButton from "./AcceptAllShiftsButton"
import { OrganizationContext } from "../../_providers/OrganizationProvider"

function page() {
  const {
    goToNextWeek,
    goToPrevWeek,
    currentWeek,
    loadingShifts,
    shiftsInCurrentWeek,
    updateAllShifts,
  } = useContext(EmployeeDashboardContext)

  const { user } = useContext(UserContext)
  const { organization } = useContext(OrganizationContext)
  const shiftsGroupedByDays = useMemo(() => {
    return groupShiftsByDayOfTheWeek(shiftsInCurrentWeek)
  }, [shiftsInCurrentWeek])

  const handleAcceptAllSucccess = useCallback(
    () =>
      updateAllShifts(
        shiftsInCurrentWeek.map((shift) =>
          shift.isDroppedOff === false &&
          shift.isAccepted === false &&
          shift.assignee?._id === user?._id &&
          new Date(shift.startTime) > new Date()
            ? { ...shift, isAccepted: true }
            : shift
        )
      ),
    [shiftsInCurrentWeek, updateAllShifts, user?._id]
  )

  return (
    <section className="h-screen px-4 md:px-[40px]">
      <div className="flex flex-col gap-6 justify-between pt-6 pb-4">
        <div className="flex justify-between">
          <Heading>My Shifts</Heading>
          <div>
            <button className="p-2 mx-1 bg-[#5BC62D] text-white text-sm rounded-sm">
              Request overtime
            </button>
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
      <div className="rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex flex-col gap-[8px] p-[8px] md:p-4">
        <ShiftSwapReq />
      </div>
    </section>
  )
}

export default page
