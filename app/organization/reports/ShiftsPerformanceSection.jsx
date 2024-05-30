"use client"
import ReportCard from "./ReportCard"
import StatisticsDonut from "./StatisticsDonut"

export default function ShiftsPerformanceSection() {
  return (
    <ReportCard heading="Employees shift performance">
      <StatisticsDonut
        series={[54.2, 11.8, 9, 16]}
        colors={["#7ED957", "#8294B4", "#FFCD66", "#FAA995"]}
        labels={[
          "Shifts completed",
          "shifts swapped",
          "shifts accepted",
          "shifts rejected",
        ]}
        width={150}
        height={150}
        annotations={{
          position: "front",
          texts: [
            {
              text: "Shifts",
              x: "50%",
              y: "50%",
              fontSize: "28px",
              fontWeight: "400",
              textAnchor: "middle",
              style: {
                color: "#262D33",
              },
            },
            {
              text: "performance",
              x: "50%",
              y: "60%",
              fontSize: "13px",
              textAnchor: "middle",
              style: {
                color: "#262D33",
              },
            },
          ],
        }}
      />
      <div className="w-full flex items-center justify-between">
        <StatisticsPercentageText
          percentageNumber={52.4}
          percentageNumberColor="#7ED957"
          title="Shifts Completed"
        />
        <StatisticsPercentageText
          percentageNumber={8}
          percentageNumberColor="#8294B4"
          title="Shifts Swapped"
        />
        <StatisticsPercentageText
          percentageNumber={9}
          percentageNumberColor="#FFCD66"
          title="Shifts accepted"
        />
        <StatisticsPercentageText
          percentageNumber={16}
          percentageNumberColor="#FAA995"
          title="Shifts rejected"
        />
      </div>
    </ReportCard>
  )
}

function StatisticsPercentageText({
  percentageNumber,
  title,
  percentageNumberColor,
}) {
  return (
    <div className="flex flex-col items-center w-min">
      <p
        style={{ color: percentageNumberColor }}
        className="text-center text-[17px] font-bold leading-7"
      >
        {percentageNumber}%
      </p>
      <p className="text-[#4B5157] text-center not-italic font-normal text-[9.6px]">
        {title}
      </p>
    </div>
  )
}
