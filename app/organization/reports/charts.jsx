"use client";
import React from "react";
import Barchart from "./Barchart";
import WorkedHrs from "./WorkedHrs";
import Donut from "./Donut";
import Labour from "./Labour";
import Scheduling from "./Scheduling";
import RightToWork from "./RightToWork";


function charts() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Barchart />
        <WorkedHrs />
      </div>
      <div className="grid grid-cols-1 my-5 gap-4 md:grid-cols-3">
        <Donut />
        <Labour />
        <Scheduling />
        <RightToWork />
      </div>
    </div>
  );
}

export default charts;
