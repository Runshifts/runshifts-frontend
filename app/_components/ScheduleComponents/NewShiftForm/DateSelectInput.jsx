import FormInputAndLabel from "./FormInputAndLabel"
import { useRef } from "react"
import { Datepicker } from "flowbite-react"

export default function DateSelectInput({ value, handleSelectDate }) {
  const datePickerRef = useRef(null)
  return (
    <div className="relative z-[10]">
      <div
        className="absolute inset-x-0 z-[20] h-auto top-[30%]"
        ref={datePickerRef}
      >
        <Datepicker
          value={value}
          onSelectedDateChanged={handleSelectDate}
          showTodayButton={false}
          showClearButton={false}
          autoHide={false}
          icon={""}
          style={{ opacity: 0 }}
          minDate={new Date(Date.now())}
        />
      </div>
      <div className="relative z-[21]">
        <FormInputAndLabel
          label="Date"
          inputProps={{
            placeholder: "12/9/2024",
            value: value,
            readOnly: true,
            onClickCapture: () => {
              datePickerRef.current?.querySelector("input")?.focus()
            },
            onFocusCapture: () => {
              datePickerRef.current?.querySelector("input")?.blur()
            },
          }}
        />
      </div>
    </div>
  )
}
