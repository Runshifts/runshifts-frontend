import { useCallback, useState, useContext } from "react"
import toast from "react-hot-toast"
import getUseListenForHook from "../../_hooks/getUseListenForHook"
import SHIFT_EVENTS from "../events/shifts"
import { DashboardContext as OrganizationDashboardContext } from "../../_providers/Employer/DashboardContext"
import { useDispatch } from "react-redux"
import { updateSingleShift } from "../../_redux/shifts.slice"

export default function useShiftListeners() {
  const useListenFor = getUseListenForHook()
  const [toastId, setToastId] = useState()
  const { updateAllShifts } = useContext(OrganizationDashboardContext)
  const dispatch = useDispatch()

  const handleMultipleShiftCreateSuccess = useCallback(
    (data) => {
      toast.remove(toastId)
      updateAllShifts(data.shifts)
      setToastId(toast.success(data.message))
    },
    [updateAllShifts]
  )
  const handleMultipleShiftCreateError = useCallback((data) => {
    toast.remove(toastId)
    setToastId(toast.error(data.message))
  }, [])

  useListenFor({
    event: SHIFT_EVENTS.CREATE_MULTIPLE_SHIFTS_SUCCESS,
    callback: handleMultipleShiftCreateSuccess,
  })
  useListenFor({
    event: SHIFT_EVENTS.CREATE_MULTIPLE_SHIFTS_ERROR,
    callback: handleMultipleShiftCreateError,
  })
  useListenFor({
    event: SHIFT_EVENTS.SHIFT_ACCEPTED,
    callback: (data) => {
      if (data.statusCode === 200) dispatch(updateSingleShift(data.shift))
    },
  })
}
