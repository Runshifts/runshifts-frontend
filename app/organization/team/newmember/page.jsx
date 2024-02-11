import React from "react"
import profilepic from "/public/dashboardImgs/timesheet1.svg"
import Image from "next/image"

const NewMember = () => {
  return (
    <section className="centered mt-8 ">
      <div className="bg-white p-4 w-80 max-w-lg rounded-md shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-bold">New team member</h1>
          <Image src={profilepic} alt="profile pic" />
        </div>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label
              htmlhtmlFor="name"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlhtmlFor="email"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Johndoe@gmail.com"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlhtmlFor="select1"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Dawaki
            </label>
            <select
              id="select1"
              className="border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="option1"></option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlhtmlFor="select2"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Engineering
            </label>
            <select
              id="select2"
              className="border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlhtmlFor="select3"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Civil engineer
            </label>
            <select
              id="select3"
              className="border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlhtmlFor="password"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Hourly earnings
            </label>
            <input
              type="text"
              id="earnings"
              placeholder="$17"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlhtmlFor="phone"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Right to work date
            </label>
            <input
              type="text"
              id="phone"
              placeholder="02/24"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <button className="bg-[#5BC62D] text-white flex-1 py-2 rounded-md">
              Submit
            </button>
            <button className="text-gray-600 flex-1 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default NewMember
