import { useMemo } from "react"
import { formatHourAsAmOrPm } from "../_utils"
import Pill from "../_components/AppComps/Pill"

export default function Calendar({ shifts }) {
  const daysOfTheWeek = [0, 1, 2, 3, 4, 5, 6]
  return (
    <div className="flex gap-x-[8px] overflow-x-auto scrollbar-hide">
      {daysOfTheWeek.map((day) => (
        <CalendarShiftDay key={day} shifts={shifts[day] || []} />
      ))}
    </div>
  )
}

function CalendarDayContainer({ children }) {
  return (
    <div className="py-2 flex items-center justify-center min-w-32 h-28 overflow-auto border-dotted border-2 border-gray-300 rounded-md  bg-white flex items-center justify-center md:min-w-38">
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

function CalendarShiftDay({ shifts = [] }) {
  return (
    <CalendarDayContainer>
      {shifts.length === 0 ? (
        <p className=" text-xs text-gray-600  rounded-full">No schedule</p>
      ) : (
        <ul className="w-full flex flex-col gap-y-2 items-center py-2 max-h-full overflow-auto">
          {shifts.map((shift) => (
            <CalenderShiftItem shift={shift} key={shift._id} />
          ))}
        </ul>
      )}
    </CalendarDayContainer>
  )
}
