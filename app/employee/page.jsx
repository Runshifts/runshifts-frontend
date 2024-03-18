import React from "react"
import DateRangePicker from "../_components/AppComps/Datepicker"
import Calender from "./Calender"
import ShiftSwap from "./ShiftSwap"
import MyActivities from "./MyActivities"
import Heading from "../_components/Headings"

function EmployeeDashboard() {
  return (
    <section className="md:px-[21px] h-screen">
      <div className="flex flex-col gap-[24px] pt-6 pb-4">
        <Heading as="h1">Welcome Ottobong</Heading>
        <DateRangePicker />
      </div>
      <div className="rounded-md shadow-[0px_2px_8px_0px_#0000001F] flex flex-col gap-[8px] p-[8px] md:p-4">
        <h2 className="text-[12px] md:text-base font-[600] text-[#292D32] leading-[150%]">
          Calender
        </h2>
        <Calender />
      </div>

      <div>
        <ShiftSwap />
      </div>
      <div className="rounded-md overflow-hidden shadow-[0px_2px_8px_0px_#0000001F] ">
        <MyActivities />
      </div>
    </section>
  )
}

export default EmployeeDashboard
