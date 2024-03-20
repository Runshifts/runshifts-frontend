import DateInput from "../../_components/AppComps/DateInput"
import Calender from "../../_assets/svgs/CalenderIcon"

const DateInputOptions = {
  datepickerClassNames: "",

  maxDate: Date.now(),
  minDate: new Date("2000-01-01"),
  theme: {
    background: "",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "opacity-10",
    input:
      "focus:outline-none  text-[#7A869A] p-0 border-0 focus:border-0 bg-transparent focus:ring-0 ring-0 text-[14px] leading-[20px] relative z-1 w-full cursor-pointer bg-[#F4F5F7] text-[#7A869A]  py-[4px] px-[8px]",
    inputIcon: "hidden",
    selected:
      "bg-transparent border-b-2 border-b-solid border-b-blue-600 font-bold !text-blue-600 text-center rounded-[0]",
  },
  inputDateFormatProp: {
    month: "numeric",
    year: "numeric",
    day: "numeric",
  },
  inputNameProp: "date",
  inputPlaceholderProp: "Calender",
}

export default function DateFilter({ dateFilter, updateDateFilter }) {
  return (
    <div className="flex items-center max-w-[120px] rounded-[3px] relative">
      <DateInput
        value={dateFilter}
        onChange={updateDateFilter}
        options={DateInputOptions}
      />
      <span className="absolute z-[0] right-[8px]">
        <Calender />
      </span>
    </div>
  )
}
