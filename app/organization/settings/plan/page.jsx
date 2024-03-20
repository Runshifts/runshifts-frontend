import React from "react";
import SetttingsTb from "../page";

function Plan() {
  return (
    <div>
      <SetttingsTb />

     
      <div className=" bg-white flex flex-wrap items-center justify-center">
      <div className="flex justify-around items-center mt-2">
        <div>
          <p>Monthly</p>
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
        <div>
          <p>Yearly</p>
        </div>
      </div>

        <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items-center container">
          {/* Basic Plan */}
          <div className="bg-white min-h-full min-w-md  rounded-t-xl shadow-xl py-6 px-8 m-2 mx-auto ">
            <h1 className="text-black text-lg not-italic font-semibold">
              Business Pack
            </h1>
            <p className="text-gray-700 text-sm not-italic font-semibold">Forever free, even after the launch</p>
            <div className="text-center py-4 px-7 flex items-center justify-start">
              <h1 className="text-black text-4xl not-italic font-bold">£11</h1>
              <p className="text-gray-500  text-sm leading-4 px-2 mt-2">per <br />/Month</p>
            </div>
            <button className="w-full rounded-lg text-center mt-6 mb-3 py-2 px-4 bg-[#449522] text-white flex items-center justify-center">
              Select package
            </button>
            <div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">Ten links available</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">Own analytics platform</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">Mobile app</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">Chat Support</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">1000 users</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">Template Library</p>
              </div>
            </div>
          </div>

          <div className="bg-[#449522] text-white min-h-full min-w-md  rounded-t-xl shadow-xl py-6 px-8 m-2 mx-auto ">
            <h1 className="text-white text-lg not-italic font-semibold">
              Business Pack
            </h1>
            <p className="text-white text-sm not-italic font-semibold">Forever free, even after the launch</p>
            <div className="text-center py-4 px-7 flex items-center justify-start">
              <h1 className="text-white text-3xl not-italic font-bold">£11</h1>
              <p className="text-white  text-sm leading-4 mt-2">per <br />/Month</p>
            </div>
            <button className="w-full rounded-lg text-center mt-6 mb-3 py-2 px-4 bg-white text-[#449522] flex items-center justify-center">
              Select package
            </button>
            <div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-white not-italic font-semibold">Ten links available</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-white not-italic font-semibold">Own analytics platform</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-white not-italic font-semibold">Mobile app</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-white not-italic font-semibold">Chat Support</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-white not-italic font-semibold">1000 users</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-white not-italic font-semibold">Template Library</p>
              </div>
            </div>
          </div>

          <div className="bg-white min-h-full min-w-md  rounded-t-xl shadow-xl py-6 px-8 m-2 mx-auto ">
            <h1 className="text-black text-lg not-italic font-semibold">
              Business Pack
            </h1>
            <p className="text-gray-700 text-sm not-italic font-semibold">Forever free, even after the launch</p>
            <div className="text-center py-4 px-7 flex items-center justify-start">
              <h1 className="text-black text-3xl not-italic font-bold">£11</h1>
              <p className="text-gray-500  text-sm leading-4 mt-2">per <br />/Month</p>
            </div>
            <button className="w-full rounded-lg text-center mt-6 mb-3 py-2 px-4 bg-[#449522] text-white flex items-center justify-center">
              Select package
            </button>
            <div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">Ten links available</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">Own analytics platform</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">Mobile app</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">Chat Support</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">1000 users</p>
              </div>
              <div className="flex items-center  justify-start py-1">
                <CheckedSvg />
                <p className="px-2 text-sm text-gray-700 not-italic font-semibold">Template Library</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;

function CheckedSvg() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2307_11375)">
        <path
          d="M10.4388 3.25488L4.80379 8.88987L2.24243 6.32851"
          stroke="#98E179"
          strokeWidth="1.63927"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.4388 3.45947L4.80379 9.09446L2.24243 6.5331"
          stroke="#98E179"
          strokeWidth="1.63927"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2307_11375">
          <rect
            width="12.2945"
            height="12.2945"
            fill="white"
            transform="translate(0.193359 0.181152)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
