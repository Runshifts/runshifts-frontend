"use client"
import React, { useContext } from "react"
import { EmployeeTrackerContext } from "../../_providers/Employee/TrackerProvider"
import Spinner from "../../_assets/svgs/Spinner"
function TrackerContent({ todaysShift }) {
  const { checkin, loading, checkout } = useContext(EmployeeTrackerContext)

  return (
    <div>
      <div className="grid grid-cols-1 gap-3 my-3 md:grid-cols-3">
        <TrackerCard
          title="Check-in Time"
          time="08:45"
          onButtonClick={() => checkin()}
          unit="AM"
          buttonText="Check In"
          buttonClassNames="bg-[#5BC62D] text-white"
          loading={loading === "checkin"}
        />
        <TrackerCard
          title="Check-out Time"
          time="08:45"
          onButtonClick={() => checkout()}
          loading={loading === "checkout"}
          unit="PM"
          buttonText="Check Out"
          buttonClassNames="bg-[#F5542C] text-white"
        />
        <TrackerCard
          title="Check-out Time"
          time="30:00"
          onButtonClick={() => {}}
          unit="MIN"
          buttonText={`Start break`}
          buttonClassNames="bg-[#FFCD66] text-[#354258]"
        />
      </div>

      <div>
        <div className=" grid grid-cols-1 gap-3 md:grid-cols-2">
          <OvertimeTracker
            title="Start Overtime"
            time="08:45"
            unit="AM"
            buttonClassNames="bg-[#5BC62D] text-white"
            onButtonClick={() => {}}
            buttonText="Start overtime"
          />
          <OvertimeTracker
            title="Start Overtime"
            time="08:45"
            unit="PM"
            buttonClassNames="bg-[#F5542C] text-white"
            onButtonClick={() => {}}
            buttonText="Start overtime"
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
}) {
  return (
    <>
      <div className=" ">
        <div className="bg-[#354258] rounded-xl flex h-48 p-4 flex-col items-start">
          <p className="text-base text-white not-italic font-normal my-2">
            {title}
          </p>
          <p className="text-5xl text-white not-italic font-semibold leading-8 my-2">
            {time} <span className="text-[#5B7198]">{unit}</span>
          </p>
          <button
            disabled={loading}
            onClick={onButtonClick}
            className={`${buttonClassNames} disabled:opacity-60 disabled:cursor-not-allowed rounded w-full my-2 px-3 py-2 flex justify-center items-center gap-[4px]`}
          >
            {loading && <Spinner />} {buttonText}
          </button>
        </div>
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
}) {
  return (
    <div className="bg-white border rounded-xl flex p-4 flex-col items-start">
      <p className="text-base text-[#354258] not-italic font-normal my-2">
        {title}
      </p>
      <p className="text-5xl text-[#354258] not-italic font-semibold leading-8 my-2">
        {time} <span className="text-[#354258]">{unit}</span>
      </p>
      <button
        onClick={onButtonClick}
        className={`${buttonClassNames} rounded w-full my-2 px-3 py-2`}
      >
        {buttonText}
      </button>
    </div>
  )
}
