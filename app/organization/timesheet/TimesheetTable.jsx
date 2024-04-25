import React, { useCallback, useMemo } from "react"
import placeholderImage from "../../_assets/img/user.png"
import Image from "next/image"
import TooltipModal from "../../_components/AppComps/TooltipModal"
import ThreeDotIcon from "../../_assets/svgs/More"
import EyeIcon from "../../_assets/svgs/Eye"
import { groupShiftsByDayOfTheWeek } from "../../_utils/shifts"
import {
  DAYS_OF_THE_WEEK_STARTING_WITH_MONDAY,
  ONE_HOUR_IN_MILLISECONDS,
} from "../../_utils"

const ScheduleTable = ({ shiftsGroupedByEmployee }) => {
  return (
    <>
      <table className="bg-gray-50 flex-grow rounded-[px]">
        <thead className="bg-[#F1F3F9]">
          <tr>
            <TimesheetTableHeading className="py-2 px-4">
              <input type="checkbox" className="form-checkbox" />
            </TimesheetTableHeading>
            <TimesheetTableHeading>Employee</TimesheetTableHeading>
            {DAYS_OF_THE_WEEK_STARTING_WITH_MONDAY.map((day) => (
              <TimesheetTableHeading key={day}>{day}</TimesheetTableHeading>
            ))}
            <TimesheetTableHeading></TimesheetTableHeading>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(shiftsGroupedByEmployee).map((key, rowIndex) => (
            <EmployeeTableRow
              key={key}
              shifts={shiftsGroupedByEmployee[key]}
              isOdd={rowIndex % 2}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ScheduleTable

function TimesheetTableHeading({ children }) {
  return (
    <th className="max-w-[111px] capitalize py-[13px] px-2 text-[#1D2433] font-thin text-left">
      {children}
    </th>
  )
}

function TimesheetTableData({ children }) {
  return (
    <td className="py-[10px] capitalize px-2 text-sm text-[#1D2433] text-[14px]">
      {children}
    </td>
  )
}

function EmployeeTableRow({ shifts = [], isOdd }) {
  const employee = useMemo(() => {
    return shifts.find((it) => it.assignee)?.assignee
  }, [shifts])

  const shiftsGroupedByDayOfTheWeek = useMemo(() => {
    return groupShiftsByDayOfTheWeek(shifts)
  }, [shifts])

  const calculateHoursWorked = useCallback((shifts) => {
    if (!Array.isArray(shifts)) return null
    const hoursWorked =
      shifts.reduce(
        (acc, current) => current.totalTimeWorkedInMilliseconds + acc,
        0
      ) / ONE_HOUR_IN_MILLISECONDS
    return `${hoursWorked.toFixed(2)}hrs`
  }, [])

  return (
    <tr style={{ backgroundColor: isOdd ? "#F8F9FC" : "white" }}>
      <TimesheetTableData>
        <input type="checkbox" className="form-checkbox" />
      </TimesheetTableData>
      <TimesheetTableData>
        <div className="flex items-center gap-2 w-min">
          <Image
            src={employee?.profileImage?.secure_url || placeholderImage}
            alt="avatar"
            height={24}
            width={24}
            className="w-[24px] h-[24px] rounded-full"
          />
          {employee?.fullName ||
            employee?.firstName ||
            employee?.lastName ||
            employee?.email}
        </div>
      </TimesheetTableData>
      {DAYS_OF_THE_WEEK_STARTING_WITH_MONDAY.map((_, idx) => (
        <TimesheetTableData key={idx + 1}>
          {calculateHoursWorked(shiftsGroupedByDayOfTheWeek[idx + 1]) || (
            <>--</>
          )}
        </TimesheetTableData>
      ))}
      <TimesheetTableData>
        <TimesheetOptionsButton />
      </TimesheetTableData>
    </tr>
  )
}

function TimesheetOptionsButton() {
  return (
    <TooltipModal tooltipContent={<TimesheetActions/>}>
      <ThreeDotIcon />
    </TooltipModal>
  )
}
function TimesheetActions() {
  return (
    <div>
      <ul className="flex flex-col gap-2 bg-white rounded-[12px]">
        <TimesheetActionButton>
          <EyeIcon /> Review Timesheet
        </TimesheetActionButton>
        <TimesheetActionButton>
          <EyeIcon /> Approve Timesheet
        </TimesheetActionButton>
        <TimesheetActionButton>
          <EyeIcon /> Download
        </TimesheetActionButton>
      </ul>
    </div>
  )
}

function TimesheetActionButton({ children, onClick }) {
  return <button className="flex items-center whitespace-nowrap">{children}</button>
}
