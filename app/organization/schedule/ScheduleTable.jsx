import React, { Fragment, useCallback, useMemo, useState } from "react"
import AddShift from "./AddShiftBtn"
import Image from "next/image"
import { UsersFilter } from "../../_components/AppComps/FilterGroup"
import placeholderImage from "../../_assets/img/user.png"
import { formatHourAsAmOrPm, randomIntFromInterval } from "../../_utils"
import CopySvg from "../../_assets/svgs/Copy"
import ScheduleTableLoadingSkeleton, {
  ScheduleTableFillers,
} from "../../_components/Skeletons/ScheduleTableSkeleton"
import Spinner from "../../_assets/svgs/Spinner"

const ScheduleTable = ({
  employees = [],
  allDays,
  loading,
  shiftsGroupedByAssignees = {},
  showAddShiftModal,
  duplicateShift,
  isPastWeek = true,
  handleUserFilterSelect,
  selectedUser,
}) => {
  const daysOfTheWeek = Array.from({ length: 7 }, (_, index) => index + 1)
  const assigneesAndShifts = useMemo(() => {
    return Object.values(shiftsGroupedByAssignees)
  }, [shiftsGroupedByAssignees])

  return (
    <div className="rounded-lg overflow-y-hidden">
      <div className=" h-[50dvh] max-h-[600px] overflow-auto">
        <table className="min-w-full bg-[#EFEDED] rounded-lg min-h-full">
          <thead className="text-[#252525]">
            <tr className="border-b border-b-800">
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
                  className={`${idx === allDays.length - 1
                    ? ""
                    : "border-r border-r-info-800"
                    }`}
                  date={date}
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
                  className="py-2 px-4 border-y border-r border-gray-800 text-gray-300 font-bold"
                  style={{
                    borderRight: index === allDays.length - 1 && "none",
                  }}
                  key={index}
                ></td>
              ))}
            </tr>
            {assigneesAndShifts.map((current, idx) => (
              <AssigneeRow
                showAddShiftModal={showAddShiftModal}
                duplicateShift={duplicateShift}
                key={current.assignee?._id || idx}
                allDays={allDays}
                daysOfTheWeek={daysOfTheWeek}
                assignee={current.assignee}
                shiftsGroupedByDays={current.shifts}
                isPastWeek={isPastWeek}
              />
            ))}
            {loading && (
              <ScheduleTableLoadingSkeleton columns={daysOfTheWeek} />
            )}
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
  showAddShiftModal = () => { },
  duplicateShift = async () => { },
  isPastWeek,
  daysOfTheWeek,
  allDays
}) {
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

  const shouldShowAddShiftButton = useCallback((day) => {
    return (!shiftsGroupedByDays[day] || shiftsGroupedByDays[day].length === 0) && allDays[day - 1].getTime() >= Date.now() && isPastWeek === false ? true : false
  }, [allDays, isPastWeek, shiftsGroupedByDays])

  return (
    <tr className="border-b border-b-gray-800 h-[52px] sticky z-1">
      <td className="p-[10px] sticky left-0 bg-[#EFEDED] outline-solid outline outline-gray-800/50">
        <AssigneePill assignee={assigneeModified} />
      </td>
      {daysOfTheWeek.map((day, listIdx, all) => (
        <td
          key={listIdx}
          className="border-x border-t border-gray-800"
          style={{ borderRight: listIdx === all.length - 1 && "none" }}
        >
          <Fragment>
            <AssigneeShiftsMapping
              assignee={assigneeModified}
              duplicateShift={duplicateShift}
              shifts={shiftsGroupedByDays[day] || []}
              isPastWeek={isPastWeek}
            />
          </Fragment>
          {shouldShowAddShiftButton(day) && (
            <AddShift
              onClick={() =>
                showAddShiftModal({
                  dayOfTheWeek: listIdx,
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
  duplicateShift = () => { },
  shifts = [],
}) {
  return (
    <>
      {shifts.map((item, idx) => (
        <Shift
          key={item?._id || idx}
          shift={item}
          duplicateShift={duplicateShift}
          assignee={assignee}
        />
      ))}
    </>
  )
}

function Shift({
  assignee = {},
  duplicateShift = async () => { },
  shift = {},
}) {
  const [isDuplicating, setIsDuplicating] = useState(false)

  const onDuplicateClick = useCallback(async () => {
    if (isDuplicating) return
    setIsDuplicating(true)
    await duplicateShift(shift?._id)
    setIsDuplicating(false)
  }, [duplicateShift, shift?._id, isDuplicating])
  return (
    <Fragment>
      <div
        style={{ backgroundColor: assignee.color }}
        className="flex mx-auto gap-[4px] my-[10px] items-center w-max justify-center p-[4px] rounded-full "
      >
        <Image
          className="rounded-full"
          height={24}
          width={24}
          src={assignee.profileImage?.secure_url || placeholderImage}
          alt="avatar"
        />
        {formatHourAsAmOrPm(new Date(shift.startTime).getHours())}-
        {formatHourAsAmOrPm(new Date(shift.endTime).getHours())}
        <button
          disabled={isDuplicating}
          name="duplicate shift"
          onClick={onDuplicateClick}
          className="flex items-center justify-center text-info-600"
        >
          {isDuplicating ? <Spinner /> : <CopySvg />}
        </button>
      </div>
    </Fragment>
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
function DayOfTheWeekTableHead({ date = new Date(), className }) {
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
    <th className={`${className} text-info-600 p-4 min-w-[120px]`}>
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
