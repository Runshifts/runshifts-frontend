// // import React, { useState } from "react";
// // import Chart from "react-apexcharts";

// // const Donut = () => {
// //   const [donutData, setDonutData] = useState({
// //     options: {
// //       colors: ["#FAA995", "#8294B4", "#7ED957", "#FFCD66"],
// //     },
// //     series: [54.2, 11.8, 9, 16],
// //     labels: ["24 shifts completed", "24 shifts completed", "24 shifts completed", "24 shifts completed", "24 shifts completed"],
// //   });

// //   return (
// //     <div classNameName=" bg-white rounded-xl shadow-xl">
// //       <h1 classNameName="text-gray-900 text-sm text-center p-4 not-italic font-normal leading-5 uppercase">
// //         EMPLOYEES SHIFT PERFORMANCE
// //       </h1>
// //       <hr />
// //       <div classNameName="donut">
// //         <Chart
// //           options={donutData.options}
// //           series={donutData.series}
// //           type="donut"
// //           width="380"
// //         />
// //       </div>

// //       <div classNameName="flex justify-center items-center p-4">
// //         <div>
// //           <h1 classNameName="text-[#7ED957] text-center text-base not-italic font-bold leading-7">
// //             54.2%
// //           </h1>
// //           <p classNameName="text-[#4B5157] text-center not-italic font-normal text-[11px]">
// //             Shifts Completed
// //           </p>
// //         </div>

// //         <div>
// //           <h1 classNameName="text-[#8294B4] text-center text-base not-italic font-bold leading-7">
// //             8%
// //           </h1>
// //           <p classNameName="text-[#4B5157] text-center not-italic font-normal text-[11px]">
// //             Shifts Swapped
// //           </p>
// //         </div>

// //         <div>
// //           <h1 classNameName="text-[#FFCD66] text-center text-base not-italic font-bold leading-7">
// //             9%
// //           </h1>
// //           <p classNameName="text-[#4B5157] text-center not-italic font-normal text-[11px]">
// //             Shifts accepted
// //           </p>
// //         </div>

// //         <div>
// //           <h1 classNameName="text-[#4B5157] text-center text-base not-italic font-bold leading-7">
// //             16%
// //           </h1>
// //           <p classNameName="text-[#FAA995] text-center not-italic font-normal text-[11px]">
// //             Shifts rejected
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Donut;

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// import { Doughnut, getDatasetAtEvent } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// function Donut() {
//   const data = {
//     labels: [
//       "24 shifts completed",
//       "24 shifts completed",
//       "24 shifts completed",
//       "24 shifts completed",
//       "24 shifts completed",
//     ],
//     datasets: [
//       {
//         label: "Poll",
//         data: [54.2, 11.8, 9, 16],
//         backgroundColor: ["#7ED957", "#8294B4", "#FFCD66", "#FAA995"],
//         borderColor: ["#7ED957", "#8294B4", "#FFCD66", "#FAA995"],

//       },
//     ],
//   };

//   const options = {};

//   const textCenter = {
//     id: "textCenter",
//     beforeDataSetsDraw(chart, args, plugginOptions) {
//       const { ctx, data } = chart;

//       ctx.save();
//       ctx.font = "bolder 30px inter";
//       ctx.fillStyle = "red";
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.fillText(
//         "text",
//         chart.getDatasetMeta(0).data[0].x,
//         chart.getDatasetMeta(0).data[0].y
//       );
//     },
//   };

//   const sliceThickness = {
//     id: 'sliceThickness',
//     beforeDraw(chart, plugins) {
//       console.log(chart.chartArea.width);
//       // console.log(chart.getDatasetMeta(0).data[1].innerRadius)
//       // console.log(chart.getDatasetMeta(0).data[1].outerRadius = 200)

//       let sliceThicknessPixel = [300, 250];
//       sliceThicknessPixel.forEach((thickness, index) => {
//         chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thickness) * 100;
//       })
//     }
//   }

//   return (
//     <div classNameName=" bg-white rounded-xl shadow-xl">
//       <h1 classNameName="text-gray-900 text-sm text-center p-4 not-italic font-normal leading-5 uppercase">
//         EMPLOYEES SHIFT PERFORMANCE
//       </h1>
//       <hr />{" "}
//       <Doughnut
//         data={data}
//         options={options}
//         plugins={[textCenter, sliceThickness]}

//       ></Doughnut>
//     </div>
//   );
// }

// export default Donut;

import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const DonutChart = () => {
  const getChartOptions = () => {
    return {
      series: [54.2, 11.8, 9, 16],
      colors: ["#7ED957", "#8294B4", "#FFCD66", "#FAA995"],
      chart: {
        height: 320,
        width: "100%",
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
              show: true,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: "Shifts Performance",
                fontFamily: "Inter, sans-serif",
                // formatter: function (w) {
                //   const sum = w.globals.seriesTotals.reduce((a, b) => {
                //     return a + b;
                //   }, 0);
                //   return "$" + sum + "k";
                // },
              },
              value: {
                show: false,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                formatter: function (value) {
                  return value + "%";
                },
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
      labels: ["Shifts completed", "shifts swapped", "shifts accepted", "shifts rejected"],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        dataLabels: {
          enabled: true,
        },
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "%";
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + "%";
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
  };

  useEffect(() => {
    if (
      document.getElementById("donut-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("donut-chart"),
        getChartOptions()
      );
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div>
      <div className="min-w-sm bg-white rounded-lg shadow-xl p-4 md:p-6">
      <h1 className='text-gray-900 text-sm text-center p-4 not-italic font-normal leading-5 uppercase'>Employees shift performance</h1>
      <hr />
        <div className="py-6" id="donut-chart"></div>

        {/* <div classNameName="flex justify-center items-center text-xs p-4">
          <div className="">
            <h1 classNameName="text-[#7ED957] text-center text-base not-italic font-bold leading-7">
              54.2%
            </h1>
            <p classNameName="text-[#4B5157] text-center not-italic font-normal text-[11px]">
              Shifts Completed
            </p>
          </div>

          <div>
            <h1 classNameName="text-[#8294B4] text-center text-base not-italic font-bold leading-7">
              8%
            </h1>
            <p classNameName="text-[#4B5157] text-center not-italic font-normal text-[11px]">
              Shifts Swapped
            </p>
          </div>

          <div>
            <h1 classNameName="text-[#FFCD66] text-center text-base not-italic font-bold leading-7">
              9%
            </h1>
            <p classNameName="text-[#4B5157] text-center not-italic font-normal text-[11px]">
              Shifts accepted
            </p>
          </div>

          <div>
            <h1 classNameName="text-[#4B5157] text-center text-base not-italic font-bold leading-7">
              16%
            </h1>
            <p classNameName="text-[#FAA995] text-center not-italic font-normal text-[11px]">
              Shifts rejected
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DonutChart;

