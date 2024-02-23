"use client";
import React from "react";
import BreakButton from "./BreakButton";
import Link from "next/link";

function TrackerContent() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 my-3 md:grid-cols-3">
        <div className=" ">
          <div className="bg-[#354258] rounded-xl flex h-48 p-4 flex-col items-start">
            <p className="text-base text-white not-italic font-normal my-2">
              Check-in Time
            </p>
            <p className="text-5xl text-white not-italic font-semibold leading-8 my-2">
              08:45 <span className="text-[#5B7198]">AM</span>
            </p>
            <button className="bg-[#5BC62D] text-white rounded w-full my-2 px-3 py-2  ">
              Check In
            </button>
          </div>
        </div>

        <div className="">
          <div className="bg-[#354258] rounded-xl flex h-48 p-4 flex-col items-start">
            <p className="text-base text-white not-italic font-normal my-2">
              Check-out Time
            </p>
            <p className="text-5xl text-white not-italic font-semibold leading-8 my-2">
              08:45 <span className="text-[#5B7198]">PM</span>
            </p>
            <button className="bg-[#F5542C] text-white rounded w-full my-2 px-3 py-2  ">
              <Link href={"/employee/tracker/feedbackCard"}>Check Out</Link>
            </button>
          </div>
        </div>

        <div className="">
          <BreakButton />
        </div>
      </div>

      <div>
        <div className=" grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="bg-white border rounded-xl flex p-4 flex-col items-start">
            <p className="text-base text-[#354258] not-italic font-normal my-2">
              Start Overtime
            </p>
            <p className="text-5xl text-[#354258] not-italic font-semibold leading-8 my-2">
              08:45 <span className="text-[#354258]">AM</span>
            </p>
            <button className="bg-[#5BC62D] text-[#354258] rounded w-full my-2 px-3 py-2  ">
              Start Overtime
            </button>
          </div>

          <div className="bg-white border rounded-xl flex p-4 flex-col items-start">
            <p className="text-base text-[#354258] not-italic font-normal my-2">
              End Overtime
            </p>
            <p className="text-5xl text-[#354258] not-italic font-semibold leading-8 my-2">
              08:45 <span className="text-[#354258]">PM</span>
            </p>
            <button className="bg-[#F5542C] text-[#354258] rounded w-full my-2 px-3 py-2  ">
              End Overtime
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackerContent;
