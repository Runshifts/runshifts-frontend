import React from "react";
import DateRangePicker from "../_components/AppComps/Datepicker";
import CalendarScroll from "../_components/EmployeeComps/CalendarScroll";
import ShiftSwap from "./ShiftSwap";
import MyActivities from "./MyActivities";

function EmployeeDashboard() {
  return (
    <section className="p-3 h-screen">
      <h1 className="text-[#292D32] font-semibold text-xl md:font-bold text-2xl ">
        Welcome Ottobong
      </h1>

      <DateRangePicker />

      <div>
        <CalendarScroll />
      </div>

      <div>
        <ShiftSwap />
      </div>

      <div>
        <MyActivities />
      </div>
    </section>
  );
}

export default EmployeeDashboard;
