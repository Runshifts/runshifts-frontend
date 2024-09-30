"use client"
import { useState } from "react"
import ReportCard from "./ReportCard"
import { useSelector } from "react-redux"
import useHandleReportsThunkDispatch from "../../_hooks/useHandleReportsThunkDispatch"
import { fetchLabourCosts } from "../../_redux/thunks/reports.thunk"

export default function LabourCostsSection({ selectedEmployees }) {
  const [daysAgo, setDaysAgo] = useState({
    displayValue: "Last 7 days",
    value: 7,
  })
  const { cache, loadingLabourCosts } = useSelector((store) => store.reports)
  const { loading, cacheKey } = useHandleReportsThunkDispatch({
    cache,
    cacheValueKey: "labourCosts",
    daysAgo,
    selectedEmployees,
    thunkFunction: fetchLabourCosts,
  })

  return (
    <ReportCard
      handleDateFilterSelect={(val) => setDaysAgo(val)}
      showDateFilter
      heading={<>Labour cost</>}
    >
      <div className="w-full flex gap-[28px] pt-[28px] flex-col items-center justify-between">
        <StatisticsText
          loading={loading || loadingLabourCosts}
          value={Number(
            cache[cacheKey]?.labourCosts?.totalEarnings || 0
          ).toLocaleString("en-gb", {
            currency: "eur",
            style: "currency",
            currency: "GBP",
          })}
          valueColor="#262D33"
          title="Earnings"
          flexDirection="column-reverse"
        />
        <StatisticsText
          loading={loading || loadingLabourCosts}
          value={Number(
            cache[cacheKey]?.labourCosts?.overtimeEarnings || 0
          ).toLocaleString("en-gb", {
            currency: "eur",
            style: "currency",
            currency: "GBP",
          })}
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
  loading,
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
        {loading ? (
          <span
            style={{ backgroundColor: valueColor }}
            className="w-[120px] opacity-[.2] h-[34px] rounded-sm block animate-pulse"
          />
        ) : (
          value
        )}
      </p>
      <p className="text-[#939699] text-center not-italic font-normal text-[12px]">
        {title}
      </p>
    </div>
  )
}
