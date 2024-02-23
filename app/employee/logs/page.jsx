import React from "react"
import LogExport from "../../_components/AppComps/LogExport"
import LogsFilterGroup from "../../_components/EmployeeComps/LogsFilterGroup"
import LogsContent from "../../organization/logs/LogsContent"

function Logs() {
  return (
    <section className="mx-auto p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-[#292D32] text-2xl not-italic font-medium leading-7 ">Logs</h1>
        <LogExport />
      </div>

      <LogsFilterGroup />

      <div className="">
        <LogsContent />
      </div>
    </section>
  )
}

export default Logs
