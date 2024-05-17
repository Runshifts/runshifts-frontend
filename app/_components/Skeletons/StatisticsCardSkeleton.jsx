export default function StatisticsCardSkeleton({ mainBg, iconBg }) {
  return (
    <div
      style={{ backgroundColor: mainBg }}
      className="animate-pulse bg-[#FFEECC] p-[28px] flex justify-start items-center gap-[16px] md:gap-[24px] md:justify-start rounded-lg"
    >
      <div
        style={{ backgroundColor: iconBg }}
        className="bg-[#FFDD99] h-[58px] w-[58px] rounded-full"
      ></div>

      <div className="px-4 flex gap-2 flex-col text-center md:text-start">
        <div
          style={{ backgroundColor: iconBg }}
          className="h-[46px] w-[190px]"
        ></div>
        <p
          style={{ backgroundColor: iconBg }}
          className="h-[24px] w-[190px]"
        ></p>
      </div>
    </div>
  )
}
