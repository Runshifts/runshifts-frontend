import ShiftSwapRequestCard from "./ShiftSwapRequestCard"
import { useContext, useMemo } from "react"
import { UserContext } from "../../_providers/UserProvider"
import { useSelector } from "react-redux"

function ShiftSwapReq() {
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
            <ReceivedSwaps />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <p className="text-[14px] font-semibold leading-5 text-[#36322F]">
            Sent Requests
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2">
            <SentSwaps />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShiftSwapReq

export function ReceivedSwaps() {
  const { user } = useContext(UserContext)
  const { swapRequests } = useSelector(
    (store) => store.shiftsAndOvertimeRequests
  )
  const incomingRequests = useMemo(
    () => swapRequests.filter((it) => it.sender?._id !== user?._id),
    [swapRequests, user?._id]
  )
  return (
    <>
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
    </>
  )
}

export function SentSwaps() {
  const { user } = useContext(UserContext)
  const { swapRequests } = useSelector(
    (store) => store.shiftsAndOvertimeRequests
  )
  const sentRequests = useMemo(
    () => swapRequests.filter((it) => it.sender?._id === user?._id),
    [swapRequests, user?._id]
  )
  return (
    <>
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
    </>
  )
}
