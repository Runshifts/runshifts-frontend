"use client"
import { useCallback, useState, useEffect, useMemo } from "react"
import useCountdown from "../../_hooks/useCountDown"
import TrackerContent, { OvertimeTrackerContainer } from "./TrackerContent"
import EmployeeTrackerProvider from "../../_providers/Employee/TrackerProvider"
import Heading from "../../_components/Headings"
import useAxios from "../../_hooks/useAxios"
import SHIFTS_URLS from "../../_urls/shiftsURLs"
import STORAGE_KEYS from "../../_utils/storage_keys"

function Page() {
  const [currentShift, setCurrentShift] = useState(null)
  const [currentOvertime, setCurrentOvertime] = useState(null)

  const fetchData = useAxios()

  const fetchTodaysShift = useCallback(async () => {
    const res = await fetchData(SHIFTS_URLS.getCurrentShiftAndOvertime(), "get")
    if (res.statusCode === 200) {
      setCurrentShift(res.shift)
      setCurrentOvertime(res.overtime)
      localStorage.setItem(
        STORAGE_KEYS.TODAYS_SHIFTS,
        JSON.stringify({
          shift: res.shift,
          overtime: res.overtime,
        })
      )
    }
    console.log(res, "FETCHING TODAAY SHIFT")
  }, [fetchData])

  const handleCheckAndFetchForCurrentShift = useCallback(() => {
    const todaysShifts = localStorage.getItem(STORAGE_KEYS.TODAYS_SHIFTS)
    if (todaysShifts) {
      try {
        const parsedData = JSON.parse(todaysShifts)
        console.log(parsedData)
        const { shift, overtime } = parsedData
        if (shift === null || overtime === null) return fetchTodaysShift()
        if (
          new Date(shift?.endTime).getTime() < Date.now() ||
          new Date(overtime?.endTime).getTime() < Date.now()
        )
          return fetchTodaysShift()
        else {
          setCurrentOvertime(overtime)
        }
      } catch (err) {
        localStorage.removeItem(STORAGE_KEYS.TODAYS_SHIFTS)
        fetchTodaysShift()
      }
    } else fetchTodaysShift()
  }, [fetchTodaysShift])

  useEffect(() => {
    handleCheckAndFetchForCurrentShift()
  }, [handleCheckAndFetchForCurrentShift])

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
          <TrackerContent todaysShift={currentShift} />
          {currentOvertime && (
            <OvertimeTrackerContainer todaysOvertime={currentOvertime} />
          )}
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
