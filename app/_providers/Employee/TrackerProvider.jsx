import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import useAxios from "../../_hooks/useAxios"
import TRACKER_URLS from "../../_urls/trackerURLs"
import { OrganizationContext } from "../OrganizationProvider"
import toast from "react-hot-toast"
import { EmployeeDashboardContext } from "./EmployeeDashboardContext"
export const EmployeeTrackerContext = createContext({
  hasStartedShift: false,
  hasEndedShift: false,
  isOnBreak: false,
  hasPausedBreak: false,
  isBreakTimeOver: false,
  hasStartedOvertime: false,
  hasEndedOvertime: false,
  loading: "",
  todaysShift: null,
  todaysOvertime: null,
  checkin: () => {},
})

export default function EmployeeTrackerProvider({ children, shiftId }) {
  const [loading, setLoading] = useState(false)
  const [hasStartedShift, setHasStartedShift] = useState(false)
  const [hasEndedShift, setHasEndedShift] = useState(false)
  const [hasStartedOvertime, setHasStartedOvertime] = useState(false)
  const [hasEndedOvertime, setHasEndedOvertime] = useState(false)
  const [todaysShift, setTodaysShift] = useState(null)
  const [todaysOvertime, setTodaysOvertime] = useState(null)
  const isBreakTimeOver = useMemo(() => ({}), [])
  const hasPausedBreak = useMemo(() => ({}), [])
  const isOnBreak = useMemo(() => ({}), [])

  const { organization } = useContext(OrganizationContext)
  const { updateAllShifts } = useContext(EmployeeDashboardContext)
  const fetchData = useAxios()
  const checkin = useCallback(async () => {
    if (!shiftId || loading === "checkin") return
    setLoading("checkin")
    const res = await fetchData(
      TRACKER_URLS.checkin(organization?._id, shiftId),
      "get"
    )
    if (res.statusCode === 200) {
      toast.success(res.message)
      setHasStartedShift(res.checkedIn)
      updateAllShifts([res.shift])
    } else {
      toast.error(res.message)
    }
    setLoading("")
    console.log(res)
  }, [organization, fetchData, shiftId, loading])

  const checkout = useCallback(async () => {
    if(loading === "checkout" || !shiftId) return
    setLoading("checkout")
    const res = await fetchData(
      TRACKER_URLS.checkout(organization?._id, shiftId, updateAllShifts),
      "get"
    )
    if (res.statusCode === 200) {
      toast.success(res.message)
      setHasEndedShift(res.checkedOut)
      setHasStartedShift(false)
      updateAllShifts([res.shift])
    } else {
      toast.error(res.message)
    }
    setLoading("")
    console.log(res)
  }, [organization, fetchData, shiftId, loading, updateAllShifts])
  const startOvertime = useCallback(() => {}, [])
  const endOvertime = useCallback(() => {}, [])
  const startBreak = useCallback(() => {}, [])
  const pauseBreak = useCallback(() => {}, [])

  return (
    <EmployeeTrackerContext.Provider
      value={{
        checkin,
        checkout,
        loading,
      }}
    >
      {children}
    </EmployeeTrackerContext.Provider>
  )
}
