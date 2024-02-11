import React from "react";
import AddShift from "./AddShiftBtn";
import Avatar from "./Ellipse.svg";
import Image from "next/image";

const ScheduleTable = () => {
  return (
    <div className="rounded-lg overflow-x-auto">
      <table className="min-w-full bg-[#efeded] rounded-lg overflow-x-auto">
        <thead className="text-[#252525] ">
          <tr>
            <th className="py-2 px-4 border-b border-r border-gray-500">
              <select
                className="form-select bg-[#efeded] m-2  h-10 w-32 rounded-md flex justify-between items-center text-[#252525]"
                aria-label="Default select example"
              >
                <option selected className="text-[#252525]">
                  All shifts
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </th>
            <th className="py-2 px-4 border-b border-r  border-gray-500">
              7<br />
              <p className="text-2xl font-semibold">Mon</p>
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-500">
              8<br />
              <p className="text-2xl font-semibold">Tue</p>
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-500">
              9<br />
              <p className="text-2xl font-semibold">Wed</p>
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-500">
              10
              <br />
              <p className="text-2xl font-semibold">Thur</p>
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-500">
              11
              <br />
              <p className="text-2xl font-semibold">Fri</p>
            </th>
            <th className="py-2 px-4 border-b border-r border-gray-500">
              12
              <br />
              <p className="text-2xl font-semibold">Sat</p>
            </th>
            <th className="py-2 px-4 border-b border-gray-500">
              13
              <br />
              <p className="text-2xl font-semibold">Sun</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-r border-gray-500 text-[#252525] text-bold">
              Open shifts
            </td>
            <td className="py-2 px-4 border-b border-r border-gray-500 text-gray-300 font-bold">
              8am
            </td>
            <td className="py-2 px-4 border-b border-r border-gray-500 text-gray-300 font-bold">
              9am
            </td>
            <td className="py-2 px-4 border-b border-r border-gray-500 text-gray-300 font-bold">
              10am
            </td>
            <td className="py-2 px-4 border-b border-r border-gray-500 text-gray-300 font-bold">
              11am
            </td>
            <td className="py-2 px-4 border-b border-r border-gray-500 text-gray-300 font-bold">
              12pm
            </td>
            <td className="py-2 px-4 border-b border-r border-gray-500 text-gray-300 font-bold">
              1pm
            </td>
            <td className="py-2 px-4 border-b border-gray-500 text-gray-300 font-bold">
              2pm
            </td>
          </tr>
          <tr>
            <td className="py-2 px-2 border-r border-gray-500">
              <div className="flex items-center justify-center bg-red-200 rounded-full ">
                <Image height={50} width={50} src={Avatar} alt="alt" />
                <div className=" px-2 text-[#252525]">
                  <h1 className="font-bold">Ottobong</h1>
                  <p>6.2 / $62</p>
                </div>
              </div>
            </td>
            <td className="py-2 px-4 border-r border-gray-500" colSpan="2">
              <div className="flex items-center justify-center py-2 px-3 bg-red-200 rounded-full ">
                <Image height={50} width={50} src={Avatar} alt="avatar" />
                <div className="flex items-center justify-center">
                  <p className="px-2 font-bold text-[#252525]">
                    Monday - Tuesday
                  </p>
                  <CopySvg />
                </div>
              </div>
            </td>
            {/* <td className="py-2 px-4 border-r border-gray-500"></td> */}
            <td className="py-2 px-4 border-r border-gray-500">
              <AddShift />
            </td>
            <td className="py-2 px-4 border-r border-gray-500">
              <AddShift />
            </td>
            <td className="py-2 px-4 border-r border-gray-500">
              <AddShift />
            </td>
            <td className="py-2 px-4 border-r border-gray-500">
              <AddShift />
            </td>
            <td className="py-2 px-4">
              <AddShift />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;

function CopySvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1 22.75H6.9C2.99 22.75 1.25 21.01 1.25 17.1V12.9C1.25 8.99 2.99 7.25 6.9 7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V17.1C16.75 21.01 15.01 22.75 11.1 22.75ZM6.9 8.75C3.8 8.75 2.75 9.8 2.75 12.9V17.1C2.75 20.2 3.8 21.25 6.9 21.25H11.1C14.2 21.25 15.25 20.2 15.25 17.1V12.9C15.25 9.8 14.2 8.75 11.1 8.75H6.9Z"
        fill="#42526E"
      />
      <path
        d="M17.1 16.75H16C15.59 16.75 15.25 16.41 15.25 16V12.9C15.25 9.8 14.2 8.75 11.1 8.75H8C7.59 8.75 7.25 8.41 7.25 8V6.9C7.25 2.99 8.99 1.25 12.9 1.25H17.1C21.01 1.25 22.75 2.99 22.75 6.9V11.1C22.75 15.01 21.01 16.75 17.1 16.75ZM16.75 15.25H17.1C20.2 15.25 21.25 14.2 21.25 11.1V6.9C21.25 3.8 20.2 2.75 17.1 2.75H12.9C9.8 2.75 8.75 3.8 8.75 6.9V7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V15.25Z"
        fill="#42526E"
      />
    </svg>
  );
}
