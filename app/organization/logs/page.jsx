"use client"
import React, { useContext, useEffect } from "react"
import LogExport from "../../_components/AppComps/LogExport"
import LogFilterGroup from "../../_components/AppComps/LogFilterGroup"
import LogsContent from "../../employee/logs/LogsContent"
import { NotesContext } from "../../_providers/NotesProvider"

function Logs() {
  const { notesGroupedByShifts, fetchNotes } = useContext(NotesContext)
  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])
  return (
    <section className="mx-auto p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-[#292D32] font-semibold  md:text-2xl ">Logs</h1>
        <LogExport />
      </div>
      <LogFilterGroup />
      <div className="">
        <LogsContent notesGroupedByShifts={notesGroupedByShifts} />
      </div>
    </section>
  )
}

export default Logs
