"use client"
export default function StatisticsGraphicalView({ data = [] }) {
  return (
    <>
      <div className="grid grid-cols-2 w-full gap-x-[10px] gap-y-2">
        {data.map((datum) => (
          <NumericalViewCard
            key={datum.heading}
            heading={datum.heading}
            primaryValue={datum.primary.value}
            secondaryValue={datum.secondary.value}
            primaryValueTitle={datum.primary.name}
            secondaryValueTitle={datum.secondary.name}
          />
        ))}
      </div>
    </>
  )
}

function NumericalViewCard({
  heading,
  primaryValue,
  primaryValueTitle,
  secondaryValue,
  secondaryValueTitle,
}) {
  return (
    <>
      <div className="rounded-[12px] grow shrink-0 p-4 bg-[#354258] flex flex-col item-start gap-2">
        <h3 className="text-white text-[11px]">{heading}</h3>
        <div className="flex items-center gap-6 w-full space-between text-center">
          <p className="text-[11px] grow text-white text-center flex flex-col items-center font-normal">
            <span className="text-[32px] font-[600] text-center">{primaryValue}</span>
            {primaryValueTitle}
          </p>
          <p className="text-[11px] grow text-[#98E179] text-center flex flex-col items-center font-normal">
            <span className="text-[32px] font-[600] text-center">{secondaryValue}</span>
            {secondaryValueTitle}
          </p>
        </div>
      </div>
    </>
  )
}
