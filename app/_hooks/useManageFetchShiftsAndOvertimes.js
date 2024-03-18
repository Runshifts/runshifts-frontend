"use client"
import { useCallback, useContext, useEffect, useState } from "react"
import useAxios from "./useAxios"
import DASHBOARD_URLS from "../_urls/dashboardURLs"
import { OrganizationContext } from "../_providers/OrganizationProvider"

export default function useManageFetchShiftsAndOvertimes({
  updateAllShifts = () => {},
  updateAllOvertimes = () => {},
  currentWeek = {},
}) {
  const { organization } = useContext(OrganizationContext)
  const fetchData = useAxios()
  const [loadingShifts, setLoadingShifts] = useState(true)
  const [fetchingShiftsError, setFetchingShiftsError] = useState(false)
  const [weeksFetched, setWeeksFetched] = useState({})

  const fetchShifts = useCallback(
    async (date) => {
      if (!organization) return
      const stringifiedDate = JSON.stringify(date)
      if (weeksFetched[stringifiedDate]) return
      setLoadingShifts(true)
      const res = await fetchData(
        DASHBOARD_URLS.weeklySchedule(organization?._id, date),
        "get"
      )
      if (res.statusCode === 200) {
        setWeeksFetched((prev) => ({
          ...prev,
          [stringifiedDate]: res.schedule.shifts,
        }))
        updateAllShifts(res.schedule.shifts)
        updateAllOvertimes(res.schedule.overtimes)
      } else setFetchingShiftsError(true)
      setLoadingShifts(false)
    },
    [organization?._id, weeksFetched, updateAllShifts, updateAllOvertimes]
  )

  useEffect(() => {
    fetchShifts(currentWeek.start)
  }, [fetchShifts, currentWeek.start])
  return { loadingShifts, fetchShifts, fetchingShiftsError }
}
