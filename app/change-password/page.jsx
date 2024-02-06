import React from "react"
import { LuShieldCheck } from "react-icons/lu"
import { FaRegEyeSlash } from "react-icons/fa"

function Signup() {
  return (
    <>
      <div className="change-bg h-screen bg-cover bg-center flex items-center justify-start">
        <div className="mx-auto md:w-[400px] pl-8 ml-8 pt-8">
          <div className="w-full max-w-md ">
            <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <h1 className="py-2 text-2xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                Change your password
              </h1>
              <p className="text-gray-500 text-sm font-bold py-4">
                Create a new password
              </p>
              <div className="mb-6">
                <label
                  className="block text-gray-600 text-sm font-bold mb-2"
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

              <div className="mb-6">
                <label
                  className="block text-gray-600 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Confirm Password
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

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4 "
                >
                  Change password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
