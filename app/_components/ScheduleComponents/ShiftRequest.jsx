import React, { useCallback, useMemo, useState } from "react"
import placeholderImage from "../../_assets/img/user.png"
import Image from "next/image"
import { getDateOrdinal } from "../../_utils"
import useCountdown from "../../_hooks/useCountDown"
import useAxios from "../../_hooks/useAxios"
import toast from "react-hot-toast"
import Spinner from "../../_assets/svgs/Spinner"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addNewShifts, updateSingleShift } from "../../_redux/shifts.slice"
import {
  handleUpdatedRequest,
  updateSwapRequest,
} from "../../_redux/shiftsAndOvertimesRequests.slice"

export function ShiftRequest({ shiftRequest = {} }) {
  const shiftStart = useMemo(
    () => new Date(shiftRequest.shift?.startTime),
    [shiftRequest.shift?.startTime]
  )
  const { days, hours, minutes, seconds } = useCountdown(
    new Date(shiftRequest?.validUntil)
  )
  const isStillValid = useMemo(() => {
    return +days || +hours || +minutes || +seconds
  }, [days, hours, minutes, seconds])

  return (
    <article className="border border-gray-300 rounded-lg p-[10px] flex flex-col gap-y-[8px] w-full max-h-[170px]">
      <UserDisplay
        firstName={
          shiftRequest.requester?.firstName || shiftRequest.requester.fullName
        }
        lastName={shiftRequest.requester?.lastName || ""}
        image={shiftRequest.requester?.profileImage?.secure_url}
      />
      <div className="bg-[#E5F7DD] rounded-[4px] text-sm px-[4px]">
        <p className="font-[600] leading-[20px] text-[10px] text-gray-900">
          Open shift
        </p>
        <p className="capitalize leading-[20px] text-[12px] text-gray-800 font-[500]">
          {formatRequestStartDate(shiftStart)} -{" "}
          {shiftRequest.shift?.schedule?.name} Shift
        </p>
      </div>

      <div className="text-info-500 font-bold text-[14px] leading-[145%] flex flex-col gap-[8px]">
        <p>
          {+days && `${days} days, `}
          {+hours ? `${hours}:` : "00:"}
          {+minutes ? `${minutes}:` : "00:"}
          {seconds} Left
        </p>
        {!shiftRequest.isAccepted && !isStillValid && (
          <p className="opacity-30 font-[500] text-4">Expired</p>
        )}
        {shiftRequest.isAccepted && (
          <p className="opacity-30 font-[500] text-4">Accepted</p>
        )}
        {shiftRequest.isRejected && (
          <p className="opacity-30 font-[500] text-4">Rejected</p>
        )}
      </div>

      {isStillValid && !shiftRequest.isAccepted && !shiftRequest.isRejected ? (
        <AcceptAndRejectButtons
          requestId={shiftRequest._id}
          requestType={"shift"}
        />
      ) : null}
    </article>
  )
}

export function formatRequestStartDate(date) {
  return `${date.toLocaleDateString("default", {
    weekday: "long",
  })} ${date.toLocaleDateString("default", {
    month: "short",
  })} ${`${date.getDate()}${getDateOrdinal(date.getDate())}`}`
}

export function UserDisplay({
  image,
  firstName,
  lastName,
  imageWidth = 30,
  imageHeight = 30,
}) {
  return (
    <figure className="flex items-center justify-start gap-[8px] p-[8px]">
      <Image
        width={imageWidth}
        height={imageHeight}
        src={image || placeholderImage}
        className="rounded-full overflow-hidden"
        alt="avatar"
      />
      <figcaption className="text-[14px] text-[#1D2433]">
        {firstName || "Placeholder"} {lastName || "Name"}
      </figcaption>
    </figure>
  )
}

export function AcceptAndRejectButtons({ requestId, requestType }) {
  const [loading, setLoading] = useState("")
  const { organization } = useSelector((store) => store.organization)
  const URLS = useMemo(() => {
    return {
      shift: (decision) =>
        `/shifts/${organization?._id}/applications/${requestId}?action=${decision}`,
      overtime: (decision) =>
        `/overtimes/${organization?._id}/${requestId}?action=${decision}`,
      swap: (decision) => `/shifts/swaps/${requestId}/${decision}`,
    }
  }, [organization?._id, requestId])

  const dispatch = useDispatch()

  const callbacks = useMemo(
    () => ({
      shift: ({ application, shift }) => {
        dispatch(handleUpdatedRequest({ data: application, type: "shift" }))
        dispatch(updateSingleShift(shift))
      },
      overtime: ({ request }) => {
        dispatch(handleUpdatedRequest({ data: request, type: "overtime" }))
      },
      swap: ({ request }) => {
        dispatch(updateSwapRequest(request))
        dispatch(
          addNewShifts({ shifts: [request.receiverShift, request.senderShift] })
        )
      },
    }),
    [dispatch]
  )

  const fetchData = useAxios()

  const handleDecision = useCallback(
    async (decision) => {
      if (loading) return
      setLoading(decision)
      const res = await fetchData(URLS[requestType](decision), "get")
      if (res.statusCode === 200) {
        toast.success(res.message)
        if (typeof callbacks[requestType] === "function")
          callbacks[requestType](res)
      } else toast.error(res.message || "Something went wrong.")
      setLoading("")
    },
    [fetchData, URLS, requestType, loading, callbacks]
  )

  return (
    <div className="flex gap-x-[8px] items-end">
      <button
        onClick={() => handleDecision("accept")}
        disabled={loading === "accept"}
        className="bg-primary-600 disabled:opacity-70 text-white font-[500] px-3 py-[2px] leading-[20px] flex items-center justify-center gap-2"
      >
        {loading === "accept" && <Spinner />}{" "}
        {loading === "accept" ? "Accepting..." : "Accept"}
      </button>
      <button
        onClick={() => handleDecision("reject")}
        className="text-danger-600 disabled:opacity-70 font-[500] text-[14px] flex items-center justify-center gap-2"
        disabled={loading === "reject"}
      >
        {loading === "reject" && <Spinner />}{" "}
        {loading === "reject" ? "Rejecting..." : "Reject"}
      </button>
    </div>
  )
}
