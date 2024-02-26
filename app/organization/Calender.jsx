import { useCallback, useMemo } from "react"
import { formatHourAsAmOrPm } from "../_utils"
import Pill from "../_components/AppComps/Pill"

export default function Calendar({ shifts, loading }) {
  const daysOfTheWeek = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className="flex gap-x-[8px] overflow-x-auto scrollbar-hide">
      {daysOfTheWeek.map((day) => (
        <CalendarShiftDay
          loading={loading}
          key={day}
          shifts={shifts[day] || []}
        />
      ))}
    </div>
  )
}

function CalendarDayContainer({ children, loading }) {
  return (
    <div className={`${loading ? "animate-pulse" : ""} grow shrink-0 py-2 flex items-center justify-center min-w-32 h-28 overflow-auto border-dotted border-2 border-gray-300 rounded-md  bg-white flex items-center justify-center md:min-w-38`}>
      {children}
    </div>
  )
}

function CalenderShiftItem({ shift }) {
  const { startHour, endHour } = useMemo(() => {
    return {
      startHour: new Date(shift.startTime).getHours(),
      endHour: new Date(shift.endTime).getHours(),
    }
  }, [])
  return (
    <Pill>
      <span className="w-[50%] overflow-hidden text-ellipses">
        {shift.assignee?.firstName}&nbsp;
      </span>
      {formatHourAsAmOrPm(startHour)}-{formatHourAsAmOrPm(endHour)}
    </Pill>
  )
}

function CalendarShiftDay({ shifts = [], loading }) {
  const renderShifts = useCallback(() => {
    if (shifts.length === 0)
      return <p className=" text-xs text-gray-600  rounded-full">No schedule</p>
    return (
      <ul className="w-full flex flex-col gap-y-2 items-center py-2 max-h-full overflow-auto">
        {shifts.map((shift) => (
          <CalenderShiftItem shift={shift} key={shift._id} />
        ))}
      </ul>
    )
  }, [shifts])

  return (
    <CalendarDayContainer loading={loading}>
      {loading ? (
        <p className="text-gray-300 text-sm animate-pulse">loading...</p>
      ) : (
        renderShifts()
      )}
    </CalendarDayContainer>
  )
}
