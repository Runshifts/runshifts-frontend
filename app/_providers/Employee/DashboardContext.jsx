"use client"
import { createContext, useCallback, useMemo, useState } from "react"
import useGetWeekRanges from "../../_hooks/useGetWeekRanges"
import useManageFetchShiftsAndOvertimes from "../../_hooks/useManageFetchShiftsAndOvertimes"
import { filterShiftsByWeek } from "../../_utils/shifts"
import { useRouter } from "next/navigation"

export const EmployeeDashboardContext = createContext({
  allShifts: [],
  fetchShifts: () => {},
  goToNextWeek: () => {},
  goToPrevWeek: () => {},
  currentWeek: {},
  loadingShifts: () => {},
  fetchingShiftsError: () => {},
  shiftsInCurrentWeek: [],
  weekRanges: () => {},
  updateAllShifts: () => {},
  handleUpdateSingleShift: () => {},
})

export default function EmployeeDashboardProvider({ children }) {
  const { goToNextWeek, currentWeek, goToPrevWeek, weekRanges, jumpToWeek } =
    useGetWeekRanges(new Date(Date.now()), 7)
  const [allShifts, setAllShifts] = useState([])

  const listOfShiftsInCurrentWeek = useMemo(() => {
    return filterShiftsByWeek(allShifts, currentWeek)
  }, [allShifts, currentWeek])

  const updateAllShifts = useCallback((newShifts = []) => {
    setAllShifts((prev) => {
      return [
        ...prev,
        ...newShifts.filter(
          (shift) => JSON.stringify(prev).includes(shift._id) === false
        ),
      ]
    })
  }, [])

  const { fetchShifts, fetchingShiftsError, loadingShifts } =
    useManageFetchShiftsAndOvertimes({
      updateAllShifts,
      currentWeek,
    })

  const handleUpdateSingleShift = useCallback((update) => {
    setAllShifts((prev) => {
      return prev.map((shift) => (shift._id !== update._id ? shift : update))
    })
  }, [])

  return (
    <EmployeeDashboardContext.Provider
      value={{
        allShifts,
        fetchShifts,
        goToNextWeek,
        goToPrevWeek,
        currentWeek,
        loadingShifts,
        fetchingShiftsError,
        shiftsInCurrentWeek: listOfShiftsInCurrentWeek,
        weekRanges,
        jumpToWeek,
        updateAllShifts,
        handleUpdateSingleShift,
      }}
    >
      {children}
    </EmployeeDashboardContext.Provider>
  )
}
