"use client";
import React, { useState } from "react";
import Calendar from "../../organization/tracker/Calendar";

function TrackerFilterGroup() {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const handleCalendarToggle = () => {
    setCalendarOpen(!isCalendarOpen);
  };

  return (
    <section>
      <div className="hidden md:flex items-center justify-start my-6">
        <input
          type="text"
          placeholder="Search members..."
          className="bg-[#F4F5F7] border-none px-2 py-2 mx-2 h-10 text-[#7A869A] text-xs rounded cursor-pointer"
          name="members"
        />
        <select
          className="bg-[#F4F5F7] border-none text-[#7A869A] text-xs m-2 mx-2 h-10 w-32 rounded flex justify-between items-center cursor-pointer"
          aria-label="Default select example"
        >
          <option>Location</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select
          className="bg-[#F4F5F7] border-none text-[#7A869A] text-xs m-2  mx-2 h-10 w-32 rounded flex justify-between items-center cursor-pointer"
          aria-label="Default select example"
        >
          <option>Department</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div>
          <Calendar onClose={() => setCalendarOpen(true)} />
        </div>
      </div>
    </section>
  );
}

export default TrackerFilterGroup;

function DateSvg() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66663 4.79175C6.32496 4.79175 6.04163 4.50841 6.04163 4.16675V1.66675C6.04163 1.32508 6.32496 1.04175 6.66663 1.04175C7.00829 1.04175 7.29163 1.32508 7.29163 1.66675V4.16675C7.29163 4.50841 7.00829 4.79175 6.66663 4.79175Z"
        fill="#7A869A"
      />
      <path
        d="M13.3334 4.79175C12.9917 4.79175 12.7084 4.50841 12.7084 4.16675V1.66675C12.7084 1.32508 12.9917 1.04175 13.3334 1.04175C13.675 1.04175 13.9584 1.32508 13.9584 1.66675V4.16675C13.9584 4.50841 13.675 4.79175 13.3334 4.79175Z"
        fill="#7A869A"
      />
      <path
        d="M12.5 18.9584H7.5C2.81667 18.9584 1.875 16.7501 1.875 13.1834V8.04175C1.875 4.09175 3.20833 2.48341 6.63333 2.29175H13.3333C13.3417 2.29175 13.3583 2.29175 13.3667 2.29175C16.7917 2.48341 18.125 4.09175 18.125 8.04175V13.1834C18.125 16.7501 17.1833 18.9584 12.5 18.9584ZM6.66667 3.54175C4.33333 3.67508 3.125 4.40841 3.125 8.04175V13.1834C3.125 16.3751 3.73333 17.7084 7.5 17.7084H12.5C16.2667 17.7084 16.875 16.3751 16.875 13.1834V8.04175C16.875 4.41675 15.675 3.67508 13.3167 3.54175H6.66667Z"
        fill="#7A869A"
      />
      <path
        d="M17.2917 15.2917H2.70837C2.36671 15.2917 2.08337 15.0084 2.08337 14.6667C2.08337 14.3251 2.36671 14.0417 2.70837 14.0417H17.2917C17.6334 14.0417 17.9167 14.3251 17.9167 14.6667C17.9167 15.0084 17.6334 15.2917 17.2917 15.2917Z"
        fill="#7A869A"
      />
      <path
        d="M9.99996 6.875C8.97496 6.875 8.10829 7.43333 8.10829 8.51667C8.10829 9.03333 8.34996 9.425 8.71663 9.675C8.20829 9.975 7.91663 10.4583 7.91663 11.025C7.91663 12.0583 8.70829 12.7 9.99996 12.7C11.2833 12.7 12.0833 12.0583 12.0833 11.025C12.0833 10.4583 11.7916 9.96667 11.275 9.675C11.65 9.41667 11.8833 9.03333 11.8833 8.51667C11.8833 7.43333 11.025 6.875 9.99996 6.875ZM9.99996 9.24167C9.56663 9.24167 9.24996 8.98333 9.24996 8.575C9.24996 8.15833 9.56663 7.91667 9.99996 7.91667C10.4333 7.91667 10.75 8.15833 10.75 8.575C10.75 8.98333 10.4333 9.24167 9.99996 9.24167ZM9.99996 11.6667C9.44996 11.6667 9.04996 11.3917 9.04996 10.8917C9.04996 10.3917 9.44996 10.125 9.99996 10.125C10.55 10.125 10.95 10.4 10.95 10.8917C10.95 11.3917 10.55 11.6667 9.99996 11.6667Z"
        fill="#7A869A"
      />
    </svg>
  );
}
