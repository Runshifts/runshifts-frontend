import React, { useMemo } from "react"
import placeholderImage from "../../_assets/img/user.png"
import Image from "next/image"
import { getDateOrdinal } from "../../_utils"
import useCountdown from "../../_hooks/useCountDown"

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
        {isStillValid ? (
          <>
            {+days && `${days} days, `}
            {+hours ? `${hours}:` : "00:"}
            {+minutes ? `${minutes}:` : "00:"}
            {seconds} Left
          </>
        ) : (
          <span className="opacity-30 font-[500] text-4">Expired</span>
        )}
      </p>

      {isStillValid ? (
        <AcceptAndRejectButtons accept={() => {}} reject={() => {}} />
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

export function AcceptAndRejectButtons({ accept, reject }) {
  return (
    <div className="flex gap-x-[8px] items-end">
      <button
        onClick={accept}
        className="bg-primary-600 text-white font-[500] px-3 py-[2px] leading-[20px]"
      >
        Accept
      </button>
      <button onClick={reject} className="text-danger-600 font-[500] text-[14px]">
        Reject
      </button>
    </div>
  )
}
