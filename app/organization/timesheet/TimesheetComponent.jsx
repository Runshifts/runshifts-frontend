import React, { useMemo } from "react"
import { SubmitButton } from "../../_components/Auth/Inputs"
import useGetTimesheetActions from "../../_hooks/useGetTimesheetActions"

export default function TimesheetComponent({ shift = {} }) {
  const shiftStartTime = useMemo(
    () => new Date(shift?.startTime),
    [shift?.startTime]
  )
  const { approveSingleShift, loading } = useGetTimesheetActions()
  return (
    <div className="border border-solid border-[#CAC6C3] max-h-[140px] md:border-[#E3E3E3] rounded-[8px] p-4 flex flex-col md:flex-row gap-2 md:gap-0 md:p-0">
      <div className="flex gap-2 items-center md:w-[45%] md:border-r-solid md:border-r md:border-r-[#E3E3E3] md:p-4">
        <p className="text-[12px] px-[4px] py-[2px] leading-[1rem] bg-[#0000000F] rounded-[8px] whitespace-nowrap">
          {shiftStartTime.toLocaleDateString("en-us", { weekday: "long" })}
        </p>
        <p className="text-[14px] leading-[20px] whitespace-nowrap">
          {shiftStartTime.toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>

      <p className="text-[14px] grow leading-[20px] md:border-x-solid md:border-x md:border-x-[#E3E3E3] md:p-4">
        {shift?.checkoutNote?.details || "-- -- -- -- -- -- --"}
      </p>
      <div className="flex items-center justify-center max-w-[122px] md:max-w-none gap-2 md:w-[35%] md:p-4">
        <SubmitButton
          onClick={() => approveSingleShift(shift?._id)}
          className={
            "px-[12px] py-[2px] disabled:cursor-not-allowed disabled:bg-primary-200 bg-[#5BC62D] text-[14px] md:py-[8px] md:px-[16px] text-white md:font-[600] rounded-[8px]"
          }
          loadingText="Approving"
          isLoading={loading.singleShift}
          isDisabled={
            shift?.isApproved === true || shift?.isQueried === true || loading.singleShift
          }
        >
          {shift?.isApproved ? "Approved" : "Approve"}
        </SubmitButton>
        <button
          className={`text-danger-600 disabled:opacity-30`}
          disabled={shift?.isApproved === true || shift?.isQueried === true || loading.singleShift}
        >
          Query
        </button>
      </div>
    </div>
  )
}
