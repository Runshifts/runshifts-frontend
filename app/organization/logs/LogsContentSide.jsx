import React from "react"
import Avatar from "../../_data/marketer.svg"

function LogsContentSide() {
  return (
    <section>
      <div className="hidden md:flex justify-start items-center flex-col px-4 py-2">
        <div className="bg-white p-2 m-1 rounded-md shadow-lg">
          <div className="bg-[#E5F7DD] rounded-md p-2 my-2 flex justify-start items-center">
            <img
              src={Avatar}
              alt="profilepic"
              className="w-10 h-10 rounded-full mx-"
            />
            <div className="px-2">
              <h1 className="text-sm font-semibold text-gray-700">
                Ariana Woods
              </h1>
              <p className="text-gray-400 text-xs">Marketer</p>
              <p className="text-gray-400 text-xs">Dawaki</p>
            </div>
          </div>

          <div className="py-2">
            <p className="bg-[#FFAB00] rounded-full w-fit mb-2 px-1 text-white text-xs">
              Attention needed
            </p>
            <p className="text-gray-400 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              vero sit id! Ad tempore a esse. Accusantium omnis assumenda
              aperiam, labore molestiae placeat. Quidem, ipsa.
            </p>
          </div>

          <div className="my-2 flex items-center justify-start">
            <p className="text-gray-400 text-xs ">05:15 PM</p>
            <p className="text-gray-400 text-xs px-4">17 Dec 2023</p>
          </div>

          <div className="my-3 flex items-center justify-start text-xs">
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                name="default-radio"
                className="w-4 h-4 bg-gray-100 border-gray-300 "
              />
              <label
                htmlhtmlFor="default-radio-2"
                className="bg-[#7ED957] rounded-full mx-2 px-2 text-white text-xs"
              >
                Normal
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              />
              <label
                htmlhtmlFor="default-radio-2"
                className="bg-[#FFAB00] rounded-full mx-2 px-2 text-white text-xs"
              >
                Attention needed
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
              />
              <label
                htmlhtmlFor="default-radio-2"
                className="bg-[#DE350B] rounded-full mx-2 px-2 text-white text-xs"
              >
                Urgent
              </label>
            </div>
          </div>

          <form>
            <div className="flex flex-col">
              <label
                htmlhtmlFor="textarea"
                className="text-xs font-semibold pb-1 pt-1 text-gray-500"
              >
                Leave a note
              </label>
              <textarea
                id="textarea"
                placeholder="Write note..."
                rows="4"
                className="text-sm border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>
            <button className="bg-[#B2E89A] text-[#2D6316] text-xs p-1 my-3 rounded-md">
              Send note
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LogsContentSide
