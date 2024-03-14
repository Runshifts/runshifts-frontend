import profilepic from "./Ellipse2.svg"
import Image from "next/image"
import FormInputAndLabel from "../schedule/NewShiftForm/FormInputAndLabel"

export const BREAKDOWN_VARIANTS = {
  CLOCKED_IN: "clocked-in",
  CLOCKED_OUT: "clocked-out",
  ON_BREAK: "on-break",
  TIME_OFF: "timeoff",
  INCOMING_SHIFT_REQUEST: "incoming-shift-requests",
}

const YourFormComponent = ({ handleClose, variant }) => {
  return (
    <div className="w-[90%] md:w-full mx-auto max-w-[336px] py-[24px] px-[20px] md:px-[40px] bg-white rounded-[16px] shadow-md flex flex-col items-center justify-center gap-[14px]">
      <h3 className="text-center text-[16px] font-[600] text-[#1B1818]">
        Time Review
      </h3>
      <Image
        width={69}
        height={69}
        className="w-[69px] h-[69px]"
        src={profilepic}
        alt=""
      />
      <div className="flex flex-col gap-4">
        <FormInputAndLabel
          label="Full name"
          inputProps={{ value: "Ariana Woods", disabled: true }}
        />
        <FormInputAndLabel
          label="Location"
          inputProps={{ value: "Dawaki", disabled: true }}
        />

        <div className="flex gap-4">
          <FormInputAndLabel
            label={
              variant === BREAKDOWN_VARIANTS.TIME_OFF
                ? "Time off start"
                : "Check-in time"
            }
            inputProps={{ value: "07:00 AM", disabled: true }}
          />
          <FormInputAndLabel
            label={
              variant === BREAKDOWN_VARIANTS.TIME_OFF
                ? "Time off end"
                : "Check-out time"
            }
            inputProps={{ value: "-", disabled: true }}
          />
        </div>
        {variant !== BREAKDOWN_VARIANTS.INCOMING_SHIFT_REQUEST &&
          variant !== BREAKDOWN_VARIANTS.TIME_OFF && (
            <div className="flex gap-4">
              <FormInputAndLabel
                label="Break duration"
                inputProps={{ value: "01:00 Min", disabled: true }}
              />
              <FormInputAndLabel
                label="Used break time"
                inputProps={{ value: "00:30 hr", disabled: true }}
              />
            </div>
          )}
      </div>
      <button onClick={handleClose}>Go back</button>
    </div>
  )
}

export default YourFormComponent
