import React from "react";

function Verify() {
  return (
    <>
      <div className="verify-bg h-screen  bg-cover bg-center flex items-center justify-start "> 
              <div className="mx-auto md:w-[400px] pl-8 ml-8 pt-8">
          <div className="w-full max-w-sm ">
            <div className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
              <div className=" bg-white rounded-md">
                <h1 className="py-2 text-3xl font-semibold leading-12 tracking-tight text-left text-[#1B1818]">Verify account</h1>

                <p className="text-xs text-gray-800 font-semibold">
                  Input the 6 digit code sent to your email
                </p>

                <form action="" method="post">
                <div className="flex flex-col space-y-16">
            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs pb-4 pt-1">
              <div className="w-10 h-10 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-lg border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
              </div>
              <div className="w-10 h-10 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-lg border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
              </div>
              <div className="w-10 h-10 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-lg border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
              </div>
              <div className="w-10 h-10 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-lg border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""  />
              </div>
                <div className="w-10 h-10 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-lg border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""  />
              </div>
                <div className="w-10 h-10 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-lg border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""  />
              </div>
            </div>
            </div>
            </form>

                <button className="bg-[#7ED957] text-white rounded-md w-full p-2 my-4 ">
                  Verify email
                </button>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
}

export default Verify;
