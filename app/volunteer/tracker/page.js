"use client"
import { useMemo } from "react"
import useCountdown from "../../_hooks/useCountDown"
import TrackerContent from "./TrackerContent"
import EmployeeTrackerProvider from "../../_providers/Employee/TrackerProvider"
import Heading from "../../_components/Headings"
import useGetTodaysShiftAndOvertime from "../../_hooks/useGetTodaysShiftAndOvertime"

function Page() {
  const { currentShift } = useGetTodaysShiftAndOvertime()

  return (
    <EmployeeTrackerProvider shiftId={currentShift?._id}>
      <section className="p-3 h-screen">
        <div className="flex justify-between items-center py-6">
          <Heading>Tracker</Heading>
          {currentShift && (
            <CountDown
              startTime={new Date(currentShift?.startTime)}
              endTime={new Date(currentShift?.endTime)}
            />
          )}
        </div>
        <div>
          <TrackerContent todaysShift={currentShift} isVolunteer />
        </div>
      </section>
    </EmployeeTrackerProvider>
  )
}

export default Page

function CountDown({ startTime, endTime }) {
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
            {" "}
            {new Date(
              dateInstanceOfEndTime.getTime() -
                dateInstanceOfStartTime.getTime()
            ).getHours() - 1}
            hrs{" "}
            {new Date(
              dateInstanceOfEndTime - dateInstanceOfStartTime
            ).getMinutes()}
            mins{" "}
            {new Date(
              dateInstanceOfEndTime - dateInstanceOfStartTime
            ).getSeconds()}
            secs
          </span>
        ) : (
          <CountDownElement endTime={endTime} />
        )}
      </p>
    </div>
  )
}

const CountDownElement = ({ endTime }) => {
  const { hours, minutes, seconds } = useCountdown(
    new Date(endTime || Date.now())
  )
  return (
    <span className="text-sm not-italic font-bold leading-5">
      {hours}hr {minutes}mins {seconds}
      secs
    </span>
  )
}
