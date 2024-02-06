import React from "react"
import profilepic from "./Ellipse2.svg"

const YourFormComponent = ({ toggleLargeModal }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-bold ">Time Review</h1>
        <img className="pt-3" src={profilepic} alt="profile pic" />
      </div>
      <form>
        <div className="mb-4">
          <label
            htmlhtmlFor="input1"
            className="block text-xs font-thin text-gray-400"
          >
            Full name
          </label>
          <input
            type="text"
            id="input1"
            name="name"
            placeholder="Ariana Woods"
            className="mt-1 p-2 w-full border rounded-sm text-sm text-[#252525]"
          />
        </div>

        <div className="mb-4">
          <label
            htmlhtmlFor="input2"
            className="block text-xs font-thin text-gray-400 "
          >
            Location
          </label>
          <input
            type="text"
            id="input2"
            name="location"
            placeholder="Dawaki"
            className="mt-1 p-2 w-full border rounded-sm text-sm text-[#252525]"
          />
        </div>

        <div className="flex mb-4 space-x-4">
          <div className="flex-1">
            <label
              htmlhtmlFor="input3"
              className="block text-xs font-thin text-gray-400 "
            >
              Check in time
            </label>
            <input
              type="text"
              id="input3"
              name="checkin"
              placeholder="07:00 Am"
              className="mt-1 p-2 w-full border rounded-sm text-sm text-[#252525]"
            />
          </div>

          <div className="flex-1">
            <label
              htmlhtmlFor="input4"
              className="block text-xs font-thin text-gray-400 "
            >
              Check-out time
            </label>
            <input
              type="text"
              id="input4"
              name="checkout"
              placeholder="-"
              className="mt-1 p-2 w-full border rounded-sm text-sm text-[#252525]"
            />
          </div>
        </div>

        <div className="flex mb-4 space-x-4">
          <div className="flex-1">
            <label
              htmlhtmlFor="input5"
              className="block text-xs font-thin text-gray-400 "
            >
              Break duration
            </label>
            <input
              type="text"
              id="input5"
              name="breakDuration"
              placeholder="01:00 hr"
              className="mt-1 p-2 w-full border rounded-sm text-sm text-[#252525]"
            />
          </div>

          <div className="flex-1">
            <label
              htmlhtmlFor="input6"
              className="block text-xs font-thin text-gray-400 "
            >
              Used break time
            </label>
            <input
              type="text"
              id="input6"
              name="usedBreak"
              placeholder="00:30 hr"
              className="mt-1 p-2 w-full border rounded-sm text-sm text-[#252525]"
            />
          </div>
        </div>

        <div>
          <button
            toggleLargeModal={toggleLargeModal}
            onClick={toggleLargeModal}
          >
            Go back
          </button>
        </div>
      </form>
    </div>
  )
}

export default YourFormComponent
