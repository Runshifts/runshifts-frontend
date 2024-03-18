"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import useAxios from "../../_hooks/useAxios"
import { OrganizationContext } from "../OrganizationProvider"

export const ShiftAndOvertimeRequestsContext = createContext({})

export default function ShiftAndOvertimeRequestsProvider({ children }) {
  const { organization } = useContext(OrganizationContext)
  const fetchData = useAxios()
  const [loadingShiftRequests, setLoadingShiftRequests] = useState(true)
  const [shiftRequests, setShiftRequests] = useState([])
  const [overtimeRequests, setOvertimeRequests] = useState([])

  const fetchShiftAndOvertimeRequests = useCallback(async () => {
    if (!organization?._id) return
    setLoadingShiftRequests(true)
    const [shiftsRes, overtimeRes] = await Promise.all([
      await fetchData(`/shifts/${organization?._id}/applications`, "get"),
      await fetchData(`/overtimes/${organization?._id}/requests`, "get"),
    ])
    if (shiftsRes.statusCode === 200) setShiftRequests(shiftsRes.results)
    if (overtimeRes.statusCode === 200) setOvertimeRequests(overtimeRes.results)
    setLoadingShiftRequests(false)
  }, [organization?._id, fetchData])

  const handleUpdatedRequest = useCallback((request, type) => {
    if (type === "shift")
      setShiftRequests((prev) =>
        prev.map((req) => (req._id !== request._id ? req : request))
      )
    if (type === "overtime")
      setOvertimeRequests((prev) =>
        prev.map((req) => (req._id !== request._id ? req : request))
      )
  }, [])

  useEffect(() => {
    fetchShiftAndOvertimeRequests()
  }, [fetchShiftAndOvertimeRequests])

  return (
    <ShiftAndOvertimeRequestsContext.Provider
      value={{
        shiftRequests,
        overtimeRequests,
        loadingShiftRequests,
        handleUpdatedRequest,
      }}
    >
      {children}
    </ShiftAndOvertimeRequestsContext.Provider>
  )
}
