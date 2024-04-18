"use client";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import SettingTab from "../page";
import ColorPicker from "../ColorPicker";
import useAxios from "../../../_hooks/useAxios";
import { OrganizationContext } from "../../../_providers/OrganizationProvider";
import AddLocationInputs from "./AddLocationInputs";
import toast from "react-hot-toast";
import Options from "./Options";
import { LocationsContext } from "../../../_providers/LocationsProvider";

const General = () => {
  const fetchData = useAxios();

  const { organization } = useContext(OrganizationContext);
  const { locations } = useContext(LocationsContext);

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          businessName: organization?.name || "",
          numberOfWorkers: "",
          officeAddress: [""],
          image: null,
          shifts: {
            morning: { startTime: "", stopTime: "" },
            afternoon: { startTime: "", stopTime: "" },
            evening: { startTime: "", stopTime: "" },
          },
        };
  });

  const [ officeAddress, setOfficeAddress ] = useState(
    locations.length>0 ? [...locations] : [{address:''}]);
  console.log(officeAddress)

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [enableShiftsManagement, setEnableShiftsManagement] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleShiftChange = (shiftName, startTime, stopTime) => {
    setFormData({
      ...formData,
      shifts: {
        ...formData.shifts,
        [shiftName]: { startTime, stopTime },
      },
    });
  };

  const handleAddressChange = (index, value) => {
    setOfficeAddress((prevofficeAddress) => {
      return prevofficeAddress.map((address, addressIndex) => {
        if (index === addressIndex) {
          return { ...address, address: value };
        } else {
          return address;
        }
      });
    });
  };

  const handleAddAddress = () => {
    setOfficeAddress(prev => (
      [...prev, {address:''}]
    ))
  };
  
  const handleRemoveAddress = (index) => {
  setOfficeAddress(prev => ( prev.filter((address, addressIndex) => (
    addressIndex!== index
  ))
  ))
  };

  const handleStartTimeChange = (shiftName, startTime) => {
    const stopTime = "";
    handleShiftChange(shiftName, startTime, stopTime);
  };

  const handleStopTimeChange = (shiftName, startTime) => {
    const stopTime = "";
    handleShiftChange(shiftName, startTime, stopTime);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const numberOfWorkers = formData.numberOfWorkers.split('-')
    const minStaffCount = numberOfWorkers?.[0]
    const maxStaffCount = numberOfWorkers?.[1]

    const formDataWithImage = new FormData();
    // formDataWithImage.append("businessName", formData.businessName);

    formDataWithImage.append("minStaffCount", minStaffCount);
    formDataWithImage.append("maxStaffCount", maxStaffCount);
    formDataWithImage.append("logo", selectedImage);
    // formDataWithImage.append("shifts", JSON.stringify(formData.shifts));
    officeAddress.forEach((address) => (
      formDataWithImage.append("locations", JSON.stringify(address))
    ))

  

    const response = await fetchData(
      `/organizations/${organization?._id}`,
      "put",
      formDataWithImage
    );
    console.log(response, "jlfjads;fsfkja");

    if (response.statusCode === 200) {
      toast.success(response.message || "Successfully updated settings");
    } else {
      toast.error(response.message || "Something went wrong");
    }
  };

  return (
    <section className="p-4">
      <div>
        <SettingTab />
      </div>
      <div className="max-w-md bg-white px-3">
        <form onSubmit={handleFormSubmit}>
          {selectedImage && (
            <div className="mb-2 rounded w-56">
              <Image
                width={89}
                height={89}
                src={URL.createObjectURL(selectedImage)}
                alt="Selected photo"
                className="max-w-full max-h-40 mb-4 rounded-full"
                loading="lazy"
              />
            </div>
          )}
          <div className="">
            <div className="mb-2 rounded max-w-md">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-4"
              />
            </div>
          </div>
          <Options />
          <div className="mb-4 flex space-x-2">
            <div className="w-1/2">
              <label
                htmlFor="businessName"
                className="text-xs font-thin my-2 leading-4"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                placeholder="Gravity hills"
                readOnly
                className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433]"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="numberOfWorkers"
                className="text-xs font-thin my-2 leading-4"
              >
                Number of Workers
              </label>
              <input
                type="text"
                id="numberOfWorkers"
                name="numberOfWorkers"
                placeholder="1-10"
                value={formData.numberOfWorkers}
                onChange={handleInputChange}
                className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433]"
              />
            </div>
          </div>
          <label
            htmlFor="officeAddress"
            className="text-xs font-thin my-2 leading-4"
          >
            Office Address
          </label>
          {/* <input
                type="text"
                value={formData.handleAddAddress}
                onChange={(e) => handleAddressChange(index, e.target.value)}
                className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433]"
                placeholder="123 Main St, City"
              /> */}
          <AddLocationInputs
            officeAddress={officeAddress}
            handleAddressChange={handleAddressChange}
            handleAddAddress={handleAddAddress}
            handleRemoveAddress={handleRemoveAddress}
          />
          {/* <Shiftsmangements /> */}
          <div className="flex justify-between items-center my-2">
            <div>
              <p className="text-base  font-normal leading-5">
                Enable Shifts Management
              </p>
            </div>
            <div>
              <label className="relative inline-flex items-end me-5 cursor-pointer">
                <input
                  onChange={() => setEnableShiftsManagement((prev) => !prev)}
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
                  type="default"
                  name="morning"
                  id="morningStartTime"
                  onChange={(e) =>
                    handleStartTimeChange("morning", e.target.value)
                  }
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
                  type="default"
                  name="morning"
                  id="morningStopTime"
                  onChange={(e) =>
                    handleStopTimeChange("morning", e.target.value)
                  }
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
                  type="default"
                  name="afternoon"
                  id="afternoonStartTime"
                  onChange={(e) =>
                    handleStartTimeChange("afternoon", e.target.value)
                  }
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
                  type="default"
                  name="afternoon"
                  id="afternoonStopTime"
                  onChange={(e) =>
                    handleStopTimeChange("afternoon", e.target.value)
                  }
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
                  htmlFor="eveningStartTime"
                  className="text-xs  font-thin m-2 leading-4"
                >
                  Start Time
                </label>
                <select
                  type="default"
                  name="evening"
                  id="eveningStartTime"
                  onChange={(e) =>
                    handleStartTimeChange("evening", e.target.value)
                  }
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
                  htmlFor="EveningStopTime"
                  className="text-xs  font-thin my-2 leading-4"
                >
                  Stop Time
                </label>
                <select
                  type="default"
                  name="evening"
                  id="EveningStopTime"
                  onChange={(e) =>
                    handleStopTimeChange("evening", e.target.value)
                  }
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
              type="text"
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
          <button
            type="submit"
            className="bg-[#7ED957] text-white rounded-md px-4 py-2 mt-4"
          >
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

