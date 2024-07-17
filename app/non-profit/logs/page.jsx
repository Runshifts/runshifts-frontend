"use client"
import React, { useEffect, useMemo, useState } from "react"
import LogExport from "../../_components/AppComps/LogExport"
import LogsContent from "../../employee/logs/LogsContent"
import useFilterNotes from "../../_hooks/useFilterNotes"
import { groupNotesByShift } from "../../_utils/notes"
import PageSearchInput from "../../_components/AppComps/PageSearchInput"
import DateFilter from "../../_components/DateFilter"
import Heading from "../../_components/Headings"
import {
  LocationFilter,
  DepartmentsOrPositionsFilter,
} from "../../_components/AppComps/FilterGroup"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchNotes } from "../../_redux/thunks/notes.thunk"

function Logs() {
  const { locations, departments, positions, organization } = useSelector(
    (store) => store.organization
  )
  const { notes, hasFetchedNotes } = useSelector((store) => store.notes)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!hasFetchedNotes && organization !== null)
      dispatch(fetchNotes(organization?._id))
  }, [dispatch, hasFetchedNotes, organization])

  const [searchText, setSearchText] = useState("")
  const [dateFilter, setDateFilter] = useState()
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState(null)
  const [selectedPosition, setSelectedPosition] = useState(null)

  const filteredNotes = useFilterNotes({
    notes,
    searchText,
    location: selectedLocation,
    department: selectedDepartment,
    position: selectedPosition,
    date: dateFilter,
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
            setSelectedLocation(val)
          }}
        />
        <DepartmentsOrPositionsFilter
          name="Department"
          options={departments}
          currentValue={selectedDepartment}
          updateCurrentValue={(val) => {
            setSelectedDepartment(val)
          }}
        />
        <DepartmentsOrPositionsFilter
          name="Position"
          options={positions}
          currentValue={selectedPosition}
          updateCurrentValue={(val) => {
            setSelectedPosition(val)
          }}
        />
        <DateFilter
          dateFilter={dateFilter}
          options={{ todayBtn: false, clearBtn: false }}
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
