import placeholderImage from "../../_assets/img/user.png"
import CopySvg from "../../_assets/svgs/Copy"
import { formatHourAsAmOrPm } from "../../_utils"
import Image from "next/image"
import { Fragment } from "react"

export default function ScheduleTableLoadingSkeleton({ columns = [] }) {
  return (
    <>
      <PlaceholderRow columns={columns} />
      <PlaceholderRow columns={columns} />
      <PlaceholderRow columns={columns} />
      <PlaceholderRow columns={columns} />
    </>
  )
}

function PlaceholderRow({ columns }) {
  return (
    <tr className="animate-pulse ease">
      <td className="sticky left-0 z-[10] border-r border-r-gray-800 bg-[#efeded] border-r-info-800 border-t border-t-info-800">
        <AssigneePillPlaceholder />
      </td>
      {columns.map((_, idx) => (
        <td
          key={idx}
          className={`py-2 px-4 border-b border-r border-gray-800 text-gray-300 font-bold`}
        >
          <AssigneeShiftPlaceholder />
        </td>
      ))}
    </tr>
  )
}

function AssigneePillPlaceholder() {
  return (
    <div className="flex justify-start items-center gap-[4px] mx-auto w-full whitespace-nowrap max-w-[98px] text-ellipsis overflow-hidden py-[4px] px-[6px] text-info-600 rounded-[50px] bg-red-200">
      <Image
        className="rounded-full opacity-[.4]"
        height={24}
        width={24}
        src={placeholderImage}
        alt="alt"
      />
      <div className="capitalize">
        <h6 className="w-full h-2 bg-gray-100"></h6>
        <p className="w-1/2 h-2 bg-gray-100"></p>
      </div>
    </div>
  )
}

function AssigneeShiftPlaceholder() {
  return (
    <Fragment>
      <div className="flex bg-red-200 gap-[4px] items-center w-max justify-center p-[4px] rounded-full ">
        <Image
          className="rounded-full"
          height={20}
          width={20}
          src={placeholderImage}
          alt="avatar"
        />
        {formatHourAsAmOrPm(8)}-{formatHourAsAmOrPm(5)}
        <button
          name="duplicate shift"
          className="flex items-center justify-center"
        >
          <CopySvg />
        </button>
      </div>
    </Fragment>
  )
}

export function ScheduleTableFillers({ allDays, show }) {
  if (!show) return null
  return (
    <>
      <ScheduleTableFiller allDays={allDays} />
      <ScheduleTableFiller allDays={allDays} />
      <ScheduleTableFiller allDays={allDays} />
      <ScheduleTableFiller allDays={allDays} />
      <ScheduleTableFiller allDays={allDays} />
    </>
  )
}

function ScheduleTableFiller({ allDays }) {
  return (
    <tr>
      <th className="max-h-[12px] text-center w-max text-[#42526E] font-bold py-2 sticky left-0 bg-[#EFEDED] border-b-solid border-b border-b-[#757575] border-t-none border-l-none border-r-solid border-r border-r-[#757575]"></th>
      {allDays.map((_, index) => (
        <td
          className="py-2 px-4 border-b border-r border-gray-800 text-gray-300 font-bold"
          key={index}
        ></td>
      ))}
    </tr>
  )
}
