import React from "react";
import Statistics from "./Statistics"
import ShiftsTicket from "./ShiftsTickets";
import CurrentShifts from "./CurrentShifts";

function page() {
  return (
    <section className="p-6 min-h-screen flex flex-col gap-6">
      <h1 className="custom-h1">Shift Management</h1>

      <div className="flex flex-row">
        <select
          className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:text-sm "
          aria-label="Default select example"
        >
          <option>Search employees...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div className="hidden md:block">
          <select
            className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:text-sm "
            aria-label="Default select example"
          >
            <option>Location</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:text-sm "
            aria-label="Default select example"
          >
            <option>Company</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:text-sm "
            aria-label="Default select example"
          >
            <option>Week</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <select
          className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] mr-2 h-10 rounded-md md:hidden "
          aria-label="Default select example"
        >
          <option>Filter</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <Statistics />

      <ShiftsTicket />

      <CurrentShifts />
    </section>
  )
}

export default page;
