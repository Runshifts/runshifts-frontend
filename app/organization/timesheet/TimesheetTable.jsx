import React, { useMemo } from "react"
import Avatar from "../../../public/dashboardImgs/timesheet.svg"
import Image from "next/image"
import TooltipModal from "../../_components/AppComps/TooltipModal"
import MoreSvg from "../../_assets/svgs/More"

const ScheduleTable = ({ shiftsGroupedByEmployee }) => {
  const groupedShifts = useMemo(
    () => Object.values(shiftsGroupedByEmployee),
    [shiftsGroupedByEmployee]
  )
  const employeeNames = [
    "Charlse Jenkings",
    "Otto Chris",
    "Ariana Woods",
    "Bernard Oslo",
  ]

  return (
    <>
      <table className="bg-gray-50 flex-grow rounded-[px] overflow-hidden  shadow-[0px_2px_8px_0px_#0000001F]">
        <thead className="bg-[#F1F3F9]">
          <tr>
            <TimesheetTableHeading className="py-2 px-4">
              <input type="checkbox" className="form-checkbox" />
            </TimesheetTableHeading>
            <TimesheetTableHeading>Employee</TimesheetTableHeading>
            <TimesheetTableHeading>Monday</TimesheetTableHeading>
            <TimesheetTableHeading>Tuesday</TimesheetTableHeading>
            <TimesheetTableHeading>Wednesday</TimesheetTableHeading>
            <TimesheetTableHeading>Thursday</TimesheetTableHeading>
            <TimesheetTableHeading>Friday</TimesheetTableHeading>
            <TimesheetTableHeading>Saturday</TimesheetTableHeading>
            <TimesheetTableHeading>Sunday</TimesheetTableHeading>
            <TimesheetTableHeading></TimesheetTableHeading>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(shiftsGroupedByEmployee).map((key, rowIndex) => (
            <tr
              key={rowIndex}
              style={{ backgroundColor: rowIndex % 2 ? "#F8F9FC" : "white" }}
            >
              <TimesheetTableData>
                <input type="checkbox" className="form-checkbox" />
              </TimesheetTableData>
              <TimesheetTableData>
                <div className="flex items-center gap-2 w-min">
                  <Image
                    src={Avatar}
                    alt="avatar"
                    height={24}
                    width={24}
                    className="w-[24px] h-[24px] rounded-full"
                  />
                  {"employee"}
                </div>
              </TimesheetTableData>
              {shiftsGroupedByEmployee[key].map((shift) => (
                <TimesheetTableData key={shift._id}>5.4hrs</TimesheetTableData>
              ))}
              <TimesheetTableData>
                {/* <Link href='/timesheetReview'> */}
                {/* <MoreSvg /> */}
                {/* <Link>            */}
                <TooltipModal tooltipContent={<>Hi</>}>
                  <MoreSvg />
                </TooltipModal>
              </TimesheetTableData>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ScheduleTable

function TimesheetTableHeading({ children }) {
  return (
    <th className="max-w-[111px] py-[13px] px-2 text-[#1D2433] font-thin text-left">
      {children}
    </th>
  )
}

function TimesheetTableData({ children }) {
  return (
    <td className="py-[10px] px-2 text-sm text-[#1D2433] text-[14px]">
      {children}
    </td>
  )
}
