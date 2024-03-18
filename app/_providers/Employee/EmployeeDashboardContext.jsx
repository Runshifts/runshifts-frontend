"use client"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import useGetWeekRanges from "../../_hooks/useGetWeekRanges"
import useManageFetchShiftsAndOvertimes from "../../_hooks/useManageFetchShiftsAndOvertimes"
import { filterShiftsByWeek } from "../../_utils/shifts"
import { UserContext } from "../UserProvider"
import useAxios from "../../_hooks/useAxios"
import DASHBOARD_URLS from "../../_urls/dashboardURLs"
import { OrganizationContext } from "../OrganizationProvider"

export const EmployeeDashboardContext = createContext({
  allShifts: [],
  allOvertimes: [],
  updateAllOvertimes: () => {},
  fetchShifts: () => {},
  goToNextWeek: () => {},
  goToPrevWeek: () => {},
  currentWeek: {},
  loadingShifts: () => {},
  fetchingShiftsError: () => {},
  shiftsInCurrentWeek: [],
  overtimesInCurrentWeek: [],
  weekRanges: () => {},
  updateAllShifts: () => {},
  handleUpdateSingleShift: () => {},
  handleUpdateSingleOvertime: () => {},
  activityData: {
    totalEarnings: 0,
    amountAvailableForEwa: 0,
    overtimeEarnings: 0,
    shiftEarnings: 0,
    shiftHours: 0,
    overtimeHours: 0
  },
  loadingActivity: false,
})

export default function EmployeeDashboardProvider({ children }) {
  const { user } = useContext(UserContext)
  const { organization } = useContext(OrganizationContext)
  const { goToNextWeek, currentWeek, goToPrevWeek, weekRanges, jumpToWeek } =
    useGetWeekRanges(new Date(Date.now()), 7)
  const [activityData, setActivityData] = useState(null)
  const [allShifts, setAllShifts] = useState([])
  const [allOvertimes, setAllOvertimes] = useState([])
  const [loadingActivity, setLoadingActivity] = useState(false)

  const listOfShiftsInCurrentWeek = useMemo(() => {
    return filterShiftsByWeek(allShifts, currentWeek)
  }, [allShifts, currentWeek])

  const listOfOvertimesInCurrentWeek = useMemo(() => {
    return filterShiftsByWeek(allOvertimes, currentWeek)
  }, [allOvertimes, currentWeek])

  const updateAllShifts = useCallback((newShifts = []) => {
    setAllShifts((prev) => {
      return [
        ...newShifts,
        ...prev.filter(
          (shift) => JSON.stringify(newShifts).includes(shift._id) === false
        ),
      ]
    })
  }, [])

  const updateAllOvertimes = useCallback((newOvertimes = []) => {
    setAllOvertimes((prev) => {
      return [
        ...newOvertimes,
        ...prev.filter(
          (overtime) =>
            JSON.stringify(newOvertimes).includes(overtime._id) === false
        ),
      ]
    })
  }, [])

  const { fetchShifts, fetchingShiftsError, loadingShifts } =
    useManageFetchShiftsAndOvertimes({
      updateAllShifts,
      updateAllOvertimes,
      currentWeek,
    })

  const handleUpdateSingleShift = useCallback((update) => {
    setAllShifts((prev) => {
      return prev.map((shift) => (shift._id !== update._id ? shift : update))
    })
  }, [])
  const handleUpdateSingleOvertime = useCallback((update) => {
    setAllShifts((prev) => {
      return prev.map((overtime) =>
        overtime._id !== update._id ? overtime : update
      )
    })
  }, [])

  const fetchData = useAxios()
  const fetchActivityData = useCallback(async () => {
    if (!user?._id || !organization?._id || loadingActivity) return
    setLoadingActivity(true)
    const res = await fetchData(
      DASHBOARD_URLS.employeeActivity(organization?._id, user?._id)
    )
    if (res) {
      const { statusCode, ...rest } = res
      setActivityData(rest)
    }
    setLoadingActivity(false)
  }, [user?._id, organization?._id, loadingActivity])

  useEffect(() => {
    !activityData && fetchActivityData()
  }, [activityData, fetchActivityData])

  return (
    <EmployeeDashboardContext.Provider
      value={{
        allOvertimes,
        allShifts,
        fetchShifts,
        goToNextWeek,
        goToPrevWeek,
        currentWeek,
        loadingShifts,
        fetchingShiftsError,
        shiftsInCurrentWeek: listOfShiftsInCurrentWeek,
        overtimesInCurrentWeek: listOfOvertimesInCurrentWeek,
        handleUpdateSingleOvertime,
        weekRanges,
        jumpToWeek,
        updateAllShifts,
        updateAllOvertimes,
        handleUpdateSingleShift,
        activityData,
        loadingActivity,
      }}
    >
      {children}
    </EmployeeDashboardContext.Provider>
  )
}
