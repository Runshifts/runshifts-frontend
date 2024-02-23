import { useCallback, useMemo, useState } from "react"
import { getFutureWeekRanges, getPastWeekRanges } from "../_utils"
const NUMBER_OF_WEEKRANGES_TO_GENERATE = 50

export default function useGetWeekRanges(startDate = new Date(Date.now()), numberOfWeeksToGenerate = NUMBER_OF_WEEKRANGES_TO_GENERATE) {
  const [weekRanges, setWeekRanges] = useState(() => getPastWeekRanges(numberOfWeeksToGenerate, startDate))
  const [currentRangeIdx, setCurrentRangeIdx] = useState(weekRanges.length - 1)

  const jumpToWeek = useCallback((weekIdx) => {
    if(weekIdx >= weekRanges.length || weekIdx < 0) throw new Error("Invalid index")
    setCurrentRangeIdx(weekIdx) 
  }, [weekRanges.length])

  const goToNextWeek = useCallback(() => {
    const highestDate = new Date(weekRanges[currentRangeIdx].end)
    if (highestDate.getFullYear() > new Date(Date.now).getFullYear() + 1) return
    if (currentRangeIdx === weekRanges.length - 1) {
      setWeekRanges((prev) => [
        ...prev,
        ...getFutureWeekRanges(numberOfWeeksToGenerate, highestDate),
      ])
    }
    setCurrentRangeIdx((prev) => prev + 1)
  }, [currentRangeIdx, weekRanges])

  const goToPrevWeek = useCallback(() => {
    const lowestDate = new Date(weekRanges[currentRangeIdx].start)
    if (lowestDate.getFullYear() < new Date(Date.now()).getFullYear() - 1)
      return
    lowestDate.setDate(lowestDate.getDate() - 7)
    if (currentRangeIdx <= 0) {
      setWeekRanges((prev) => [
        ...getPastWeekRanges(numberOfWeeksToGenerate, lowestDate),
        ...prev,
      ])
      setCurrentRangeIdx(numberOfWeeksToGenerate - 1)
    } else {
      setCurrentRangeIdx((prev) => prev - 1)
    }
  }, [currentRangeIdx, weekRanges])

  return {
    weekRanges,
    goToNextWeek,
    goToPrevWeek,
    jumpToWeek,
    currentWeek: useMemo(
      () => weekRanges[currentRangeIdx],
      [weekRanges, currentRangeIdx]
    ),
  }
}
