import { useMemo } from "react"
import { formatHourAsAmOrPm, getDateOrdinal } from "../../_utils"

export default function ShiftSwapRequestCard({ shiftRequest }) {
  const isStillValid = useMemo(() => {
    return new Date(shiftRequest?.validUntil).getTime() > Date.now()
  }, [shiftRequest])

  return (
    <article className="border border-gray-300 rounded-lg p-[10px] justify-between flex flex-col gap-y-[8px] grow xl:max-w-[304px]">
      <div className={`flex gap-[8px]`}>
        <div className="bg-[#E5F7DD] rounded-[4px] text-sm px-[4px] py-[6px] grow">
          <p className="font-[600] leading-[20px] text-[10px] text-gray-900">
            Shift information
          </p>
          <p className="capitalize leading-[20px] text-[12px] text-gray-800 font-[500]">
            {new Date(shiftRequest?.shift?.startTime).toLocaleDateString(
              "en-us",
              {
                month: "short",
                weekday: "long",
                day: "numeric",
              }
            )}
            {getDateOrdinal(new Date(shiftRequest?.shift.startTime).getDate())}{" "}
            <span className="uppercase">
              -{" "}
              {formatHourAsAmOrPm(
                new Date(shiftRequest.shift?.startTime).getHours()
              )}{" "}
              -{" "}
              {formatHourAsAmOrPm(
                new Date(shiftRequest.shift?.endTime).getHours()
              )}
            </span>
          </p>
        </div>
      </div>
      <div className="text-info-500 font-bold text-[14px] leading-[145%] flex flex-col gap-[8px]">
        {!shiftRequest?.isAccepted && !isStillValid && (
          <p className="opacity-30 font-[500] text-4">Expired</p>
        )}
        {shiftRequest?.isAccepted && (
          <p className="opacity-30 font-[500] text-4">Accepted</p>
        )}
        {shiftRequest?.isRejected && (
          <p className="opacity-30 font-[500] text-4">Rejected</p>
        )}
        {isStillValid &&
          !shiftRequest?.isRejected &&
          !shiftRequest?.isAccepted && (
            <p className="font-[700] text-[14px] text-[#FFBC33]">
              Pending approval
            </p>
          )}
      </div>
    </article>
  )
}
