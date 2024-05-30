import React from "react"
import { DepartmentsOrPositionsFilter, LocationFilter } from "./FilterGroup"

function ReportFilterGroup() {
  return (
    <section>
      <div className="flex items-center justify-start gap-2">
        <div className="hidden md:flex gap-2">
          <LocationFilter />
          <DepartmentsOrPositionsFilter name="Department" />
          <DepartmentsOrPositionsFilter name="Position" />
        </div>
      </div>
    </section>
  )
}

export default ReportFilterGroup
