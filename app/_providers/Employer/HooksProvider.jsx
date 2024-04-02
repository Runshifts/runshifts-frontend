"use client"
import useShiftListeners from "../../_socket/listeners_hooks/useOrganizationShiftListeners"

export default function OrganizationHooksProvider({ children }) {
  useShiftListeners()
  return <>{children}</>
}
