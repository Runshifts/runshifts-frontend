import { useState } from "react"
import {
  PastDateDurationSelect,
  SECTION_VIEWS,
  SectionViewSelect,
} from "./Dropdown"
import { StatisticsGraphicalView } from "./StatisticsGraphicalView"
import StatisticsNumericalView from "./StatisticsNumericalView"

export default function StatisticsView({
  series = [],
  heading,
  primaryDataKey,
  secondaryDataKey,
  onPastDateFilterSelect = () => {},
  initialView,
  numericalViewData = [],
}) {
  const [currentView, setCurrentView] = useState(
    initialView || SECTION_VIEWS.GRAPHICAL
  )
  return (
    <>
      <div className="bg-white flex flex-col gap-[12px] w-full bg-white rounded-xl shadow-shadow-[0px_1.926px_7.704px_0px_rgba(0,0,0,0.12)] p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[12px] leading-[16px] uppercase text-[rgba(38, 45, 51, 1)]">
            {heading}
          </h2>
          <PastDateDurationSelect onSelect={onPastDateFilterSelect} />
        </div>
        <div className="flex overflow-auto max-h-[333px]">
          {currentView === SECTION_VIEWS.GRAPHICAL ? (
            <StatisticsGraphicalView series={series} />
          ) : (
            <StatisticsNumericalView data={numericalViewData} />
          )}
        </div>
        <div className="flex justify-between items-center text-[12px]">
          <div className="flex gap-3 ">
            <div className="flex items-center gap-1">
              <div className="rounded-full h-2 w-2 bg-[#42526E] "></div>
              <p>{primaryDataKey}</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="rounded-full h-2 w-2 bg-[#449522] "></div>
              <p>{secondaryDataKey}</p>
            </div>
          </div>
          <SectionViewSelect
            defaultSelection={`${currentView} view`}
            onSelect={(selection) => setCurrentView(selection.value)}
          />
        </div>
      </div>
    </>
  )
}
