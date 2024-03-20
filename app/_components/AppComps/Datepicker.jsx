"use client"
import { formatDate } from "../../_utils"
import LeftChevron from "../../_assets/svgs/LeftChevron"
import RightChevron from "../../_assets/svgs/RightChevron"

const DateRangePicker = ({
  currentWeek = { start: new Date(Date.now()), end: new Date(Date.now()) },
  goToNextWeek = () => {},
  goToPrevWeek = () => {},
}) => {
  return (
    <div className="flex gap-[20px] text-info-700 text-[14px] leading-[16px] items-center">
      <button className="text-sm font-bold" onClick={goToPrevWeek}>
        <LeftChevron />
      </button>
      <div className="font-bold text-sm text-[#252525] whitespace-nowrap">
        {formatDate(currentWeek.start)} - {formatDate(currentWeek.end)}
      </div>
      <button className="text-sm" onClick={goToNextWeek}>
        <RightChevron />
      </button>
    </div>
  );
};

export default DateRangePicker;
