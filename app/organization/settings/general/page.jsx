"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";
import LogoAvatar from "../Avatar.svg";
import UploadLogo from "../UploadLogo";
import { PiWarningCircleFill } from "react-icons/pi";
import ColorPicker from "../ColorPicker";
import SettingTab from "../page";

const General = ({ selectedFile, handleFileChange }) => {
  const [isSecurityEnabled, setIsSecurityEnabled] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleToggle = () => {
    setIsSecurityEnabled((prev) => !prev);
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <section className="p-4">
      <div>
        <SettingTab />
      </div>
      <div className="max-w-md bg-white px-3">
        {/* <div className="px-2">
          <Image
            className="cursor-pointer mb-6"
            height={89}
            width={89}
            src={LogoAvatar}
            alt="dp"
          />
        </div>
        <div className="my-2">
          <UploadLogo />
        </div> */}

        {selectedFile && (
          <div className="mb-2 rounded w-56">
            <Image
              width={89}
              height={89}
              src={URL.createObjectURL(selectedFile)}
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
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-4"
            />
          </div>
        </div>

        <form>
          <div className="mb-4 flex space-x-2">
            <div className="w-1/2">
              <label
                htmlFor="BusinessName"
                className="text-xs  font-thin my-2 leading-4"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
                placeholder="Gravity falls"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="number of workers"
                className="text-xs  font-thin my-2 leading-4"
              >
                Number of workers
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

          <label
            htmlFor="number of workers"
            className="text-xs font-thin my-2 leading-4"
          >
            Office Address
          </label>
          <div className="relative flex  justify-center items-center mb-3">
            <input
              type="text"
              id="officeAddress"
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              placeholder="123 Main St, City"
            />
            {/* Placeholder icon */}
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
          </div>

          <button className="bg-[#7ED957] text-white rounded-md px-4 py-2">
            + Add Location
          </button>

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
                  value=""
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
                  Shift Time
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
                  Number of workers
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
                  Shift Time
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
                  Number of workers
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
                  Shift Time
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
                  Number of workers
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
              type="text"
              id="firstName"
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              placeholder="Ariana"
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
      </div>
    </section>
  );
};

export default General;
