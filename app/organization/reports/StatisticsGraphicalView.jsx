import React, { useEffect, useRef } from "react"
import ApexCharts from "apexcharts"
import { testAttendanceSeries } from "./DefaultBarChartOptions"
import { PastDateDurationSelect, SectionViewSelect } from "./Dropdown"

const testSeries = testAttendanceSeries
  .map((it) => ({
    absent: { x: formatDuration(it.startDate, it.endDate), y: it.absentShifts },
    late: { x: formatDuration(it.startDate, it.endDate), y: it.lateShifts },
  }))
  .reduce(
    (acc, curr) => {
      acc[0] = {
        ...acc[0],
        data: [...acc[0].data, curr.late],
      }
      acc[1] = { ...acc[1], data: [...acc[1].data, curr.absent] }
      return acc
    },
    [
      { name: "Late", color: "#449522", data: [] },
      { name: "Absent", color: "#42526E", data: [] },
    ]
  )

export function StatisticsGraphicalView({ series = [] }) {
  const chartRef = useRef(null)
  useEffect(() => {
    const options = {
      series,
      ...barChartOptions,
    }
    const container = chartRef.current
    if (container && typeof ApexCharts !== "undefined") {
      container.innerHTML = ""
      const chart = new ApexCharts(container, options)
      chart.render()
      return () => {
        chart.destroy()
      }
    }
  }, [series])
  return (
    <>
      <div ref={chartRef} className="grow"></div>
    </>
  )
}

export const barChartOptions = {
  chart: {
    type: "bar",
    height: 333,
    width: "100%",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#546E7A", "#26a69a"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "12px",
      endingShape: "rounded",
      borderRadius: 6,
    },
  },
  xaxis: {
    labels: {
      style: {
        fontSize: "10px",
      },
    },
  },
  legend: {
    position: "bottom",
    show: false,
  },
  title: {
    show: false,
  },
}

export function formatDuration(startDate, endDate) {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const isSameMonth = start.getMonth() === end.getMonth()
  if (isSameMonth) {
    return `${start.toLocaleDateString("en-us", {
      month: "short",
    })} ${start.getDate()} - ${end.getDate()}`
  } else {
    return `${start.toLocaleDateString("en-us", {
      month: "short",
      day: "2-digit",
    })} - ${end.toLocaleDateString("en-us", {
      month: "short",
      day: "2-digit",
    })}`
  }
}
