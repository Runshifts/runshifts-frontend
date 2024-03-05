import { getAmOrPm } from "../../_utils";
import { AcceptAndRejectButtons, UserDisplay, formatRequestStartDate } from "./ShiftRequest";
import { useMemo } from "react";
import { CardSkeletonLoader } from "../../_components/Skeletons/CardSkeleton";

export default function OvertimeRequestsSection({ overtimeRequests = [], loading }){
  return (
    <section className="w-full">
      <h1 className="font-[600] text-[#292D32] text-4 leading-normal mb-[8px]">
        Overtime Requests
      </h1>
      {loading ? (
        <CardSkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px] md:grid-cols-3 w-full">
          {overtimeRequests.map((shiftReq) => (
            <OvertimeRequest key={shiftReq._id} overtimeRequest={shiftReq} />
          ))}
        </div>
      )}
    </section>
  )
}


export function OvertimeRequest({ overtimeRequest = {} }) {
  const overtimeStart = useMemo(
    () => new Date(overtimeRequest?.startTime),
    [overtimeRequest?.startTime]
  )
  const overtimeEnd = useMemo(
    () => new Date(overtimeRequest?.endTime),
    [overtimeRequest?.endTime]
  )

  const timeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  }

  const [start, end] = useMemo(
    () => [
      overtimeStart.toLocaleTimeString("default", timeFormatOptions),
      overtimeEnd.toLocaleTimeString("default", timeFormatOptions),
    ],
    [overtimeStart, overtimeEnd]
  )
  const isStillValid = useMemo(() => {
    return new Date(overtimeRequest?.validUntil).getTime() > Date.now()
  }, [])

  return (
    <article className="border border-gray-300 rounded-lg p-[10px] flex flex-col gap-y-[8px] w-full max-w-[]">
      <UserDisplay
        firstName={overtimeRequest.requester?.firstName || "Placeholder"}
        lastName={overtimeRequest.requester?.lastName || "Name"}
        image={overtimeRequest.requester?.profileImage?.secure_url}
      />
      <div className="bg-[#E5F7DD] rounded-[4px] text-sm px-[4px] py-[6px]">
        <p className="font-[600] leading-[20px] text-[10px] text-gray-900">
          Overtime details
        </p>
        <div className="bg-white px-[4px]">
          <p className="capitalize leading-[20px] text-[12px] text-gray-800 font-[500]">
            {formatRequestStartDate(overtimeStart)}
          </p>
          <p className="uppercase tracking-loose leading-[20px] text-[10px] text-gray-600 font-[500]">
            {start}
            {getAmOrPm(overtimeStart.getHours())} - {end}
            {getAmOrPm(overtimeEnd.getHours())}
          </p>
        </div>
      </div>

      <p className="text-info-500 bg-white font-bold text-[14px] leading-[145%]"></p>

      {isStillValid && !overtimeRequest.isAccepted && !overtimeRequest.isRejected ? (
        <AcceptAndRejectButtons requestId={overtimeRequest._id} requestType={"overtimes"} />
      ) : (
        <span className="opacity-30">Expired</span>
      )}
      {!isStillValid && overtimeRequest.isAccepted && <span className="opacity-30">Accepted</span>}
      {!isStillValid && overtimeRequest.isRejected && <span className="opacity-30">Rejected</span>}
    </article>
  )
}