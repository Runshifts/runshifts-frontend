"use client"
import useEmployeeShiftListeners from "../../_socket/listeners_hooks/useEmployeeShiftListeners"

export default function EmployeeHooksProvider({ children }) {
  useEmployeeShiftListeners()
  return <>{children}</>
}
