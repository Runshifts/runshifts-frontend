import React from "react"
import { IoMailOutline } from "react-icons/io5"
import { LuShieldCheck } from "react-icons/lu"
import { FaRegEyeSlash, FaApple } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"

function Signup() {
  return (
    <>
      <div className="employeesignup-bg h-screen bg-cover bg-center flex items-center justify-start">
        <div className="mx-auto mr-4 pr-2 md:pl-8 ml-8 pt-8">
          <div className="w-full max-w-sm">
            <form className="bg-white shadow-md rounded px-8 py-8 mb-4">
              <h1 className="py-4 text-3xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                Lets get you setup with RunShifts
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
                    type="text"
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
                    type="text"
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
                <p className="text-gray-600 font-bold text-xs pl-3">
                  Already have an account?{" "}
                  <span className="text-blue-500">
                    <Link to="/Login">Login here</Link>
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4 "
                >
                  Create account
                </button>
              </div>

              <p className="text-center text-gray-400">Continue with</p>

              <div className="flex justify-around items-center mt-5 mb-2 ">
                <div className="border rounded-md flex items-center justify-around py-2 px-3">
                  <FcGoogle />
                  <p className="text-gray-700 font-bold text-sm pl-3">Google</p>
                </div>
                <div className="border rounded-md flex items-center justify-center py-2 px-3">
                  <FaApple />
                  <p className="text-gray-700 font-bold text-sm pl-3">
                    AppleID
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
