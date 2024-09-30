import React, { useMemo } from "react"
import { SnapshotCard } from "./Snapshot"
import { getNextSunday, getPreviousMonday } from "../../_utils"

function Snapshot({ snapshotData }) {
  const today = useMemo(() => new Date(Date.now()).toLocaleDateString("en-us"), [])
  const thisWeek = useMemo(
    () => ({
      start: getPreviousMonday(new Date(Date.now())).toLocaleDateString("en-us"),
      end: getNextSunday(new Date(Date.now())).toLocaleDateString("en-us"),
    }),
    []
  )
  return (
    <section>
      <div className="flex flex-col gap-y-[8px] bg-[#efeded] rounded-md my-3 p-4">
        <h1 className="text-[#292D32] font-semibold text-lg">Wages</h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 ">
          <div className="bg-white flex justify-betwen items-center grow rounded-md overflow-hidden text-gray-700">
            <SnapshotCard
              headingText={"Today's labour cost"}
              actionText={"View today's cost"}
              actionPath={`/organization/reports?start=${today}&end=${today}&focus=labourCost`}
              action={() => {}}
            />
            <p className="font-semibold ml-auto mr-4 text-info-700">
              ${snapshotData?.projectedLabourCostsToday?.toLocaleString("en-us")}
            </p>
          </div>
          <div className="bg-white flex justify-betwen items-center grow rounded-md overflow-hidden text-gray-700">
            <SnapshotCard
              headingText={"Week's labour cost"}
              actionText={"View week's cost"}
              actionPath={`/organization/reports?start=${thisWeek.start}&end=${thisWeek.end}&focus=labourCost`}
              action={() => {}}
            />
            <p className="font-semibold ml-auto mr-4 text-info-700">
              ${snapshotData?.projectedLabourCostsToday?.toLocaleString("en-us")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Snapshot
