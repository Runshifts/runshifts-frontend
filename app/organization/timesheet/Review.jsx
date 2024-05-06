import React, { useContext } from "react"
import { TimesheetComponent } from "./Carousel"
import FormInputAndLabel from "../schedule/NewShiftForm/FormInputAndLabel"
import Image from "next/image"
import placeholderImg from "../../_assets/img/user.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { msToHourMinSecond } from "../../_utils"
import { OrganizationContext } from "../../_providers/OrganizationProvider"

const Review = ({ employee, shifts = [] }) => {
  const { organization } = useContext(OrganizationContext)

  return (
    <>
      <section className="bg-white flex flex-col gap-[14px] justify-center items-center px-[20px] md:px-[40px] py-[24px] rounded-[16px] w-[80dvw] md:max-w-[616px] py-[24px]">
        <Image
          className="w-[64px] h-[64px] rounded-full object-cover"
          src={employee?.profileImage?.secure_url || placeholderImg}
          width={30}
          height={30}
          alt=""
        />
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col md:grid grid-cols-2 gap-4">
            <FormInputAndLabel
              label="Name"
              inputProps={{
                value:
                  employee?.fullName ||
                  (
                    (employee?.firstName || "") +
                    " " +
                    (employee?.lastName || "")
                  ).trim() ||
                  employee.email,
                readOnly: true,
              }}
            />
            <FormInputAndLabel
              label="Branch Location"
              inputProps={{
                value: employee?.location?.address,
                readOnly: true,
              }}
            />
            <FormInputAndLabel
              label="Position"
              inputProps={{ value: employee?.position, readOnly: true }}
            />
            <FormInputAndLabel
              label="Unpaid Break"
              inputProps={{
                value: msToHourMinSecond(
                  organization?.allottedBreakTimeInMilliseconds
                ),
                readOnly: true,
              }}
            />
          </div>
          <h3 className="font-bold text-[#283142] text-[14px] font-[600]">
            Work days
          </h3>
          <div className="md:hidden w-[300px] sm:w-auto">
            <SwiperTimesheet shifts={shifts} />
          </div>
          <div className="hidden md:grid grid-cols-1 gap-3 max-h-[40dvh] overflow-auto">
            {shifts.map((shift, index) => (
              <TimesheetComponent key={shift?._id} shift={shift} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Review

function SwiperTimesheet({ shifts = []}) {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="max-w-[280px] h-[150px] md:max-w-none"
    >
      {shifts.map((shift) => (
        <SwiperSlide key={shift?._id}>
          <TimesheetComponent shift={shift} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
