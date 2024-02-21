"use client"
import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import useAxios from "../_hooks/useAxios"
import DASHBOARD_URLS from "../organization/dashboardURLs"
import useGetWeekRanges from "../_hooks/useGetWeekRanges"
import { groupShiftsByAssignee, groupShiftsByDayOfTheWeek, groupShiftsByHours } from "../_utils/shifts"

export const DashboardContext = createContext({
  allShifts: [],
  todaysSnapshot: {},
  organization: null,
  fetchOrganization: () => {},
  fetchShifts: () => {},
  todaysShifts: [],
  todaysSnapshot: {},
})

export default function DashboardProvider({ children }) {
  const [intiRetries, setInitRetries] = useState(0)
  const [loading, setLoading] = useState(true)
  const { goToNextWeek, currentWeek, goToPrevWeek } = useGetWeekRanges()
  const fetchData = useAxios()

  const [organization, setOrganization] = useState(null)
  const [todaysSnapshot, setTodaysSnapshot] = useState(null)
  const [allShifts, setAllShifts] = useState([])

  const todaysShifts = useMemo(() => {
    return allShifts.filter((shift) => {
      return (
        new Date(shift.startTime).toDateString() ===
        new Date(Date.now()).toDateString()
      )
    })
  }, [allShifts])

  const todaysShiftsGroupedByAssigneesIntoHours = useMemo(() => {
    const groupingByAssignees = groupShiftsByAssignee(todaysShifts)
    for (const key in groupingByAssignees) {
      groupingByAssignees[key] = {
        assignee: groupingByAssignees[key][0]?.assignee,
        shifts: groupShiftsByHours(groupingByAssignees[key]),
      }
    }
    return groupingByAssignees
  }, [todaysShifts])

  const listOfShiftsInCurrentWeek = useMemo(() => {
    return allShifts.filter((shift) => {
      return (
        new Date(shift.startTime).getTime() >= currentWeek.start.getTime() &&
        new Date(shift.startTime).getTime() <=
        currentWeek.end.getTime()
      )
    })
  }, [allShifts, currentWeek.end, currentWeek.start])

  const shiftsInCurrentWeekGroupedByDate = useMemo(() => {
    return groupShiftsByDayOfTheWeek(listOfShiftsInCurrentWeek)
  }, [listOfShiftsInCurrentWeek])

  const fetchShifts = useCallback(
    async (date) => {
      if (!organization) return
      const res = await fetchData(
        DASHBOARD_URLS.weeklySchedule(organization?._id, date),
        "get"
      )
      if (res.statusCode === 200) {
        setAllShifts((prev) => [...prev, ...res.schedule.shifts])
      }
    },
    [organization?._id]
  )

  const fetchOrganization = useCallback(async () => {
    const res = await fetchData(DASHBOARD_URLS.organization(), "get")
    if (res.statusCode === 200) {
      setOrganization(res.organization)
      setLoading(false)
    } else setInitRetries((prev) => prev + 1)
  }, [])

  const fetchSnapshot = useCallback(async () => {
    if (!organization) return
    const res = await fetchData(
      DASHBOARD_URLS.snapshot(organization?._id),
      "get"
    )
    if (res.statusCode === 200) setTodaysSnapshot(res.snapshot)
  }, [organization?._id])

  useEffect(() => {
    if (intiRetries <= 10) fetchOrganization()
  }, [fetchOrganization])

  useEffect(() => {
    fetchShifts(new Date(Date.now()))
    fetchSnapshot()
  }, [fetchShifts, fetchSnapshot])

  return (
    <DashboardContext.Provider
      value={{
        allShifts,
        organization,
        fetchShifts,
        fetchOrganization,
        goToNextWeek,
        goToPrevWeek,
        currentWeek,
        todaysSnapshot,
        todaysShifts,
        tableGrouping: todaysShiftsGroupedByAssigneesIntoHours,
        loading,
        shiftsInCurrentWeek: shiftsInCurrentWeekGroupedByDate,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
