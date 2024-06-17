export const ONE_HOUR_IN_MILLISECONDS = 3600000
export const DAYS_OF_THE_WEEK_STARTING_WITH_MONDAY = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
]
export const checkIsValidDateString = (dateString) => {
  return new Date(dateString).toString() === "Invalid Date" ? false : true
}

export const throwInvalidDateError = (date) => {
  if (
    !date ||
    (date && date.toString() === "Invalid Date") ||
    typeof date.getTime !== "function"
  )
    throw new Error("Invalid Date!")
}

export const daysOfTheWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
}
export const isDateInThePast = (date) => {
  throwInvalidDateError(date)
  return date.getTime() <= new Date().getTime()
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
  return milliseconds / (1000 * 60 * 60)
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
    useGrouping: false,
  })
}

export function msToMinSecond(ms) {
  const roundAndFormat = (num) =>
    formatNumberToTwoDigitsMinimum(Math.round(num))
  let seconds = ms / 1000
  let hours = parseInt(seconds / 3600)
  seconds = seconds % 3600
  let minutes = parseInt(seconds / 60)
  seconds = parseInt(seconds % 60)
  return roundAndFormat(minutes) + ":" + roundAndFormat(seconds)
}

export function msToHourMinSecond(ms) {
  const roundAndFormat = (num) =>
    formatNumberToTwoDigitsMinimum(Math.round(num))
  let seconds = ms / 1000
  let hours = parseInt(seconds / 3600)
  seconds = seconds % 3600
  let minutes = parseInt(seconds / 60)
  seconds = seconds % 60
  return roundAndFormat(hours) + ":" + roundAndFormat(minutes) 
    //+ ":" + roundAndFormat(seconds)
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

export const getPastNumOfDays = (num) => {
  const today = new Date(Date.now())
  if (!num) return today
  today.setDate(today.getDate() - num)
  return today
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

export function getUserBasePathForDashboard(accountType) {
  let path
  if (accountType === "employer") path = "/organization"
  else if (accountType === "employee") path = "/employee"
  else if (accountType === "director") path = "/non-profit"
  else if (accountType === "volunteer") path = "/volunteer"
  else if (accountType === "admin") path = "/admin"
  console.log(path)
  return path
}

export function mergeArrays(arr1, arr2, uniqueIdentifier) {
  const combinedArray = arr1.concat(arr2)
  const uniqueIds = {}
  const mergedArray = combinedArray.filter((doc) => {
    const id = doc[uniqueIdentifier]
    if (!uniqueIds[id]) {
      uniqueIds[id] = true
      return true
    }
    return false
  })

  return mergedArray
}

export function timeAgo(date) {
  const now = new Date()
  const diff = now - date

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 1) {
    return `${date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })} ${date.toLocaleTimeString("en-US", {
      hour12: !false,
      minute: "numeric",
      hour: "numeric",
    })}`
  } else if (days === 1) {
    return "Yesterday"
  } else if (hours > 0) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`
  } else if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`
  } else if (seconds > 0) {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`
  } else return "Just now"
}

export function isWithinDay(mainDate, dateToCheck) {
  throwInvalidDateError(mainDate)
  throwInvalidDateError(dateToCheck)

  const year1 = mainDate.getFullYear()
  const month1 = mainDate.getMonth()
  const day1 = mainDate.getDate()

  const year2 = dateToCheck.getFullYear()
  const month2 = dateToCheck.getMonth()
  const day2 = dateToCheck.getDate()

  return year1 === year2 && month1 === month2 && day1 === day2
}
