import PeopleGroupIcon from "../../_assets/svgs/PeopleGroup"
import WatchIcon from "../../_assets/svgs/WatchIcon"

function StaffList({ totalCountOfActiveEmployees, totalNumberOfWorkedHours }) {
  return (
    <>
      <div className="text-[#252525] grid grid-cols-1 gap-4 md:grid-cols-2">
        <StatisticsCard
          title={totalCountOfActiveEmployees}
          text="Total number of active employees"
          icon={<PeopleGroupIcon />}
        />
        <StatisticsCard
          title={(totalNumberOfWorkedHours)?.toLocaleString()}
          text="Total number of worked hours"
          icon={<WatchIcon />}
        />
      </div>
    </>
  )
}

export default StaffList

function StatisticsCard({ title, text, icon, mainBg, iconBG }) {
  return (
    <div
      style={{ backgroundColor: mainBg }}
      className="bg-[#FFEECC] p-[28px] flex flex-wrap justify-center items-center gap-[16px] md:gap-[24px] md:justify-start rounded-lg"
    >
      <div
        style={{ backgroundColor: iconBG }}
        className="bg-[#FFDD99] p-[11px] rounded-full"
      >
        {icon}
      </div>

      <div className="px-4 text-center md:text-start">
        <h1 className="text-[24px] leading-[40px] font-[500] py-2 text-info-700">
          {title}
        </h1>
        <p className="text-[12px] leading-[24px] text-info-500">{text}</p>
      </div>
    </div>
  )
}
