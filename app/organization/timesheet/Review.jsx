import React from "react"
import Carousel from "./Carousel"
import MobileTimesheet, { TimesheetComponent } from "./Carousel"

const Review = () => {
  return (
    <section className="bg-white px-[40px] py-[24px] rounded-[16px] max-w-[616px]">
      <div>
        <h1 className="font-bold text-[#252525] text-sm py-2 mt-4 mb-2">
          Timesheet Review
        </h1>
        
        <MobileTimesheet />
        <div className="hidden md:grid grid-cols-1 gap-3">
          <TimesheetComponent />
          <TimesheetComponent />
          <TimesheetComponent />
          <TimesheetComponent />
          <TimesheetComponent />
        </div>
      </div>
    </section>
  )
}

export default Review
