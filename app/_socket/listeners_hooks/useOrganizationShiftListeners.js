import { useCallback, useState } from "react"
import toast from "react-hot-toast"
import getUseListenForHook from "../../_hooks/getUseListenForHook"
import SHIFT_EVENTS from "../events/shifts"
import { useDispatch } from "react-redux"
import {
  updateSingleShift,
  acceptMultipleShifts,
  addNewShifts,
} from "../../_redux/shifts.slice"
import { addNewShiftRequest } from "../../_redux/shiftsAndOvertimesRequests.slice"

export default function useShiftListeners() {
  const useListenFor = getUseListenForHook()
  const [toastId, setToastId] = useState()
  const dispatch = useDispatch()

  const handleMultipleShiftCreateSuccess = useCallback(
    (data) => {
      toast.remove(toastId)
      dispatch(addNewShifts({ shifts: data.shifts }))
      setToastId(toast.success(data.message))
    },
    [dispatch, toastId]
  )
  const handleMultipleShiftCreateError = useCallback(
    (data) => {
      toast.remove(toastId)
      setToastId(toast.error(data.message))
    },
    [toastId]
  )

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
  useListenFor({
    event: SHIFT_EVENTS.NEW_SHIFT_REQUEST,
    callback: (data) => {
      if (data.statusCode === 201)
        dispatch(addNewShiftRequest(data.shiftApplication))
    },
  })
  useListenFor({
    event: SHIFT_EVENTS.ACCEPTED_ALL_SHIFTS,
    callback: (data) => {
      if (data.statusCode === 200)
        dispatch(
          acceptMultipleShifts({
            start: data.data.fromDate,
            end: data.data.toDate,
            assignee: data.data.assignee,
          })
        )
    },
  })
}
