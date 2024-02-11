import React from "react";
import Avatar from "../../../public/dashboardImgs/timesheet.svg";
import Image from "next/image";

const ScheduleTable = () => {
  const employeeNames = [
    "Charlse Jenkings",
    "Otto Chris",
    "Ariana Woods",
    "Bernard Oslo",
  ];

  return (
    <div className="rounded-lg overflow-x-auto  shadow-lg">
      <table className="min-w-full bg-gray-50 ">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">
              <input type="checkbox" className="form-checkbox" />
            </th>
            <th className="py-2 px-4 text-[#2252525] font-thin">Employee</th>
            <th className="py-2 px-4 text-[#2252525] font-thin">Monday</th>
            <th className="py-2 px-4 text-[#2252525] font-thin">Tuesday</th>
            <th className="py-2 px-4 text-[#2252525] font-thin">Wednesday</th>
            <th className="py-2 px-4 text-[#2252525] font-thin">Thursday</th>
            <th className="py-2 px-4 text-[#2252525] font-thin">Friday</th>
            <th className="py-2 px-4 text-[#2252525] font-thin">Saturday</th>
            <th className="py-2 px-4 text-[#2252525] font-thin">Sunday</th>
            <th className="py-2 px-4 text-[#2252525] font-thin"></th>
          </tr>
        </thead>
        <tbody>
          {employeeNames.map((employee, rowIndex) => (
            <tr key={rowIndex}>
              <td className="py-2 px-4">
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td className="py-1 px-4 flex text-sm text-[#252525] font-medium">
                <Image src={Avatar} alt="avatar" height={50} width={50} quality={100} className="pr-2" />
                {employee}
              </td>
              <td className="py-1 px-4 text-sm  text-[#252525] font-medium">
                <input
                  type="text"
                  className="border-none w-full focus:outline-none"
                  value="5.45 hrs"
                />
              </td>
              <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                <input
                  type="text"
                  className="border-none w-full focus:outline-none"
                  value="5.45 hrs"
                />
              </td>
              <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                <input
                  type="text"
                  className="border-none w-full focus:outline-none"
                  value="5.45 hrs"
                />
              </td>
              <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                <input
                  type="text"
                  className="border-none w-full focus:outline-none"
                  value="5.45 hrs"
                />
              </td>
              <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                <input
                  type="text"
                  className="border-none w-full focus:outline-none"
                  value="5.45 hrs"
                />
              </td>
              <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                <input
                  type="text"
                  className="border-none w-full focus:outline-none"
                  value="5.45 hrs"
                />
              </td>
              <td className="py-1 px-4 text-sm text-[#252525] font-medium ">
                <input
                  type="text"
                  className="border-none w-full focus:outline-none"
                  value="5.45 hrs"
                />
              </td>
              <td className="py-1 px-4 text-sm text-[#252525] font-medium">
                {/* <Link href='/timesheetReview'> */}
                  <MoreSvg />
                {/* <Link>            */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;

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
        fill-opacity="0.8"
      />
    </svg>
  );
}
