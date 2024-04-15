"use client"
import React, { useContext, useMemo, useState } from "react"
import LogExport from "../../_components/AppComps/LogExport"
import LogsContent from "../../employee/logs/LogsContent"
import { NotesContext } from "../../_providers/NotesProvider"
import useFilterNotes from "../../_hooks/useFilterNotes"
import { groupNotesByShift } from "../../_utils/notes"
import PageSearchInput from "../../_components/AppComps/PageSearchInput"
import DateFilter from "../tracker/DateFilter"
import Heading from "../../_components/Headings"
import {
  LocationFilter,
  DepartmentsOrRolesFilter,
} from "../../_components/AppComps/FilterGroup"
import { LocationsContext } from "../../_providers/LocationsProvider"
import { DepartmentsAndRolesContext } from "../../_providers/DepartmentsAndRolesProvider"

function Logs() {
  const { locations } = useContext(LocationsContext)
  const { departments, roles } = useContext(DepartmentsAndRolesContext)
  const { allNotes } = useContext(NotesContext)
  const [searchText, setSearchText] = useState("")
  const [dateFilter, setDateFilter] = useState()
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)

  const filteredNotes = useFilterNotes({
    notes: allNotes,
    searchText,
    location: selectedLocation,
  })
  const notesGroupedByShifts = useMemo(() => {
    return groupNotesByShift(filteredNotes)
  }, [filteredNotes])
  return (
    <section className="mx-auto p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <Heading as="h1">Logs</Heading>
        <LogExport />
      </div>
      <div className="flex items-center gap-2 mb-4">
        <PageSearchInput
          placeholder="Search logs..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <LocationFilter
          options={locations}
          currentValue={selectedLocation}
          updateCurrentValue={(val) => {
            console.log(val)
            setSelectedLocation(val)
          }}
        />
        <DepartmentsOrRolesFilter
          name="Department"
          options={departments}
          currentValue={selectedDepartment}
          updateCurrentValue={(val) => {
            console.log(val)
            setSelectedDepartment(val)
          }}
        />
        <DepartmentsOrRolesFilter
          name="Position"
          options={roles}
          currentValue={selectedDepartment}
          updateCurrentValue={(val) => {
            console.log(val)
            setSelectedLocation(val)
          }}
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
