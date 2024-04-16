import React, { useState, useEffect } from "react";
import ColorPicker from "../ColorPicker";

const ShiftsManagementForm = () => {
  const [morningShiftTime, setMorningShiftTime] = useState("");
  const [afternoonShiftTime, setAfternoonShiftTime] = useState("");
  const [eveningShiftTime, setEveningShiftTime] = useState("");
  const [breakDuration, setBreakDuration] = useState("");
  const [geofencingEnabled, setGeofencingEnabled] = useState(false);

  useEffect(() => {
    const fetchShiftsManagementData = async () => {
      try {
        const response = await fetch("organizations/shifts-management/:organizationId");
        const data = await response.json();
        setMorningShiftTime(data.morningShiftTime);
        setAfternoonShiftTime(data.afternoonShiftTime);
        setEveningShiftTime(data.eveningShiftTime);
        setBreakDuration(data.breakDuration);
        setGeofencingEnabled(data.geofencingEnabled);
      } catch (error) {
        console.error("Error fetching shifts management data:", error);
      }
    };

    fetchShiftsManagementData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      morningShiftTime,
      afternoonShiftTime,
      eveningShiftTime,
      breakDuration,
      geofencingEnabled
    };
    try {
      const response = await fetch("{{baseUrl}}/shifts-management/:organizationId", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
       
        console.log("Shifts management settings updated successfully.");
      } else {
    
        console.error("Error updating shifts management settings:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating shifts management settings:", error);
    }
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
          <input
            type="checkbox"
            className="sr-only peer"
            defaultChecked
          />
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
            htmlFor="BusinessName"
            className="text-xs font-thin m-2 leading-4"
          >
            Start Time
          </label>
          <select
            className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
            aria-label="Default select example"
          >
            <option>10 - 30</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option>10 - 30</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option>10 - 30</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option>10 - 30</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option>10 - 30</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
            <option>10 - 30</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>

    <button className="bg-[#7ED957] text-white rounded-md m-2 px-4 py-2">
      + Add Custom Time
    </button>

    <h1 className="m-2 text-sm  font-semibold leading-5">
      Break Duration
    </h1>
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

    <button className="bg-[#7ED957] text-white rounded-md  m-2 px-4 py-2">
      Save changes
    </button>
  </form>
  );
};

export default ShiftsManagementForm;
