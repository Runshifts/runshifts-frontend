import React from "react";
import Setttings from "../page";
function Notification() {
  return (
    <div>
      <Setttings />

      <div className="grid grid-rows-4 grid-flow-col gap-4 mx-4">
        <div className="bg-white w-[309px] h-[70px] rounded-xl shadow-xl  flex items-center justify-between">
          <p className="text-xs px-3 not-italic font-normal leading-5 text-[#1D2433]">
            Receive a notification of schedule
          </p>
          <div>
            <label className="relative inline-flex items-end me-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                defaultUnchecked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>

        <div className="bg-white w-[309px] h-[70px]  rounded-xl shadow-xl  flex items-center justify-between">
          <p className="text-xs px-3 not-italic font-normal leading-5 text-[#1D2433]">
            Receive a notification of payout
          </p>
          <div>
            <label className="relative inline-flex items-end me-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                defaultChecked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>

        <div className="bg-white  w-[309px] h-[70px] rounded-xl shadow-xl  flex items-center justify-between">
          <p className="text-xs px-3 not-italic font-normal leading-5 text-[#1D2433]">
            Receive a notification of employee shift change
          </p>
          <div>
            <label className="relative inline-flex items-end me-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                defaultChecked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>

        <div className="bg-white w-[309px] h-[70px]  rounded-xl shadow-xl  flex items-center justify-between">
          <p className="text-xs px-3 not-italic font-normal leading-5 text-[#1D2433]">
            Receive a notification of employee on break
          </p>
          <div>
            <label className="relative inline-flex items-end me-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                defaultChecked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>

        <div className="bg-white w-[309px] h-[70px]  rounded-xl shadow-xl  flex items-center justify-between">
          <p className="text-xs px-3 not-italic font-normal leading-5 text-[#1D2433]">
            Receive a notification of employee right to work
          </p>
          <div>
            <label className="relative inline-flex items-end me-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                defaultChecked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>

        <div className="bg-white w-[309px] h-[70px]  rounded-xl shadow-xl  flex items-center justify-between">
          <p className="text-xs px-3 not-italic font-normal leading-5 text-[#1D2433]">
            Receive a notification of package expiration
          </p>
          <div>
            <label className="relative inline-flex items-end me-5 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                defaultChecked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Notification;
