import { useCallback, useMemo } from "react"
import {
  DAYS_OF_THE_WEEK_STARTING_WITH_MONDAY,
  ONE_HOUR_IN_MILLISECONDS,
} from "../../_utils"
import { CalendarShiftDay } from "../../_components/StaffDashboardComponents/CalendarComponents"

export default function EmployeeTimeSheet({ shiftsGroupedByDate }) {
  const calculateShiftHoursWorked = useCallback((shifts) => {
    if (!Array.isArray(shifts)) return null
    const hoursWorked =
      shifts.length === 0
        ? null
        : (
            shifts.reduce((acc, current) => {
              return current.totalTimeWorkedInMilliseconds + acc
            }, 0) / ONE_HOUR_IN_MILLISECONDS
          ).toFixed(2)
    return hoursWorked
  }, [])
  const calculateOvertimeHoursWorked = useCallback((shifts) => {
    if (!Array.isArray(shifts)) return null
    const hoursWorked =
      shifts.length === 0
        ? null
        : (
            shifts.reduce((acc, current) => {
              return current.totalTimeWorkedInMilliseconds + acc
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
                    (shiftsGroupedByDate[idx + 1] || []).filter(
                      (it) => !it.isOvertime
                    )
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
                    (shiftsGroupedByDate[idx + 1] || []).filter(
                      (it) => it.isOvertime === true
                    )
                  )}
                  shifts={(shiftsGroupedByDate[idx + 1] || []).filter(
                    (it) => it.isOvertime === true
                  )}
                  isOvertime={true}
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
  const notStartedShift = useMemo(() => {
    return shifts.find(
      (it) =>
        new Date(it.startTime).getTime() > Date.now() &&
        new Date(it.endTime).getTime() > Date.now() &&
        !it.endedAt
    )
  }, [shifts])
  const ongoingShift = useMemo(() => {
    return shifts.find(
      (it) =>
        new Date(it.startTime).getTime() < Date.now() &&
        new Date(it.endTime).getTime() > Date.now() &&
        !it.endedAt
    )
  }, [shifts])
  return (
    <div
      className={`${
        isOvertime ? "bg-red-300" : "bg-primary-200"
      } h-[15px] rounded-[50px] w-fit p-[4px] mx-auto flex items-center justify-center`}
    >
      {!numberOfHours &&
      (notStartedShift === undefined || ongoingShift === undefined)
        ? "-"
        : `${numberOfHours} hrs`}
      {ongoingShift && "Ongoing"}
    </div>
  )
}
