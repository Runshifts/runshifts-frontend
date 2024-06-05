import DateInput from "../../_components/AppComps/DateInput"
import Calender from "../../_assets/svgs/CalenderIcon"

const DateInputOptions = {
  datepickerClassNames: "",
  todayBtn: true,
  clearBtn: true,
  maxDate: Date.now(),
  minDate: new Date("2000-01-01"),
  theme: {
    background: "",
    todayBtn:
      "bg-transparent border rounded-md border-gray-100/50w-full px-5 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg dark:text-white dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-0 focus:ring-[0] hover:bg-gray-100/50 text-black ",
    clearBtn: "focus:ring-0 focus:ring-[0]",
    icons: "",
    text: "",
    disabledText: "opacity-10",
    input:
      "focus:outline-none rounded-[0] text-[#7A869A] p-0 border-0 focus:border-0 bg-transparent focus:ring-0 ring-0 text-[14px] leading-[20px] relative z-1 w-full cursor-pointer text-[#7A869A] placeholder:text-[#7A869A]  py-[4px] px-[8px]",
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
  defaultDate: false
}

export default function DateFilter({ dateFilter, updateDateFilter, options = {} }) {
  return (
    <div className="flex bg-[#F4F5F7] items-center max-w-[120px] rounded-[3px] relative">
      <span className="relative w-full z-[1] bg-transparent">
        <DateInput
          value={dateFilter}
          onChange={updateDateFilter}
          options={{...DateInputOptions, ...options}}
        />
      </span>
      <span className="absolute z-[0] right-[8px]">
        <Calender />
      </span>
    </div>
  )
}
