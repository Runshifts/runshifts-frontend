"use client"

import { createContext, useCallback, useEffect, useState } from "react"
import useAxios from "../_hooks/useAxios"
import NOTES_URLS from "../_urls/notesURLS"

export const NotesContext = createContext({
  allNotes: [],
  notesGroupedByShifts: {},
  fetchNotes: () => {},
})

export default function NotesProvider({ children, organizationId }) {
  const fetchData = useAxios()
  const [loadingNotes, setLoadingNotes] = useState(true)
  const [hasFetchedNotes, setHasFetchedNotes] = useState(false)
  const [allNotes, setAllNotes] = useState([])

  const fetchNotes = useCallback(async () => {
    if (!organizationId || hasFetchedNotes) return
    setLoadingNotes(true)
    const res = await fetchData(NOTES_URLS.getNotes(organizationId), "get")
    console.log(res)
    if (res.statusCode === 200) {
      setAllNotes(res.results)
      setHasFetchedNotes(true)
    }
    setLoadingNotes(false)
  }, [organizationId, hasFetchedNotes])

  return (
    <NotesContext.Provider value={{ allNotes, fetchNotes }}>
      {children}
    </NotesContext.Provider>
  )
}
