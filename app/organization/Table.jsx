import React, { useMemo } from "react"
import Pill from "../_components/AppComps/Pill"
import { formatHourAsAmOrPm } from "../_utils"

const ScrollingTimeTable = ({ groupedShifts }) => {
  const hours = Array.from({ length: 24 }, (_, index) => index) // Generate hours from midnight to 11pm
  const assigneesAndShifts = useMemo(() => {
    return Object.values(groupedShifts)
  }, [groupedShifts])
  return (
    <div className="rounded-lg overflow-x-auto">
      <table className="min-w-full bg-gray-[#E4E4E4] rounded-lg p-2">
        <thead>
          <tr>
            <th className="text-center text-[#42526E] font-bold py-2 sticky left-0 bg-[#E4E4E4] border-b-solid border-b border-b-[#757575] border-t-none border-l-none border-r-solid border-r border-r-[#757575]">
              Name
            </th>
            {hours.map((hour, index) => (
              <TableHeading isLastItem={index === hours.length - 1} key={index}>
                {formatHourAsAmOrPm(hour)}
              </TableHeading>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {assigneesAndShifts.map((current, idx) => (
              <td key={current.assignee._id}  className="sticky left-0 bg-[#E4E4E4] border-t-solid border-t border-t-[#757575] border-r-solid border-r border-r-[#757575]">
                <Pill className="font-bold text-[#42526E]">
                  {current.assignee?.firstName}
                </Pill>
              </td>
            ))}
            {hours.map((hour, index) => (
              <TableData isLastItem={index === hours.length - 1} key={index}>
                {assigneesAndShifts.map(
                  (current) =>
                    current.shifts[hour]?.map((item) => (
                      <Pill key={item._id} colorClassName="bg-green-400" className="w-2"></Pill>
                    ))
                )}
              </TableData>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ScrollingTimeTable

function TableHeading({ children, isLastItem }) {
  return (
    <th
      className={`text-[#42526E] font-bold px-4 py-2 border px-4 py-2 border-b-solid border-b border-b-[#757575]  bg-[#E4E4E4] border-x-solid border-x border-x-[#757575]`}
      style={{ borderRight: isLastItem && "none" }}
    >
      {children}
    </th>
  )
}

function TableData({ children, isLastItem }) {
  return (
    <td
      className={`bg-[#E4E4E4] px-4 py-2 border-b-transparent border-x-solid border-x border-x-[#757575]`}
      style={{ borderRight: isLastItem && "none" }}
    >
      <div className="flex flex-col items-center gap-y-1">{children}</div>
    </td>
  )
}