export default General;

function HomeSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0.5 right-2 text-gray-400"
    >
      <path
        d="M15.65 21.4102C15.22 21.4102 14.79 21.3202 14.44 21.1502L9.19004 18.5202C8.89004 18.3702 8.30004 18.3802 8.01004 18.5502L5.65004 19.9002C4.63004 20.4802 3.58004 20.5602 2.79004 20.0902C1.99004 19.6302 1.54004 18.6902 1.54004 17.5102V7.79016C1.54004 6.88016 2.14004 5.85016 2.93004 5.40016L7.26004 2.92016C7.99004 2.50016 9.10004 2.47016 9.85004 2.85016L15.1 5.48016C15.4 5.63016 15.98 5.61016 16.28 5.45016L18.63 4.11016C19.65 3.53016 20.7 3.45016 21.49 3.92016C22.29 4.38016 22.74 5.32016 22.74 6.50016V16.2302C22.74 17.1402 22.14 18.1702 21.35 18.6202L17.02 21.1002C16.64 21.3002 16.14 21.4102 15.65 21.4102ZM8.64004 16.9202C9.07004 16.9202 9.50004 17.0102 9.85004 17.1802L15.1 19.8102C15.4 19.9602 15.98 19.9402 16.28 19.7802L20.61 17.3002C20.93 17.1202 21.24 16.5802 21.24 16.2202V6.49016C21.24 5.86016 21.06 5.39016 20.73 5.21016C20.41 5.03016 19.91 5.10016 19.37 5.41016L17.02 6.75016C16.29 7.17016 15.18 7.20016 14.43 6.82016L9.18004 4.19016C8.88004 4.04016 8.30004 4.06016 8.00004 4.22016L3.67004 6.70016C3.35004 6.88016 3.04004 7.42016 3.04004 7.79016V17.5202C3.04004 18.1502 3.22004 18.6202 3.54004 18.8002C3.86004 18.9902 4.36004 18.9102 4.91004 18.6002L7.26004 17.2602C7.65004 17.0302 8.15004 16.9202 8.64004 16.9202Z"
        fill="#706763"
      />
      <path
        d="M8.56006 17.75C8.15006 17.75 7.81006 17.41 7.81006 17V4C7.81006 3.59 8.15006 3.25 8.56006 3.25C8.97006 3.25 9.31006 3.59 9.31006 4V17C9.31006 17.41 8.97006 17.75 8.56006 17.75Z"
        fill="#706763"
      />
      <path
        d="M15.73 20.7501C15.32 20.7501 14.98 20.4101 14.98 20.0001V6.62012C14.98 6.21012 15.32 5.87012 15.73 5.87012C16.14 5.87012 16.48 6.21012 16.48 6.62012V20.0001C16.48 20.4101 16.14 20.7501 15.73 20.7501Z"
        fill="#706763"
      />
    </svg>
  );
}
