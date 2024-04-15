import { useMemo } from "react"
import { isWithinDay } from "../_utils/index"

export default function useFilterNotes({
  notes = [],
  location,
  date,
  isShared,
  searchText = "",
}) {
  const filteredNotes = useMemo(() => {
    let results = [...notes]
    if (date)
      results = results.filter((note) =>
        isWithinDay(new Date(date), new Date(note.createdAt))
      )
    if (location)
      results = results.filter(
        (note) =>
          note.shift?.location?._id === location._id ||
          note.shift?.location?._id === location
      )
    if (searchText)
      results = results.filter((note) =>
        note.details.toLowerCase().includes(searchText.toLowerCase())
      )
    return results
  }, [notes, searchText, location, date])

  return filteredNotes
}
