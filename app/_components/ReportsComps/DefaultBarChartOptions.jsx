"use client"
export const barChartOptions = {
  chart: {
    type: "bar",
    height: "400px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "12px",
      borderRadiusApplication: "center",
      borderRadius: 100,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },

  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: false,
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    categories: [1, 2, 3, 4, 5, 6, 7],
    show: true,
    floating: false,
    lines: {
      show: true,
      value: 50,
      position: "bottom",
      color: "#FF0000",
      strokeDashArray: 5,
      offsetX: 0,
      offsetY: 0,
      label: {
        show: true,
        text: "Threshold",
      },
    },
  },
  fill: {
    opacity: 0.1,
  },
  tooltip: {
    style: {
      fontSize: "12px", // Set font size
      fontFamily: undefined, // Set font family if needed
    },
    theme: "dark", // Set tooltip theme: 'light' or 'dark'
    x: {
      show: true,
      format: "dd MMM", // Date format for x-axis
      formatter: undefined, // Custom formatter function
    },
    y: {
      formatter: function (val) {
        return val + " counts" // Custom formatter for y-axis values
      },
    },
    marker: {
      show: true,
    },
    items: {
      display: "flex",
    },
    fixed: {
      enabled: false,
      position: "bottomLeft", // Available positions: 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
      offsetX: 0,
      offsetY: 0,
    },
  },
}

export const testAttendanceSeries = [
  {
    startDate: "2024-03-18T23:00:00.000Z",
    endDate: "2024-03-26T22:59:59.999Z",
    absentShifts: 0,
    lateShifts: 0,
  },
  {
    startDate: "2024-03-26T23:00:00.000Z",
    endDate: "2024-04-03T22:59:59.999Z",
    absentShifts: 0,
    lateShifts: 0,
  },
  {
    startDate: "2024-04-03T23:00:00.000Z",
    endDate: "2024-04-11T22:59:59.999Z",
    absentShifts: 0,
    lateShifts: 1,
  },
  {
    startDate: "2024-04-11T23:00:00.000Z",
    endDate: "2024-04-19T22:59:59.999Z",
    absentShifts: 4,
    lateShifts: 0,
  },
  {
    startDate: "2024-04-19T23:00:00.000Z",
    endDate: "2024-04-27T22:59:59.999Z",
    absentShifts: 2,
    lateShifts: 1,
  },
  {
    startDate: "2024-04-27T23:00:00.000Z",
    endDate: "2024-05-05T22:59:59.999Z",
    absentShifts: 1,
    lateShifts: 0,
  },
  {
    startDate: "2024-05-05T23:00:00.000Z",
    endDate: "2024-05-13T22:59:59.999Z",
    absentShifts: 0,
    lateShifts: 0,
  },
  {
    startDate: "2024-05-13T23:00:00.000Z",
    endDate: "2024-05-21T22:59:59.999Z",
    absentShifts: 2,
    lateShifts: 0,
  },
  {
    startDate: "2024-05-21T23:00:00.000Z",
    endDate: "2024-05-29T22:59:59.999Z",
    absentShifts: 0,
    lateShifts: 0,
  },
]
