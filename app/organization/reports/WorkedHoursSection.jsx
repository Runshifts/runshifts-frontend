"use client"
import StatisticsView from "./StatisticsView"
import { formatDuration } from "./StatisticsGraphicalView"
import { SECTION_VIEWS } from "./Dropdown"
import { useState } from "react"
import { useSelector } from "react-redux"
import useHandleReportsThunkDispatch from "../../_hooks/useHandleReportsThunkDispatch"
import { fetchWorkedHours } from "../../_redux/thunks/reports.thunk"

function getWorkedHoursGraphSeries(data = []) {
  return data
    .map((it) => ({
      absent: { x: formatDuration(it.startDate, it.endDate), y: it.shiftHours },
      late: {
        x: formatDuration(it.startDate, it.endDate),
        y: it.overtimeHours,
      },
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
        { name: "Hours Worked", color: "#449522", data: [] },
        { name: "OvertimeHours", color: "#42526E", data: [] },
      ]
    )
}

function getWorkedHoursNumericalView(data = []) {
  return data.map((it) => ({
    heading: formatDuration(it.startDate, it.endDate),
    primary: { name: "Hours worked", value: it.shiftHours },
    secondary: { name: "Overtime hours", value: it.overtimeHours },
  }))
}

function WorkedHoursSection({ selectedEmployees }) {
  const [daysAgo, setDaysAgo] = useState({
    displayValue: "Last 7 days",
    value: 7,
  })
  const { cache, loadingWorkedHours } = useSelector((store) => store.reports)
  const { loading, cacheKey } = useHandleReportsThunkDispatch({
    cache,
    cacheValueKey: "workedHours",
    daysAgo,
    selectedEmployees,
    thunkFunction: fetchWorkedHours,
  })

  return (
    <StatisticsView
      series={getWorkedHoursGraphSeries(cache[cacheKey]?.workedHours || [])}
      heading="Worked Hours"
      primaryDataKey="Hours worked"
      secondaryDataKey="Overtime hours"
      numericalViewData={getWorkedHoursNumericalView(
        cache[cacheKey]?.workedHours || []
      )}
      initialView={SECTION_VIEWS.NUMERICAL}
      onPastDateFilterSelect={(val) => {
        setDaysAgo(val)
      }}
      loading={loading || loadingWorkedHours}
    />
  )
}

export default WorkedHoursSection
