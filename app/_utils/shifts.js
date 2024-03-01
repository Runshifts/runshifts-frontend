

export const groupShiftsByAssignee = (shifts = []) => {
  const res = shifts.reduce((acc, current) => {
    const assigneeId = current.assignee?._id || Math.random()
    if (acc[assigneeId]) acc[assigneeId] = [...acc[assigneeId], current]
    else acc[assigneeId] = [current]
    return acc
  }, {})
  return res
}

export const groupShiftsByHours = (shifts = []) => {
  const res = shifts.reduce((acc, current) => {
    const currentHour = new Date(current.startTime).getHours()
    if (acc[currentHour]) acc[currentHour] = [...acc[currentHour], current]
    else acc[currentHour] = [current]
    return acc
  }, {})
  return res
}

export const groupShiftsByDayOfTheWeek = (shifts = []) => {
  return shifts.reduce((acc, curr) => {
    const currentDay = new Date(curr.startTime).getDay()
    if (acc[currentDay]) acc[currentDay] = [...acc[currentDay], curr]
    else acc[currentDay] = [curr]
    return acc
  }, {})
}