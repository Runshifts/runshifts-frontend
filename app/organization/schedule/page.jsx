"use client"
import React, { useContext } from "react"
import Export from "../../_components/AppComps/Export"
// import FilterGroup from '../../_components/AppComps/FilterGroup'
import ScheduleTable from "./ScheduleTable"
import ShiftAndOvertimeRequestsProvider, {
  ShiftAndOvertimeRequestsContext,
} from "@/app/_providers/ShiftAndOvertimeRequestsProvider"
import Heading from "@/app/_components/Headings"
import ShiftRequestsSection from "./ShiftRequestsSection"
import OvertimeRequestsSection from "./OvertimeRequestsSection"

function Schedule() {
  const { shiftRequests, overtimeRequests, loadingShiftRequests } = useContext(
    ShiftAndOvertimeRequestsContext
  )

  return (
    <section className="p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading as="h1">Schedule</Heading>
        <Export />
      </div>
      <div className="mb-[24px]">
        <ScheduleTable />
      </div>
      <div className="text-[#252525] min-h-[55dvh] flex flex-col items-start gap-y-[30px] my-4 p-4 shadow-[0px 2px 8px 0px rgba(0, 0, 0, 0.12)] bg-white rounded-lg shadow-xl">
        <ShiftRequestsSection
          loading={loadingShiftRequests}
          shiftRequests={shiftRequests}
        />
        <OvertimeRequestsSection
          loading={loadingShiftRequests}
          overtimeRequests={overtimeRequests}
        />
      </div>
    </section>
  )
}

export default function ProviderWrapper() {
  return (
    <ShiftAndOvertimeRequestsProvider>
      <Schedule />
    </ShiftAndOvertimeRequestsProvider>
  )
}
