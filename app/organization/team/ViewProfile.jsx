import React from "react"
import profilepic from "../../pages/Timesheet/Ellipse1.svg"
import Image from "next/image"

const NewMember = () => {
  return (
    <section className="centered mt-8 ">
      <div className="bg-white p-4 w-80 max-w-lg rounded-md shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-bold">Edit profile</h1>
          <Image width={30} height={30} src={profilepic} alt="profile pic" />
        </div>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label
              htmlhtmlFor="name"
              className="text-xs py-2 font-thin text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ariana"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlhtmlFor="name"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Last Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Woods"
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
              placeholder="Arianawoods@gmail.com"
              className="border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlhtmlFor="select1"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Location
            </label>
            <select
              id="select1"
              className="border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="option1">Dawaki</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlhtmlFor="select2"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Department
            </label>
            <select
              id="select2"
              className="border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="option1">Publishing</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlhtmlFor="select3"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Role
            </label>
            <select
              id="select3"
              className="border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="option1">Marketer</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlhtmlFor="select3"
              className="text-xs py-2 font-thin text-gray-300"
            >
              Hourly earnings
            </label>
            <select
              id="select3"
              className="border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="option1">£17</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
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

          <div className="flex justify-between items-center space-x-4">
            <div className="flex flex-col w-1/2">
              <label
                htmlhtmlFor="phone"
                className="text-xs py-2 font-thin text-gray-300"
              >
                Total time worked
              </label>
              <input
                type="text"
                id="phone"
                placeholder="5000hrs"
                className="border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>

            <div className="flex flex-col w-1/2 mr-2">
              <label
                htmlhtmlFor="phone"
                className="text-xs py-2 font-thin text-gray-300"
              >
                Total earnings
              </label>
              <input
                type="text"
                id="phone"
                placeholder="£4,000,000"
                className="border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <button className="bg-[#5BC62D] text-white flex-1 py-2 rounded-md">
              Save changes
            </button>
            <button className="text-red-700 bg-red-200 flex-1 py-2 rounded-md">
              Cancel
            </button>
          </div>
          <button className="">Go back</button>
        </form>
      </div>
    </section>
  )
}

export default NewMember
