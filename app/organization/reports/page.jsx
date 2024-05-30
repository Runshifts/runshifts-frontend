import React from "react"
import LogExport from "../../_components/AppComps/LogExport"
import ReportFilterGroup from "../../_components/AppComps/ReportFilterGroup"
import AttendanceSection from "./AttendanceSection"
import WorkedHoursSection from "./WorkedHoursSection"
import ShiftsPerformanceSection from "./ShiftsPerformanceSection"
import LabourCostsSection from "./LabourCostsSection"
import SchedulingSection from "./SchedulingSection"
import RightToWorDiplay from "./RightToWork"

function Reports() {
  return (
    <section className="mx-auto p-3 min-h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-[#292D32] font-semibold  md:text-2xl ">Reports</h1>
        <LogExport />
      </div>
      <ReportFilterGroup />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span">
          <AttendanceSection />
        </div>
        <div className="col-span">
          <WorkedHoursSection />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[9px] mt-4">
        <div className="col-span">
          <ShiftsPerformanceSection />
        </div>
        <div className="col-span">
          <LabourCostsSection />
        </div>
        <div className="col-span">
          <SchedulingSection />
        </div>
        <div className="col-span-1">
          <RightToWorDiplay />
        </div>
      </div>
    </section>
  )
}

export default Reports
