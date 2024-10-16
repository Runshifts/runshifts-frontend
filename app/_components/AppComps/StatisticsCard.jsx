import StatisticsCardSkeleton from "../Skeletons/StatisticsCardSkeleton"

export default function StatisticsCard({
  title,
  text,
  icon,
  mainBg,
  iconBg,
  isLoading,
  textColor,
  titleColor,
}) {
  if (isLoading)
    return <StatisticsCardSkeleton mainBg={mainBg} iconBg={iconBg} />
  return (
    <div
      style={{ backgroundColor: mainBg }}
      className="bg-[#FFEECC] grow  p-[28px] flex justify-center items-start gap-[16px] md:gap-[24px] md:justify-start rounded-lg"
    >
      {icon && (
        <div
          style={{ backgroundColor: iconBg }}
          className="bg-[#FFDD99] flex justify-center items-center p-[11px] w-[64px] h-[64px] rounded-full"
        >
          {icon}
        </div>
      )}

      <div className="px-4 text-left md:text-start">
        <h1
          style={{ color: titleColor }}
          className="text-[24px] leading-[40px] font-[500] text-info-700"
        >
          {title}
        </h1>
        <p
          className="text-[12px] leading-[24px] text-info-500"
          style={{ color: textColor }}
        >
          {text}
        </p>
      </div>
    </div>
  )
}
