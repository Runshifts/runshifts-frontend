"use client"
import DownChevron from "../../_assets/svgs/DownChevron"
import { testAttendanceSeries } from "./DefaultChartOptions"
import CardDropdownSelect, { PastDateDurationSelect, SectionViewSelect } from "./Dropdown"
import StatisticsGraphicalView, {
  formatDuration,
} from "./StatisticsGraphicalView"

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
function AttendanceSection() {
  return (
    <div>
      <div className="w-full bg-white rounded-xl shadow-xl p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[12px] leading-[16px] uppercase text-[rgba(38, 45, 51, 1)]">
            Attendance
          </h2>
          <PastDateDurationSelect onSelect={() => {}} />
        </div>
        <div className="flex overflow-auto">
          <StatisticsGraphicalView series={testSeries} />
        </div>
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex gap-3 ">
            <div className="flex items-center gap-1">
              <div className="rounded-full h-2 w-2 bg-[#42526E] "></div>
              <p>Absent</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="rounded-full h-2 w-2 bg-[#449522] "></div>
              <p>Late</p>
            </div>
          </div>
          <SectionViewSelect />
        </div>
      </div>
    </div>
  )
}

export default AttendanceSection
