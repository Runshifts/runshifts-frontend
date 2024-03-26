import React from "react";
import Statistics from "./Statistics"
import ShiftsTicket from "./ShiftsTickets";
import CurrentShifts from "./CurrentShifts";

function page() {
  return (
    <section className="p-6 h-screen">
      <h1 className="custom-h1">Shift Management</h1>

      <div className="flex flex-row">
        <select
          className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:text-sm "
          aria-label="Default select example"
        >
          <option>Search employees...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div className="hidden md:block">
          <select
            className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:text-sm "
            aria-label="Default select example"
          >
            <option>Location</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:text-sm "
            aria-label="Default select example"
          >
            <option>Company</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:text-sm "
            aria-label="Default select example"
          >
            <option>Week</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <select
          className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:hidden "
          aria-label="Default select example"
        >
          <option>Filter</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <Statistics />

      <ShiftsTicket />

      <CurrentShifts />
    </section>
  )
}

export default page;

function PlusSvg() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 12.75H6.5C6.09 12.75 5.75 12.41 5.75 12C5.75 11.59 6.09 11.25 6.5 11.25H18.5C18.91 11.25 19.25 11.59 19.25 12C19.25 12.41 18.91 12.75 18.5 12.75Z"
        fill="white"
      />
      <path
        d="M12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V6C11.75 5.59 12.09 5.25 12.5 5.25C12.91 5.25 13.25 5.59 13.25 6V18C13.25 18.41 12.91 18.75 12.5 18.75Z"
        fill="white"
      />
    </svg>
  );
}

// 'use client'
// import { useState } from 'react';

// const ShiftSchedule = () => {
//   const [selectedDays, setSelectedDays] = useState([]);

//   const handleMorningClick = (day) => {
//     if (selectedDays.includes(day)) {
//       const newSelectedDays = selectedDays.filter((selectedDay) => selectedDay !== day);
//       setSelectedDays(newSelectedDays);
//     } else {
//       const newSelectedDays = [...selectedDays, day];
//       setSelectedDays(newSelectedDays);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center my-8 ">
//       <div className="mr-8 rounded border p-8 my-5">
//         <h2 className="text-xl font-semibold mb-4">Morning Shift</h2>
//         {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
//           <div
//             key={day}
//             className={`cursor-pointer mb-2 ${
//               selectedDays.includes(day) ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-300'
//             }`}
//             onClick={() => handleMorningClick(day)}
//           >
//             {day}
//           </div>
//         ))}
//       </div>
//       <div className=' rounded border p-8 my-5'>
//         <h2 className="text-xl font-semibold mb-4">Evening Shift</h2>
//         {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
//           <div
//             key={day}
//             className={`mb-2 ${
//               selectedDays.includes(day) ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-300'
//             }`}
//             onClick={() => handleMorningClick(day)}
//           >
//             {day}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShiftSchedule;
