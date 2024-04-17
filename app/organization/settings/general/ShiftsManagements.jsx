"use client";
import React, { useState, useEffect } from "react";
import ColorPicker from "../ColorPicker";

const ShiftsManagementForm = ({ handleShiftChange }) => {
  const handleStartTimeChange = (shiftName, startTime) => {
    const stopTime = "";
    handleShiftChange(shiftName, startTime, stopTime);
  };

  const handleStopTimeChange = (shiftName, startTime) => {
    const stopTime = "";
    handleShiftChange(shiftName, startTime, stopTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center my-2">
        <div>
          <p className="text-base  font-normal leading-5">
            Enable Shifts Management
          </p>
        </div>
        <div>
          <label className="relative inline-flex items-end me-5 cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </div>
      </div>
      <hr />
      <div>
        <h1 className="m-2 text-sm  font-semibold leading-5">Morning</h1>
        <div className="mb-4 flex space-x-2">
          <div className="w-1/2">
            <label
              htmlFor="morningStartTime"
              className="text-xs font-thin m-2 leading-4"
            >
              Start Time
            </label>
            <select
              id="morningStartTime"
              onChange={(e) => handleStartTimeChange("morning", e.target.value)}
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              aria-label="Default select example"
            >
              <option>04:00 - 06:00</option>
              <option value="1">06:00 - 10:00</option>
              <option value="2">10:00 - 12:00</option>
            </select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="lastName"
              className="text-xs  font-thin my-2 leading-4"
            >
              Stop Time
            </label>
            <select
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              aria-label="Default select example"
            >
              <option>04:00 - 06:00</option>
              <option value="1">06:00 - 10:00</option>
              <option value="2">10:00 - 12:00</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h1 className="m-2 text-sm  font-semibold leading-5">Afternoon</h1>
        <div className="mb-4 flex space-x-2">
          <div className="w-1/2">
            <label
              htmlFor="BusinessName"
              className="text-xs  font-thin m-2 leading-4"
            >
              Start Time
            </label>
            <select
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              aria-label="Default select example"
            >
              <option>12:00 - 14:00</option>
              <option value="1">14:00 - 16:00</option>
              <option value="2">16:00 - 18:00</option>
            </select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="lastName"
              className="text-xs  font-thin my-2 leading-4"
            >
              Stop Time
            </label>
            <select
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              aria-label="Default select example"
            >
              <option>12:00 - 14:00</option>
              <option value="1">14:00 - 16:00</option>
              <option value="2">16:00 - 18:00</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h1 className="m-2 text-sm  font-semibold leading-5">Evening</h1>
        <div className="mb-4 flex space-x-2">
          <div className="w-1/2">
            <label
              htmlFor="BusinessName"
              className="text-xs  font-thin m-2 leading-4"
            >
              Start Time
            </label>
            <select
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              aria-label="Default select example"
            >
              <option>18:00 - 20:00</option>
              <option value="1">20:00 - 22:00</option>
              <option value="2">22:00 - 24:00</option>
            </select>
          </div>
          <div className="w-1/2">
            <label
              htmlFor="lastName"
              className="text-xs  font-thin my-2 leading-4"
            >
              Stop Time
            </label>
            <select
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              aria-label="Default select example"
            >
              <option>18:00 - 20:00</option>
              <option value="1">20:00 - 22:00</option>
              <option value="2">22:00 - 24:00</option>
            </select>
          </div>
        </div>
      </div>

      <button className="bg-[#7ED957] text-white rounded-md m-2 px-4 py-2">
        + Add Custom Time
      </button>

      <h1 className="m-2 text-sm  font-semibold leading-5">Break Duration</h1>
      <div className="w-full">
        <label
          htmlFor="breakDuration"
          className="text-xs  font-thin m-2 leading-4"
        >
          Minutes
        </label>
        <input
          type="number"
          id="firstName"
          className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
          placeholder="30 minutes"
        />
      </div>

      <div className="m-2">
        <ColorPicker />
      </div>

      <div className="flex justify-between items-center mx-2 my-4">
        <div>
          <p>Enable Geofencing</p>
        </div>
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
    </form>
  );
};

export default ShiftsManagementForm;
