"use client"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import useAxios from "../_hooks/useAxios"
import DASHBOARD_URLS from "../organization/dashboardURLs"
import useGetWeekRanges from "../_hooks/useGetWeekRanges"
import {
  groupShiftsByAssignee,
  groupShiftsByDayOfTheWeek,
  groupShiftsByHours,
} from "../_utils/shifts"
import { OrganizationContext } from "./OrganizationProvider"

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
  const { organization } = useContext(OrganizationContext)
  const [loadingShifts, setLoadingShifts] = useState(true)
  const [fetchingShiftsError, setFetchingShiftsError] = useState(false)
  const [weeksFetched, setWeeksFetched] = useState({})
  const { goToNextWeek, currentWeek, goToPrevWeek, weekRanges } = useGetWeekRanges()
  const fetchData = useAxios()
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
        new Date(shift.startTime).getTime() <= currentWeek.end.getTime()
      )
    })
  }, [allShifts, currentWeek.end, currentWeek.start])

  const shiftsInCurrentWeekGroupedByDate = useMemo(() => {
    return groupShiftsByDayOfTheWeek(listOfShiftsInCurrentWeek)
  }, [listOfShiftsInCurrentWeek])

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
        setAllShifts((prev) => [...prev, ...res.schedule.shifts])
      } else setFetchingShiftsError(true)
      setLoadingShifts(false)
    },
    [organization?._id, weeksFetched]
  )

  const fetchSnapshot = useCallback(async () => {
    if (!organization) return
    const res = await fetchData(
      DASHBOARD_URLS.snapshot(organization?._id),
      "get"
    )
    if (res.statusCode === 200) setTodaysSnapshot(res.snapshot)
  }, [organization?._id])

  useEffect(() => {
    fetchShifts(currentWeek.start)
  }, [fetchShifts, currentWeek.start])

  useEffect(() => {
    fetchSnapshot()
  }, [fetchSnapshot])

  return (
    <DashboardContext.Provider
      value={{
        allShifts,
        fetchShifts,
        goToNextWeek,
        goToPrevWeek,
        currentWeek,
        todaysSnapshot,
        todaysShifts,
        loadingShifts,
        fetchingShiftsError,
        tableGrouping: todaysShiftsGroupedByAssigneesIntoHours,
        shiftsInCurrentWeek: shiftsInCurrentWeekGroupedByDate,
        weekRanges,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
