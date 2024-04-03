"use client"
import React, { useContext, useEffect } from "react"
import LogExport from "../../_components/AppComps/LogExport"
import LogsFilterGroup from "../../_components/EmployeeComps/LogsFilterGroup"
import LogsContent from "./LogsContent"
import ShareModal from "./ShareModal"
import { NotesContext } from "../../_providers/NotesProvider"

function Logs() {
  const { fetchNotes } = useContext(NotesContext)

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

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
