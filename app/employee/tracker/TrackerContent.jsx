"use client"
import React, { useCallback, useContext, useMemo, useState } from "react"
import { EmployeeTrackerContext } from "../../_providers/Employee/TrackerProvider"
import Spinner from "../../_assets/svgs/Spinner"
import { checkIsValidDateString, msToHourMinSecond } from "../../_utils"
import toast from "react-hot-toast"
import Modal from "../../_components/AppComps/Modal"
import { useTimeCountdown } from "../../_hooks/useCountDown"
function TrackerContent({ todaysShift }) {
  const [showConfirmCheckout, setShowConfirmCheckout] = useState(false)
  const { checkin, loading, checkout, startOrResumeBreak, pauseOrEndBreak } =
    useContext(EmployeeTrackerContext)
  const hasStartedShift = useMemo(
    () => checkIsValidDateString(todaysShift?.startedAt),
    [todaysShift]
  )
  const hasStartedBreak = useMemo(
    () =>
      typeof todaysShift?.breakStartedAt === "string" &&
      checkIsValidDateString(todaysShift?.breakStartedAt),
    [todaysShift]
  )
  const hasUsedUpAllottedBreaktime = useMemo(
    () =>
      todaysShift?.breakDurationUsedInMilliseconds &&
      todaysShift?.breakDurationUsedInMilliseconds ===
        todaysShift?.allottedBreakTimeInMilliseconds,
    [todaysShift]
  )

  const breakTimeLeft = useMemo(
    () =>
      msToHourMinSecond(
        todaysShift?.allottedBreakTimeInMilliseconds -
          (todaysShift?.breakDurationUsedInMilliseconds || 0) || 0
      ),
    [todaysShift]
  )

  const { minutes: breakMinutesLeft, seconds: breakSecondsLeft } =
    useTimeCountdown(
      todaysShift?.allottedBreakTimeInMilliseconds -
        (todaysShift?.breakDurationUsedInMilliseconds || 0) || 0
    )

  const handleBreakClick = useCallback(() => {
    if (hasUsedUpAllottedBreaktime)
      return toast.error("You have used up your allotted break time")
    if (hasStartedBreak === false) return startOrResumeBreak()
    else return pauseOrEndBreak()
  }, [
    startOrResumeBreak,
    pauseOrEndBreak,
    hasUsedUpAllottedBreaktime,
    hasStartedBreak,
  ])

  const breakButtonText = useMemo(() => {
    if (!todaysShift) return "--:--"
    if (hasUsedUpAllottedBreaktime) return "Break Over"
    if (hasStartedBreak) return "Pause Break"
    else if (todaysShift?.breakStartedAt === null) return "Resume"
    else return "Start break"
  }, [todaysShift, hasStartedBreak])

  const getTimeDisplay = (date) => {
    return new Date(date || Date.now())
      .toLocaleTimeString("default", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .split("am")
      .join("")
      .split("pm")
      .join("")
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <TrackerCard
          title="Check-in Time"
          time={
            todaysShift?.startTime
              ? getTimeDisplay(todaysShift?.startTime)
              : "--:--"
          }
          onButtonClick={() => checkin()}
          unit="AM"
          buttonText={hasStartedShift ? "Checked In" : "Check In"}
          buttonClassNames="bg-[#5BC62D] text-white"
          loading={loading === "checkin"}
          disabled={hasStartedShift === true || !todaysShift}
        />
        <TrackerCard
          title={"Check-out Time"}
          time={
            todaysShift?.endTime
              ? getTimeDisplay(todaysShift?.endTime)
              : "--:--"
          }
          onButtonClick={() => setShowConfirmCheckout(true)}
          loading={loading === "checkout"}
          unit="PM"
          buttonText={
            todaysShift?.endedAt ||
            new Date(todaysShift?.endTime).getTime() < Date.now()
              ? "Checked Out"
              : "Check Out"
          }
          buttonClassNames="bg-[#F5542C] text-white"
          disabled={
            hasStartedShift === false || !todaysShift || todaysShift.endedAt
          }
        />
        <CheckoutConfirmationModal
          handleHide={() => setShowConfirmCheckout(false)}
          show={showConfirmCheckout}
          handleCheckout={() => {
            checkout()
            setShowConfirmCheckout(false)
          }}
        />
        <TrackerCard
          title="Break Time"
          time={
            todaysShift
              ? hasStartedBreak ||
                loading === "start-break" ||
                loading === "pause-break"
                ? `${breakMinutesLeft}:${breakSecondsLeft}`
                : breakTimeLeft
              : "--:--"
          }
          onButtonClick={handleBreakClick}
          unit="MIN"
          buttonText={breakButtonText}
          buttonClassNames="bg-[#FFCD66] text-[#354258] disabled:opacity-60 disabled:cursor-not-allowed rounded w-full px-3  min-h-[46px] flex justify-center items-center gap-[4px]"
          disabled={
            hasUsedUpAllottedBreaktime ||
            !todaysShift ||
            todaysShift?.endedAt ||
            hasStartedShift === false
          }
          loading={loading === "start-break" || loading === "pause-break"}
        />
      </div>

      <div>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
          <OvertimeTracker
            title="Start Overtime"
            time="08:45"
            unit="AM"
            buttonClassNames="bg-[#5BC62D] text-white"
            onButtonClick={() => {}}
            buttonText="Start overtime"
          />
          <OvertimeTracker
            title="End Overtime"
            time="08:45"
            unit="PM"
            buttonClassNames="bg-[#F5542C] text-white"
            onButtonClick={() => {}}
            buttonText="End overtime"
          />
        </div>
      </div>
    </div>
  )
}

export default TrackerContent

function TrackerCard({
  title,
  unit,
  time,
  buttonText,
  buttonClassNames,
  onButtonClick,
  loading,
  disabled,
}) {
  return (
    <>
      <div className="bg-[#354258] rounded-xl flex h-48 p-4 gap-2 flex-col items-start">
        <p className="text-base leading-[46px] text-white not-italic font-normal">
          {title}
        </p>
        <p className="text-5xl w-full flex items-start leading-[46px] text-white not-italic font-semibold leading-8">
          <span>{time}</span>{" "}
          <span className="text-[#5B7198] ml-auto">{unit}</span>
        </p>
        <button
          disabled={disabled || loading}
          onClick={onButtonClick}
          className={`${buttonClassNames} disabled:opacity-60 disabled:cursor-not-allowed rounded w-full px-3  min-h-[46px] flex justify-center items-center gap-[4px]`}
        >
          {loading && <Spinner />} {loading ? "Please hold on" : buttonText}
        </button>
      </div>
    </>
  )
}

function OvertimeTracker({
  title,
  unit,
  time,
  buttonText,
  buttonClassNames,
  onButtonClick,
  loading,
}) {
  return (
    <div className="bg-white border border-current rounded-xl flex p-4 flex-col items-start text-info-600 justify-center gap-2">
      <p className="text-base text-[#354258] not-italic font-normal my-2">
        {title}
      </p>
      <p className="text-5xl w-full flex items-start leading-[46px] not-italic font-semibold leading-8 justify-between">
        <span>{time}</span> <span className="">{unit}</span>
      </p>
      <button
        disabled={loading}
        onClick={onButtonClick}
        className={`${buttonClassNames} disabled:opacity-60 disabled:cursor-not-allowed rounded w-full px-3  min-h-[46px] flex justify-center items-center gap-[4px]`}
      >
        {loading && <Spinner />} {buttonText}
      </button>
    </div>
  )
}

function CheckoutConfirmationModal({ handleHide, handleCheckout, show }) {
  return (
    <Modal zIndex={10000} open={show} onClose={handleHide}>
      <div className="bg-white p-4 rounded-lg">
        <h3 className="text-center font-[600] mb-4 text-[16px] text-[#1B1818]">
          Are you sure you want to check out?
        </h3>
        <div className="flex justify-center items-center gap-4">
          <button onClick={handleHide} className="text-info-600 text-4">
            Cancel
          </button>{" "}
          <button
            onClick={handleCheckout}
            className="bg-[#F5542C] text-white text-4 font-normal px-3 py"
          >
            Check out
          </button>
        </div>
      </div>
    </Modal>
  )
}
