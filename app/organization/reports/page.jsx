// "use client"
// import React from "react"
// import LogExport from "../../_components/AppComps/LogExport"
// import ReportFilterGroup from "../../_components/AppComps/ReportFilterGroup"
// import AttendanceSection from "../../_components/ReportsComps/AttendanceSection"
// import WorkedHoursSection from "../../_components/ReportsComps/WorkedHoursSection"
// import ShiftsPerformanceSection from "../../_components/ReportsComps/ShiftsPerformanceSection"
// import LabourCostsSection from "../../_components/ReportsComps/LabourCostsSection"
// import SchedulingSection from "../../_components/ReportsComps/SchedulingSection"
// import RightToWorkDiplay from "../../_components/ReportsComps/RightToWork"
// import Heading from "../../_components/Headings"
// import useHandleMultipleEmployeesSelection from "../../_hooks/useHandleMultipleEmployeesSelection"
// import { useSelector } from "react-redux"

// export default function Reports() {
//   const { employees, locations, departments, positions } = useSelector(
//     (store) => store.organization
//   )
//   const { selectedEmployees, handleRemoveEmployee, handleSelectEmployee } =
//     useHandleMultipleEmployeesSelection({})

//   return (
//     <section className="mx-auto p-3 md:p-6 min-h-screen">
//       <div className="flex items-center justify-between py-3">
//         <Heading as="h1">Reports</Heading>
//         <LogExport />
//       </div>
//       <ReportFilterGroup
//         employees={employees}
//         departments={departments}
//         positions={positions}
//         locations={locations}
//         onEmployeeSelect={handleSelectEmployee}
//         onEmployeeRemove={handleRemoveEmployee}
//       />
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
//         <div className="col-span">
//           <AttendanceSection selectedEmployees={selectedEmployees} />
//         </div>
//         <div className="col-span">
//           <WorkedHoursSection selectedEmployees={selectedEmployees} />
//         </div>
//       </div>
//        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[9px] mt-4">
//         <div className="col-span">
//           <ShiftsPerformanceSection selectedEmployees={selectedEmployees} />
//         </div>
//         <div className="col-span">
//           <LabourCostsSection selectedEmployees={selectedEmployees} />
//         </div>
//         <div className="col-span">
//           <SchedulingSection selectedEmployees={selectedEmployees} />
//         </div>
//         {selectedEmployees.length === 1 && (
//           <div className="col-span-1">
//             <RightToWorkDiplay employee={selectedEmployees[0]} />
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }


export default function Test(){
  <>Somethings not right!</>
}