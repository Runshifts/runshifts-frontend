import React from "react"
import DateRangePicker from "../_components/AppComps/Datepicker"
import Table from "./Table"
import Snapshot from "./Snapshot"
import Wages from "./Wages"
import Export from "../_components/AppComps/Export"
import FilterGroup from "../_components/AppComps/FilterGroup"

function Dashboard() {
  return (
    <section className="p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-[#292D32] font-semibold text-xl md:font-bold text-2xl ">
          Welcome Ottobong
        </h1>
        <Export />
      </div>

      <FilterGroup />

      <div className="bg-[#efeded] rounded p-3 overflow-x-auto scrollbar-hide">
        <h1 className="font-semibold text-lg text-[#292D32] mx-3 py-2">
          Calendar
        </h1>
        <DateRangePicker />

        <div className="flex overflow-x-auto scrollbar-hide">
          <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
            <p className=" text-xs text-gray-600 bg-red-200 rounded-full">
              Otto 8am-2pm
            </p>
          </div>
          <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
            <p className=" text-xs text-gray-600  rounded-full">No schedule</p>
          </div>
          <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
            <p className=" text-xs text-gray-600  rounded-full">No schedule</p>
          </div>
          <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
            <p className=" text-xs text-gray-600  rounded-full">No schedule</p>
          </div>
          <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
            <p className=" text-xs text-gray-600  rounded-full">No schedule</p>
          </div>
          <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
            <p className=" text-xs text-gray-600  rounded-full">No schedule</p>
          </div>
          <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
            <p className=" text-xs text-gray-600  rounded-full">No schedule</p>
          </div>
        </div>

        <h1 className="font-semibold text-lg text-[#292D32] mx-3 py-2">
          Today&apos;s schedule
        </h1>
        <Table />
      </div>

      <Snapshot />
      <Wages />
    </section>
  )
}

export default Dashboard

function ArrowDown() {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292 0.293002C0.105193 0.481894 0.000419617 0.736838 0.000419617 1.0025C0.000419617 1.26816 0.105193 1.52311 0.292 1.712L3.231 4.677C3.449 4.892 3.731 4.999 4.01 4.999C4.289 4.999 4.566 4.892 4.779 4.677L7.709 1.722C7.89557 1.53298 8.00018 1.27809 8.00018 1.0125C8.00018 0.746917 7.89557 0.492021 7.709 0.303002C7.61717 0.209818 7.50773 0.13582 7.38704 0.0853119C7.26635 0.0348039 7.13683 0.00879383 7.006 0.00879383C6.87517 0.00879383 6.74565 0.0348039 6.62496 0.0853119C6.50427 0.13582 6.39483 0.209818 6.303 0.303002L4.005 2.62L1.698 0.293002C1.60596 0.200181 1.49646 0.126505 1.3758 0.0762262C1.25514 0.0259474 1.12572 6.10352e-05 0.995 6.10352e-05C0.864284 6.10352e-05 0.734863 0.0259474 0.614203 0.0762262C0.493544 0.126505 0.384037 0.200181 0.292 0.293002Z"
        fill="#42526E"
      />
    </svg>
  )
}
