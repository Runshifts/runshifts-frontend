import Link from "next/link"
import FormInputAndLabel, { FormLabelText } from "./FormInputAndLabel"
import FormRadio from "./FormRadio"
import { useCallback, useMemo, useState } from "react"
import { getNextSunday } from "../../../_utils"
import DropDown from "../../../_components/AppComps/Dropdown"
import { Option } from "../../../_components/AppComps/Select"
import { useSelector } from "react-redux"

export default function ShiftDurationInputs({
  customShiftManagements = [],
  defaultShiftManageMents = [],
  handleScheduleSelection,
  startTime,
  endTime,
  showDateInput,
  handleDateSelection,
  selectedDate,
  currentWeek,
}) {
  const [selectedSchedule, setSelectedSchedule] = useState("")
  const { organization } = useSelector((store) => store.organization)
  const handleSelect = useCallback(
    (selection) => {
      // console.log(selection)
      const canUpdate = handleScheduleSelection(selection)
      canUpdate && setSelectedSchedule(selection)
    },
    [handleScheduleSelection]
  )

  return (
    <>
      <fieldset className="flex flex-col gap-[4px]">
        <FormLabelText>Shifts</FormLabelText>
        <div className="flex gap-2 md:gap-4 flex-wrap">
          {defaultShiftManageMents.map((shiftManagement, idx) => (
            <FormRadio
              key={idx}
              selected={selectedSchedule === shiftManagement}
              handleChange={(checked) =>
                checked && handleSelect(shiftManagement)
              }
              label={`${shiftManagement.name} shift`}
            />
          ))}
          {customShiftManagements.length > 0 && (
            <FormRadio
              selected={selectedSchedule === "custom"}
              handleChange={(checked) =>
                checked && setSelectedSchedule("custom")
              }
              label="Custom"
            />
          )}
        </div>
      </fieldset>
      {selectedSchedule === "custom" ||
        (customShiftManagements.length === 0 && (
          <div>
            <p className="text-[14px] font-[400] leading-[20px]">
              To add custom shifts head over to your{" "}
              <Link
                href={`/${
                  organization?.type === "non-profit"
                    ? "non-profit"
                    : "organization"
                }/settings`}
                className="text-[#4689FF] underline"
              >
                organisation settings
              </Link>
              .
            </p>
          </div>
        ))}
      {selectedSchedule !== "custom" && (
        <div
          className={`grid w-full gap-[16px] ${
            showDateInput ? "grid-cols-3" : " grid-cols-2"
          }`}
        >
          <DateSelectInput
            show={showDateInput}
            handleDateSelection={handleDateSelection}
            selectedDate={selectedDate}
            currentWeek={currentWeek}
          />
          <FormInputAndLabel
            label="Start"
            inputProps={{
              placeholder: "00:00",
              readOnly: true,
              value: startTime
                ? new Date(startTime).toLocaleTimeString("en-us", {
                    hour12: true,
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "",
            }}
          />
          <FormInputAndLabel
            label="End"
            inputProps={{
              placeholder: "00:00",
              readOnly: true,
              value: endTime
                ? new Date(endTime).toLocaleTimeString("en-us", {
                    hour12: true,
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : "",
            }}
          />
        </div>
      )}
    </>
  )
}

function DateSelectInput({
  show,
  handleDateSelection,
  selectedDate,
  currentWeek,
}) {
  const getDateDisplayText = useCallback((date) => {
    const today = new Date(Date.now())
    if (date.toDateString() === today.toDateString()) return "Today"
    else
      return date.toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
      })
  }, [])

  const dateOptions = useMemo(() => {
    let currentDay = new Date(Date.now()).getDay()
    const weekStart = new Date(currentWeek.start)
    let today = new Date(weekStart)
    if (weekStart.getTime() <= Date.now())
      today.setDate(today.getDate() + (currentDay > 0 ? currentDay : 7) - 1)
    const nextSunday = getNextSunday(today)
    const options = [today]
    while (true) {
      const nextDay = new Date(options[options.length - 1])
      if (nextDay.getDate() === nextSunday.getDate()) break
      nextDay.setDate(nextDay.getDate() + 1)
      options.push(nextDay)
    }
    return options
  }, [currentWeek])

  if (!show) return null
  return (
    <>
      <DropDown
        dropDownTrigger={
          <FormInputAndLabel
            label="Date"
            inputProps={{
              placeholder: "Today",
              readOnly: true,
              value: selectedDate ? getDateDisplayText(selectedDate) : "",
            }}
          />
        }
        dropdownContent={
          <>
            {dateOptions.map((opt) => (
              <Option
                onClick={() => handleDateSelection(opt)}
                key={opt.getTime()}
              >
                {getDateDisplayText(opt)}
              </Option>
            ))}
          </>
        }
      />
    </>
  )
}
