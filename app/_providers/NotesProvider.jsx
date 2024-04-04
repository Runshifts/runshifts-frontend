"use client"

import { createContext, useCallback, useMemo, useState } from "react"
import useAxios from "../_hooks/useAxios"
import NOTES_URLS from "../_urls/notesURLS"
import { mergeArrays } from "../_utils"
import { groupNotesByShift } from "../_utils/notes"

export const NotesContext = createContext({
  allNotes: [],
  notesGroupedByShifts: {},
  fetchNotes: () => {},
  updateAllNotes: () => {},
  hasFetchedNotes: false,
  loadingNotes: false,
})

export default function NotesProvider({ children, organizationId }) {
  const fetchData = useAxios()
  const [loadingNotes, setLoadingNotes] = useState(true)
  const [hasFetchedNotes, setHasFetchedNotes] = useState(false)
  const [allNotes, setAllNotes] = useState([])

  const notesGroupedByShifts = useMemo(() => {
    return groupNotesByShift(allNotes)
  }, [allNotes])

  const fetchNotes = useCallback(async () => {
    if (!organizationId || hasFetchedNotes) return
    setLoadingNotes(true)
    const res = await fetchData(NOTES_URLS.getNotes(organizationId), "get")
    if (res.statusCode === 200) {
      setAllNotes(res.results)
      setHasFetchedNotes(true)
    }
    setLoadingNotes(false)
  }, [organizationId, hasFetchedNotes])

  const updateAllNotes = useCallback((notes = []) => {
    setAllNotes((prev) => mergeArrays(notes, prev, "_id"))
  }, [])
  return (
    <NotesContext.Provider
      value={{
        allNotes,
        fetchNotes,
        updateAllNotes,
        hasFetchedNotes,
        loadingNotes,
        notesGroupedByShifts,
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}
