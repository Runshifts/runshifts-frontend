import { useContext, useEffect } from "react"
import socket from "../_socket"
import toast from "react-hot-toast"
import { DashboardContext } from "../_providers/Employer/DashboardContext"

export default function useListenForMultipleShiftCreation() {
  const { updateAllShifts } = useContext(DashboardContext)
  useEffect(() => {
    let toastId
    socket.on("create_multiple_shifts_success", (data) => {
      toast.remove(toastId)
      updateAllShifts(data.shifts)
      toastId = toast.success(data.message)
    })
    socket.on("create_multiple_shifts_error", (d) => {
      toastId = toast.error(data.message)
      toast.remove(toastId)
    })
    return () => {
      socket.off("create_multiple_shifts_success", () => {
        toast.remove(toastId)
      })
      socket.off("create_multiple_shifts_error", () => {
        toast.remove(toastId)
      })
    }
  }, [socket, updateAllShifts])
}
