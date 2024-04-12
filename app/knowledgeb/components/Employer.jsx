import React from "react";
import InfoCardsSkeleton from "./InfoCardsSkeleton";

function Employer() {
  return (
    <div className="px-8">
      <div className="flex items-center justify-between mt-12 mb-4">
        <p className="text-xl text-[#706763] font-medium leading-6 tracking-normal text-left mb-4 pb-1 relative">
          <span className="relative z-10">
            <span className="relative">Emp</span>
            <span className="absolute left-0 bottom-0 h-0.5 w-7 bg-[#EFEDED]"></span>
          </span>
          loyer
        </p>

        <p className="text-base font-medium leading-6 tracking-normal text-left text-[#449522] ">View more</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <InfoCardsSkeleton
          title="Scheduling"
          content="Get introduced to the basic concepts of our editor, how to create projects and navigate between all the platform functionalities."
        />

        <InfoCardsSkeleton
          title="Timesheet"
          content="Get introduced to the basic concepts of our editor, how to create projects and navigate between all the platform functionalities."
        />

        <InfoCardsSkeleton
          title="Payroll"
          content="Get introduced to the basic concepts of our editor, how to create projects and navigate between all the platform functionalities."
        />
      </div>
    </div>
  );
}

export default Employer;
