import { createContext, useCallback, useContext, useState } from "react"
import useAxios from "../../_hooks/useAxios"
import TRACKER_URLS from "../../_urls/trackerURLs"
import toast from "react-hot-toast"
import { EmployeeDashboardContext } from "./EmployeeDashboardContext"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addNewShifts } from "../../_redux/shifts.slice"
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
  const { organization } = useSelector((store) => store.organization)
  const dispatch = useDispatch()
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
      dispatch(addNewShifts({ shifts: [res.shift] }))
    } else {
      toast.error(res.message)
    }
    setLoading("")
  }, [organization, fetchData, shiftId, loading, dispatch])

  const checkout = useCallback(
    async (time = new Date(), note = {}) => {
      if (loading === "checkout" || !shiftId) return
      setLoading("checkout")
      console.log(note)
      const res = await fetchData(
        TRACKER_URLS.checkout(organization?._id, shiftId),
        "post",
        { time, note }
      )
      if (res.statusCode === 200) {
        toast.success(res.message)
        dispatch(addNewShifts({ shifts: [res.shift] }))
      } else {
        toast.error(res.message)
      }
      setLoading("")
    },
    [organization, fetchData, shiftId, loading, dispatch]
  )

  const startOrResumeBreak = useCallback(async () => {
    if (loading === "start-break" || !shiftId) return
    setLoading("start-break")
    const res = await fetchData(
      TRACKER_URLS.startOrResumeBreak(organization?._id, shiftId),
      "get"
    )
    if (res.statusCode === 200) {
      toast.success(res.message)
      dispatch(addNewShifts({ shifts: [res.shift] }))
    } else {
      toast.error(res.message)
    }
    setLoading("")
  }, [organization, fetchData, shiftId, loading, dispatch])
  const pauseOrEndBreak = useCallback(async () => {
    if (loading === "pause-break" || !shiftId) return
    setLoading("pause-break")
    const res = await fetchData(
      TRACKER_URLS.pauseOrEndBreak(organization?._id, shiftId),
      "get"
    )
    if (res.statusCode === 200) {
      toast.success(res.message)
      dispatch(addNewShifts({ shifts: [res.shift] }))
    } else {
      toast.error(res.message)
    }
    setLoading("")
  }, [organization, fetchData, shiftId, loading, dispatch])

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
