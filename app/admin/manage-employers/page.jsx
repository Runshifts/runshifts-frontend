import React from "react";
import Button from "../../_components/AppComps/Button";
import ManageEmployersFilterGroup from "../../_components/AdminComps/ManageEmployersFilterGroup";
import TotalCards from "./TotalCards";
import SignupTable from "./SignupTable";

function page() {
  return (
    <section className="p-6 h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-[#292D32] mb-4 mt-2 text-2xl not-italic font-medium leading-7">
          Manage Employers
        </h1>

        <Button>
          <div className="flex items-center justify-start">
            <PlusSvg />
            <p>Add employer</p>
          </div>
        </Button>
      </div>

      <ManageEmployersFilterGroup />

      <TotalCards />

      <SignupTable />
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
