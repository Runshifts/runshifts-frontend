import React, { Fragment, useMemo } from "react"
import AddShift from "./AddShiftBtn"
import Image from "next/image"
import { UsersFilter } from "@/app/_components/AppComps/FilterGroup"
import placeholderImage from "@/app/_assets/img/user.png"
import { formatHourAsAmOrPm, randomIntFromInterval } from "@/app/_utils"
import CopySvg from "@/app/_assets/svgs/Copy"
import ScheduleTableLoadingSkeleton, {
  ScheduleTableFillers,
} from "@/app/_components/Skeletons/ScheduleTableSkeleton"

const ScheduleTable = ({
  employees = [],
  allDays,
  loading,
  shiftsGroupedByAssignees = {},
  showAddShiftModal,
  duplicateShift,
  canBeDuplicated = false,
  handleUserFilterSelect,
  selectedUser,
}) => {
  const daysOfTheWeek = Array.from({ length: 7 }, (_, index) => index + 8)
  const assigneesAndShifts = useMemo(() => {
    return Object.values(shiftsGroupedByAssignees)
  }, [shiftsGroupedByAssignees])

  return (
    <div className="rounded-lg overflow-y-hidden">
      <div className=" h-[50dvh] max-h-[600px] overflow-auto">
        <table className="min-w-full bg-[#EFEDED] rounded-lg min-h-full">
          <thead className="text-[#252525]">
            <tr>
              <th className="sticky z-[1] left-0 bg-[#EFEDED] py-2 px-4 border-b border-r border-gray-800">
                <div className="relative  text-left whitespace-nowrap">
                  <UsersFilter
                    updateCurrentValue={handleUserFilterSelect}
                    currentValue={selectedUser}
                    name="All Shifts"
                    options={employees}
                  />
                </div>
              </th>
              {allDays.map((date, idx) => (
                <DayOfTheWeekTableHead
                  key={idx}
                  date={date}
                  style={{
                    borderRight: idx === allDays.length - 1 && "0 !important",
                  }}
                />
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <th className="h-[30px] whitespace-nowrap text-center w-max text-[#42526E] font-bold py-2 sticky z-[0] left-0 bg-[#EFEDED] border-b-solid border-b border-b-[#757575] border-t-none border-l-none border-r-solid border-r border-r-[#757575]">
                Open shifts
              </th>
              {allDays.map((_, index) => (
                <td
                  className="py-2 px-4 border-b border-r border-gray-800 text-gray-300 font-bold"
                  key={index}
                ></td>
              ))}
            </tr>
            {loading && (
              <ScheduleTableLoadingSkeleton columns={daysOfTheWeek} />
            )}
            {assigneesAndShifts.map((current, idx) => (
              <AssigneeRow
                showAddShiftModal={showAddShiftModal}
                duplicateShift={duplicateShift}
                key={current.assignee?._id || idx}
                allDays={allDays}
                assignee={current.assignee}
                shiftsGroupedByDays={current.shifts}
                canBeDuplicated={canBeDuplicated}
              />
            ))}
            <ScheduleTableFillers
              allDays={allDays}
              show={
                (loading === false && assigneesAndShifts.length < 3) ||
                selectedUser === null
              }
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}

function AssigneeRow({
  assignee = {},
  shiftsGroupedByDays = {},
  showAddShiftModal = () => {},
  duplicateShift = () => {},
  canBeDuplicated,
}) {
  const shifts = useMemo(() => {
    const shiftsModified = { ...shiftsGroupedByDays }
    let day = 1
    while (day <= 7) {
      if (!shiftsModified[day]) shiftsModified[day] = []
      day++
    }
    return Object.values(shiftsModified).map((val = []) => val)
  }, [shiftsGroupedByDays])

  const assigneeModified = useMemo(
    () => ({
      ...assignee,
      color:
        assignee?.color ||
        `hsla(${randomIntFromInterval(1, 500)},${randomIntFromInterval(
          80,
          100
        )}%,${randomIntFromInterval(80, 90)}%,1)`,
    }),
    [assignee]
  )

  return (
    <tr>
      <td className="sticky p-[10px] left-0 bg-[#EFEDED] border-t border-t-gray-800 border-r-solid border-r border-r-gray-800">
        <AssigneePill assignee={assigneeModified} />
      </td>

      {shifts.map((assigneeShifts, listIdx, all) => (
        <td
          key={listIdx}
          className="border-x border-t border-gray-800"
          style={{ borderRight: listIdx === all.length - 1 && "none" }}
        >
          <Fragment>
            <AssigneeShiftsMapping
              assignee={assigneeModified}
              duplicateShift={duplicateShift}
              shifts={assigneeShifts}
              canBeDuplicated={canBeDuplicated}
            />
          </Fragment>
          {!assigneeShifts.length && (
            <AddShift
              onClick={() =>
                showAddShiftModal({
                  dayOfTheWeek: listIdx === 6 ? 0 : listIdx + 1,
                  assignee: assigneeModified,
                })
              }
            />
          )}
        </td>
      ))}
    </tr>
  )
}

function AssigneeShiftsMapping({
  assignee = {},
  duplicateShift = () => {},
  shifts = [],
  canBeDuplicated,
}) {
  return (
    <>
      {shifts.map((item, idx) => (
        <Fragment key={item?._id || idx}>
          <div
            style={{ backgroundColor: assignee.color }}
            className="flex mx-auto gap-[4px] my-[10px] items-center w-max justify-center px-[4px] py-[4px] rounded-full "
          >
            <Image
              className="rounded-full"
              height={24}
              width={24}
              src={assignee.profileImage?.secure_url || placeholderImage}
              alt="avatar"
            />
            {formatHourAsAmOrPm(new Date(item.startTime).getHours())}-
            {formatHourAsAmOrPm(new Date(item.endTime).getHours())}
            {canBeDuplicated && (
              <button
                name="duplicate shift"
                onClick={() => {
                  duplicateShift({
                    assignee: assignee,
                    shiftId: item._id,
                  })
                }}
                className="flex items-center justify-center"
              >
                <CopySvg />
              </button>
            )}
          </div>
        </Fragment>
      ))}
    </>
  )
}

function AssigneePill({ assignee = {} }) {
  return (
    <div
      className="flex justify-start items-center gap-[4px] mx-auto w-full whitespace-nowrap max-w-[98px] text-ellipsis overflow-hidden py-[4px] px-[6px] text-info-600 rounded-[50px] bg-red-200"
      style={{
        backgroundColor: assignee?.color,
      }}
    >
      <Image
        className="rounded-full"
        height={24}
        width={24}
        src={assignee.profileImage?.secure_url || placeholderImage}
        alt="alt"
      />
      <div className="capitalize" title={assignee.firstName}>
        <h6 className="font-bold text-[12px] ">{assignee.firstName}</h6>
        <p className="text-[10px]">6.2 / $62</p>
      </div>
    </div>
  )
}
function DayOfTheWeekTableHead({ date = new Date(), style }) {
  const daysOfTheWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
    "Sun",
  ]
  return (
    <th
      className="text-info-600 p-4 border-x border-b border-gray-800 min-w-[120px]"
      style={style}
    >
      <div className="flex flex-col items-center justify-center w- gap-[10px]">
        <span className="text-[14px]">{date.getDate()}</span>
        <span className="text-[24px] font-[600]">
          {daysOfTheWeek[date.getDay()]}
        </span>
      </div>
    </th>
  )
}

export default ScheduleTable
