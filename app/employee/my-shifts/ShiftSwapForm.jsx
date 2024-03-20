import { useCallback, useContext, useState } from "react"
import { formatDate, formatHourAsAmOrPm } from "../../_utils"
import { SubmitButton } from "../../_components/Auth/Inputs"
import FormInputAndLabel from "../../organization/schedule/NewShiftForm/FormInputAndLabel"
import useAxios from "../../_hooks/useAxios"
import toast from "react-hot-toast"
import MY_SHIFTS_URLS from "../../_urls/myShiftsURLs"
import { OrganizationContext } from "../../_providers/OrganizationProvider"

export default function ShiftSwapForm({ shift = {} }) {
  return (
    <div className="flex flex-col items-stretch gap-4">
      {shift && (
        <h3 className="text-left font-[400] leading-[150%] text-[14px] text-[#303030]">
          Swap shift
        </h3>
      )}
      <FormInputAndLabel
        label="Full name"
        inputProps={{
          readOnly: true,
          value: shift?.assignee?.firstName ,
          placeholder: "Co-worker name",
        }}
      />
      <div className="flex gap-4">
        <FormInputAndLabel
          label="Day"
          inputProps={{
            readOnly: true,
            value: formatDate(new Date(shift?.startTime), {
              day: "numeric",
              weekday: "long",
              month: "long",
            }),
          }}
        />
        <FormInputAndLabel
          label="Duration"
          inputProps={{
            readOnly: true,
            value: `${formatHourAsAmOrPm(
              new Date(shift?.startTime).getHours()
            )}-${formatHourAsAmOrPm(new Date(shift?.endTime).getHours())}`,
          }}
        />
      </div>
      <div className="flex items-center justify-start gap-[4px]">
        <SubmitButton
          style={{
            padding: "6px 12px",
            maxWidth: "129px",
            fontSize: "14px",
            margin: `0 ${shift ? "auto" : ""}`,
          }}
          loadingText="Accepting"
        >
          Request swap
        </SubmitButton>
      </div>
    </div>
  )
}
