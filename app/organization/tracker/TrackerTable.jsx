"use client";
import React, { useState } from "react";
import Avatar from "./Ellipse.svg";
import { IoEyeOutline } from "react-icons/io5";
import Breakdown from "./Breakdown";
import Image from "next/image";

const Tracker = (props) => {
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);

  const toggleSmallModal = () => {
    setIsSmallModalOpen(!isSmallModalOpen);
  };

  const toggleLargeModal = () => {
    setIsLargeModalOpen(!isLargeModalOpen);
  };

  const employeeNames1 = [
    "Charlse Jenkings",
    "Otto Chris",
    "Ariana Woods",
    "Bernard Oslo",
  ];
  const employeeNames2 = ["Charlse Jenkings", "Otto Chris"];

  const employeeNames3 = ["Charlse Jenkings", "Otto Chris", "Bernard Oslo"];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div>
        <h1 className="font-semibold text-sm text-[#252525] pt-1 pb-3">
          Employees currently clocked in
        </h1>
        <div className="rounded-lg shadow-lg">
          <table className="min-w-full bg-gray-50">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-start text-sm text-[#2252525] font-thin">
                  Employee
                </th>
                <th className="py-2 px-4 text-[#2252525] font-thin"></th>
              </tr>
            </thead>
            <tbody>
              {employeeNames1.map((employee, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="py-1 px-4 flex text-sm text-[#252525] font-medium">
                    <Image
                      height={50}
                      width={50}
                      src={Avatar}
                      alt="avatar"
                      className="pr-2"
                    />
                    {employee}
                  </td>
                  <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                    <button onClick={toggleSmallModal}>
                      <MoreSvg />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small Modal */}
        {isSmallModalOpen && (
          <div className="fixed inset-y-4 flex items-center justify-center">
            <div className="bg-white shadow-lg p-2 rounded-md ">
              {/* <button className='right-0 top-0 text-xs px-2' onClick={toggleSmallModal}>X</button> */}
              <button
                className="flex items-center justify-center"
                onClick={toggleLargeModal}
              >
                <IoEyeOutline />
                <p className="text-xs px-2">See employee breakdown</p>
              </button>
            </div>
          </div>
        )}

        {/* Large Modal */}
        {isLargeModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Breakdown />
            {/* <button onClick={toggleLargeModal}>Go back</button> */}
          </div>
        )}
      </div>

      <div>
        <h1 className="font-semibold text-sm text-[#252525] pt-1 pb-3">
          Employees with time off
        </h1>
        <div className="rounded-lg shadow-lg">
          <table className="min-w-full bg-gray-50 ">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-start text-sm text-[#2252525] font-thin">
                  Employee
                </th>
                <th className="py-2 px-4 text-[#2252525] font-thin"></th>
              </tr>
            </thead>
            <tbody>
              {employeeNames2.map((employee, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="py-1 px-4 flex text-sm text-[#252525] font-medium">
                    <Image
                      height={50}
                      width={50}
                      src={Avatar}
                      alt="avatar"
                      className="pr-2"
                    />
                    {employee}
                  </td>
                  <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                    {/* <Link to='/timesheetReview'> */}
                    <MoreSvg />
                    {/* <Link>            */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-sm text-[#252525] pt-1 pb-3">
          Employees currently on break
        </h1>
        <div className="rounded-lg shadow-lg">
          <table className="min-w-full bg-gray-50 ">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-start text-sm text-[#2252525] font-thin">
                  Employee
                </th>
                <th className="py-2 px-4 text-[#2252525] font-thin"></th>
              </tr>
            </thead>
            <tbody>
              {employeeNames3.map((employee, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="py-1 px-4 flex text-sm text-[#252525] font-medium">
                    <Image
                      height={50}
                      width={50}
                      src={Avatar}
                      alt="avatar"
                      className="pr-2"
                    />
                    {employee}
                  </td>
                  <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                    {/* <Link to='/timesheetReview'> */}
                    <MoreSvg />
                    {/* <Link>            */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-sm text-[#252525] pt-1 pb-3">
          Employees clocked out
        </h1>
        <div className="rounded-lg shadow-lg">
          <table className="min-w-full bg-gray-50 ">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-start text-sm text-[#2252525] font-thin">
                  Employee
                </th>
                <th className="py-2 px-4 text-[#2252525] font-thin"></th>
              </tr>
            </thead>
            <tbody>
              {employeeNames2.map((employee, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="py-1 px-4 flex text-sm text-[#252525] font-medium">
                    <Image
                      height={50}
                      width={50}
                      src={Avatar}
                      alt="avatar"
                      className="pr-2"
                    />
                    {employee}
                  </td>
                  <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                    {/* <Link to='/timesheetReview'> */}
                    <MoreSvg />
                    {/* <Link>            */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-sm text-[#252525] pt-1 pb-3">
          incoming shift
        </h1>
        <div className="rounded-lg shadow-lg">
          <table className="min-w-full bg-gray-50 ">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-start text-sm text-[#2252525] font-thin">
                  Employee
                </th>
                <th className="py-2 px-4 text-start text-sm text-[#2252525] font-thin">
                  Start Time
                </th>
                <th className="py-2 px-4 text-[#2252525] font-thin">-</th>
              </tr>
            </thead>
            <tbody>
              {employeeNames3.map((employee, rowIndex) => (
                <tr key={rowIndex} className="">
                  <td className="py-1 px-4 flex text-sm text-[#252525] font-medium">
                    <Image
                      height={50}
                      width={50}
                      src={Avatar}
                      alt="avatar"
                      className="pr-2"
                    />
                    {employee}
                  </td>
                  <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                    09:00 AM
                  </td>
                  <td className="py-1 px-4 flex text-sm text-[#252525] font-medium">
                    <MoreSvg />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tracker;

function MoreSvg() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 16.6667C9.5418 16.6667 9.14958 16.5037 8.82347 16.1775C8.4968 15.8509 8.33347 15.4584 8.33347 15C8.33347 14.5417 8.4968 14.1492 8.82347 13.8225C9.14958 13.4964 9.5418 13.3334 10.0001 13.3334C10.4585 13.3334 10.851 13.4964 11.1776 13.8225C11.5037 14.1492 11.6668 14.5417 11.6668 15C11.6668 15.4584 11.5037 15.8509 11.1776 16.1775C10.851 16.5037 10.4585 16.6667 10.0001 16.6667ZM10.0001 11.6667C9.5418 11.6667 9.14958 11.5034 8.82347 11.1767C8.4968 10.8506 8.33347 10.4584 8.33347 10C8.33347 9.54171 8.4968 9.14921 8.82347 8.82254C9.14958 8.49643 9.5418 8.33337 10.0001 8.33337C10.4585 8.33337 10.851 8.49643 11.1776 8.82254C11.5037 9.14921 11.6668 9.54171 11.6668 10C11.6668 10.4584 11.5037 10.8506 11.1776 11.1767C10.851 11.5034 10.4585 11.6667 10.0001 11.6667ZM10.0001 6.66671C9.5418 6.66671 9.14958 6.50337 8.82347 6.17671C8.4968 5.8506 8.33347 5.45837 8.33347 5.00004C8.33347 4.54171 8.4968 4.14948 8.82347 3.82337C9.14958 3.49671 9.5418 3.33337 10.0001 3.33337C10.4585 3.33337 10.851 3.49671 11.1776 3.82337C11.5037 4.14948 11.6668 4.54171 11.6668 5.00004C11.6668 5.45837 11.5037 5.8506 11.1776 6.17671C10.851 6.50337 10.4585 6.66671 10.0001 6.66671Z"
        fill="#1D2433"
        fillOpacity="0.8"
      />
    </svg>
  )
}
