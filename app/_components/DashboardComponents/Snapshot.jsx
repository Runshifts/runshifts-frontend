import Link from "next/link"
import React from "react"

export function SnapshotCard({
  headingText,
  actionPath,
  actionText,
  action = () => {},
}) {
  return (
    <div className="flex flex-col text-info-700 items-start py-4 px-8 gap-[10px]">
      <h3 className="font-semibold text-lg">{headingText}</h3>
      <Link
        href={actionPath}
        onClick={action}
        className="text-xs underline cursor-pointer"
      >
        {actionText}
      </Link>
    </div>
  )
}

function Snapshot({ snapshotData }) {
  return (
    <section>
      <div className="flex flex-col gap-y-[8px] bg-[#efeded] rounded-md my-3 p-4">
        <h1 className="text-[#292D32] font-semibold text-lg">
          Today&apos;s snapshot
        </h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 ">
          <div className="bg-white rounded-md overflow-hidden text-gray-700">
            <SnapshotCard
              headingText={`Scheduled: ${snapshotData?.hoursOfWorkScheduledToday ?? "..."} Hrs`}
              actionText={"View today's schedule"}
              actionPath={"/organization/schedule"}
              action={() => {}}
            />
            <hr className="border border-b border-[#757575]" />
            <SnapshotCard
              headingText={"Unfilled open shifts"}
              actionText={"View details"}
              actionPath={"/organization/schedule?focus=openShifts"}
              action={() => {}}
            />
          </div>
          <div className="bg-white rounded-md overflow-hidden text-gray-700">
            <SnapshotCard
              headingText={`Currently clocked in: ${snapshotData?.shiftsClockedInToday ?? "..."}`}
              actionText={"View time tracker"}
              actionPath={"/organization/tracker?focus=clockedInShifts"}
              action={() => {}}
            />
            <hr className="border border-b border-[#757575]" />
            <SnapshotCard
              headingText={"Users with time off"}
              actionText={"View time off requests"}
              actionPath={"/organization/tracker?focus=timeOffRequests"}
              action={() => {}}
            />
          </div>
          <div className="bg-white rounded-md overflow-hidden text-gray-700">
            <SnapshotCard
              headingText={`Currently on break: ${snapshotData?.usersCurrentlyOnBreak ?? "..."}`}
              actionText={"View time tracker"}
              actionPath={"/organization/tracker?focus=onBreak"}
              action={() => {}}
            />
            <hr className="border border-b border-[#757575]" />
            <SnapshotCard
              headingText={"Pending shifts requests"}
              actionText={"View pending shift requests"}
              actionPath={"/organization/schedule?focus=pendingShiftRequests"}
              action={() => {}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Snapshot
