import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { SubmitButton } from "../../_components/Auth/Inputs"

const MobileTimesheet = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="md:hidden">
      <Slider {...settings}>
        {daysOfWeek.map((day, index) => (
          <TimesheetComponent key={index} />
        ))}
      </Slider>
    </section>
  )
}

export default MobileTimesheet

export function TimesheetComponent() {
  return (
    <div className="border border-solid border-[#CAC6C3] md:border-[#E3E3E3] rounded-[8px] p-4 flex flex-col md:flex-row gap-2 md:gap-0 md:p-0">
      <div className="flex gap-2 items-center md:w-[45%] md:border-r-solid md:border-r md:border-r-[#E3E3E3] md:p-4">
        <p className="text-[12px] px-[4px] py-[2px] leading-[1rem] bg-[#0000000F] rounded-[8px] whitespace-nowrap">
          Monday
        </p>
        <p className="text-[14px] leading-[20px] whitespace-nowrap">
          Dec 5, 2023
        </p>
      </div>

      <p className="text-[14px] leading-[20px] md:border-x-solid md:border-x md:border-x-[#E3E3E3] md:p-4">
        Hid subcomponents with duplicative name
      </p>
      <div className="flex items-center justify-center max-w-[122px] md:max-w-none gap-2 md:w-[35%] md:p-4">
        <SubmitButton
          className={
            "px-[12px] py-[2px] bg-[#5BC62D] text-[14px] md:py-[8px] md:px-[16px] text-white md:font-[600] rounded-[8px]"
          }
        >
          Approve
        </SubmitButton>
        <button className="text-danger-600">Query</button>
      </div>
    </div>
  )
}
