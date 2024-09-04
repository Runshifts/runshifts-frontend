"use client"
import { useContext, useMemo } from "react"
import useCountdown from "../../_hooks/useCountDown"
import TrackerContent from "./TrackerContent"
import { EmployeeDashboardContext } from "../../_providers/Employee/EmployeeDashboardContext"
import EmployeeTrackerProvider from "../../_providers/Employee/TrackerProvider"
import Heading from "../../_components/Headings"

function Page() {
  const { shiftsInCurrentWeek } = useContext(EmployeeDashboardContext)
  const todaysShift = useMemo(
    () =>
      shiftsInCurrentWeek.find(
        (shift) =>
          new Date(shift.startTime).toDateString() ===
            new Date().toDateString() && shift.isAccepted === true
      ),
    [shiftsInCurrentWeek]
  )

  return (
    <EmployeeTrackerProvider shiftId={todaysShift?._id}>
      <section className="p-3 h-screen">
        <div className="flex justify-between items-center py-6">
          <Heading>Tracker</Heading>
          {todaysShift && (
            <CountDown
              startTime={new Date(todaysShift?.startTime)}
              endTime={new Date(todaysShift?.endTime)}
            />
          )}
        </div>
        <div>
          <TrackerContent todaysShift={todaysShift} />
        </div>
      </section>
    </EmployeeTrackerProvider>
  )
}

export default Page

function CountDown({ startTime, endTime }) {
  const { hours, minutes, seconds } = useCountdown(
    new Date(endTime || Date.now())
  )
  const dateInstanceOfStartTime = new Date(startTime)
  const dateInstanceOfEndTime = new Date(endTime)
  const isStartTimeInFuture = useMemo(
    () => new Date(startTime).getTime() > Date.now(),
    [startTime]
  )

  if (!endTime) return null
  return (
    <div className="bg-gray-100 p-2 rounded">
      <p className="text-center  text-[#42526E] text-sm not-italic font-medium leading-5">
        Remaining shift time:
        {isStartTimeInFuture ? (
          <span className="text-sm not-italic font-bold leading-5">
            {dateInstanceOfEndTime.getHours() -
              dateInstanceOfStartTime.getHours()}
            hr{" "}
            {dateInstanceOfEndTime.getMinutes() -
              dateInstanceOfStartTime.getMinutes()}
            mins{" "}
            {dateInstanceOfEndTime.getSeconds() -
              dateInstanceOfStartTime.getSeconds()}
            secs
          </span>
        ) : (
          <span className="text-sm not-italic font-bold leading-5">
            {hours}hr {minutes}mins {seconds}
            secs
          </span>
        )}
      </p>
    </div>
  )
}
