import { useCallback, useContext, useState } from "react"
import useAxios from "./useAxios"
import { OrganizationContext } from "../_providers/OrganizationProvider"
import TIMESHEET_URLS from "../_urls/timesheetsURLs"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { updateShifts } from "../_redux/timesheet.slice"
import { useSelector } from "react-redux"

export default function useGetTimesheetActions() {
  const { shifts } = useSelector((store) => store.timesheet)
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
    [fetchData, dispatch, organization]
  )

  const approveMultipleShifts = useCallback(
    async (shiftIds = [], approvalNote, assignee) => {
      setLoading((prev) => ({ ...prev, multipleShifts: true }))
      const res = await fetchData(
        TIMESHEET_URLS.approveMultipleShifts(organization?._id),
        "post",
        { shiftIds, approvalNote, assignee }
      )
      if (res.statusCode === 200) {
        dispatch(
          updateShifts({
            shifts: shifts.map((shift) =>
              shiftIds.includes(shift?._id)
                ? { ...shift, isApproved: true }
                : shift
            ),
          })
        )
        toast.success(res.message || "Successfully approved timesheet")
      } else toast.error(res.message || "Something went wrong!")
      setLoading((prev) => ({ ...prev, multipleShifts: false }))
    },
    [fetchData, dispatch, organization, shifts]
  )

  const querySingleShift = useCallback(
    async ({ shiftId, queryReason }) => {
      setLoading((prev) => ({ ...prev, singleShift: true }))
      const res = await fetchData(
        TIMESHEET_URLS.querySingleShift(organization?._id, shiftId),
        "put",
        { queryReason }
      )
      if (res.statusCode === 200) {
        dispatch(updateShifts({ shifts: [res.shift] }))
        toast.success(res.message || "Successfully queried shift")
      } else toast.error(res.message || "Something went wrong!")
      setLoading((prev) => ({ ...prev, singleShift: false }))
    },
    [fetchData, dispatch, organization]
  )

  const queryMultipleShifts = useCallback(
    async (shiftIds = [], queryReason, assignee) => {
      setLoading((prev) => ({ ...prev, multipleShifts: true }))
      const res = await fetchData(
        TIMESHEET_URLS.queryMultipleShifts(organization?._id),
        "post",
        { shiftIds, queryReason, assignee }
      )
      if (res.statusCode === 200) {
        dispatch(
          updateShifts({
            shifts: shifts.map((shift) =>
              shiftIds.includes(shift?._id)
                ? { ...shift, isQueried: true, queryReason, isApproved: false }
                : shift
            ),
          })
        )
        toast.success(res.message || "Successfully queried timesheet")
      } else toast.error(res.message || "Something went wrong!")
      setLoading((prev) => ({ ...prev, multipleShifts: false }))
    },
    [fetchData, dispatch, organization, shifts]
  )
  return {
    approveSingleShift,
    approveMultipleShifts,
    loading,
    queryMultipleShifts,
    querySingleShift,
  }
}
