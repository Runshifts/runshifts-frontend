"use client"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { fetchWeeklySchedule } from "../_redux/thunks/shifts.thunk"
import { filterShiftsByWeek } from "../_utils/shifts"

export default function useManageFetchWeeklySchedule() {
  const { organization } = useSelector((store) => store.organization)
  const dispatch = useDispatch()
  const { currentWeek, cache, shifts, overtimes, todaysSnapshot } = useSelector(
    (store) => store.shiftsAndOvertimes
  )
  const listOfShiftsInCurrentWeek = useMemo(() => {
    return filterShiftsByWeek(shifts, currentWeek)
  }, [shifts, currentWeek])

  const listOfOvertimesInCurrentWeek = useMemo(() => {
    return filterShiftsByWeek(overtimes, currentWeek)
  }, [overtimes, currentWeek])

  const [loadingShifts, setLoadingShifts] = useState(true)

  const fetchShifts = useCallback(
    async (date) => {
      if (!organization?._id) return
      const stringifiedDate = JSON.stringify(date)
      if (cache[stringifiedDate]) return
      setLoadingShifts(true)
      dispatch(
        fetchWeeklySchedule({ organizationId: organization._id, date })
      ).then(() => {
        setLoadingShifts(false)
      })
    },
    [organization?._id, cache, dispatch]
  )

  useEffect(() => {
    fetchShifts(currentWeek.start)
  }, [fetchShifts, currentWeek.start])

  return {
    loadingShifts,
    fetchShifts,
    listOfShiftsInCurrentWeek,
    listOfOvertimesInCurrentWeek,
  }
}
