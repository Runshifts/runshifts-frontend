import { useCallback, useEffect, useState } from "react"
import useAxios from "./useAxios"
import SCHEDULE_URLS from "../_urls/scheduleURLs"
import { throwInvalidDateError } from "../_utils"
import socket from "../_socket"
import toast from "react-hot-toast"

export default function useHandleShiftDuplication({
  week,
  updateShifts = () => {},
}) {
  if (!week) throw new Error("The week range must be provided!")
  throwInvalidDateError(week.start)

  const [isDuplicationInProgress, setIsDuplicationInProgress] = useState(false)
  const fetchData = useAxios()

  const duplicateWeek = useCallback(
    async (organizationId) => {
      if (!organizationId) throw new Error("Organization id must be provided!")
      if (isDuplicationInProgress) return
      setIsDuplicationInProgress(true)
      const weekDay = new Date(week.start)
      const res = await fetchData(
        SCHEDULE_URLS.duplicateWeek(organizationId),
        "put",
        {
          weekDay,
        }
      )
      if (res.statusCode === 200) toast.success(res.message)
      else toast.error("Unable to duplicate week, Something went wrong")
      setIsDuplicationInProgress(false)
    },
    [fetchData, isDuplicationInProgress, week.start]
  )

  const duplicateSingleShift = useCallback(
    async (organizationId, shiftId) => {
      if (!organizationId) throw new Error("Organization id must be provided!")
      const res = await fetchData(
        SCHEDULE_URLS.duplicateSingleShift(organizationId, shiftId),
        "put"
      )
      if (res.statusCode === 200) {
        toast.success(res.message)
        updateShifts([res.duplicate])
      } else toast.error("Unable to duplicate shift, Something went wrong")
    },
    [fetchData, toast]
  )

  useEffect(() => {
    let toastId
    socket.on("weekly_duplication_success", (data) => {
      toast.remove(toastId)
      updateShifts(data.duplicates)
      toastId = toast.success(data.message)
      setIsDuplicationInProgress(false)
    })
    socket.on("weekly_duplication_error", (data) => {
      toastId = toast.error(data.message)
      toast.remove(toastId)
      setIsDuplicationInProgress(false)
    })
    return () => {
      socket.off("weekly_duplication_success", () => {
        toast.remove(toastId)
      })
      socket.off("weekly_duplication_error", () => {
        toast.remove(toastId)
      })
    }
  }, [socket, updateShifts])

  return { duplicateWeek, duplicateSingleShift, inProgress: isDuplicationInProgress }
}
