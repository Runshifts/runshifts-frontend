"use client"
import React, { useContext, useEffect } from "react"
import LogExport from "../../_components/AppComps/LogExport"
import LogsFilterGroup from "../../_components/EmployeeComps/LogsFilterGroup"
import LogsContent from "./LogsContent"
import { NotesContext } from "../../_providers/NotesProvider"

function Logs() {
  const {notesGroupedByShifts, fetchNotes } = useContext(NotesContext)
  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  return (
    <section className="flex flex-col gap-4 h-[80dvh] justify-start px-5 md:px-[40px]">
      <div>
        <div className="flex items-center justify-between py-3">
          <h1 className="custom-h1">Logs</h1>
          <LogExport />
        </div>

        <LogsFilterGroup />
      </div>

      <div className="">
        <LogsContent notesGroupedByShifts={notesGroupedByShifts} />
      </div>
    </section>
  )
}

export default Logs
