export const throwInvalidDateError = (date) => {
  if (date.toString() === "Invalid Date") throw new Error("Invalid Date!")
}

export const formatHourAsAmOrPm = (hour) => {
  return `${hour % 12 || 12}${hour < 12 ? "am" : "pm"}`
}

export const formatDate = (date, options = {}) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...options,
  })
}

export const getPreviousMonday = (date) => {
  let prevMonday = new Date(date)
  throwInvalidDateError(prevMonday)
  prevMonday.setDate(prevMonday.getDate() - prevMonday.getDay() + 1)
  return prevMonday
}

export const getNextSunday = (date) => {
  const nextSunday = new Date(date)
  throwInvalidDateError(nextSunday)
  nextSunday.setDate(nextSunday.getDate() + (7 - nextSunday.getDay()))
  return nextSunday
}

export const getPastWeekRanges = (numberOfWeeksToGenerate, startDate) => {
  if (isNaN(Number(numberOfWeeksToGenerate)))
    throw new Error("The first argument must be a number")
  if (numberOfWeeksToGenerate > 100)
    throw new Error("Maximum allowed number of weeks in one call is 100")
  if (startDate) throwInvalidDateError(new Date(startDate))
  const currentDate = new Date(startDate || Date.now())
  let dateMarker = currentDate.getDate() - currentDate.getDay()
  let numberOfDays = 7 * numberOfWeeksToGenerate
  let ranges = []
  while (numberOfDays > 0) {
    let newD = new Date(currentDate)
    newD.setDate(dateMarker)
    const range = {
      start: getPreviousMonday(newD),
      end: getNextSunday(newD),
    }
    const lastPushedRange = ranges[ranges.length - 1]
    if (
      !lastPushedRange ||
      lastPushedRange.start.toDateString() !== range.start.toDateString()
    )
      ranges.push(range)
    else numberOfDays += 7

    if (dateMarker <= 0) {
      if (currentDate.getMonth() === 0) {
        console.log(currentDate)
        currentDate.setFullYear(currentDate.getFullYear() - 1, 11, 28)
        dateMarker = currentDate.getDate() + currentDate.getDay()
      } else {
        currentDate.setMonth(currentDate.getMonth() - 1, 28)
        dateMarker = currentDate.getDate() - dateMarker
      }
    } else {
      dateMarker = dateMarker - 7
    }
    numberOfDays = numberOfDays - 7
  }
  return ranges.reverse()
}

export const getFutureWeekRanges = (numberOfWeeksToGenerate, startDate) => {
  if (isNaN(Number(numberOfWeeksToGenerate)))
    throw new Error("The first argument must be a number")
  if (numberOfWeeksToGenerate > 100)
    throw new Error("Maximum allowed number of weeks in one call is 100")
  if (startDate) throwInvalidDateError(new Date(startDate))
  const currentDate = new Date(startDate || Date.now())
  let dateMarker = currentDate.getDate() - currentDate.getDay()
  let numberOfDays = 7 * numberOfWeeksToGenerate
  let ranges = []
  while (numberOfDays > 0) {
    let newD = new Date(currentDate)
    newD.setDate(dateMarker)
    const range = {
      start: getPreviousMonday(newD),
      end: getNextSunday(newD),
    }
    ranges.push(range)
    if (dateMarker <= 0) {
      if (currentDate.getMonth() === 0) {
        currentDate.setFullYear(
          currentDate.getFullYear() + 1,
          11,
          currentDate.getDate() + currentDate.getDay()
        )
      } else {
        currentDate.setMonth(currentDate.getMonth() + 1)
      }
      dateMarker = currentDate.getDate() + dateMarker
    } else {
      dateMarker = dateMarker + 7
    }
    numberOfDays = numberOfDays - 7
  }
  return ranges
}
