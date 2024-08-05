import React, { Fragment, useContext, useState } from "react"
import { useCallback, useMemo } from "react"
import {
  daysOfTheWeek,
  formatHourAsAmOrPm,
  isDateInThePast,
} from "../../_utils"
import Pill from "../AppComps/Pill"
import placeholderImage from "../../_assets/img/user.png"
import Image from "next/image"
import { UserContext } from "../../_providers/UserProvider"
import Modal from "../AppComps/Modal"
import ShiftApplicationForm from "./ShiftApplicationForm"
import OwnShiftDetails from "./OwnShiftDetails"
import ShiftSwapDetails from "./ShiftSwapDetails"

export function ShiftPill({ shift = {} }) {
  const isPending = useMemo(
    () => shift.isAccepted === false && shift.isDroppedOff === false,
    [shift?.isAccepted, shift?.isDroppedOff]
  )
  const style = useMemo(() => {
    const style = {}
    style.backgroundColor = shift.assignee?.color
    if (isPending) {
      style.backgroundColor = "#D7D3D1"
    } else if (shift.isOvertime) {
      style.backgroundColor = "#DE350B"
      style.color = "white"
    } else if (!shift.assignee?.color) {
      style.backgroundColor = "#FFC6C6"
    }
    return style
  }, [isPending, shift])

  const { startHour, endHour } = useMemo(() => {
    return {
      startHour: new Date(shift.startTime).getHours(),
      endHour: new Date(shift.endTime).getHours(),
    }
  }, [shift?.startTime, shift?.endTime])
  return (
    <Pill style={style}>
      <span>
        {formatHourAsAmOrPm(startHour)}-{formatHourAsAmOrPm(endHour)}
      </span>
    </Pill>
  )
}

export function CalendarDayContainer({ children, loading }) {
  return (
    <div
      className={`${
        loading ? "animate-pulse" : ""
      } grow shrink-0 py-2 px-2 flex items-center justify-center min-w-32 h-[140px] overflow-auto border-dotted border-2 border-[#C7C7C7] rounded-md  bg-white flex items-center justify-center md:min-w-38`}
    >
      {children}
    </div>
  )
}

export function CalendarShiftDay({ loading, day, children }) {
  return (
    <CalendarDayContainer loading={loading}>
      <div className="text-center flex flex-col gap-[10px] h-full justify-start">
        <h3 className="w-full text-[14px] font-[400] leading-[140%] text-center text-[#303030]">
          {daysOfTheWeek[day]}
        </h3>
        {children}
      </div>
    </CalendarDayContainer>
  )
}

export function RenderShiftsAndOvertimes({
  shifts = [],
  overtimes,
  useDetailedPill = false,
  showOvertimes = false,
  loading,
}) {
  const renderShifts = useCallback(() => {
    if (shifts.length === 0)
      return <p className=" text-xs text-[#303030] rounded-full">No shifts</p>
    return (
      <ul className="w-full flex flex-col gap-y-2 items-center py-2 max-h-full overflow-auto">
        {shifts.map((shift) => (
          <Fragment key={shift._id}>
            {useDetailedPill ? (
              <ShiftPillWithDetails shift={shift} />
            ) : (
              <ShiftPill shift={shift} />
            )}
          </Fragment>
        ))}
      </ul>
    )
  }, [shifts, useDetailedPill])
  const renderOvertimes = useCallback(() => {
    if (!showOvertimes) return null
    return (
      <ul className="w-full flex flex-col gap-y-2 items-center py-2 max-h-full overflow-auto">
        {overtimes.map((overtime) => (
          <ShiftPill isPending={false} shift={overtime} key={overtime._id} />
        ))}
      </ul>
    )
  }, [overtimes, showOvertimes])
  return (
    <>
      {loading ? (
        <p className="text-gray-300 text-sm animate-pulse">loading...</p>
      ) : (
        renderShifts()
      )}
      {renderOvertimes()}
    </>
  )
}

