import { createContext, useCallback, useContext, useState } from "react"
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
  checkout: () => {},
  startOrResumeBreak: () => {},
  pauseOrEndBreak: () => {},
})

export default function EmployeeTrackerProvider({ children, shiftId }) {
  const [loading, setLoading] = useState("")
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
      updateAllShifts([res.shift])
    } else {
      toast.error(res.message)
    }
    setLoading("")
  }, [organization, fetchData, shiftId, loading])

  const checkout = useCallback(async () => {
    if (loading === "checkout" || !shiftId) return
    setLoading("checkout")
    const res = await fetchData(
      TRACKER_URLS.checkout(organization?._id, shiftId),
      "get"
    )
    if (res.statusCode === 200) {
      toast.success(res.message)
      updateAllShifts([res.shift])
    } else {
      toast.error(res.message)
    }
    setLoading("")
  }, [organization, fetchData, shiftId, loading, updateAllShifts])
  const startOvertime = useCallback(() => {}, [])
  const endOvertime = useCallback(() => {}, [])
  const startOrResumeBreak = useCallback(async () => {
    if (loading === "start-break" || !shiftId) return
    setLoading("start-break")
    const res = await fetchData(
      TRACKER_URLS.startOrResumeBreak(organization?._id, shiftId),
      "get"
    )
    if (res.statusCode === 200) {
      toast.success(res.message)
      updateAllShifts([res.shift])
    } else {
      toast.error(res.message)
    }
    setLoading("")
  }, [organization, fetchData, shiftId, loading])
  const pauseOrEndBreak = useCallback(async () => {
    if (loading === "pause-break" || !shiftId) return
    setLoading("pause-break")
    const res = await fetchData(
      TRACKER_URLS.pauseOrEndBreak(organization?._id, shiftId),
      "get"
    )
    if (res.statusCode === 200) {
      toast.success(res.message)
      updateAllShifts([res.shift])
    } else {
      toast.error(res.message)
    }
    setLoading("")
  }, [organization, fetchData, shiftId, loading])

  return (
    <EmployeeTrackerContext.Provider
      value={{
        checkin,
        checkout,
        startOrResumeBreak,
        pauseOrEndBreak,
        loading,
      }}
    >
      {children}
    </EmployeeTrackerContext.Provider>
  )
}
