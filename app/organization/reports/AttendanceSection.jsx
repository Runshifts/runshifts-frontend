"use client"
import { testAttendanceSeries } from "./DefaultBarChartOptions"
import StatisticsView from "./StatisticsView"
import { formatDuration } from "./StatisticsGraphicalView"

const testSeries = testAttendanceSeries
  .map((it) => ({
    absent: { x: formatDuration(it.startDate, it.endDate), y: it.absentShifts },
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
const numericalViewData = testAttendanceSeries.map((it) => ({
  heading: formatDuration(it.startDate, it.endDate),
  primary: { name: "Absent", value: it.absentShifts },
  secondary: { name: "Late", value: it.lateShifts },
}))

function AttendanceSection() {
  return (
    <StatisticsView
      series={testSeries}
      heading="Attendance"
      primaryDataKey="Absent"
      secondaryDataKey="Late"
      numericalViewData={numericalViewData}
    />
  )
}

export default AttendanceSection
