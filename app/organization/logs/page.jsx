"use client"
import React, { useContext, useEffect, useMemo, useState } from "react"
import LogExport from "../../_components/AppComps/LogExport"
import LogsContent from "../../employee/logs/LogsContent"
import { NotesContext } from "../../_providers/NotesProvider"
import useFilterNotes from "../../_hooks/useFilterNotes"
import { groupNotesByShift } from "../../_utils/notes"
import PageSearchInput from "../../_components/AppComps/PageSearchInput"
import DateFilter from "../tracker/DateFilter"
import Heading from "../../_components/Headings"

function Logs() {
  const { fetchNotes, allNotes } = useContext(NotesContext)
  const [searchText, setSearchText] = useState("")
  const [dateFilter, setDateFilter] = useState()
  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  const filteredNotes = useFilterNotes({ notes: allNotes, searchText })
  const notesGroupedByShifts = useMemo(() => {
    return groupNotesByShift(filteredNotes)
  }, [filteredNotes])

  return (
    <section className="mx-auto p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading as="h1">Logs</Heading>
        <LogExport />
      </div>
      {/* <LogFilterGroup /> */}
      <div className="flex items-center gap-2">
        <PageSearchInput
          placeholder="Search logs..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <DateFilter
          dateFilter={dateFilter}
          updateDateFilter={(val) => setDateFilter(val)}
        />
      </div>
      <div className="">
        <LogsContent notesGroupedByShifts={notesGroupedByShifts} />
      </div>
    </section>
  )
}

export default Logs
