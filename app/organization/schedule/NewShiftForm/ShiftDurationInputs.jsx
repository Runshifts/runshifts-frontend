import Link from "next/link"
import FormInputAndLabel, { FormLabelText } from "./FormInputAndLabel"
import FormRadio from "./FormRadio"
import { useCallback, useState } from "react"
import { formatNumberToTwoDigitsMinimum } from "../../../_utils"

export const defaultShiftManageMents = ["morning", "afternoon", "evening"]

export default function ShiftDurationInputs({ customShiftManagements = [], handleScheduleSelection, startTime, endTime, }) {
  const [selectedSchedule, setSelectedSchedule] = useState("")

  const handleSelect = useCallback((selection) => {
    setSelectedSchedule(selection)
    handleScheduleSelection(selection)
  }, [handleScheduleSelection])
  return (
    <>
      <fieldset className="flex flex-col gap-[4px]">
        <FormLabelText>Radio group label</FormLabelText>
        <div className="flex gap-2 md:gap-4 flex-wrap">
          {
            defaultShiftManageMents.map((shiftManagement, idx) => (
              <FormRadio
                key={idx}
                selected={selectedSchedule === shiftManagement}
                handleChange={(checked) => checked && handleSelect(shiftManagement)}
                label={`${shiftManagement} shift`}
              />))
          }
          {customShiftManagements.length > 0 && <FormRadio
            selected={selectedSchedule === "custom"}
            handleChange={(checked) =>
              checked && setSelectedSchedule("custom")
            }
            label="Custom"
          />}
        </div>
      </fieldset>
      {
        selectedSchedule === "custom" || customShiftManagements.length === 0 && (
          <div>
            <p className="text-[14px] font-[400] leading-[20px]">
              To add custom shifts head over to your
              <Link href="/organization/settings" className="text-[#4689FF] underline"> organisation settings</Link>.
            </p>
          </div>
        )
      }
      {
        selectedSchedule !== "custom" &&
        <div className="grid grid-cols-2 w-full gap-[16px]">
          <FormInputAndLabel
            label="Start"
            inputProps={{ 
              placeholder: "00:00", 
              readOnly: true,
              value: startTime ?
               `${formatNumberToTwoDigitsMinimum(startTime.getHours())}:${formatNumberToTwoDigitsMinimum(startTime.getMinutes())}` :
               ""
              }}
          />
          <FormInputAndLabel
            label="End"
              inputProps={{
                placeholder: "00:00",
                readOnly: true,
                value: endTime ? `${formatNumberToTwoDigitsMinimum(endTime.getHours())}:${formatNumberToTwoDigitsMinimum(endTime.getMinutes())}`: 
                ""
              }}
          />
        </div>
      }
    </>
  )
}