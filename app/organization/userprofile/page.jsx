"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa";
import profileAvatar from "../../_components/navbar/dp.png";
import Uploadimage from "./Uploadimage";
import { PiWarningCircleFill } from "react-icons/pi";
import Activate2Fa from "./activate2fa/page";
import Link from "next/link";


const UserProfile = () => {
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
    <div className="max-w-md bg-white p-8 ">
      <h1 className="custom-h1">User profile</h1>
      <div className="px-2">
        <Image
          style={{ cursor: "pointer" }}
          height={60}
          width={60}
          src={profileAvatar}
          alt="dp"
        />
      </div>

<input class="block w-full my-5 text-xs text-[#42526E] border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />

      <div className="mb-4 flex space-x-2">
        <div className="w-1/2">
          <label
            htmlFor="firstName"
            className="text-xs not-italic font-thin my-2 leading-4"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Ariana"
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="lastName"
            className="text-xs not-italic font-thin my-2 leading-4"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Woods"
          />
        </div>
      </div>
      <div className="mb-4 flex space-x-2">
        <div className="w-1/2">
          <label
            htmlFor="email"
            className="text-xs not-italic font-thin my-2 leading-4"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md px-3 py-2"
            placeholder="Arianawoods@example.com"
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="phoneNumber"
            className="text-xs not-italic font-thin my-2 leading-4"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full border rounded-md px-3 py-2"
            placeholder="+123-456-7890"
          />
        </div>
      </div>
      <div className="relative flex  justify-center items-center">
      <input
        type="text"
        id="homeAddress"
        className="w-full border rounded-md px-3 py-2 pr-10"
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

<div className="flex justify-between items-center my-2">
      <div>
        <p className="text-base not-italic font-normal leading-5">Security</p>
      </div>
      <div>
        <label className="relative inline-flex items-end me-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        </label>
      </div>
    </div>
      <hr />
      <h1 className="my-2 text-sm not-italic font-semibold leading-5">
      Change Password
      </h1>
      <div className="mb-4">
        <label className="text-xs not-italic font-thin my-2 leading-4">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
          />
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            onClick={handleTogglePassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="text-xs not-italic font-thin my-2 leading-4">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
          />
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            onClick={handleToggleConfirmPassword}
          >
            {showConfirmPassword ? <FaRegEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>
      <button className="bg-[#7ED957] text-white rounded-md px-4 py-2">
        Confirm Password
      </button>

      <div className="flex justify-between items-center mt-2">
      <div>
        <p>Enable 2fa</p>
      </div>
      <div>
        <label className="relative inline-flex items-end me-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        </label>
      </div>
    </div>

<Link href='/organization/userprofile/activate2fa'>
<div className="flex bg-[#DEEBFF] p-4 items-start justify-center">
      <div className="text-[#0747A6] mr-5">
      <PiWarningCircleFill className=" h-[24px] w-[24px]" />
      </div>
      <div>
        <p className="text-base not-italic font-thin leading-5">Google Authenticator</p>
        <p className="text-[#172B4D] text-xs not-italic font-normal leading-5">You have linked your account to Google Authenticator.</p>
      </div>
    </div>
</Link>
   

    </div>
    
  );
};

export default UserProfile;
