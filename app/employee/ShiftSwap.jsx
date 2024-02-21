import Image from "next/image";
import Avatar from "./Ellipse2.svg";
import React from "react";

function ShiftSwap() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4 my-2">
      <h1 className="font-semibold text-lg text-[#292D32] mx-3 py-2 ">
        Shift swap requests
      </h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="border border-gray-400 rounded-lg p-3 mx-2">
          <div className=" flex items-center justify-start my-1">
            <Image src={Avatar} alt="avatar" />
            <p className="text-sm px-2">Charlse Jenkins</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="bg-[#E5F7DD] rounded-lg text-sm p-3 m-1">
              <p className="font-bold text-[8px]">His Shift</p>
              <p className="text-xs">Monday Jan 30th - Evening Shift</p>
            </div>

            <div className="bg-[#E5F7DD] rounded-lg text-sm p-3 m-1">
              <p className="font-bold text-[8px]">Your Shift</p>
              <p className="text-xs">Monday Jan 30th - Morning Shift</p>
            </div>
          </div>

          <div className="flex justify-between items-center my-2">
            <button className="bg-[#FFBC33] text-white px-4 py-2 mr-2 rounded-lg">
              Pending
            </button>
            <p className="text-gray-700 font-bold my-1">12:15:23 Left</p>
          </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-3 mx-2">
          <div className=" flex items-center justify-start my-1">
            <Image src={Avatar} alt="avatar" />
            <p className="text-sm px-2">Charlse Jenkins</p>
          </div>

          <div className="flex justify-between">
            <div className="bg-[#E5F7DD] rounded-lg text-sm p-3 m-1">
              <p className="font-bold text-[8px]">His Shift</p>
              <p className="text-xs">Monday Jan 30th - Evening Shift</p>
            </div>

            <div className="bg-[#E5F7DD] rounded-lg text-sm p-3 m-1">
              <p className="font-bold text-[8px]">Your Shift</p>
              <p className="text-xs">Monday Jan 30th - Morning Shift</p>
            </div>
          </div>

          <div className="my-2">
            <button className="bg-[#5BC62D] text-white px-4 py-2 mr-2 rounded-lg">
              Accepted
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShiftSwap;
