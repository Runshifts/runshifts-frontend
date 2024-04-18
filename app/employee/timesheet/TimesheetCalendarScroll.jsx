import { DAYS_OF_THE_WEEK_STARTING_WITH_MONDAY } from "../../_utils"
import { CalendarDayContainer, CalendarShiftDay } from "../CalendarComponents"

export default function EmployeeTimeSheet() {
  return (
    <>
      <ol className="list-none flex items-stretch gap-2">
        {DAYS_OF_THE_WEEK_STARTING_WITH_MONDAY.map((day, idx) => (
          <CalendarShiftDay key={day} day={idx + 1}>
            <>
              <span>{day}</span>
            </>
          </CalendarShiftDay>
        ))}
      </ol>
    </>
  )
}

// function ShiftsCalenderScroll() {
//   return (
//     <div className=" p-4">
//       <div className="flex overflow-x-auto scrollbar-hide">
//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Monday
//             </p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">9 hours</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">30 minutes</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Tuesday
//             </p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">9 hours</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">30 minutes</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Wednesday
//             </p>
//              <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">9 hours</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">30 minutes</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Thursday
//             </p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#E5F7DD] rounded-full w-fit">Ongoing</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit">30 minutes</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Friday
//             </p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#E5F7DD] rounded-full w-fit px-2 py-1">-</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit px-2 py-1">-</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-center text-gray-600">
//               Saturday
//             </p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#E5F7DD] rounded-full w-fit px-2 py-1">-</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit px-2 py-1">-</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
//           <div className="flex flex-col">
//             <p className=" text-sm font-semibold text-gray-600">Sunday</p>
//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] mb-2">
//               <p className="font-semibold">Hours worked</p>
//               <p className="bg-[#E5F7DD] rounded-full w-fit px-2 py-1">-</p>
//             </div>

//             <div className="flex flex-col items-center text-[10px] px-2 text-[#252525] my-2">
//               <p className="font-semibold">Overtime</p>
//               <p className="bg-[#FFC6C6] rounded-full w-fit px-2 py-1">-</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShiftsCalenderScroll;
