import React from "react"
import { RiUserLine } from "react-icons/ri"
import { IoMailOutline } from "react-icons/io5"

function InviteTeam() {
  return (
    <>
      <div className="invite-bg h-screen  bg-cover bg-center flex items-center justify-start">
        <div className="mx-auto mr-4 pr-2 md:w-[500px] pl-8 ml-8 pt-12">
          <div className="w-full max-w-md ">
            <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <p className="text-xs">STEP 3 OF 3</p>
              <h1 className="py-2 text-2xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                Invite team members
              </h1>

              <form action="" method="post">
                <div className="flex flex-col">
                  <div className=" w-full pb-4 pt-1">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="email"
                      >
                        Full name
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
                          <RiUserLine />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
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

                    <div>
                      <p className="border border-gray-800 border-dashed p-3 font-semibold text-center rounded-md">
                        Add another team member
                      </p>
                    </div>
                  </div>
                </div>
              </form>

              <button className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4 ">
                Send invite
              </button>

              <p className="font-bold text-gray-800 text-center">
                Do this later
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InviteTeam
