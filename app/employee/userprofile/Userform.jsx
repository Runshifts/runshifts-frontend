"use client"
import Image from "next/image"
import React, { useState, useContext, useEffect } from "react"
import { FaEye, FaEyeSlash, FaRegEyeSlash } from "react-icons/fa"
// import profileAvatar from "../../_components/navbar/dp.png";
// import Uploadimage from "./Uploadimage";
import { PiWarningCircleFill } from "react-icons/pi"
import useAxios from "../../_hooks/useAxios"
import { UserContext } from "../../_providers/UserProvider"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import toast from "react-hot-toast"

const UserProfile = () => {
  const fetchData = useAxios()

  const { user, updateUser } = useContext(UserContext)
  const { organization } = useContext(OrganizationContext)

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData")
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          phoneNumber: "",
          homeAddress: "",
          image: "",
        }
  })

  const [isSecurityEnabled, setIsSecurityEnabled] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [shownewPassword, setShownewPassword] = useState(false)

  const handleToggle = () => {
    setIsSecurityEnabled((prev) => !prev)
  }

  const handleOldPasswordChange = () => {
    setShowOldPassword((prev) => !prev)
  }

  const handlenewPasswordChange = () => {
    setShownewPassword((prev) => !prev)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
    console.log("my file", file)
  }

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  }, [formData])

  const handleForm1Submit = async (event) => {
    event.preventDefault()
    const formDataWithImage = new FormData()
    formDataWithImage.append("phoneNumber", formData.phoneNumber)
    formDataWithImage.append("homeAddress", formData.homeAddress)
    formDataWithImage.append("profileImage", selectedFile)

    const response = await fetchData(
      `/users/${organization?._id}/${user?._id}`,
      "put",
      formDataWithImage
    )
    if (response.statusCode === 200) {
      updateUser(response.user)
      toast.success(response.message || "Successfully updated profile")
    } else {
      toast.error(response.message || "Something went wrong")
    }
  }

  const handleForm2Submit = async (event) => {
    event.preventDefault()

    const response = await fetchData(
      `/users/${organization?._id}/${user?._id}`,
      "put",
      formDataWithImage
    )
    if (response.statusCode === 200) {
      updateUser(response.user)
    }
  }

  return (
    <div className="max-w-lg bg-white p-8 ">
      <h1 className="text-[#283142] mt-4 mb-8 text-2xl not-italic font-medium leading-7">
        User profile
      </h1>

      {/* <Uploadimage /> */}
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

      <p className="text-sm font-semibold leading-5 text-left text-[#42526E] py-2">
        Personal Information
      </p>

      <hr />

      <form action="" onSubmit={handleForm1Submit}>
        <div className="mb-4 pt-2 flex space-x-2">
          <div className="w-1/2">
            <label
              htmlFor="firstName"
              className="text-xs not-italic font-thin my-2 leading-4"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              id="firstName"
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
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
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              id="lastName"
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
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
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              id="email"
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
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
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              id="phoneNumber"
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              placeholder="+123-456-7890"
            />
          </div>
        </div>

        <div className="mb-4 flex space-x-2">
          <div className="w-1/4">
            <label
              htmlFor="hourRate"
              className="text-xs not-italic font-thin my-2 leading-4"
            >
              Hourly rate
            </label>
            <input
              type="text"
              id="hourRate"
              onChange={handleInputChange}
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              placeholder="£17"
            />
          </div>

          <div className="w-3/4">
            <label
              htmlFor="lastName"
              className="text-xs not-italic font-thin my-2 leading-4"
            >
              Home Address
            </label>
            <div className="relative flex justify-center items-center">
              <input
                type="text"
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleInputChange}
                id="homeAddress"
                className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
                placeholder="123 Main St, City"
              />
              <div className="pt-2">
                <HomeSvg />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#7ED957] text-white rounded-md mt-3 px-4 py-1"
        >
          Update Profile
        </button>
      </form>

      <form onSubmit={handleForm2Submit}>
        <div className="flex justify-between items-center my-2">
          <div>
            <p className="text-sm font-semibold leading-5 text-left text-[#42526E] py-2">
              Security
            </p>
          </div>
          <div>
            <label className="relative inline-flex items-end me-5 cursor-pointer">
              <input
                type="checkbox"
                value={isSecurityEnabled}
                onClick={handleToggle}
                className="sr-only peer"
                defaultChecked
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>
        <hr />

        <p className="text-sm font-semibold leading-5 text-left text-[#42526E] pt-2">
          Change Password
        </p>

        <div className="mb-4 flex space-x-2">
          <div className="mb-4">
            <label className="text-xs not-italic font-thin my-2 leading-4">
              Old Password
            </label>
            <div className="relative">
              <input
                type={showOldPassword ? "text" : "password"}
                value={formData.oldPassword}
                name="oldPassword"
                onChange={handleInputChange}
                className="w-full pr-4 py-2 border-2 border-[#DFE1E6] rounded focus:outline-none focus:shadow-outline"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={handleOldPasswordChange}
              >
                {showOldPassword ? <EyeSVG /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-xs not-italic font-thin my-2 leading-4">
              New Password
            </label>
            <div className="relative">
              <input
                type={shownewPassword ? "text" : "password"}
                value={formData.newPassword}
                name="newPassword"
                onChange={handleInputChange}
                className="w-full pr-4 py-2 border-2 border-[#DFE1E6] rounded focus:outline-none focus:shadow-outline"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={handlenewPasswordChange}
              >
                {shownewPassword ? <EyeSVG /> : <FaEye />}
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#7ED957] text-white rounded-md px-4 py-1"
        >
          Change Password
        </button>

        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-base font-normal leading-5 text-left text-[#1D2433] ">
              Enable 2fa
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

        <div className="flex bg-[#DEEBFF] p-4 items-start justify-center">
          <div className="text-[#0747A6] mr-5">
            <PiWarningCircleFill />
          </div>
          <div>
            <p className="text-base not-italic font-thin leading-5">
              Google Authenticator
            </p>
            <p className="text-[#172B4D] text-sm not-italic font-normal leading-5">
              You have linked your account to Google Authenticator.
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserProfile

function EyeSVG() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.46992 15.2799C9.27992 15.2799 9.08992 15.2099 8.93992 15.0599C8.11992 14.2399 7.66992 13.1499 7.66992 11.9999C7.66992 9.60992 9.60992 7.66992 11.9999 7.66992C13.1499 7.66992 14.2399 8.11992 15.0599 8.93992C15.1999 9.07992 15.2799 9.26992 15.2799 9.46992C15.2799 9.66992 15.1999 9.85992 15.0599 9.99992L9.99992 15.0599C9.84992 15.2099 9.65992 15.2799 9.46992 15.2799ZM11.9999 9.16992C10.4399 9.16992 9.16992 10.4399 9.16992 11.9999C9.16992 12.4999 9.29992 12.9799 9.53992 13.3999L13.3999 9.53992C12.9799 9.29992 12.4999 9.16992 11.9999 9.16992Z"
        fill="#8294B4"
      />
      <path
        d="M5.60009 18.51C5.43009 18.51 5.25009 18.45 5.11009 18.33C4.04009 17.42 3.08009 16.3 2.26009 15C1.20009 13.35 1.20009 10.66 2.26009 8.99998C4.70009 5.17998 8.25009 2.97998 12.0001 2.97998C14.2001 2.97998 16.3701 3.73998 18.2701 5.16998C18.6001 5.41998 18.6701 5.88998 18.4201 6.21998C18.1701 6.54998 17.7001 6.61998 17.3701 6.36998C15.7301 5.12998 13.8701 4.47998 12.0001 4.47998C8.77009 4.47998 5.68009 6.41998 3.52009 9.80998C2.77009 10.98 2.77009 13.02 3.52009 14.19C4.27009 15.36 5.13009 16.37 6.08009 17.19C6.39009 17.46 6.43009 17.93 6.16009 18.25C6.02009 18.42 5.81009 18.51 5.60009 18.51Z"
        fill="#8294B4"
      />
      <path
        d="M12.0001 21.02C10.6701 21.02 9.37006 20.75 8.12006 20.22C7.74006 20.06 7.56006 19.62 7.72006 19.24C7.88006 18.86 8.32006 18.68 8.70006 18.84C9.76006 19.29 10.8701 19.52 11.9901 19.52C15.2201 19.52 18.3101 17.58 20.4701 14.19C21.2201 13.02 21.2201 10.98 20.4701 9.81C20.1601 9.32 19.8201 8.85 19.4601 8.41C19.2001 8.09 19.2501 7.62 19.5701 7.35C19.8901 7.09 20.3601 7.13 20.6301 7.46C21.0201 7.94 21.4001 8.46 21.7401 9C22.8001 10.65 22.8001 13.34 21.7401 15C19.3001 18.82 15.7501 21.02 12.0001 21.02Z"
        fill="#8294B4"
      />
      <path
        d="M12.6901 16.2701C12.3401 16.2701 12.0201 16.0201 11.9501 15.6601C11.8701 15.2501 12.1401 14.8601 12.5501 14.7901C13.6501 14.5901 14.5701 13.6701 14.7701 12.5701C14.8501 12.1601 15.2401 11.9001 15.6501 11.9701C16.0601 12.0501 16.3301 12.4401 16.2501 12.8501C15.9301 14.5801 14.5501 15.9501 12.8301 16.2701C12.7801 16.2601 12.7401 16.2701 12.6901 16.2701Z"
        fill="#8294B4"
      />
      <path
        d="M1.99994 22.75C1.80994 22.75 1.61994 22.68 1.46994 22.53C1.17994 22.24 1.17994 21.76 1.46994 21.47L8.93994 14C9.22994 13.71 9.70994 13.71 9.99994 14C10.2899 14.29 10.2899 14.77 9.99994 15.06L2.52994 22.53C2.37994 22.68 2.18994 22.75 1.99994 22.75Z"
        fill="#8294B4"
      />
      <path
        d="M14.53 10.2199C14.34 10.2199 14.15 10.1499 14 9.99994C13.71 9.70994 13.71 9.22994 14 8.93994L21.47 1.46994C21.76 1.17994 22.24 1.17994 22.53 1.46994C22.82 1.75994 22.82 2.23994 22.53 2.52994L15.06 9.99994C14.91 10.1499 14.72 10.2199 14.53 10.2199Z"
        fill="#8294B4"
      />
    </svg>
  )
}

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
  )
}
