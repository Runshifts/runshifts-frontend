import React from "react"
import { TimesheetComponent } from "./Carousel"
import FormInputAndLabel from "../schedule/NewShiftForm/FormInputAndLabel"
import Image from "next/image"
import placeholderImg from "../../_assets/img/user.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const Review = () => {
  return (
    <>
      <section className="bg-white flex flex-col gap-[14px] justify-center items-center px-[20px] md:px-[40px] py-[24px] rounded-[16px] w-[80dvw] md:max-w-[616px] py-[24px]">
        <Image
          className="w-[64px] h-[64px] rounded-full"
          src={placeholderImg}
        />
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col md:grid grid-cols-2 gap-4">
            <FormInputAndLabel label="Name" />
            <FormInputAndLabel label="Branch Location" />
            <FormInputAndLabel label="Position" />
            <FormInputAndLabel label="Unpaid Break" />
          </div>
          <h3 className="font-bold text-[#283142] text-[14px] font-[600]">
            Work days
          </h3>
          <div className="md:hidden w-[300px] sm:w-auto">
            <SwiperTimesheet />
          </div>
          <div className="hidden md:grid grid-cols-1 gap-3 max-h-[40dvh] overflow-auto">
            <TimesheetComponent />
            <TimesheetComponent />
            <TimesheetComponent />
          </div>
        </div>
      </section>
    </>
  )
}

export default Review

function SwiperTimesheet() {
  return (
    <Swiper
      pagination={{ clickable: true,  }}
      modules={[Pagination]}
      className="max-w-[280px] h-[150px] md:max-w-none"
    >
      <SwiperSlide>
        <TimesheetComponent />
      </SwiperSlide>
      <SwiperSlide>
        <TimesheetComponent />
      </SwiperSlide>
    </Swiper>
  )
}
