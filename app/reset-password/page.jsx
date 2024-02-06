import React from "react"
import { IoMailOutline } from "react-icons/io5"

function Signup() {
  return (
    <>
      <div className="">
        <div className="reset-bg h-screen bg-cover bg-center flex items-center justify-start ">
          <div className="mx-auto mr-4 pr-4 md:pl-8 ml-8 pt-8">
            <div className="w-full max-w-sm ">
              <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
                <h1 className="py-2 text-2xl font-bold leading-12 tracking-tight text-left text-[#1B1818]">
                  Let&apos;s reset your password
                </h1>
                <p className="tracking-tighter text-gray-700 text-sm font-semibold py-4">
                  Please provide your email to reset your password
                </p>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email address
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

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4 "
                  >
                    Request reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
