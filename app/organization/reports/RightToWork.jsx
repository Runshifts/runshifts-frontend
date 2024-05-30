import React from "react"
import ReportCard from "./ReportCard"
const RightToWorkDiplay = () => {
  return (
    <ReportCard heading="RIGHT TO WORK">
      <div className="flex flex-col items-center justify-center gap-[5px]">
        <p className="text-gray-600 text-center text-[12px] font-normal leading-[16px] my-2">
          Remaining Time
        </p>
        <div className="bg-[#354258] rounded-xl p-6">
          <div className="flex gap-6 items-center justify-between">
            <RightToWorkText value={8} title="Years" />
            <RightToWorkText value={8} title="Months" />
            <RightToWorkText value={8} title="Days" />
            <RightToWorkText value={8} title="Hours" />
          </div>
        </div>
      </div>
    </ReportCard>
  )
}

export default RightToWorkDiplay

function RightToWorkText({ title, value }) {
  return (
    <div className="text-white text-center flex flex-col w-min items-center">
      <p className="text-[32px] font-normal leading-[32px]">{value}</p>
      <p className="text-[11px] font-normal">{title}</p>
    </div>
  )
}
