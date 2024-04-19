import { useCallback, useMemo } from "react"
import Pill from "../../_components/AppComps/Pill"
import {
  DAYS_OF_THE_WEEK_STARTING_WITH_MONDAY,
  ONE_HOUR_IN_MILLISECONDS,
} from "../../_utils"
import { CalendarShiftDay } from "../CalendarComponents"

export default function EmployeeTimeSheet({ shiftsGroupedByDate }) {
  const calculateShiftHoursWorked = useCallback((shifts) => {
    if (!Array.isArray(shifts)) return null
    const hoursWorked = (
      shifts.reduce((acc, current) => {
        return !current.isOvertime && current.startedAt
          ? new Date(current.endedAt || current.endTime).getTime() -
              new Date(current.startedAt).getTime() +
              acc
          : acc + 0
      }, 0) / ONE_HOUR_IN_MILLISECONDS
    ).toFixed(2)
    return hoursWorked
  }, [])
  const calculateOvertimeHoursWorked = useCallback((shifts) => {
    if (!Array.isArray(shifts)) return null
    const hoursWorked = (
      shifts.reduce((acc, current) => {
        return current.isOvertime && current.startedAt
          ? new Date(current.endedAt || current.endTime).getTime() -
              new Date(current.startedAt).getTime() +
              acc
          : acc + 0
      }, 0) / ONE_HOUR_IN_MILLISECONDS
    ).toFixed(2)
    return hoursWorked
  }, [])
  return (
    <>
      <ol className="list-none flex items-stretch gap-2">
        {DAYS_OF_THE_WEEK_STARTING_WITH_MONDAY.map((day, idx) => (
          <CalendarShiftDay key={day} day={idx + 1}>
            <div className="flex flex-col items-center text-center text-[10px] leading-[20px] gap-[10px]">
              <span>
                <h6>Hours worked</h6>
                <TimesheetElement
                  numberOfHours={calculateShiftHoursWorked(
                    shiftsGroupedByDate[idx + 1]
                  )}
                  shifts={(shiftsGroupedByDate[idx + 1] || []).filter(
                    (it) => !it.isOvertime
                  )}
                  isOvertime={false}
                />
              </span>
              <span>
                <h6>Overtime</h6>
                <TimesheetElement
                  numberOfHours={calculateOvertimeHoursWorked(
                    shiftsGroupedByDate[idx + 1]
                  )}
                  shifts={(shiftsGroupedByDate[idx + 1] || []).filter(
                    (it) => it.isOvertime
                  )}
                  isOvertime={false}
                />
              </span>
            </div>
          </CalendarShiftDay>
        ))}
      </ol>
    </>
  )
}

function TimesheetElement({ numberOfHours, shifts, isOvertime }) {
  const hasHours = useMemo(() => {
    if (shifts.length > 0 && numberOfHours === 0) return false
  }, [numberOfHours, shifts])
  const notStartedShift = useMemo(() => {
    return shifts.find(
      (it) =>
        new Date(it.startTime).getTime() > Date.now() &&
        new Date(it.endTime).getTime() > Date.now() &&
        !it.endedAt
    )
  }, [])
  const ongoingShift = useMemo(() => {
    return shifts.find(
      (it) =>
        new Date(it.startTime).getTime() < Date.now() &&
        new Date(it.endTime).getTime() > Date.now() &&
        !it.endedAt
    )
  }, [shifts])
  const useRedBg = useMemo(
    () =>
      (isOvertime && notStartedShift !== undefined) ||
      shifts.length === 0 ||
      !hasHours ||
      isOvertime,
    [isOvertime, notStartedShift, hasHours]
  )
  return (
    <div
      className={`${
        useRedBg ? "bg-red-300" : "bg-primary-200"
      } h-[15px] rounded-[50px] flex items-center justify-center`}
    >
      {!numberOfHours &&
      (notStartedShift === undefined || ongoingShift === undefined)
        ? "-"
        : `${numberOfHours} hrs`}
      {ongoingShift && "Ongoing"}
    </div>
  )
}
// function ShiftsCalenderScroll() {
//   return (
//     <div className=" p-4">
//       <div className="flex overflow-x-auto scrollbar-hide">
//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Monday
//             </p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">9 hours</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">30 minutes</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Tuesday
//             </p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">9 hours</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">30 minutes</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Wednesday
//             </p>
//              <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">9 hours</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">30 minutes</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Thursday
//             </p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#E5F7DD] rounded-full w-fit">Ongoing</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">30 minutes</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Friday
//             </p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#E5F7DD] rounded-full w-fit px-2 py-1">-</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit px-2 py-1">-</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Saturday
//             </p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#E5F7DD] rounded-full w-fit px-2 py-1">-</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit px-2 py-1">-</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-gray-600">Sunday</p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#E5F7DD] rounded-full w-fit px-2 py-1">-</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit px-2 py-1">-</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShiftsCalenderScroll;
