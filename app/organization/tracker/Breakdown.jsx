import placeholderImage from "../../_assets/img/user.png"
import Image from "next/image"
import FormInputAndLabel from "../../_components/ScheduleComponents/NewShiftForm/FormInputAndLabel"
import { useCallback, useMemo } from "react"
import { msToHourMinSecond } from "../../_utils"

export const BREAKDOWN_VARIANTS = {
  CLOCKED_IN: "clocked-in",
  CLOCKED_OUT: "clocked-out",
  ON_BREAK: "on-break",
  TIME_OFF: "timeoff",
  INCOMING_SHIFT_REQUEST: "incoming-shift-request",
}

const Breakdown = ({
  handleClose,
  variant,
  employee = {},
  shiftOrTimeOff = {},
}) => {
  const getEndTimeDisplay = useCallback((shiftOrTimeOff) => {
    if (!shiftOrTimeOff.endedAt) {
      let date = new Date(shiftOrTimeOff.endTime)
      const now = new Date()
      if (date.getTime() > now.getTime()) return "-"
      else return date.toLocaleTimeString("en-us", { hour12: true })
    } else
      return new Date(shiftOrTimeOff.endedAt).toLocaleTimeString("en-us", {
        hour12: true,
      })
  }, [])

  const heading = useMemo(() => {
    if (shiftOrTimeOff.isOvertime) return "Overtime Review"
    return "Time Review"
  }, [shiftOrTimeOff])

  return (
    <div className="w-[90%] md:w-full mx-auto max-w-[336px] py-[24px] px-[20px] md:px-[40px] bg-white rounded-[16px] shadow-md flex flex-col items-center justify-center gap-[14px]">
      <h3 className="text-center text-[16px] font-[600] text-[#1B1818]">
        {heading}
      </h3>
      <Image
        width={69}
        height={69}
        className="w-[69px] h-[69px] rounded-full"
        src={employee?.profileImage?.secure_url || placeholderImage}
        alt=""
      />
      <div className="flex flex-col gap-4">
        <FormInputAndLabel
          label="Full name"
          inputProps={{
            value: (
              (employee?.firstName + " " + employee?.lastName).trim() ||
              employee?.fullName ||
              employee?.email
            )?.replaceAll("undefined", "-"),
            disabled: true,
          }}
        />
        <FormInputAndLabel
          label="Location"
          inputProps={{
            value: shiftOrTimeOff?.location?.address || "-",
            disabled: true,
          }}
        />

        <div className="flex gap-4">
          <FormInputAndLabel
            label={
              variant === BREAKDOWN_VARIANTS.TIME_OFF
                ? "Time off start"
                : "Check-in time"
            }
            inputProps={{
              value: new Date(shiftOrTimeOff?.startedAt).toLocaleTimeString(
                "en-us",
                { hour12: true }
              ),
              disabled: true,
            }}
          />
          <FormInputAndLabel
            label={
              variant === BREAKDOWN_VARIANTS.TIME_OFF
                ? "Time off end"
                : "Check-out time"
            }
            inputProps={{
              value: getEndTimeDisplay(shiftOrTimeOff),
              disabled: true,
            }}
          />
        </div>
        {variant !== BREAKDOWN_VARIANTS.INCOMING_SHIFT_REQUEST &&
          variant !== BREAKDOWN_VARIANTS.TIME_OFF &&
          !shiftOrTimeOff.isOvertime && (
            <div className="flex gap-4">
              <FormInputAndLabel
                label="Break duration"
                inputProps={{
                  value: `${msToHourMinSecond(
                    shiftOrTimeOff?.allottedBreakTimeInMilliseconds || 0
                  )} hr`,
                  disabled: true,
                }}
              />
              <FormInputAndLabel
                label="Used break time"
                inputProps={{
                  value: `${msToHourMinSecond(
                    shiftOrTimeOff?.breakDurationUsedInMilliseconds || 0
                  )} hr`,
                  disabled: true,
                }}
              />
            </div>
          )}
      </div>
      <button onClick={handleClose}>Go back</button>
    </div>
  )
}

export default Breakdown
