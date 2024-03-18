import StatisticsCardSkeleton from "../Skeletons/StatisticsCardSkeleton"

export default function StatisticsCard({
  title,
  text,
  icon,
  mainBg,
  iconBg,
  isLoading,
}) {
  if (isLoading) return <StatisticsCardSkeleton mainBg={mainBg} iconBg={iconBg} />
  return (
    <div
      style={{ backgroundColor: mainBg }}
      className="bg-[#FFEECC] p-[28px] flex flex-wrap justify-center items-center gap-[16px] md:gap-[24px] md:justify-start rounded-lg"
    >
      <div
        style={{ backgroundColor: iconBg }}
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
