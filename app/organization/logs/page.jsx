import React from "react"
import LogExport from "../../_components/AppComps/LogExport"
import TeamFilterGroup from "../../_components/AppComps/TeamFilterGroup"
import LogsContent from "./LogsContent"

function Logs() {
  return (
    <section className="mx-auto p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-[#292D32] font-semibold  md:text-2xl ">Logs</h1>
        <LogExport />
      </div>

      <TeamFilterGroup />

      <div className="">
        <LogsContent />
      </div>
    </section>
  )
}

export default Logs
