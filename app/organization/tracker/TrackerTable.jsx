"use client"
import React, { useMemo, useState } from "react"
import placeholderImage from "../../_assets/img/user.png"
import { IoEyeOutline } from "react-icons/io5"
import Breakdown, { BREAKDOWN_VARIANTS } from "./Breakdown"
import Image from "next/image"
import MoreSvg from "../../_assets/svgs/More"
import Tooltip from "../../_components/AppComps/TooltipModal"
import Modal from "../../_components/AppComps/Modal"
import TrackerTableSkeleton from "../../_components/Skeletons/TrackerSkeletons"

const Tracker = ({
  isCurrentDate,
  loading,
  filteredShifts,
  incomingShiftRequests = [],
}) => {
  const employeeNames1 = [
    "Charlse Jenkings",
    "Otto Chris",
    "Ariana Woods",
    "Bernard Oslo",
  ]
  const clockedInShifts = useMemo(
    () =>
      filteredShifts.filter(
        (shift) => shift.filter === BREAKDOWN_VARIANTS.CLOCKED_IN
      ),
    [filteredShifts]
  )
  const clockedOutShifts = useMemo(
    () =>
      filteredShifts.filter(
        (shift) => shift.filter === BREAKDOWN_VARIANTS.CLOCKED_OUT
      ),
    [filteredShifts]
  )
  const usedBreakShifts = useMemo(
    () =>
      filteredShifts.filter(
        (shift) => shift.filter === BREAKDOWN_VARIANTS.ON_BREAK
      ),
    [filteredShifts]
  )
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <TrackerSection
        heading={`Employees ${isCurrentDate ? "currently" : "who"} clocked In`}
      >
        {!loading && (
          <TrackerTable headings={["Employees", ""]}>
            {clockedInShifts.map((shift, rowIndex) => (
              <EmployeeRow
                key={shift._id}
                isOdd={rowIndex % 2}
                breakdownVariant={BREAKDOWN_VARIANTS.CLOCKED_IN}
                employee={shift.assignee}
                shiftOrTimeOff={shift}
              />
            ))}
          </TrackerTable>
        )}
        {loading && <TrackerTableSkeleton headings={["Employees", ""]} />}
      </TrackerSection>

      <TrackerSection heading="Employees with time off">
        <TrackerTable headings={["Employees", ""]}>
          {employeeNames1.map((employee, rowIndex) => (
            <EmployeeRow
              key={employee}
              isOdd={rowIndex % 2}
              breakdownVariant={BREAKDOWN_VARIANTS.TIME_OFF}
            />
          ))}
        </TrackerTable>
      </TrackerSection>

      <TrackerSection heading="Employees currently on break">
        {!loading && (
          <TrackerTable headings={["Employees", ""]}>
            {usedBreakShifts.map((shift, rowIndex) => (
              <EmployeeRow
                key={shift._id}
                isOdd={rowIndex % 2}
                breakdownVariant={BREAKDOWN_VARIANTS.ON_BREAK}
                employee={shift.assignee}
                shiftOrTimeOff={shift}
              />
            ))}
          </TrackerTable>
        )}
        {loading && <TrackerTableSkeleton headings={["Employees", ""]} />}
      </TrackerSection>

      <TrackerSection
        heading={`Employees ${isCurrentDate ? "" : "who"} clocked out`}
      >
        {!loading && (
          <TrackerTable headings={["Employees", ""]}>
            {clockedOutShifts.map((shift, rowIndex) => (
              <EmployeeRow
                key={shift._id}
                isOdd={rowIndex % 2}
                breakdownVariant={BREAKDOWN_VARIANTS.CLOCKED_OUT}
                employee={shift.assignee}
                shiftOrTimeOff={shift}
              />
            ))}
          </TrackerTable>
        )}
        {loading && <TrackerTableSkeleton headings={["Employees", ""]} />}
      </TrackerSection>
      <TrackerSection heading="Incoming shift requests">
        <TrackerTable headings={["Employees", "Shift time", ""]}>
          {incomingShiftRequests.map((shiftRequest, rowIndex) => (
            <EmployeeRow
              key={shiftRequest._id}
              isOdd={rowIndex % 2}
              additionalTableData={["09:00 AM"]}
              employee={shiftRequest.requester}
              shiftOrTimeOff={shiftRequest.shift}
              breakdownVariant={BREAKDOWN_VARIANTS.INCOMING_SHIFT_REQUEST}
            />
          ))}
        </TrackerTable>
      </TrackerSection>
    </div>
  )
}

