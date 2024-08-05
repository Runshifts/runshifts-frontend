import { useCallback, useState, useContext } from "react"
import toast from "react-hot-toast"
import getUseListenForHook from "../../_hooks/getUseListenForHook"
import SHIFT_EVENTS from "../events/shifts"
import { addNewShifts } from "../../_redux/shifts.slice"
import { useDispatch } from "react-redux"

export default function useStaffShiftListeners() {
  const useListenFor = getUseListenForHook()
  const [toastId, setToastId] = useState()
  const dispatch = useDispatch()
  const handleNewShift = useCallback(
    (data) => {
      toast.remove(toastId)
      dispatch(addNewShifts({ shifts: [data.shift] }))
      setToastId(toast.success(data.message))
    },
    [dispatch]
  )

  const handleMultipleShiftCreateSuccess = useCallback(
    (data) => {
      toast.remove(toastId)
      dispatch(addNewShifts({ shifts: data.shifts }))
      setToastId(toast.success(data.message))
    },
    [dispatch]
  )
  useListenFor({
    event: SHIFT_EVENTS.NEW_SHIFT,
    callback: handleNewShift,
  })
  useListenFor({
    event: SHIFT_EVENTS.CREATE_MULTIPLE_SHIFTS_SUCCESS,
    callback: handleMultipleShiftCreateSuccess,
  })
}
