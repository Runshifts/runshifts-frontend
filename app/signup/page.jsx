"use client"
import { useState } from "react"
import { IoMailOutline } from "react-icons/io5"
import { LuShieldCheck } from "react-icons/lu"
import { FaRegEyeSlash, FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rememberMe: false,
    country: "us",
  })

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target

    // Handle different input types
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    alert("Form submitted with data:", formData)
  }

  return (
    <>
      <div className="">
        <div className="create-bg h-screen bg-cover bg-center flex items-center justify-start">
          <div className="mx-auto mr-4 pr-2 md:pl-8 ml-8 pt-8">
            <div className="w-full max-w-sm ">
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <h1 className="py-4 text-3xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                  Create an account
                </h1>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="email"
                  >
                    Company email
                  </label>
                  <div class="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    <div
                      className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
                    >
                      <IoMailOutline />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div class="relative">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                    />
                    <div
                      className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <LuShieldCheck />
                        </div>
                        <div>
                          <FaRegEyeSlash />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <p className="text-gray-600 font-bold text-xs pl-3">
                    By clicking create account, you accept our{" "}
                    <span className="text-blue-500">
                      <Link href="/terms">Terms</Link>
                    </span>{" "}
                    &
                    <span className="text-blue-500">
                      <Link href="/policy">Policy</Link>
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4 "
                  >
                    Create account
                  </button>
                </div>

                <p className="text-gray-700 font-bold text-sm pl-3 text-center">
                  or
                </p>

                <p className="text-center text-gray-400">Continue with</p>

                <div className="flex justify-around items-center mt-5 mb-2 ">
                  <div className="border rounded-md flex items-center justify-around py-2 px-3">
                    <FcGoogle />
                    <p className="text-gray-700 font-bold text-sm pl-3">
                      Google
                    </p>
                  </div>
                  <div className="border rounded-md flex items-center justify-center py-2 px-3">
                    <FaApple />
                    <p className="text-gray-700 font-bold text-sm pl-3">
                      AppleID
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 font-semibold text-sm pl-3 mt-5">
                  Already have an account?{" "}
                  <span className="text-[#7ED957]">
                    <Link href="/login">Login here</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
