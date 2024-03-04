import React from "react";
import Button from "@/app/_components/AdminComps/Button";
import TotalCards from "./TotalCards";
import AllEmployeesTable from "./AllEmployeesTable";
import ManageEmployeesFilterGroup from "@/app/_components/AdminComps/ManageEmployeesFilterGroup";

function page() {
  return (
    <section className="p-6 h-screen">
      <div className="flex items-center justify-between">
        <h1 className="custom-h1 ">
          Manage Employees
        </h1>

        <div className="flex items-center justify-center">
          <Button>
            <div className="flex items-center justify-center">
              <PlusSvg />
              <p>Add employee</p>
            </div>
          </Button>

          <button className="hidden md:bg-gray-100 rounded ml-1 px-2 py-1">
            <div className="flex items-center justify-start text-[#42526E] text-sm ">
              <ImportSVg />
              <p>Import from csv</p>
            </div>
          </button>

          <div className="bg-gray-100 ml-1 md:hidden">
            <MoreSvg />
          </div>
        </div>
      </div>

      <ManageEmployeesFilterGroup />

      <TotalCards />

      <AllEmployeesTable />
    </section>
  );
}

export default page;

function PlusSvg() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 12.75H6.5C6.09 12.75 5.75 12.41 5.75 12C5.75 11.59 6.09 11.25 6.5 11.25H18.5C18.91 11.25 19.25 11.59 19.25 12C19.25 12.41 18.91 12.75 18.5 12.75Z"
        fill="white"
      />
      <path
        d="M12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V6C11.75 5.59 12.09 5.25 12.5 5.25C12.91 5.25 13.25 5.59 13.25 6V18C13.25 18.41 12.91 18.75 12.5 18.75Z"
        fill="white"
      />
    </svg>
  );
}

function ImportSVg() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8583 14.99C12.6683 14.99 12.4783 14.92 12.3283 14.77L9.76828 12.21C9.47828 11.92 9.47828 11.44 9.76828 11.15C10.0583 10.86 10.5383 10.86 10.8283 11.15L12.8583 13.18L14.8883 11.15C15.1783 10.86 15.6583 10.86 15.9483 11.15C16.2383 11.44 16.2383 11.92 15.9483 12.21L13.3883 14.77C13.2383 14.92 13.0483 14.99 12.8583 14.99Z"
        fill="#42526E"
      />
      <path
        d="M12.8584 14.92C12.4484 14.92 12.1084 14.58 12.1084 14.17V4C12.1084 3.59 12.4484 3.25 12.8584 3.25C13.2684 3.25 13.6084 3.59 13.6084 4V14.17C13.6084 14.58 13.2684 14.92 12.8584 14.92Z"
        fill="#42526E"
      />
      <path
        d="M12.9785 20.9301C7.82852 20.9301 4.22852 17.3301 4.22852 12.1801C4.22852 11.7701 4.56852 11.4301 4.97852 11.4301C5.38852 11.4301 5.72852 11.7701 5.72852 12.1801C5.72852 16.4501 8.70852 19.4301 12.9785 19.4301C17.2485 19.4301 20.2285 16.4501 20.2285 12.1801C20.2285 11.7701 20.5685 11.4301 20.9785 11.4301C21.3885 11.4301 21.7285 11.7701 21.7285 12.1801C21.7285 17.3301 18.1285 20.9301 12.9785 20.9301Z"
        fill="#42526E"
      />
    </svg>
  );
}

function MoreSvg() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="24"
        height="24"
        transform="translate(0.5)"
        fill="white"
        fill-opacity="0.01"
      />
      <path
        d="M5.5 14C6.60457 14 7.5 13.1046 7.5 12C7.5 10.8954 6.60457 10 5.5 10C4.39543 10 3.5 10.8954 3.5 12C3.5 13.1046 4.39543 14 5.5 14Z"
        fill="#42526E"
      />
      <path
        d="M12.5 14C13.6046 14 14.5 13.1046 14.5 12C14.5 10.8954 13.6046 10 12.5 10C11.3954 10 10.5 10.8954 10.5 12C10.5 13.1046 11.3954 14 12.5 14Z"
        fill="#42526E"
      />
      <path
        d="M19.5 14C20.6046 14 21.5 13.1046 21.5 12C21.5 10.8954 20.6046 10 19.5 10C18.3954 10 17.5 10.8954 17.5 12C17.5 13.1046 18.3954 14 19.5 14Z"
        fill="#42526E"
      />
    </svg>
  );
}
