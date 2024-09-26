import useAxios from "./useAxios"
import SHIFTS_URLS from "../_urls/shiftsURLs"
import STORAGE_KEYS from "../_utils/storage_keys"
import { useCallback, useState, useEffect } from "react"

export default function useGetTodaysShiftAndOvertime() {
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
    console.log("FETCHING TODAYS SHIFTS")
  }, [fetchData])

  const handleCheckAndFetchForCurrentShift = useCallback(() => {
    const todaysShifts = localStorage.getItem(STORAGE_KEYS.TODAYS_SHIFTS)
    if (todaysShifts) {
      try {
        const parsedData = JSON.parse(todaysShifts)
        console.log("parsedData")
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
  return { currentShift, currentOvertime }
}
