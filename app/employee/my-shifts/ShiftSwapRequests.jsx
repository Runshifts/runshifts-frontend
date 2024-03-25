
import ShiftSwapRequestCard from "./ShiftSwapRequestCard"
import { useContext, useMemo } from "react"
import { EmployeeDashboardContext } from "../../_providers/Employee/EmployeeDashboardContext"
import { UserContext } from "../../_providers/UserProvider"

function ShiftSwapReq() {
  const { user } = useContext(UserContext)
  const { swapRequests } = useContext(EmployeeDashboardContext)

  const incomingRequests = useMemo(
    () => swapRequests.filter((it) => it.sender?._id !== user?._id),
    [swapRequests, user?._id]
  )
  const sentRequests = useMemo(
    () => swapRequests.filter((it) => it.sender?._id === user?._id),
    [swapRequests, user?._id]
  )
  return (
    <div className="bg-white">
      <h2 className="font-semibold text-lg text-[#292D32] py-2 ">
        Shift swap requests
      </h2>
      <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[14px] font-semibold leading-5 text-[#36322F]">
            Incoming Requests
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
            {incomingRequests.map((swapRequest) => (
              <ShiftSwapRequestCard
                key={swapRequest._id}
                senderShift={swapRequest.senderShift}
                receiverShift={swapRequest.receiverShift}
                swapRequest={swapRequest}
                userInFocus={swapRequest.sender}
                isReceived={true}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[14px] font-semibold leading-5 text-[#36322F]">
            Sent Requests
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 flex-wrap">
            {sentRequests.map((swapRequest) => (
              <ShiftSwapRequestCard
                key={swapRequest._id}
                senderShift={swapRequest.senderShift}
                receiverShift={swapRequest.receiverShift}
                swapRequest={swapRequest}
                userInFocus={swapRequest.receiverShift?.assignee}
                isReceived={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShiftSwapReq
