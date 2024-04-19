"use client";

import React from "react";
import Options from "./Options";

const ShiftsManagementForm = ({ handleShiftTimeChange, shiftManagementEnabled, setShiftManagementEnabled,  morningShift, afternoonShift, eveningShift, }) => {


  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <div>
          <p className="text-base font-normal leading-5">Enable Shifts Management</p>
        </div>
        <div>
          <label className="relative inline-flex items-end me-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={shiftManagementEnabled}
              onChange={(e) => setShiftManagementEnabled(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </div>
      </div>
      <hr />
      <div>
        <h1 className="m-2 text-sm font-semibold leading-5">Morning</h1>
        <div className="mb-4 flex space-x-2">
          <div className="w-1/2 flex flex-col">
            <label htmlFor="morningStartTime" className="text-xs font-thin m-2 leading-4">
              Start Time
            </label>
            <Options
              id="morningStartTime"
              disabled={!shiftManagementEnabled}
              value={morningShift.startTime}
              onChange={(e) => handleShiftTimeChange("morning", "startTime", e.target.value)}
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label htmlFor="morningStopTime" className="text-xs font-thin my-2 leading-4">
              Stop Time
            </label>
            <Options
              id="morningStopTime"
              disabled={!shiftManagementEnabled}
              value={morningShift.stopTime}
              onChange={(e) => handleShiftTimeChange("morning", "stopTime", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="m-2 text-sm  font-semibold leading-5">Afternoon</h1>
        <div className="mb-4 flex space-x-2">
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor="BusinessName"
              className="text-xs  font-thin m-2 leading-4"
            >
              Start Time
            </label>
            <Options 
            id="afternoonStartTime"
            disabled={!shiftManagementEnabled}
            value={afternoonShift.startTime}
            onChange={(e) => handleShiftTimeChange("afternoon", "startTime", e.target.value)}
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor="lastName"
              className="text-xs  font-thin my-2 leading-4"
            >
              Stop Time
            </label>
            <Options 
            id="afternoonStopTime"
            disabled={!shiftManagementEnabled}
            value={afternoonShift.stopTime}
            onChange={(e) => handleShiftTimeChange("afternoon", "StopTime", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="m-2 text-sm  font-semibold leading-5">Evening</h1>
        <div className="mb-4 flex space-x-2">
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor="BusinessName"
              className="text-xs  font-thin m-2 leading-4"
            >
              Start Time
            </label>
            <Options 
            
            id="eveningStartTime"
              disabled={!shiftManagementEnabled}
              value={eveningShift.startTime}
              onChange={(e) => handleShiftTimeChange("evening", "startTime", e.target.value)}
              />
          </div>
          <div className="w-1/2 flex flex-col">
            <label
              htmlFor="lastName"
              className="text-xs  font-thin my-2 leading-4"
            >
              Stop Time
            </label>
            <Options 
            id="eveningStopTime"
            disabled={!shiftManagementEnabled}
            value={eveningShift.stopTime}
            onChange={(e) => handleShiftTimeChange("evening", "stopTime", e.target.value)}
            />
          </div>
        </div>
      </div>

      <button type='button' className="bg-[#7ED957] text-white rounded-md m-2 px-4 py-2">
        + Add Custom Time
      </button>

   
    </div>
  );
};

export default ShiftsManagementForm;
