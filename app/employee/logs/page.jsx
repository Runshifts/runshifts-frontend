"use client"
import React, { useContext, useEffect, useMemo, useState } from "react"
import LogExport from "../../_components/AppComps/LogExport"
import PageSearchInput from "../../_components/AppComps/PageSearchInput"
import LogsContent from "./LogsContent"
import { NotesContext } from "../../_providers/NotesProvider"
import useFilterNotes from "../../_hooks/useFilterNotes"
import { groupNotesByShift } from "../../_utils/notes"
import DateFilter from "../../organization/tracker/DateFilter"
import Heading from "../../_components/Headings"
import { LocationFilter } from "../../_components/AppComps/FilterGroup"
import { LocationsContext } from "../../_providers/LocationsProvider"

function Logs() {
  const { locations } = useContext(LocationsContext)
  const { allNotes } = useContext(NotesContext)
  const [searchText, setSearchText] = useState("")
  const [dateFilter, setDateFilter] = useState()
  const [selectedLocation, setSelectedLocation] = useState(null)

  const filteredNotes = useFilterNotes({
    notes: allNotes,
    searchText,
    date: dateFilter,
    location: selectedLocation
  })
  console.log(locations)
  const notesGroupedByShifts = useMemo(() => {
    return groupNotesByShift(filteredNotes)
  }, [filteredNotes])

  return (
    <section className="flex flex-col gap-4 h-[80dvh] justify-start px-5 md:px-[40px]">
      <div>
        <div className="flex items-center justify-between py-3">
          <Heading as="h1">Logs</Heading>
          <LogExport />
        </div>
        <div className="flex items-center gap-2">
          <PageSearchInput
            placeholder="Search logs..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <LocationFilter
            options={locations}
            currentValue={selectedLocation}
            updateCurrentValue={(val) => {
              setSelectedLocation(val)
            }}
          />
          <DateFilter
            dateFilter={dateFilter}
            options={{ todayBtn: false, clearBtn: false }}
            updateDateFilter={(val) => setDateFilter(val)}
          />
        </div>
      </div>

      <div className="">
        <LogsContent notesGroupedByShifts={notesGroupedByShifts} />
      </div>
    </section>
  )
}

export default Logs
