"use client"
import useShiftListeners from "../../_socket/listeners_hooks/useShiftListeners"

export default function OrganizationHooksProvider({ children }) {
  useShiftListeners()
  return <>{children}</>
}
