import React from "react";
import Avatar from "./Ellipse2.svg";
import Image from "next/image";

function ShiftReq() {
  return (
    <section className="text-[#252525] my-4 p-3 bg-white rounded-lg shadow-xl">
      <h1 className="font-bold py-1">Shift Requests</h1>
      <p className="font-semibold text-sm my-2">Incoming Requests</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="border border-gray-400 rounded-lg p-3">
          <div className=" flex items-center justify-start my-1">
            <Image width={30} height={30} src={Avatar} alt="avatar" />
            <p className="text-sm px-2">Charlse Jenkins</p>
          </div>

          <div className="bg-[#E5F7DD] rounded-lg text-sm my-2">
            <p className="font-bold">Open Shift</p>
            <p>Monday Jan 30th - Evening Shift</p>
          </div>

          <p className="text-gray-700 font-bold my-1">12:15:23 Left</p>

          <div>
            <button className="bg-[#7ED957] text-white px-4 py-2 mr-2 rounded-lg">
              Accept
            </button>
            <button className="text-red-700 font-semibold">Reject</button>
          </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-3">
          <div className=" flex items-center justify-start my-1">
            <Image width={30} height={30} src={Avatar} alt="avatar" />
            <p className="text-sm px-2">Charlse Jenkins</p>
          </div>

          <div className="bg-[#E5F7DD] rounded-lg text-sm my-2">
            <p className="font-bold">Open Shift</p>
            <p>Monday Jan 30th - Evening Shift</p>
          </div>

          <p className="text-gray-700 font-bold my-1">12:15:23 Left</p>

          <div>
            <button className="bg-[#7ED957] text-white px-4 py-2 mr-2 rounded-lg">
              Accept
            </button>
            <button className="text-red-700 font-semibold">Reject</button>
          </div>
        </div>

        <div className="border border-gray-400 rounded-lg p-3">
          <div className=" flex items-center justify-start my-1">
            <Image width={30} height={30} src={Avatar} alt="avatar" />
            <p className="text-sm px-2">Charlse Jenkins</p>
          </div>

          <div className="bg-[#E5F7DD] rounded-lg text-sm my-2">
            <p className="font-bold">Open Shift</p>
            <p>Monday Jan 30th - Evening Shift</p>
          </div>

          <p className="text-gray-700 font-bold my-1">12:15:23 Left</p>

          <div>
            <button className="bg-[#7ED957] text-white px-4 py-2 mr-2 rounded-lg">
              Accept
            </button>
            <button className="text-red-700 font-semibold">Reject</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShiftReq;
