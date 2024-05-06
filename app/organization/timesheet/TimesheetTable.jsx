import React, { useCallback, useMemo, useState } from "react"
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
import Modal from "../../_components/AppComps/Modal"
import TimesheetReview from "./Review"

const ScheduleTable = ({ shiftsGroupedByEmployee }) => {
  return (
    <>
      <table className="bg-gray-50 flex-grow rounded-[4px]">
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
              index={rowIndex}
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

function TimesheetTableData({ children, className, style = {} }) {
  return (
    <td
      style={style}
      className={`py-[10px] capitalize px-2 text-sm text-[#1D2433] text-[14px] ${className}`}
    >
      {children}
    </td>
  )
}

function EmployeeTableRow({ shifts = [], isOdd, index }) {
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
    <tr
      style={{ backgroundColor: isOdd ? "#F8F9FC" : "white" }}
      className="relative"
    >
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
      <TimesheetTableData
        style={{ zIndex: 1000 - (index || 0) }}
        className={`sticky right-0 ${isOdd ? "bg-[#F8F9FC]" : "bg-white"}`}
      >
        <>
          <TimesheetOptionsButton employee={employee} shifts={shifts} />
        </>
      </TimesheetTableData>
    </tr>
  )
}

function TimesheetOptionsButton({ employee, shifts }) {
  return (
    <TooltipModal
      tooltipContent={<TimesheetActions employee={employee} shifts={shifts} />}
      styles={{ right: "100%", top: 0, bottom: 0 }}
    >
      <ThreeDotIcon />
    </TooltipModal>
  )
}
function TimesheetActions({ employee, shifts, index }) {
  const [showReviewModal, setShowReviewModal] = useState(false)
  return (
    <div>
      <ul className="flex flex-col gap-2 bg-white rounded-[12px] shadow-[0px_2px_8px_0px_#0000001F]">
        <TimesheetActionButton onClick={() => setShowReviewModal(true)}>
          <EyeIcon /> Review Timesheet
        </TimesheetActionButton>
        <TimesheetActionButton>
          <EyeIcon /> Approve Timesheet
        </TimesheetActionButton>
        <TimesheetActionButton>
          <EyeIcon /> Download
        </TimesheetActionButton>
      </ul>
      <Modal open={showReviewModal} onClose={() => setShowReviewModal(false)}>
        <TimesheetReview employee={employee} shifts={shifts} />
      </Modal>
    </div>
  )
}

function TimesheetActionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center whitespace-nowrap px-2 py-[6px] gap-2  hover:bg-primary-100"
    >
      {children}
    </button>
  )
}
