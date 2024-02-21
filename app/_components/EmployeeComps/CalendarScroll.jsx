import React from "react";

function CalendarScroll() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4">
      <h1 className="font-semibold text-lg text-[#292D32] mx-3 py-2">
        Calendar
      </h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Monday</p>
          <p className=" text-xs text-gray-600 bg-red-200 rounded-full">
             8am-2pm
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Tuesday</p>
          <p className=" text-xs text-gray-600 text-center bg-red-200 rounded-full">
             8am-2pm
          </p>
          <p className=" text-xs text-white my-1 p-1 bg-[#DE350B] rounded-full">
             2:30pm-9pm
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Wednesday</p>
         <p className=" text-xs text-gray-600 text-center bg-red-200 rounded-full">
             8am-2pm
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Thursday</p>
          <p className=" text-xs text-center text-gray-600 rounded-full">
             No shifts
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Friday</p>
         <p className=" text-xs text-gray-600 text-center bg-red-200 rounded-full">
             8am-2pm
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Saturday</p>
         <p className=" text-xs text-gray-600 text-center bg-red-200 rounded-full">
             8am-2pm
          </p>
          </div>       
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
          <p className=" text-sm font-semibold text-gray-600">Sunday</p>
         <p className=" text-xs text-gray-600 text-center bg-red-200 rounded-full">
             8am-2pm
          </p>
          </div>       
        </div>
      </div>
    </div>
  );
}

export default CalendarScroll;
