"use client"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import useAxios from "../../_hooks/useAxios"
import DASHBOARD_URLS from "../../_urls/dashboardURLs"
import useGetWeekRanges from "../../_hooks/useGetWeekRanges"
import useManageFetchShiftsAndOvertimes from "../../_hooks/useManageFetchShiftsAndOvertimes"
import {
  filterShiftsByWeek,
  groupShiftsByAssignee,
  groupShiftsByHoursWithDateKey,
} from "../../_utils/shifts"
import { OrganizationContext } from "../OrganizationProvider"

export const DashboardContext = createContext({
  allShifts: [],
  todaysSnapshot: {},
  organization: null,
  fetchOrganization: () => {},
  fetchShifts: () => {},
  todaysShifts: [],
  todaysSnapshot: {},
  fetchShifts: () => {},
  goToNextWeek: () => {},
  goToPrevWeek: () => {},
  currentWeek: {},
  todaysSnapshot: () => {},
  todaysShifts: () => {},
  loadingShifts: () => {},
  fetchingShiftsError: () => {},
  tableGrouping: {},
  shiftsInCurrentWeek: [],
  weekRanges: () => {},
  jumpToWeek: () => {},
  indexOfThePresentWeek: 0,
  updateAllShifts: () => {},
  handleUpdateSingleShift: () => {},
})

export default function DashboardProvider({ children }) {
  const { organization } = useContext(OrganizationContext)
  const { goToNextWeek, currentWeek, goToPrevWeek, weekRanges, jumpToWeek } =
    useGetWeekRanges(new Date(Date.now()), 7)
  const fetchData = useAxios()
  const [todaysSnapshot, setTodaysSnapshot] = useState(null)
  const [allShifts, setAllShifts] = useState([])

  const indexOfThePresentWeek = useMemo(() => {
    const today = new Date(Date.now())
    return weekRanges.findIndex((it) => {
      return (
        it.start.getTime() <= today.getTime() &&
        it.end.getTime() >= today.getTime()
      )
    })
  }, [weekRanges])

  const todaysShifts = useMemo(() => {
    return allShifts.filter((shift) => {
      return (
        new Date(shift.startTime).toDateString() ===
        new Date(Date.now()).toDateString()
      )
    })
  }, [allShifts])

  const todaysShiftsGroupedByAssigneesIntoHours = useMemo(() => {
    const groupingByAssignees = groupShiftsByAssignee(
      todaysShifts.filter(
        (shift) => shift.isAccepted === true && shift.isDroppedOff === false
      )
    )
    for (const key in groupingByAssignees) {
      if (groupingByAssignees[key].length === 0) continue
      groupingByAssignees[key] = {
        assignee: groupingByAssignees[key][0]?.assignee,
        shiftsStart: groupShiftsByHoursWithDateKey(
          groupingByAssignees[key],
          "startTime"
        ),
        shiftsEnd: groupShiftsByHoursWithDateKey(
          groupingByAssignees[key],
          "endTime"
        ),
      }
    }
    return groupingByAssignees
  }, [todaysShifts])

  const listOfShiftsInCurrentWeek = useMemo(() => {
    return filterShiftsByWeek(allShifts, currentWeek)
  }, [allShifts, currentWeek])

  const updateAllShifts = useCallback((newShifts = []) => {
    setAllShifts((prev) => {
      return [
        ...prev,
        ...newShifts.filter(
          (shift) => JSON.stringify(prev).includes(shift._id) === false
        ),
      ]
    })
  }, [])

  const { fetchShifts, fetchingShiftsError, loadingShifts } =
    useManageFetchShiftsAndOvertimes({
      updateAllShifts,
      currentWeek,
    })

  const handleUpdateSingleShift = useCallback((update) => {
    setAllShifts((prev) => {
      return prev.map((shift) => (shift._id !== update._id ? shift : update))
    })
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
        shiftsInCurrentWeek: listOfShiftsInCurrentWeek,
        weekRanges,
        jumpToWeek,
        indexOfThePresentWeek,
        updateAllShifts,
        handleUpdateSingleShift,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