export default Tracker

function EmployeeRow({
  employee,
  isOdd,
  additionalTableData = [],
  breakdownVariant = "clocked-in",
  shiftOrTimeOff = {},
}) {
  const [showBreakDown, setShowBreakDown] = useState(false)

  return (
    <tr style={{ backgroundColor: isOdd ? "#F8F9FC" : "#FFFFFF" }}>
      <td className="py-[10px] px-2">
        <span className="flex gap-x-2 items-center justify-start leading-[20px] text-[#1D2433] text-[14px] font-[400] capitalize">
          <Image
            height={24}
            width={24}
            src={employee?.profileImage?.secure_url || placeholderImage}
            alt=""
            className="w-[24px] h-[24px] object-cover rounded-full"
          />
          {(
            (employee?.firstName + " " + employee?.lastName).trim() ||
            employee?.fullName ||
            employee?.email
          )?.replaceAll("undefined", "-")}
        </span>
      </td>
      {additionalTableData.map((content) => (
        <td className="py-[10px] px-2 w-[24%]" key={content}>
          <p className="leading-[20px] w-full whitespace-nowrap text-ellipsis overflow-hidden text-[#1D2433] text-[14px] font-[400] capitalize whitespace-nw">
            {content}
          </p>
        </td>
      ))}
      <td className="w-[28px] h-[40px]">
        <Tooltip
          name="more"
          tooltipContent={
            <span className="bg-white shadow-[0px_4px_6px_-2px_#1A1A1A33] p-2 rounded-[12px] inline-block w-max py-[6px] text-info-500">
              <ButtonWitIconAndText
                onClick={() => setShowBreakDown(true)}
                icon={<IoEyeOutline size={25} />}
                text={"See employee breakdown"}
              />
            </span>
          }
        >
          <MoreSvg />
        </Tooltip>
      </td>
      <Modal
        zIndex={1002}
        open={showBreakDown}
        onClose={() => setShowBreakDown(false)}
      >
        <Breakdown
          employee={employee}
          shiftOrTimeOff={shiftOrTimeOff}
          handleClose={() => setShowBreakDown(false)}
          variant={breakdownVariant}
        />
      </Modal>
    </tr>
  )
}

function ButtonWitIconAndText({ icon, text, onClick }) {
  return (
    <button
      className="flex items-center justify-center gap-[6px] p-[6px]"
      onClick={typeof onClick === "function" ? onClick : undefined}
    >
      {icon}
      <p className="text-[13px] leading-[20px]">{text}</p>
    </button>
  )
}

function TrackerTable({ headings = [], children }) {
  return (
    <table className="min-w-full rounded-lg shadow-lg">
      <thead className="bg-[#F8F9FC]">
        <tr>
          {headings.map((heading, idx) => (
            <th
              key={heading}
              style={{ width: idx > 0 ? "24px" : "auto" }}
              className="px-2 py-[13px] text-start text-sm text-[#1D2433] font-thin whitespace-nowrap"
            >
              {heading}
            </th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

function TrackerSection({ heading, children }) {
  return (
    <section className="flex gap-4 flex-col">
      <h3 className="font-semibold text-[16px] text-[#292D32]">{heading}</h3>

      {children}
    </section>
  )
}
