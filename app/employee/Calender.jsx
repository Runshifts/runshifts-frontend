import React from "react";
import { useCallback, useMemo } from "react"
import { formatHourAsAmOrPm } from "../_utils"
import Pill from "../_components/AppComps/Pill"


export default function Calendar({ shifts = {}, loading }) {
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
      } grow shrink-0 py-2 flex items-center justify-center min-w-32 h-28 overflow-auto border-dotted border-2 border-gray-300 rounded-md  bg-white flex items-center justify-center md:min-w-38`}
    >
      {children}
    </div>
  )
}

function CalendarShiftDay({ shifts = [], loading }) {
  const renderShifts = useCallback(() => {
    if (shifts.length === 0)
      return <p className=" text-xs text-gray-600  rounded-full">No schedule</p>
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
      {loading ? (
        <p className="text-gray-300 text-sm animate-pulse">loading...</p>
      ) : (
        renderShifts()
      )}
    </CalendarDayContainer>
  )
}


function CalendarScroll() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4">
      <h1 className="font-semibold text-lg text-[#292D32] mx-3 py-2">
        Calendar
      </h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Monday</p>
          <p className=" text-xs text-gray-600 bg-red-200 rounded-full">
             8am-2pm
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Tuesday</p>
          <p className=" text-xs text-gray-600 text-center bg-red-200 rounded-full">
             8am-2pm
          </p>
          <p className=" text-xs text-white my-1 p-1 bg-[#DE350B] rounded-full">
             2:30pm-9pm
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Wednesday</p>
         <p className=" text-xs text-gray-600 text-center bg-red-200 rounded-full">
             8am-2pm
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Thursday</p>
          <p className=" text-xs text-center text-gray-600 rounded-full">
             No shifts
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Friday</p>
         <p className=" text-xs text-gray-600 text-center bg-red-200 rounded-full">
             8am-2pm
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Saturday</p>
         <p className=" text-xs text-gray-600 text-center bg-red-200 rounded-full">
             8am-2pm
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Sunday</p>
         <p className=" text-xs text-gray-600 text-center bg-red-200 rounded-full">
             8am-2pm
          </p>
          </div>       
        </div>
      </div>
    </div>
  );
}

// export default CalendarScroll;
