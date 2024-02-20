import { useCallback, useMemo, useState } from "react"
import { getFutureWeekRanges, getPastWeekRanges } from "../_utils"
const NUMBER_OF_WEEKRANGES_TO_GENERATE = 2

export default function useGetWeekRanges(startDate = new Date(Date.now()), numberOfWeeksToGenerate) {
  const [weekRanges, setWeekRanges] = useState(() => getPastWeekRanges(numberOfWeeksToGenerate || NUMBER_OF_WEEKRANGES_TO_GENERATE), startDate)
  const [currentRangeIdx, setCurrentRangeIdx] = useState(weekRanges.length - 1)

  const goToNextWeek = useCallback(() => {
    const highestDate = new Date(weekRanges[currentRangeIdx].end)
    if (highestDate.getFullYear() > new Date(Date.now).getFullYear() + 1) return
    if (currentRangeIdx === weekRanges.length - 1) {
      setWeekRanges((prev) => [
        ...prev,
        ...getFutureWeekRanges(NUMBER_OF_WEEKRANGES_TO_GENERATE, highestDate),
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
        ...getPastWeekRanges(NUMBER_OF_WEEKRANGES_TO_GENERATE, lowestDate),
        ...prev,
      ])
      setCurrentRangeIdx(NUMBER_OF_WEEKRANGES_TO_GENERATE - 1)
    } else {
      setCurrentRangeIdx((prev) => prev - 1)
    }
  }, [currentRangeIdx, weekRanges])

  return {
    weekRanges,
    goToNextWeek,
    goToPrevWeek,
    currentWeek: useMemo(
      () => weekRanges[currentRangeIdx],
      [weekRanges, currentRangeIdx]
    ),
  }
}
