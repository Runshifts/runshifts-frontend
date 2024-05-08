import React, { useMemo, useState } from "react"
import { SubmitButton } from "../../_components/Auth/Inputs"
import useGetTimesheetActions from "../../_hooks/useGetTimesheetActions"
import Modal from "../../_components/AppComps/Modal"
import FormInputAndLabel from "../schedule/NewShiftForm/FormInputAndLabel"
import Image from "next/image"

export default function TimesheetComponent({ shift = {}, onQueryClick }) {
  const shiftStartTime = useMemo(
    () => new Date(shift?.startTime),
    [shift?.startTime]
  )
  const [showQueryModal, setShowQueryModal] = useState(false)
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
            shift?.isApproved === true ||
            shift?.isQueried === true ||
            loading.singleShift
          }
        >
          {shift?.isApproved ? "Approved" : "Approve"}
        </SubmitButton>
        <button
          onClick={() => {
            setShowQueryModal(true)
            console.log("dfd;lsf;ds")
          }}
          className={`text-danger-600 disabled:opacity-30`}
          disabled={
            shift?.isApproved === true ||
            shift?.isQueried === true ||
            loading.singleShift
          }
        >
          Query
        </button>
      </div>
      <Modal
        open={showQueryModal}
        zIndex={45000000}
        onClose={() => setShowQueryModal(false)}
        modalClassNames="fixed"
      >
        <QueryForm assignee={shift?.assignee} shift={shift} />
      </Modal>
    </div>
  )
}

const QueryForm = ({ shift }) => {
  const [queryReason, setQueryReason] = useState("")
  const { querySingleShift, loading } = useGetTimesheetActions()

  return (
    <div className="flex items-stretch gap-[14px] flex-col w-[95dvw] max-w-[484px] px-4 py-6 rounded-[16px] bg-white">
      <h3 className="self-center mx-auto font-[600] text-[#1B1818] leading-[20px] text-[16px]">
        Reason for query
      </h3>
      <Image
        src={shift?.assignee?.profileImage?.secure_url || placeholderImg}
        alt=""
        className="rounded-full w-[64px] h-[64px] object-cover self-center"
        width={64}
        height={64}
      />
      <FormInputAndLabel
        label="Add your note"
        inputProps={{
          placeholder: "Reason for query",
          value: queryReason,
          onChange: (e) => setQueryReason(e.target.value),
        }}
      />
      <SubmitButton
        onClick={() => querySingleShift({ shiftId: shift?._id, queryReason })}
        className={
          "px-[12px] py-[2px] disabled:cursor-not-allowed disabled:bg-primary-200 bg-[#5BC62D] text-[14px] md:py-[8px] md:px-[16px] text-white md:font-[600] rounded-[8px]"
        }
        isLoading={loading.singleShift}
        isDisabled={
          shift?.isApproved || shift?.isQueried || loading.multipleShifts
        }
        loadingText="Sending query..."
      >
        Send query
      </SubmitButton>
    </div>
  )
}
