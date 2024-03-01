"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"

export const ShiftsManagementContext = createContext()

export default function ShiftsManagementProvider({ children, organizationId }) {
  const fetchData = useAxios()
  const [shiftManagements, setShiftsManagement] = useState([])

  const fetchShiftsManagement = useCallback(async () => {
    if (!organizationId) return
    const res = await fetchData(`/shifts-managements/${organizationId}`, "get")
    if (res.statusCode === 200) setShiftsManagement(res.results)
  }, [organizationId, fetchData])

  useEffect(() => {
    fetchShiftsManagement()
  }, [fetchShiftsManagement])

  return (
    <ShiftsManagementContext.Provider value={{ shiftManagements }}>
      {children}
    </ShiftsManagementContext.Provider>
  )
}
