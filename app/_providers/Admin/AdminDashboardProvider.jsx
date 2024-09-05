"use client"
import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react"
import useGetWeekRanges from "../../_hooks/useGetWeekRanges"
import useAxios from "../../_hooks/useAxios"
import DASHBOARD_URLS from "../../_urls/dashboardURLs"
import SHIFTS_URLS from "../../_urls/shiftsURLs"

export const AdminDashboardContext = createContext({
  currentShifts: [],
  initialize: () => {},
  goToNextWeek: () => {},
  goToPrevWeek: () => {},
  currentWeek: {},
  loading: false,
  weekRanges: () => {},
  hasInitialized: false,
  errorInitializing: false,
  stats: {
    totalNumberOfShifts: 0,
    totalNumberOfActiveShifts: 0,
    countOfOpenDisputes: 0,
    countOfClosedDisputes: 0,
  },
})

export default function AdminDashboardProvider({ children }) {
  const { goToNextWeek, currentWeek, goToPrevWeek, weekRanges, jumpToWeek } =
    useGetWeekRanges(new Date(Date.now()), 7)
  const [currentShifts, setCurrentShifts] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorInitializing, setErrorInitializing] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)
  const [stats, setStats] = useState({
    totalNumberOfShifts: 0,
    totalNumberOfActiveShifts: 0,
    countOfOpenDisputes: 0,
    countOfClosedDisputes: 0,
  })
  const fetchData = useAxios()

  const initialize = useCallback(async () => {
    if (loading) return
    setLoading(true)
    const res = await fetchData(SHIFTS_URLS.shiftsManagementStats(), "get")
    if (res.statusCode === 200) {
      setCurrentShifts(res.activeShifts)
      setStats({
        totalNumberOfActiveShifts: res.countOfActiveShifts,
        totalNumberOfShifts: res.totalShiftsCount,
      })
      setHasInitialized(true)
    }
    setLoading(false)
  }, [loading, fetchData])

  useEffect(() => {
   initialize()
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AdminDashboardContext.Provider
      value={{
        currentShifts,
        loading,
        stats,
        hasInitialized,
        goToPrevWeek,
        goToNextWeek,
        currentWeek,
        weekRanges,
        initialize,
        errorInitializing,
      }}
    >
      {children}
    </AdminDashboardContext.Provider>
  )
}
