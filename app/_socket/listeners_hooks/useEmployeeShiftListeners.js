import { useCallback, useState, useContext } from "react"
import toast from "react-hot-toast"
import getUseListenForHook from "../../_hooks/getUseListenForHook"
import SHIFT_EVENTS from "../events/shifts"
import { EmployeeDashboardContext } from "../../_providers/Employee/EmployeeDashboardContext"

export default function useEmployeeShiftListeners() {
  const useListenFor = getUseListenForHook()
  const [toastId, setToastId] = useState()
  const { updateAllShifts } = useContext(EmployeeDashboardContext)

  const handleNewShift = useCallback(
    (data) => {
      toast.remove(toastId)
      updateAllShifts([data.shift])
      setToastId(toast.success(data.message))
    },
    [updateAllShifts]
  )

  useListenFor({
    event: SHIFT_EVENTS.NEW_SHIFT,
    callback: handleNewShift,
  })
}
