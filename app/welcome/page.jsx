import React from "react";

function Welcome() {
  return (
    <>
      <div className="welcome-bg h-screen bg-cover bg-center flex items-center justify-start ">
        <div className="mx-auto mr-4 pr-2 md:pl-8 ml-8 pt-8">
          <div className="w-full max-w-sm ">
            <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <div className=" bg-white rounded-md">
                <p className="text-xs">STEP 1 OF 3</p>
                <h1 className="py-4 text-3xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">
                  Welcome to RunShifts
                </h1>

                <p className="text-xs text-gray-800 font-semibold">
                  What is your organization name?
                </p>

                <form action="" method="post">
                  <div className="flex flex-col space-y-16">
                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs pb-4 pt-1">
                      <div className="w-full h-10 ">
                        <input
                          className="w-full h-full  px-5 outline-none rounded-xl border border-gray-200 text-sm bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                          type="text"
                          placeholder="Business name"
                          name=""
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <button className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4 ">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
