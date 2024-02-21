import Image from "next/image";
import Avatar from "../Ellipse2.svg";
import React from "react";

function ShiftSwapReq() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4 my-2">
      <h1 className="font-semibold text-lg text-[#292D32] mx-3 py-2 ">
        Shift swap requests
      </h1>
      <div className="flex justify-between items-center">
        <p className="text-sm not-italic font-semibold leading-5 text-[#36322F] mx-3 py-2">
          Incoming Requests
        </p>
        <p className="text-sm not-italic font-semibold leading-5 text-[#36322F] mx-3 py-2">
          Incoming Requests
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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

          <p className="text-gray-700 font-bold my-1">12:15:23 Left</p>

          <div className="flex  items-center my-2">
            <button className="bg-[#5BC62D] text-white px-4 py-1 mr-2 rounded">
              Accept
            </button>
            <button className=" text-[#B22A09] px-4 py-2 mr-2 rounded-lg">
              Reject
            </button>
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

          <p className="text-gray-700 font-bold my-1">12:15:23 Left</p>

          <div className="flex  items-center my-2">
            <button className="bg-[#5BC62D] text-white px-4 py-1 mr-2 rounded">
              Accept
            </button>
            <button className=" text-[#B22A09] px-4 py-2 mr-2 rounded-lg">
              Reject
            </button>
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

          <p className="text-gray-700 font-bold my-1">12:15:23 Left</p>

          <div className="flex  items-center my-2">
            <button className="bg-[#FFBC33] text-white px-4 py-1 mr-2 rounded">
              Pending
            </button>
            <button className=" text-[#B22A09] px-4 py-2 mr-2 rounded-lg">
              Cancel Request
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ShiftSwapReq;