export function OpenShiftButton({ shift }) {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setIsApplicationModalOpen(true)}
        className="border-dashed border-[#706763] border text-[#706763] text-[14px] font-[600] p-[4px] leading-[1] rounded-sm"
      >
        open shift
      </button>
      <Modal
        open={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
      >
        <ShiftApplicationForm
          onFinish={() => setIsApplicationModalOpen(false)}
          shift={shift}
        />
      </Modal>
    </>
  )
}

export function ShiftPillWithDetails({ shift = {} }) {
  const [showModal, setShowModal] = useState(false)
  const { user } = useContext(UserContext)
  const isOwnShift = useMemo(
    () => user._id === shift?.assignee?._id,
    [user._id, shift?.assignee?._id]
  )
  const canViewInModal = useMemo(() => {
    return (
      (isOwnShift === false && !isDateInThePast(new Date(shift.startTime))) ||
      (shift.isAccepted && isOwnShift) ||
      (!isDateInThePast(new Date(shift.startTime)) && !shift.isDroppedOff)
    )
  }, [isOwnShift, shift])

  if (
    ((shift.isDroppedOff === true && isOwnShift === false) ||
      !shift.assignee) &&
    !isDateInThePast(new Date(shift.startTime))
  )
    return <OpenShiftButton shift={shift} />
  return (
    <>
      <ShiftAssigneePill
        shift={shift}
        handleClick={() => canViewInModal && setShowModal(true)}
        isOwnShift={isOwnShift}
      />
      <ModalChildrenForShift
        hasModal={!isDateInThePast(new Date(shift.startTime)) || isOwnShift}
        isModalOpen={showModal}
        onClose={() => setShowModal(false)}
        shift={shift}
        isOwnShift={isOwnShift}
      />
    </>
  )
}

export function ShiftAssigneePill({ shift, handleClick, isOwnShift }) {
  const isPending = useMemo(
    () => shift.isAccepted === false && shift.isDroppedOff === false,
    [shift?.isAccepted, shift?.isDroppedOff]
  )
  const style = useMemo(() => {
    if (
      (isDateInThePast(new Date(shift.startTime)) && isPending) ||
      shift.isDroppedOff
    )
      return {
        backgroundColor: "#D7D3D1",
        opacity: ".7",
        cursor: "not-allowed",
      }
    else if (isPending) return { backgroundColor: "#D7D3D1" }
    else
      return {
        backgroundColor: shift.assignee?.color || "#FFC6C6",
        cursor: isDateInThePast(new Date(shift.startTime))
          ? "default"
          : "pointer",
      }
  }, [shift, isPending, isOwnShift])
  return (
    <button
      onClick={handleClick}
      style={style}
      className="flex items-center justify-start bg-red-200 gap-[4px] rounded-[50px] px-[6px] py-[4px]"
    >
      <Image
        height={24}
        width={24}
        src={shift.assignee?.profileImage?.secure_url || placeholderImage}
        alt="alt"
        className="rounded-full object-cover h-[24px] w-[24px]"
      />
      <span className="text-[#354258] text-left flex flex-col gap-[4px]">
        <b className="font-[600] text-[14px] leading-[1] overflow-hidden max-w-[60px] text-ellipsis">
          {isOwnShift
            ? "My shift"
            : shift.assignee?.firstName ||
              shift.assignee?.lastName ||
              shift.assignee?.email}
        </b>
        <span className="text-[10px] text-[#303030] leading-[1]">
          {formatHourAsAmOrPm(new Date(shift.startTime).getHours())}-
          {formatHourAsAmOrPm(new Date(shift.endTime).getHours())}
        </span>
      </span>
    </button>
  )
}

function ModalChildrenForShift({
  hasModal,
  isModalOpen,
  onClose,
  shift,
  isOwnShift,
}) {
  if (!hasModal) return null
  return (
    <>
      {
        <Modal open={isModalOpen} onClose={onClose}>
          {isOwnShift ? (
            <OwnShiftDetails shift={shift} onClose={onClose} />
          ) : (
            <>
              <ShiftSwapDetails shift={shift} />
            </>
          )}
        </Modal>
      }
    </>
  )
}
