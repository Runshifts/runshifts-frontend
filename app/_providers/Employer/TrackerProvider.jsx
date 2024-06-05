"use client"

import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import useAxios from "../../_hooks/useAxios"

export const TrackerContext = createContext({
  hasInitialized: false,
  initialize: () => {},
  loading: false,
  loadingStats: false,
  allShifts: {
    clockedIn: [],
    clockedOut: [],
    currentlyOnBreak: [],
  },
  shiftsInSelectedDate: {
    clockedIn: [],
    clockedOut: [],
    currentlyOnBreak: [],
  },
  dateFilter: new Date(),
  updateDateFilter: () => {},
})

export default function TrackerProvider({
  children,
  organizationId,
  shouldAutoInitialize,
}) {
  const fetchData = useAxios()
  const [hasInitialized, setHasInitialized] = useState(false)
  const [dateFilter, setDateFilter] = useState(() => new Date())
  const [loading, setLoading] = useState(hasInitialized === false)
  const [alreadyFetchedDates, setAlreadyFetchedDates] = useState({})
  const [allShifts, setAllShifts] = useState({
    clockedIn: [],
    clockedOut: [],
    currentlyOnBreak: [],
  })

  const filterShiftsByDateFilter = useCallback((shifts = [], dateFilter) => {
    return shifts.filter((shift) => {
      return (
        new Date(shift.startTime).toDateString() === dateFilter.toDateString()
      )
    })
  }, [])

  const shiftsInSelectedDate = useMemo(() => {
    return {
      clockedIn: filterShiftsByDateFilter(allShifts.clockedIn, dateFilter),
      clockedOut: filterShiftsByDateFilter(allShifts.clockedOut, dateFilter),
      currentlyOnBreak: filterShiftsByDateFilter(allShifts.currentlyOnBreak, dateFilter),
    }
  }, [
    filterShiftsByDateFilter,
    allShifts.clockedIn,
    allShifts.clockedOut,
    allShifts.currentlyOnBreak,
    dateFilter,
  ])

  const fetchTrackerData = useCallback(
    async (date) => {
      if (!organizationId) return
      setLoading(true)
      const res = await fetchData(`/users/${organizationId}/tracker`, "post", {
        date: new Date(date),
      })
      const removeDuplicates =
        (oldArray = []) =>
        (item, idx, arr) =>
          JSON.stringify(oldArray).includes(item._id) === false
      if (res?.statusCode === 200) {
        setAllShifts((prev) => ({
          clockedIn: [
            ...prev.clockedIn,
            ...res.shiftsClockedIn.filter(removeDuplicates(prev.clockedIn)),
          ],
          clockedOut: [
            ...prev.clockedOut,
            ...res.shiftsClockedOut.filter(removeDuplicates(prev.clockedOut)),
          ],
          currentlyOnBreak: [
            ...prev.currentlyOnBreak,
            ...[
              ...res.shiftsCurrentlyOnBreak,
            ].filter(removeDuplicates(prev.currentlyOnBreak)),
          ],
        }))
        setAlreadyFetchedDates((prev) => ({
          ...prev,
          [date.toDateString()]: true,
        }))
      }
      setHasInitialized(true)
      setLoading(false)
    },
    [organizationId, alreadyFetchedDates]
  )

  useEffect(() => {
    shouldAutoInitialize && fetchTrackerData(new Date())
  }, [shouldAutoInitialize, fetchTrackerData])

  const handleUpdateDateFilter = useCallback(
    (date) => {
      if (loading) return
      setDateFilter(date)
      if (alreadyFetchedDates[date.toDateString()]) return
      setLoading(true)
      fetchTrackerData(date)
    },
    [fetchTrackerData, alreadyFetchedDates]
  )

  return (
    <TrackerContext.Provider
      value={{
        initialize: () => fetchTrackerData(new Date()),
        hasInitialized,
        shiftsInSelectedDate,
        allShifts,
        loading,
        dateFilter,
        updateDateFilter: (value) => handleUpdateDateFilter(value),
      }}
    >
      {children}
    </TrackerContext.Provider>
  )
}
