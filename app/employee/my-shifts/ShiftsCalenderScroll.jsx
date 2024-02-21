import Image from "next/image";
import Avatar from "./Ellipse.svg";
import Avatar1 from "./Ellipse1.svg";
import React from "react";

function ShiftsCalenderScroll() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg text-[#292D32] mx-3 py-2">
          My Shifts
        </h1>

        <button className="p-2 mx-1 bg-[#5BC62D] text-white text-sm rounded-sm">
          Request overtime
        </button>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
            <p className=" text-sm font-semibold text-center text-gray-600">Monday</p>
            <div className="flex items-center justify-center bg-red-200 rounded-full ">
                <Image height={24} width={24} src={Avatar} alt="alt" />
                <div className=" px-2 text-[#252525]">
                  <h1 className="font-bold text-sm">Ottobong</h1>
                  <p className="text-xs">8am-2pm</p>
                </div>
              </div>

               <div className="flex items-center justify-center bg-[#E5F7DD] rounded-full my-1">
                <Image height={24} width={24} src={Avatar1} alt="alt" />
                <div className=" px-2 text-[#252525]">
                  <h1 className="font-bold text-sm">Charles</h1>
                  <p className="text-xs">3pm-9pm </p>
                </div>
              </div>
          </div>
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
            <p className=" text-sm font-semibold text-center text-gray-600">Tuesday</p>
            <div className="flex items-center justify-center bg-[#FEC] rounded-full ">
                <Image height={24} width={24} src={Avatar} alt="alt" />
                <div className=" px-2 text-[#252525]">
                  <h1 className="font-bold text-sm">My shift</h1>
                  <p className="text-xs">8am-2pm</p>
                </div>
              </div>
           
          </div>
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
            <p className=" text-sm font-semibold text-center text-gray-600">Wednesday</p>
             <div className="flex items-center justify-center bg-[#FEC] rounded-full ">
                <Image height={24} width={24} src={Avatar} alt="alt" />
                <div className=" px-2 text-[#252525]">
                  <h1 className="font-bold text-sm">My shift</h1>
                  <p className="text-xs">8am-2pm</p>
                </div>
              </div>
          </div>
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
            <p className=" text-sm font-semibold text-center text-gray-600">Thursday</p>
            <div className="flex items-center justify-center bg-[#FEC] rounded-full ">
                <Image height={24} width={24} src={Avatar} alt="alt" />
                <div className=" px-2 text-[#252525]">
                  <h1 className="font-bold text-sm">My shift</h1>
                  <p className="text-xs">8am-2pm</p>
                </div>
              </div>
              <p className="border border-dotted border-gray-800 rounded m-1 text-center text-xs">Open shift</p>
          </div>
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
            <p className=" text-sm font-semibold text-center text-gray-600">Friday</p>
             <div className="flex items-center justify-center bg-[#FEC] rounded-full ">
                <Image height={24} width={24} src={Avatar} alt="alt" />
                <div className=" px-2 text-[#252525]">
                  <h1 className="font-bold text-sm">My shift</h1>
                  <p className="text-xs">8am-2pm</p>
                </div>
              </div>
          </div>
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
            <p className=" text-sm font-semibold text-center text-gray-600">Saturday</p>
             <div className="flex items-center justify-center bg-[#FEC] rounded-full ">
                <Image height={24} width={24} src={Avatar} alt="alt" />
                <div className=" px-2 text-[#252525]">
                  <h1 className="font-bold text-sm">My shift</h1>
                  <p className="text-xs">8am-2pm</p>
                </div>
              </div>
          </div>
        </div>
        <div className="flex-none w-32 h-28 border-dotted border-2 border-gray-300 rounded-md  bg-white m-1 flex items-center justify-center md:w-36">
          <div className="flex flex-col">
            <p className=" text-sm font-semibold text-gray-600">Sunday</p>
             <div className="flex items-center justify-center bg-[#FEC] rounded-full ">
                <Image height={24} width={24} src={Avatar} alt="alt" />
                <div className=" px-2 text-[#252525]">
                  <h1 className="font-bold text-sm">My shift</h1>
                  <p className="text-xs">8am-2pm</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShiftsCalenderScroll;

