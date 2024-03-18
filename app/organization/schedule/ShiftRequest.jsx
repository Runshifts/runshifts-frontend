import React, { useCallback, useContext, useMemo, useState } from "react"
import placeholderImage from "../../_assets/img/user.png"
import Image from "next/image"
import { getDateOrdinal } from "../../_utils"
import useCountdown from "../../_hooks/useCountDown"
import useAxios from "../../_hooks/useAxios"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import toast from "react-hot-toast"
import { ShiftAndOvertimeRequestsContext } from "../../_providers/Employer/ShiftAndOvertimeRequestsProvider"
import { DashboardContext } from "../../_providers/Employer/DashboardContext"
import Spinner from "../../_assets/svgs/Spinner"

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
    <article className="border border-gray-300 rounded-lg p-[10px] flex flex-col gap-y-[8px] w-full max-w-[]">
      <UserDisplay
        firstName={shiftRequest.requester?.firstName || "Placeholder"}
        lastName={shiftRequest.requester?.lastName || "Name"}
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

      <p className="text-info-500 font-bold text-[14px] leading-[145%]">
        {isStillValid &&
        !shiftRequest.isAccepted &&
        !shiftRequest.isRejected ? (
          <>
            {+days && `${days} days, `}
            {+hours ? `${hours}:` : "00:"}
            {+minutes ? `${minutes}:` : "00:"}
            {seconds} Left
          </>
        ) : (
          !shiftRequest.isAccepted && (
            <span className="opacity-30 font-[500] text-4">Expired</span>
          )
        )}
      </p>

      {isStillValid && !shiftRequest.isAccepted && !shiftRequest.isRejected ? (
        <AcceptAndRejectButtons
          requestId={shiftRequest._id}
          requestType={"shifts"}
        />
      ) : null}
      {shiftRequest.isAccepted && <span className="opacity-30">Accepted</span>}
      {shiftRequest.isRejected && <span className="opacity-30">Rejected</span>}
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

export function UserDisplay({ image, firstName, lastName }) {
  return (
    <figure className=" flex items-center justify-start p-[8px]">
      <Image
        width={30}
        height={30}
        src={image || placeholderImage}
        className="rounded-full overflow-hidden"
        alt="avatar"
      />
      <figcaption className="text-sm px-2">
        {firstName || "Placeholder"} {lastName || "Name"}
      </figcaption>
    </figure>
  )
}

export function AcceptAndRejectButtons({ requestId, requestType }) {
  const [loading, setLoading] = useState("")
  const { handleUpdatedRequest } = useContext(ShiftAndOvertimeRequestsContext)
  const { handleUpdateSingleShift } = useContext(DashboardContext)

  const { organization } = useContext(OrganizationContext)
  const URLS = useMemo(() => {
    return {
      shifts: (decision) =>
        `/shifts/${organization?._id}/applications/${requestId}?action=${decision}`,
      overtimes: (decision) =>
        `/overtimes/${organization?._id}/${requestId}?action=${decision}`,
    }
  }, [organization?._id, requestId])

  const fetchData = useAxios()

  const handleDecision = useCallback(
    async (decision) => {
      if (loading) return
      setLoading(decision)
      const res = await fetchData(URLS[requestType](decision), "get")
      if (res.statusCode === 200) {
        toast.success(res.message)
        if (requestType === "shifts") {
          handleUpdatedRequest(res.application, "shift")
          handleUpdateSingleShift(res.shift)
        } else handleUpdatedRequest(res.request, "overtime")
      } else toast.error(res.message || "Something went wrong.")
      setLoading("")
    },
    [
      fetchData,
      URLS,
      requestType,
      handleUpdatedRequest,
      handleUpdateSingleShift,
      loading,
    ]
  )

  return (
    <div className="flex gap-x-[8px] items-end">
      <button
        onClick={() => handleDecision("accept")}
        className="bg-primary-600 text-white font-[500] px-3 py-[2px] leading-[20px] flex items-center justify-center gap-2"
      >
        {loading === "accept" && <Spinner />}{" "}
        {loading === "accept" ? "Accepting..." : "Accept"}
      </button>
      <button
        onClick={() => handleDecision("reject")}
        className="text-danger-600 font-[500] text-[14px] flex items-center justify-center gap-2"
      >
        {loading === "reject" && <Spinner />}{" "}
        {loading === "reject" ? "Rejecting..." : "Reject"}
      </button>
    </div>
  )
}
