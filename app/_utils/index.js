export const throwInvalidDateError = (date) => {
  if (!date || date.toString() === "Invalid Date")
    throw new Error("Invalid Date!")
}

export const randomIntFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getDateOrdinal = (date) => {
  const last = +String(date).slice(-2)
  if (last > 3 && last < 21) return "th"
  const remainder = last % 10
  if (remainder === 1) return "st"
  if (remainder === 2) return "nd"
  if (remainder === 3) return "rd"
  return "th"
}

export function msToHours(milliseconds) {
  return milliseconds / (1000 * 60 * 60);
}

export const getAmOrPm = (hour) => {
  return hour < 12 ? "am" : "pm"
}

export const formatHourAsAmOrPm = (hour) => {
  return `${hour % 12 || 12}${getAmOrPm(hour)}`
}

export const formatDate = (date, options = {}) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...options,
  })
}

export function formatNumberToTwoDigitsMinimum(number) {
  return number.toLocaleString(undefined, {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
}

export function msToHourMinSecond(ms) {
  const roundAndFormat = num => formatNumberToTwoDigitsMinimum(Math.round(num))
  let seconds = ms / 1000;
  let hours = parseInt(seconds / 3600);
  seconds = seconds % 3600;
  let minutes = parseInt(seconds / 60);
  seconds = seconds % 60;
  return hours ? roundAndFormat(hours) + ":" : "" + roundAndFormat(minutes) + ":" + roundAndFormat(seconds)
}


export const getPreviousMonday = (date) => {
  let prevMonday = new Date(date)
  throwInvalidDateError(prevMonday)
  if (prevMonday.getDay() === 0) prevMonday.setDate(prevMonday.getDate() - 6)
  else prevMonday.setDate(prevMonday.getDate() - prevMonday.getDay() + 1)
  prevMonday.setHours(0, 0, 0, 0)
  return prevMonday
}

export const getNextSunday = (date) => {
  const nextSunday = new Date(date)
  throwInvalidDateError(nextSunday)
  if (nextSunday.getDay() !== 0)
    nextSunday.setDate(nextSunday.getDate() + (7 - nextSunday.getDay()))
  nextSunday.setHours(0, 0, 0, 0)
  return nextSunday
}

export const getWeekThatDateFallsIn = (date) => {
  let starterDate = getPreviousMonday(date)
  throwInvalidDateError(starterDate)
  let week = {}
  while (true) {
    week[starterDate.getDay()] = new Date(starterDate)
    starterDate.setDate(starterDate.getDate() + 1)
    if (week[0]) break
  }
  return week
}

export function getPastWeekRanges(numOfWeeks, startDate) {
  if (isNaN(Number(numOfWeeks)))
    throw new Error("The first argument must be a number")
  if (numOfWeeks > 100)
    throw new Error("Maximum allowed number of weeks in one call is 100")
  if (startDate) throwInvalidDateError(new Date(startDate))
  let date = new Date(startDate)
  let numOfWeeksUsed = numOfWeeks
  let ranges = []
  while (numOfWeeksUsed > 0) {
    const weekRange = getWeekThatDateFallsIn(date)
    const range = {
      start: weekRange[1],
      end: weekRange[0],
    }
    ranges.push(range)
    numOfWeeksUsed = numOfWeeksUsed - 1
    date.setDate(date.getDate() - 7)
  }
  return ranges.reverse()
}

export function getFutureWeekRanges(numOfWeeks, startDate) {
  if (isNaN(Number(numOfWeeks)))
    throw new Error("The first argument must be a number")
  if (numOfWeeks > 100)
    throw new Error("Maximum allowed number of weeks in one call is 100")
  if (startDate) throwInvalidDateError(new Date(startDate))
  let date = new Date(startDate)
  let numOfWeeksUsed = numOfWeeks
  let ranges = []
  while (numOfWeeksUsed > 0) {
    date.setDate(date.getDate() + 7)
    const weekRange = getWeekThatDateFallsIn(date)
    const range = {
      start: weekRange[1],
      end: weekRange[0],
    }
    ranges.push(range)
    numOfWeeksUsed = numOfWeeksUsed - 1
  }
  return ranges
}
