"use client"
import { testAttendanceSeries } from "./DefaultBarChartOptions"
import StatisticsView from "./StatisticsView"
import { formatDuration } from "./StatisticsGraphicalView"
import { fetchAttendanceStats } from "../../_redux/thunks/reports.thunk"
import useHandleReportsThunkDispatch from "../../_hooks/useHandleReportsThunkDispatch"
import { useSelector } from "react-redux"
import { useState } from "react"
import { SECTION_VIEWS } from "./Dropdown"

function getAttendanceGraphSeries(data = []) {
  return data
    .map((it) => ({
      absent: {
        x: formatDuration(it.startDate, it.endDate),
        y: it.absentShifts,
      },
      late: { x: formatDuration(it.startDate, it.endDate), y: it.lateShifts },
    }))
    .reduce(
      (acc, curr) => {
        acc[0] = {
          ...acc[0],
          data: [...acc[0].data, curr.late],
        }
        acc[1] = { ...acc[1], data: [...acc[1].data, curr.absent] }
        return acc
      },
      [
        { name: "Late", color: "#449522", data: [] },
        { name: "Absent", color: "#42526E", data: [] },
      ]
    )
}

function getAttendanceNumericalData(data = []) {
  return data.map((it) => ({
    heading: formatDuration(it.startDate, it.endDate),
    primary: { name: "Absent", value: it.absentShifts },
    secondary: { name: "Late", value: it.lateShifts },
  }))
}
function AttendanceSection({ selectedEmployees = [] }) {
  const [daysAgo, setDaysAgo] = useState({
    displayValue: "Last 7 days",
    value: 7,
  })
  const { cache, loadingAttendance } = useSelector((store) => store.reports)
  const { loading, cacheKey } = useHandleReportsThunkDispatch({
    cache,
    cacheValueKey: "attendance",
    daysAgo,
    selectedEmployees,
    thunkFunction: fetchAttendanceStats,
  })
  return (
    <StatisticsView
      series={getAttendanceGraphSeries(cache[cacheKey]?.attendance || [])}
      heading="Attendance"
      primaryDataKey="Absent"
      secondaryDataKey="Late"
      numericalViewData={getAttendanceNumericalData(
        cache[cacheKey]?.attendance || []
      )}
      loading={loading || loadingAttendance}
      initialView={SECTION_VIEWS.GRAPHICAL}
      onPastDateFilterSelect={(val) => {
        setDaysAgo(val)
      }}
    />
  )
}

export default AttendanceSection
