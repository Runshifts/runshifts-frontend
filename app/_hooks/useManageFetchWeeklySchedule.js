"use client"
import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import useAxios from "./useAxios"
import DASHBOARD_URLS from "../_urls/dashboardURLs"
import { OrganizationContext } from "../_providers/OrganizationProvider"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {
  fetchTodaysSnapshot,
  fetchWeeklySchedule,
} from "../_redux/thunks/shifts.thunk"
import { filterShiftsByWeek } from "../_utils/shifts"

export default function useManageFetchWeeklySchedule() {
  const { organization } = useSelector((store) => store.organization)
  const dispatch = useDispatch()
  const { currentWeek, cache, shifts, overtimes } = useSelector(
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
    [organization, cache]
  )

  useEffect(() => {
    fetchShifts(currentWeek.start)
  }, [fetchShifts, currentWeek.start])

  useEffect(() => {
    if (organization?._id)
      dispatch(fetchTodaysSnapshot({ organizationId: organization?._id }))
  }, [dispatch, organization?._id])

  return {
    loadingShifts,
    fetchShifts,
    listOfShiftsInCurrentWeek,
    listOfOvertimesInCurrentWeek,
  }
}
