"use client"
import { PastDateDurationSelect } from "./Dropdown"

export default function ReportCard({ showDateFilter, heading, children }) {
  return (
    <>
      <div className="h-full flex flex-col items-stretch bg-white rounded-xl shadow-[0px_1.926px_7.704px_0px_rgba(0,0,0,0.12)]">
        <div className="flex justify-between items-center px-6 py-4">
          <h4 className="text-[#262D33] text-[13px] font-normal leading-5 uppercase">
            {heading}
          </h4>
          {showDateFilter && <PastDateDurationSelect />}
        </div>
        <hr className="border-[#D9DADB]" />
        <div className="py-6 px-4 h-auto">{children}</div>
      </div>
    </>
  )
}
