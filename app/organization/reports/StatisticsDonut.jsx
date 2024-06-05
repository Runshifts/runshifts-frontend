"use client"
import React, { useEffect, useRef } from "react"
import ApexCharts from "apexcharts"

const StatisticsDonut = ({
  series = [],
  colors = [],
  labels = [],
  height,
  width,
  annotations = {},
}) => {
  const getChartOptions = () => {
    return {
      series,
      colors,
      chart: {
        height: height || 320,
        width: width || "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: !true,
              total: {
                show: false,
              },
            },
            size: "80%",
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels,
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "%"
          },
        },
      },
      annotations,
    }
  }

  const donutRef = useRef(null)

  useEffect(() => {
    if (donutRef.current && typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(donutRef.current, getChartOptions())
      chart.render()
      return () => {
        chart.destroy()
      }
    }
  }, [donutRef.current])

  return (
    <>
      <div className="py-6 flex items-center justify-center" ref={donutRef}></div>
    </>
  )
}

export default StatisticsDonut
