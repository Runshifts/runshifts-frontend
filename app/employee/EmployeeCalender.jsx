import React, { Fragment } from "react"
import {
  CalendarShiftDay,
  RenderShiftsAndOvertimes,
} from "./CalendarComponents"

export default function ShiftCalendar({
  shifts = {},
  loading,
  overtimes = {},
  useDetailedPill,
  showOvertimes,
}) {
  const daysOfTheWeek = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className="flex gap-x-[8px] overflow-x-auto scrollbar-hide">
      {daysOfTheWeek.map((day) => (
        <Fragment key={day}>
          <CalendarShiftDay loading={loading} day={day}>
            <RenderShiftsAndOvertimes
              shifts={shifts[day] || []}
              overtimes={overtimes[day] || []}
              useDetailedPill={useDetailedPill}
              showOvertimes={showOvertimes}
              loading={loading}
            />
          </CalendarShiftDay>
        </Fragment>
      ))}
    </div>
  )
}
