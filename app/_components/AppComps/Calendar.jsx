// 'use client'
// import React, { useState, useEffect, useRef } from 'react';

// const Calendar = ({ onClose }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const calendarRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (calendarRef.current && !calendarRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [onClose]);

//   const daysInMonth = (year, month) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (year, month) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const generateCalendar = () => {
//     const year = selectedDate.getFullYear();
//     const month = selectedDate.getMonth();
//     const daysCount = daysInMonth(year, month);
//     const firstDay = getFirstDayOfMonth(year, month);

//     const calendarDays = [];

//     // Fill in empty days before the first day of the month
//     for (let i = 0; i < firstDay; i++) {
//       calendarDays.push(null);
//     }

//     // Fill in the days of the month
//     for (let day = 1; day <= daysCount; day++) {
//       calendarDays.push(day);
//     }

//     return calendarDays;
//   };

//   return (
//     <div ref={calendarRef} className="bg-white p-4 shadow-md">
//       <p className="mb-4">Selected Date: {selectedDate.toDateString()}</p>
//       <table className="table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Sun</th>
//             <th className="px-4 py-2">Mon</th>
//             <th className="px-4 py-2">Tue</th>
//             <th className="px-4 py-2">Wed</th>
//             <th className="px-4 py-2">Thu</th>
//             <th className="px-4 py-2">Fri</th>
//             <th className="px-4 py-2">Sat</th>
//           </tr>
//         </thead>
//         <tbody>
//           {generateCalendar().map((day, index) => (
//             <React.Fragment key={index}>
//               {index % 7 === 0 && <tr className="border-t border-gray-300"></tr>}
//               <td
//                 className={`text-center p-2 ${
//                   day === null ? 'text-gray-300' : day === selectedDate.getDate() ? 'bg-blue-500 text-white' : ''
//                 }`}
//                 onClick={() => day !== null && setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
//               >
//                 {day}
//               </td>
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Calendar;



'use client';

import { Datepicker } from 'flowbite-react';

function Component() {
  return <Datepicker autoHide={false} />;
}


export default Component