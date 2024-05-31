"use client"
import React, { useContext } from "react"
import LogExport from "../../_components/AppComps/LogExport"
import ReportFilterGroup from "../../_components/AppComps/ReportFilterGroup"
import AttendanceSection from "./AttendanceSection"
import WorkedHoursSection from "./WorkedHoursSection"
import ShiftsPerformanceSection from "./ShiftsPerformanceSection"
import LabourCostsSection from "./LabourCostsSection"
import SchedulingSection from "./SchedulingSection"
import RightToWorDiplay from "./RightToWork"
import Heading from "../../_components/Headings"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import { DepartmentsAndPositionsContext } from "../../_providers/DepartmentsAndPositionsProvider"
import { LocationsContext } from "../../_providers/LocationsProvider"
import useHandleMultipleEmployeesSelection from "../../_hooks/useHandleMultipleEmployeesSelection"

function Reports() {
  const { employees } = useContext(OrganizationContext)
  const { locations } = useContext(LocationsContext)
  const { departments, positions } = useContext(DepartmentsAndPositionsContext)
  const { selectedEmployees, handleRemoveEmployee, handleSelectEmployee } =
    useHandleMultipleEmployeesSelection({})

  return (
    <section className="mx-auto p-3 md:p-6 min-h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading as="h1">Reports</Heading>
        <LogExport />
      </div>
      <ReportFilterGroup
        employees={employees}
        departments={departments}
        positions={positions}
        locations={locations}
        onEmployeeSelect={handleSelectEmployee}
        onEmployeeRemove={handleRemoveEmployee}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="col-span">
          <AttendanceSection selectedEmployees={selectedEmployees} />
        </div>
        <div className="col-span">
          <WorkedHoursSection selectedEmployees={selectedEmployees} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[9px] mt-4">
        <div className="col-span">
          <ShiftsPerformanceSection selectedEmployees={selectedEmployees} />
        </div>
        <div className="col-span">
          <LabourCostsSection selectedEmployees={selectedEmployees} />
        </div>
        <div className="col-span">
          <SchedulingSection selectedEmployees={selectedEmployees} />
        </div>
        <div className="col-span-1">
          <RightToWorDiplay selectedEmployees={selectedEmployees} />
        </div>
      </div>
    </section>
  )
}

export default Reports
