import React, { Fragment } from "react"
import { useCallback, useMemo } from "react"
import { daysOfTheWeek, formatHourAsAmOrPm } from "../_utils"
import Pill from "../_components/AppComps/Pill"

export default function Calendar({ shifts = {}, loading }) {
  const daysOfTheWeek = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div className="flex gap-x-[8px] overflow-x-auto scrollbar-hide">
      {daysOfTheWeek.map((day) => (
        <Fragment key={day}>
          <CalendarShiftDay
            loading={loading}
            day={day}
            shifts={shifts[day] || []}
          />
        </Fragment>
      ))}
    </div>
  )
}

function CalenderShiftItem({ shift, isPending }) {
  const { startHour, endHour } = useMemo(() => {
    return {
      startHour: new Date(shift.startTime).getHours(),
      endHour: new Date(shift.endTime).getHours(),
    }
  }, [shift?.startTime, shift?.endTime])
  return (
    <Pill
      style={{
        backgroundColor: isPending
          ? "#D7D3D1"
          : shift.assignee?.color || "#FFC6C6",
      }}
    >
      <span>
        <span className="w-[50%] overflow-hidden text-ellipses">
          {shift.assignee?.firstName}&nbsp;
        </span>
        {formatHourAsAmOrPm(startHour)}-{formatHourAsAmOrPm(endHour)}
      </span>
      {isPending && (
        <span className="text-[#303030] text-[8px] leading-normal block text-center">
          Pending
        </span>
      )}
    </Pill>
  )
}

function CalendarDayContainer({ children, loading }) {
  return (
    <div
      className={`${
        loading ? "animate-pulse" : ""
      } grow shrink-0 py-2 flex items-center justify-center min-w-32 h-28 overflow-auto border-dotted border-2 border-[#C7C7C7] rounded-md  bg-white flex items-center justify-center md:min-w-38`}
    >
      {children}
    </div>
  )
}

function CalendarShiftDay({ shifts = [], loading, day }) {
  const renderShifts = useCallback(() => {
    if (shifts.length === 0)
      return <p className=" text-xs text-[#303030] rounded-full">No shifts</p>
    return (
      <ul className="w-full flex flex-col gap-y-2 items-center py-2 max-h-full overflow-auto">
        {shifts.map((shift) => (
          <CalenderShiftItem
            isPending={
              shift.isAccepted === false && shift.isDroppedOff === false
            }
            shift={shift}
            key={shift._id}
          />
        ))}
      </ul>
    )
  }, [shifts])

  return (
    <CalendarDayContainer loading={loading}>
      <div className="text-center flex flex-col gap-[10px]">
        <h3 className="w-full text-[14px] font-[400] leading-[140%] text-center text-[#303030]">
          {daysOfTheWeek[day]}
        </h3>
        {loading ? (
          <p className="text-gray-300 text-sm animate-pulse">loading...</p>
        ) : (
          renderShifts()
        )}
      </div>
    </CalendarDayContainer>
  )
}