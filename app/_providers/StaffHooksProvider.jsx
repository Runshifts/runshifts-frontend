"use client"
import useEmployeeShiftListeners from "../_socket/listeners_hooks/useStaffShiftListeners"

export default function StaffHooksProvider({ children }) {
  useEmployeeShiftListeners()
  return <>{children}</>
}
