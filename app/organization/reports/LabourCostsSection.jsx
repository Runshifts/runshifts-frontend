"use client"
import { PastDateDurationSelect } from "./Dropdown"
import ReportCard from "./ReportCard"

export default function LabourCostsSection() {
  return (
    <ReportCard showDateFilter heading={<>Labour cost</>}>
      <div className="w-full flex gap-[28px] pt-[28px] flex-col items-center justify-between">
        <StatisticsText
          value={"£150,967.64"}
          valueColor="#262D33"
          title="Earning"
          flexDirection="column-reverse"
        />
        <StatisticsText
          value={"£1,967.64"}
          valueColor="#262D33"
          title="Overtime Earnings"
          flexDirection="column-reverse"
        />
      </div>
    </ReportCard>
  )
}

export function StatisticsText({
  value,
  title,
  valueColor,
  flexDirection = "column",
}) {
  return (
    <div
      style={{ flexDirection }}
      className="flex gap-[5px] flex-col items-center"
    >
      <p
        style={{ color: valueColor }}
        className="text-center text-[30px] font-[600] leading-7"
      >
        {value}
      </p>
      <p className="text-[#939699] text-center not-italic font-normal text-[12px]">
        {title}
      </p>
    </div>
  )
}
