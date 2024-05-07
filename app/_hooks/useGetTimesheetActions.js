import { useCallback, useContext, useState } from "react"
import useAxios from "./useAxios"
import { OrganizationContext } from "../_providers/OrganizationProvider"
import TIMESHEET_URLS from "../_urls/timesheetsURLs"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { updateShifts } from "../_redux/timesheet.slice"

export default function useGetTimesheetActions() {
  const { organization } = useContext(OrganizationContext)
  const fetchData = useAxios()
  const [loading, setLoading] = useState({
    singleShift: false,
    multipleShifts: false,
  })
  const dispatch = useDispatch()
  const approveSingleShift = useCallback(
    async (shiftId) => {
      setLoading((prev) => ({ ...prev, singleShift: true }))
      const res = await fetchData(
        TIMESHEET_URLS.approveSingleShift(organization?._id, shiftId),
        "put"
      )
      if (res.statusCode === 200) {
        dispatch(updateShifts({ shifts: [res.shift] }))
        toast.success(res.message || "Successfully approved shift")
      } else toast.error(res.message || "Something went wrong!")
      setLoading((prev) => ({ ...prev, singleShift: false }))
    },
    [fetchData, dispatch]
  )
  return { approveSingleShift, loading }
}
