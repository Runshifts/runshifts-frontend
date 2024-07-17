"use client"
import { useSelector } from "react-redux"
import { StatisticsText } from "./LabourCostsSection"
import ReportCard from "./ReportCard"
import { fetchScheduleAdherence } from "../../_redux/thunks/reports.thunk"
import { useState } from "react"
import useHandleReportsThunkDispatch from "../../_hooks/useHandleReportsThunkDispatch"

export default function SchedulingSection({ selectedEmployees }) {
  const [daysAgo, setDaysAgo] = useState({
    displayValue: "Last 7 days",
    value: 7,
  })
  const { cache, loadingScheduleAdherence } = useSelector(
    (store) => store.reports
  )
  const { loading, cacheKey } = useHandleReportsThunkDispatch({
    cache,
    cacheValueKey: "scheduleAdherence",
    daysAgo,
    selectedEmployees,
    thunkFunction: fetchScheduleAdherence,
  })
  return (
    <ReportCard
      showDateFilter
      heading={<>Scheduling</>}
      handleDateFilterSelect={(val) => setDaysAgo(val)}
    >
      <div className="w-full flex pt-[28px] mb-4 items-center justify-around">
        <StatisticsText
          value={(cache[cacheKey]?.scheduleAdherence || {}).actualSchedules}
          valueColor="#262D33"
          title="Actual Schedules"
          flexDirection="column-reverse"
          loading={loading || loadingScheduleAdherence}
        />
        <StatisticsText
          value={(cache[cacheKey]?.scheduleAdherence || {}).plannedSchedules}
          valueColor="#262D33"
          title="Planned Schedules"
          flexDirection="column-reverse"
          loading={loading || loadingScheduleAdherence}
        />
      </div>
      <StatisticsText
        value={`${
          (cache[cacheKey]?.scheduleAdherence || {})
            .percentageOfScheduleAdherence
        }%`}
        valueColor="#449522"
        title="Schedule Adherence"
        flexDirection="column"
        loading={loading || loadingScheduleAdherence}
      />
    </ReportCard>
  )
}
