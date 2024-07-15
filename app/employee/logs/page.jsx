"use client"
import React, { useContext, useEffect, useMemo, useState } from "react"
import LogExport from "../../_components/AppComps/LogExport"
import PageSearchInput from "../../_components/AppComps/PageSearchInput"
import LogsContent from "./LogsContent"
import useFilterNotes from "../../_hooks/useFilterNotes"
import { groupNotesByShift } from "../../_utils/notes"
import DateFilter from "../../organization/tracker/DateFilter"
import Heading from "../../_components/Headings"
import { LocationFilter } from "../../_components/AppComps/FilterGroup"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchNotes } from "../../_redux/thunks/notes.thunk"

function Logs() {
  const { organization } = useSelector((store) => store.organization)
  const dispatch = useDispatch()
  const { hasFetchedNotes } = useSelector((store) => store.notes)
  useEffect(() => {
    if (!hasFetchedNotes && organization !== null)
      dispatch(fetchNotes(organization?._id))
  }, [dispatch, hasFetchedNotes, organization])

  const { locations } = useSelector((store) => store.organization)
  const { notes } = useSelector((store) => store.notes)
  const [searchText, setSearchText] = useState("")
  const [dateFilter, setDateFilter] = useState()
  const [selectedLocation, setSelectedLocation] = useState(null)

  const filteredNotes = useFilterNotes({
    notes,
    searchText,
    date: dateFilter,
    location: selectedLocation,
  })
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
