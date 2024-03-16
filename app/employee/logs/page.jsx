import React from "react"
import LogExport from "../../_components/AppComps/LogExport"
import LogsFilterGroup from "../../_components/EmployeeComps/LogsFilterGroup"
import LogsContent from "./LogsContent"
import ShareModal from './ShareModal'
function Logs() {
  return (
    <section className="mx-auto p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="custom-h1">Logs</h1>
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
