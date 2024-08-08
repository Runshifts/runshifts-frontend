import { useCallback, useState, useContext } from "react"
import toast from "react-hot-toast"
import getUseListenForHook from "../../_hooks/getUseListenForHook"
import SHIFT_EVENTS from "../events/shifts"
import { addNewShifts } from "../../_redux/shifts.slice"
import {
  updateSingleShiftApplication,
  addNewSwapRequest,
  updateSwapRequest,
  deleteSwapRequest,
} from "../../_redux/shiftsAndOvertimesRequests.slice"
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
    [dispatch, toastId]
  )
  const handleMultipleShiftCreateSuccess = useCallback(
    (data) => {
      toast.remove(toastId)
      dispatch(addNewShifts({ shifts: data.shifts }))
      setToastId(toast.success(data.message))
    },
    [dispatch, toastId]
  )

  const handleShiftRequestAcceptance = useCallback(
    (data) => {
      if (data.statusCode === 200) {
        toast.remove(toastId)
        data.shift && dispatch(addNewShifts({ shifts: [data.shift] }))
        data.shiftApplication &&
          dispatch(updateSingleShiftApplication(data.shiftApplication))
        data.message && setToastId(toast.success(data.message))
      }
    },
    [dispatch, toastId]
  )

  const handleShiftRequestRejection = useCallback(
    (data) => {
      if (data.statusCode === 200) {
        toast.remove(toastId)
        data.shiftApplication &&
          dispatch(updateSingleShiftApplication(data.shiftApplication))
        data.message && setToastId(toast.success(data.message))
      }
    },
    [dispatch, toastId]
  )
  const handleNewSwapRequest = useCallback(
    (data) => {
      if (data.statusCode === 200) {
        toast.remove(toastId)
        data.swapRequest &&
          data.statusCode === 200 &&
          dispatch(addNewSwapRequest(data.swapRequest))
        data.message && setToastId(toast.success(data.message))
      }
    },
    [dispatch, toastId]
  )
  const handleSwapRequestAcceptance = useCallback(
    (data) => {
      if (data.statusCode === 200) {
        toast.remove(toastId)
        data.swapRequest && dispatch(updateSwapRequest(data.swapRequest))
        Array.isArray(data.shifts) &&
          dispatch(addNewShifts({ shifts: data.shifts }))
        data.message && setToastId(toast.success(data.message))
      }
    },
    [dispatch, toastId]
  )
  const handleSwapRequestRejection = useCallback(
    (data) => {
      if (data.statusCode === 200) {
        toast.remove(toastId)
        data.swapRequest && dispatch(updateSwapRequest(data.swapRequest))
        data.message && setToastId(toast.success(data.message))
      }
    },
    [dispatch, toastId]
  )
  const handleSwapRequestCancellation = useCallback(
    (data) => {
      if (data.statusCode === 200) {
        toast.remove(toastId)
        data.swapRequestId && dispatch(deleteSwapRequest(data.swapRequestId))
        data.message && setToastId(toast.success(data.message))
      }
    },
    [dispatch, toastId]
  )
  useListenFor({
    event: SHIFT_EVENTS.NEW_SHIFT,
    callback: handleNewShift,
  })
  useListenFor({
    event: SHIFT_EVENTS.CREATE_MULTIPLE_SHIFTS_SUCCESS,
    callback: handleMultipleShiftCreateSuccess,
  })
  useListenFor({
    event: SHIFT_EVENTS.SHIFT_REQUEST_ACCEPTED,
    callback: handleShiftRequestAcceptance,
  })
  useListenFor({
    event: SHIFT_EVENTS.SHIFT_REQUEST_REJECTED,
    callback: handleShiftRequestRejection,
  })
  useListenFor({
    event: SHIFT_EVENTS.SWAP_REQUEST,
    callback: handleNewSwapRequest,
  })
  useListenFor({
    event: SHIFT_EVENTS.SHIFT_SWAP_ACCEPTED,
    callback: handleSwapRequestAcceptance,
  })
  useListenFor({
    event: SHIFT_EVENTS.SHIFT_SWAP_REJECTED,
    callback: handleSwapRequestRejection,
  })
  useListenFor({
    event: SHIFT_EVENTS.SHIFT_SWAP_CANCELLED,
    callback: handleSwapRequestCancellation,
  })
}
