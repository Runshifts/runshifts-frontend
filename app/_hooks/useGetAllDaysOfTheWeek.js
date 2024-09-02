import { useMemo } from "react"
import { getNextSunday, getPreviousMonday } from "../_utils"

export default function useGetAllDaysOfTheWeek(
  currentWeek = { start: new Date(Date.now()), end: new Date(Date.now()) }
) {
  const allDays = useMemo(() => {
    const start = getPreviousMonday(new Date(currentWeek.start))
    const end = getNextSunday(new Date(currentWeek.start))
    const allDays = [new Date(start)]
    while (start.getTime() < end.getTime()) {
      const nextDate = new Date(allDays[allDays.length - 1])
      nextDate.setHours(nextDate.getHours() + 24)
      allDays.push(nextDate)
      start.setHours(start.getHours() + 24)
    }
    return allDays
  }, [currentWeek.start])
  return allDays
}
