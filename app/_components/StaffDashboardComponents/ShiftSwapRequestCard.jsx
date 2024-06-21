import { useCallback, useContext, useMemo, useState } from "react"
import {
  AcceptAndRejectButtons,
  UserDisplay,
} from "../../organization/schedule/ShiftRequest"
import { getDateOrdinal } from "../../_utils"
import useCountdown from "../../_hooks/useCountDown"
import { UserContext } from "../../_providers/UserProvider"
import useAxios from "../../_hooks/useAxios"
import MY_SHIFTS_URLS from "../../_urls/shiftsURLs"
import toast from "react-hot-toast"
import { EmployeeDashboardContext } from "../../_providers/Employee/EmployeeDashboardContext"
import Spinner from "../../_assets/svgs/Spinner"

export default function ShiftSwapRequestCard({
  swapRequest = {},
  senderShift = {},
  receiverShift = {},
  isReceived = false,
  userInFocus,
}) {
  const { user } = useContext(UserContext)
  const { deleteSwapRequest } = useContext(EmployeeDashboardContext)
  const { days, hours, minutes, seconds } = useCountdown(
    new Date(swapRequest?.validUntil)
  )
  const [isCanceling, setIsCanceling] = useState(false)
  const fetchData = useAxios()
  const handleCancel = useCallback(async () => {
    if (isCanceling) return
    setIsCanceling(true)
    const res = await fetchData(
      MY_SHIFTS_URLS.cancelSwapRequest(swapRequest?._id),
      "delete"
    )
    let toastFunc
    if (res.statusCode === 200) {
      toastFunc = toast.success
      deleteSwapRequest(swapRequest)
    } else toastFunc = toast.error
    toastFunc(res.message)
    setIsCanceling(false)
  }, [fetchData, swapRequest, deleteSwapRequest, isCanceling])

  const isStillValid = useMemo(() => {
    return new Date(swapRequest?.validUntil).getTime() > Date.now()
  }, [swapRequest])

  return (
    <article className="border border-gray-300 rounded-lg p-[10px] justify-between flex flex-col gap-y-[8px] grow">
      <UserDisplay
        firstName={
          userInFocus?.firstName || userInFocus?.fullName || userInFocus?.email
        }
        lastName={userInFocus?.lastName || ""}
        image={userInFocus?.profileImage?.secure_url}
        imageHeight={24}
        imageWidth={24}
      />
      <div className={`flex gap-[8px] ${isReceived ? "" : "row-reverse"}`}>
        <ShiftDetail
          assigneeId={senderShift.assignee?._id}
          shiftName={senderShift.schedule?.name}
          date={new Date(senderShift.startTime)}
        />
        <ShiftDetail
          assigneeId={receiverShift.assignee?._id}
          shiftName={receiverShift.schedule?.name}
          date={new Date(receiverShift.startTime)}
        />
      </div>
      <div className="text-info-500 font-bold text-[14px] leading-[145%] flex flex-col gap-[8px]">
        {
          <p>
            {+days && `${days} days, `}
            {+hours ? `${hours}:` : "00:"}
            {+minutes ? `${minutes}:` : "00:"}
            {seconds} Left
          </p>
        }
        {swapRequest.isAccepted === false &&
          swapRequest.isAccepted === false &&
          !isStillValid && (
            <p className="opacity-30 font-[500] text-4">Expired</p>
          )}
        {swapRequest.isAccepted && (
          <p className="opacity-30 font-[500] text-4">Accepted</p>
        )}
        {swapRequest.isRejected && (
          <p className="opacity-30 font-[500] text-4">Rejected</p>
        )}
      </div>
      {isStillValid &&
        swapRequest.isAccepted === false &&
        swapRequest.isRejected === false &&
        user._id !== swapRequest.sender?._id && (
          <AcceptAndRejectButtons
            requestId={swapRequest._id}
            requestType={"swap"}
          />
        )}
      {isStillValid &&
        swapRequest.isAccepted === false &&
        swapRequest.isRejected === false &&
        user._id === swapRequest.sender?._id && (
          <div className="flex items-center gap-2">
            <span className="bg-[#FFBC33] text-white px-[12px] py-[2px] font-[500] text-[14px] leading-[20px]">
              Pending
            </span>
            <button
              onClick={handleCancel}
              disabled={isCanceling}
              className="!text-[#B22A09] flex items-center disabled:opacity-70 font-[500] text-[14px] leading-[20px]"
            >
              {isCanceling && (
                <>
                  <Spinner />
                  &nbsp;
                </>
              )}
              {isCanceling ? "Cancelling" : "Cancel request"}
            </button>
          </div>
        )}
    </article>
  )
}

function ShiftDetail({ date = new Date(), shiftName, assigneeId }) {
  const { user } = useContext(UserContext)
  return (
    <div className="bg-[#E5F7DD] rounded-[4px] text-sm px-[4px] py-[6px] grow">
      <p className="font-[600] leading-[20px] text-[10px] text-gray-900">
        {user?._id === assigneeId ? "Your" : "Their"} shift
      </p>
      <p className="capitalize leading-[20px] text-[12px] text-gray-800 font-[500]">
        {date.toLocaleDateString("en-us", {
          month: "short",
          weekday: "long",
          day: "numeric",
        })}
        {getDateOrdinal(date.getDate())} - {shiftName} Shift
      </p>
    </div>
  )
}
