import React, { useEffect } from "react"
import ApexCharts from "apexcharts"
import { barChartOptions, testAttendanceSeries } from "./DefaultChartOptions"
import StatisticsGraphicalView, {
  formatDuration,
} from "./StatisticsGraphicalView"
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
function Barchart() {
  return (
    <div>
      <div class=" w-full bg-white rounded-xl shadow-xl p-4 md:p-6">
        <div className="flex justify-between items-center">
          <p>Attendance</p>
        </div>
        <div className="flex overflow-auto ">
          <StatisticsGraphicalView series={testSeries} />
        </div>

        <div class="grid grid-cols-1 items-center dark:border-gray-700 justify-between">
          <div class="flex justify-between items-center pt-5">
            <div className="flex">
              <div className="flex items-center px-1">
                <div className="rounded-full h-2 w-2 bg-[#42526E] "></div>
                <p className="px-1">Absent</p>
              </div>
              <div className="flex items-center px-1">
                <div className="rounded-full h-2 w-2 bg-[#449522] "></div>
                <p className="px-1">Late</p>
              </div>
            </div>

            <select
              className=" text-gray-500 m-2 mx-2 h-10 w-32 rounded-md flex justify-between items-center"
              aria-label="Default select example"
            >
              <option>Graphical view</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Barchart

// import React, { useState } from "react";
// import Chart from "react-apexcharts";

// const Barchart = () => {
//   const [chartData, setChartData] = useState({
//     options: {
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           borderRadius: 10,
//           borderRadiusApplication: 'around',
//           borderRadiusWhenStacked: 'all',
//           columnWidth: '30%',
//           barHeight: '70%',
//           distributed: false,
//           rangeBarOverlap: true,
//           rangeBarGroupRows: false,
//           hideZeroBarsWhenGrouped: false,
//           isDumbbell: true,
//           dumbbellColors: undefined,
//           isFunnel: false,
//           isFunnel3d: true,
//           colors: {
//             ranges: [{
//               from: 0,
//               to: 0,
//               color: undefined
//             }],
//             backgroundBarColors: [],
//             backgroundBarOpacity: 1,
//             backgroundBarRadius: 0,
//           },
//           dataLabels: {
//             position: 'top',
//             maxItems: 100,
//             hideOverflowingLabels: true,
//             orientation: 'vertical', // Note: Provide 'horizontal' as a string
//             total: {
//               enabled: false,
//               formatter: undefined,
//               offsetX: 0,
//               offsetY: 0,
//               style: {
//                 color: '#373d3f',
//                 fontSize: '12px',
//                 fontFamily: undefined,
//                 fontWeight: 600,
//                 padding: '20px 10px'
//               }
//             }
//           }
//         }
//       },
//       colors: ["#42526E", "#449522"],
//       chart: {
//         id: "basic-bar",
//       },
//       xaxis: {
//         categories: [
//           "Sept 1-6",
//           "Sep 7-12",
//           "Sept 13-18",
//           "Sep 19-24",
//           "Sep 25-30",
//         ],
//       },
//       responsive: [
//         {
//           breakpoint: 768,
//           options: {
//             plotOptions: {
//               bar: {
//                 columnWidth: '20%',
//                 barHeight: '40%',
//               },
//               style: {
//                 color: '#373d3f',
//                 fontSize: '12px',
//                 fontWeight: 600,
//                 padding: ' 10px'
//               }
//             }
//           }
//         },
//         {
//           breakpoint: 1024,  // Assuming md screen size is 1024px
//           options: {
//             plotOptions: {
//               bar: {
//                 columnWidth: '60%',
//                 barHeight: '50%',
//               }
//             }
//           }
//         }
//       ]
//     },

//     series: [
//       {
//         name: "Absent",
//         data: [2, 2.5, 3, 4, 4.5],
//       },
//       {
//         name: "Late",
//         data: [5.5, 6, 6, 8, 5],
//       },

//     ],
//   });

//   return (
//     <div className="min-w-screen bg-white p-3 rounded-lg shadow-xl">
//       <div className="flex justify-between items-center">
//         <p>Attendance</p>
//         <select
//           className="bg-white text-gray-500 m-2  mx-2 h-10 w-32 rounded-md flex justify-between items-center"
//           aria-label="Default select example"
//         >
//           <option>Last 30 days</option>
//           <option value="1">Last 7 days</option>
//           <option value="2">Last 14 days</option>
//           <option value="3">Last 3 months</option>
//         </select>
//       </div>

//       <div>
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={chartData.options}
//               series={chartData.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Barchart;

// import React, { useState } from "react";
// import Chart from "react-apexcharts";

// const Barchart = () => {
//   const [chartData, setChartData] = useState({
//     options: {
//       plotOptions: {
//         bar: {
//           horizontal: false,
//           borderRadius: 10,
//           columnWidth: '30%',
//           barHeight: '70%',
//         }
//       },
//       colors: ["#42526E", "#449522"],
//       chart: {
//         id: "basic-bar",
//       },
//       xaxis: {
//         categories: [
//           "Sept 1-6",
//           "Sep 7-12",
//           "Sept 13-18",
//           "Sep 19-24",
//           "Sep 25-30",
//         ],
//       },
//       responsive: [
//         {
//           breakpoint: 768,
//           options: {
//             plotOptions: {
//               bar: {
//                 columnWidth: '70%',
//                 barHeight: '60%',
//               }
//             }
//           }
//         },
//         {
//           breakpoint: 1024,  // Assuming md screen size is 1024px
//           options: {
//             plotOptions: {
//               bar: {
//                 columnWidth: '60%',
//                 barHeight: '50%',
//               }
//             }
//           }
//         }
//       ]
//     },
//     series: [

//       {
//         name: "Absent",
//         data: [2, 2.5, 3, 4, 4.5],
//       },
//       {
//         name: "Late",
//         data: [5.5, 6, 6, 8, 5],
//       },
//     ],
//   });

//   return (
//     <div className=" bg-white p-3 rounded-lg shadow-xl">
//       <div className="flex justify-between items-center">
//         <p>Attendance</p>
//         <select
//           className="bg-white text-gray-500 m-2  mx-2 h-10 w-32 rounded-md flex justify-between items-center"
//           aria-label="Default select example"
//         >
//           <option>Last 30 days</option>
//           <option value="1">Last 7 days</option>
//           <option value="2">Last 14 days</option>
//           <option value="3">Last 3 months</option>
//         </select>
//       </div>

//       <div>
//         <div className="row">
//           <div className="mixed-chart">
//             <Chart
//               options={chartData.options}
//               series={chartData.series}
//               type="bar"
//               width="100%"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Barchart;
