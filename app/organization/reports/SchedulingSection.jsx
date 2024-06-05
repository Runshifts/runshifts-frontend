"use client"
import { StatisticsText } from "./LabourCostsSection"
import ReportCard from "./ReportCard"

export default function SchedulingSection() {
  return (
    <ReportCard showDateFilter heading={<>Scheduling</>}>
      <div className="w-full flex pt-[28px] mb-4 items-center justify-around">
        <StatisticsText
          value={"28"}
          valueColor="#262D33"
          title="Actual Schedules"
          flexDirection="column-reverse"
        />
        <StatisticsText
          value={"16"}
          valueColor="#262D33"
          title="Planned Schedules"
          flexDirection="column-reverse"
        />
      </div>
      <StatisticsText
        value={"52%"}
        valueColor="#449522"
        title="Schedule Adherence"
        flexDirection="column"
      />
    </ReportCard>
  )
}
