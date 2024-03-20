import React from "react";
import DateRangePicker from "../_components/AppComps/Datepicker";
import CalendarScroll from "../_components/EmployeeComps/CalendarScroll";
import ShiftSwap from "./ShiftSwap";
import MyActivities from "./MyActivities";

function EmployeeDashboard() {
  return (
    <section className="p-3 h-screen">
      <h1 className="custom-h1">
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
