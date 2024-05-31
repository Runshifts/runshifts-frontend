"use client"
import ReportCard from "./ReportCard"
import StatisticsDonut from "./StatisticsDonut"
import { useSelector } from "react-redux"
import useHandleReportsThunkDispatch from "../../_hooks/useHandleReportsThunkDispatch"
import { fetchShiftPerformance } from "../../_redux/thunks/reports.thunk"
import { useMemo } from "react"

export default function ShiftsPerformanceSection({ selectedEmployees = [] }) {
  const { cache, loadingShiftPerformance } = useSelector(
    (store) => store.reports
  )
  const { loading, cacheKey } = useHandleReportsThunkDispatch({
    cache,
    cacheValueKey: "shiftsPerformance",
    selectedEmployees,
    thunkFunction: fetchShiftPerformance,
  })
  const dataSeries = useMemo(
    () => [
      cache[cacheKey]?.shiftsPerformance?.percentageOfCompletedShifts || 0,
      cache[cacheKey]?.shiftsPerformance?.percentageOfSwappedShifts || 0,
      cache[cacheKey]?.shiftsPerformance?.percentageOfAcceptedShifts || 0,
      cache[cacheKey]?.shiftsPerformance?.percentageOfRejectedShifts || 0,
    ],
    [cache, cacheKey]
  )
  const isNoData = dataSeries.every((item) => item === 0)
  return (
    <ReportCard heading="Employees shift performance">
      {(loading || loadingShiftPerformance) && (
        <div className="h-[150px] w-[150px] rounded-full mx-auto animate-pulse bg-gray-300/30"></div>
      )}
      {!loading && !loadingShiftPerformance && (
        <StatisticsDonut
          series={dataSeries}
          colors={["#7ED957", "#8294B4", "#FFCD66", "#FAA995"]}
          labels={[
            "Shifts completed",
            "shifts swapped",
            "shifts accepted",
            "shifts rejected",
          ]}
          width={150}
          height={150}
          annotations={{
            position: "front",
            texts: [
              {
                text: isNoData ? "No" : "Shifts",
                x: "50%",
                y: "50%",
                fontSize: isNoData ? "13px" : "28px",
                fontWeight: "400",
                textAnchor: "middle",
                style: {
                  color: "#262D33",
                },
              },
              {
                text: isNoData ? "data" : "performance",
                x: "50%",
                y: "60%",
                fontSize: "13px",
                textAnchor: "middle",
                style: {
                  color: "#262D33",
                },
              },
            ],
          }}
        />
      )}
      <div className="w-full flex items-center justify-between mt-[57px]">
        <StatisticsPercentageText
          loading={loading || loadingShiftPerformance}
          percentageNumber={
            cache[cacheKey]?.shiftsPerformance?.percentageOfCompletedShifts || 0
          }
          percentageNumberColor="#7ED957"
          title="Shifts Completed"
        />
        <StatisticsPercentageText
          loading={loading || loadingShiftPerformance}
          percentageNumber={
            cache[cacheKey]?.shiftsPerformance?.percentageOfSwappedShifts || 0
          }
          percentageNumberColor="#8294B4"
          title="Shifts Swapped"
        />
        <StatisticsPercentageText
          loading={loading || loadingShiftPerformance}
          percentageNumber={
            cache[cacheKey]?.shiftsPerformance?.percentageOfAcceptedShifts || 0
          }
          percentageNumberColor="#FFCD66"
          title="Shifts accepted"
        />
        <StatisticsPercentageText
          loading={loading || loadingShiftPerformance}
          percentageNumber={
            cache[cacheKey]?.shiftsPerformance?.percentageOfRejectedShifts || 0
          }
          percentageNumberColor="#FAA995"
          title="Shifts rejected"
        />
      </div>
    </ReportCard>
  )
}

function StatisticsPercentageText({
  percentageNumber,
  title,
  percentageNumberColor,
  loading,
}) {
  return (
    <div className="flex flex-col items-center w-min">
      <p
        style={{ color: percentageNumberColor }}
        className="text-center text-[17px] font-bold leading-7"
      >
        {loading ? (
          <span
            style={{ backgroundColor: percentageNumberColor }}
            className="w-[17px] opacity-30 h-[25px] rounded-sm block animate-pulse"
          />
        ) : (
          `${percentageNumber}%`
        )}
      </p>
      <p className="text-[#4B5157] text-center not-italic font-normal text-[9.6px]">
        {title}
      </p>
    </div>
  )
}
