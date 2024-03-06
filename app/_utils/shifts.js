

export const groupShiftsByAssignee = (shifts = []) => {
  const res = shifts.reduce((acc, current) => {
    const assigneeId = current.assignee?._id || Math.random()
    if (acc[assigneeId]) acc[assigneeId] = [...acc[assigneeId], current]
    else acc[assigneeId] = [current]
    return acc
  }, {})
  return res
}

export const groupShiftsByHoursWithDateKey = (shifts = [], dateKey) => {
  const res = shifts.reduce((acc, current) => {
    const currentHour = new Date(current[dateKey]).getHours()
    if (acc[currentHour]) acc[currentHour] = [...acc[currentHour], current]
    else acc[currentHour] = [current]
    return acc
  }, {})
  return res
}

export const groupShiftsByDayOfTheWeek = (shifts = []) => {
  return shifts.reduce((acc, curr) => {
    let currentDay = new Date(curr.startTime).getDay()
    if(currentDay === 0) currentDay = 7
    if (acc[currentDay]) acc[currentDay] = [...acc[currentDay], curr]
    else acc[currentDay] = [curr]
    return acc
  }, {})
}

export const filterShiftsByWeek = (shifts, week) => {
  return shifts.filter((shift) => {
    return (
      new Date(shift.startTime).getTime() >= week.start.getTime() &&
      (new Date(shift.startTime).getTime() <= week.end.getTime() ||
        new Date(shift.startTime).toDateString() ===
        week.end.toDateString())
    )
  })
}