import { useState } from "react"
import Datepicker from "tailwind-datepicker-react"

export default function DateInput({
  options = {},
  label,
  onChange,
  showAlways,
  value
}) {
  const defaultOptions = {
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date(Date.now()),
    theme: {
      background: "",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "opacity-10",
      input:
        "focus:outline-none focus:ring-0 focus:border-[#DFE1E6] border-2 border-solid border-[#DFE1E6] w-full p-[8px] rounded-[3px] placeholder:text-[#7A869A] text-[14px] leading-[20px] font-[400]",
      inputIcon: "hidden",
      selected:
        "bg-transparent border-b-2 border-b-solid border-b-blue-600 font-bold !text-blue-600 text-center rounded-[0]",
    },
    datepickerClassNames: "top-[-580%] left-[-12%] p-0",
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      month: "numeric",
      year: "numeric",
      day: "numeric"
    },
    ...options,
    // defaultDate: new Date(Date.now())
  }

  const [show, setShow] = useState(false)

  return (
    <div className="flex items-start flex-col gap-1 relative">
      {label}
      <Datepicker
        options={defaultOptions}
        onChange={onChange}
        value={value}
        show={showAlways || show}
        setShow={setShow}
      />
    </div>
  )
}
