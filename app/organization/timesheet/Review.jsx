import React, { useContext, useMemo, useState } from "react"
import TimesheetComponent from "./TimesheetComponent"
import FormInputAndLabel from "../../_components/ScheduleComponents/NewShiftForm/FormInputAndLabel"
import Image from "next/image"
import placeholderImg from "../../_assets/img/user.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { msToHourMinSecond } from "../../_utils"
import { OrganizationContext } from "../../_providers/OrganizationProvider"
import { SubmitButton } from "../../_components/Auth/Inputs"
import useGetTimesheetActions from "../../_hooks/useGetTimesheetActions"
import toast from "react-hot-toast"

const Review = ({
  employee,
  shifts = [],
  approveMultipleShifts,
  loading,
  queryMultipleShifts,
}) => {
  const { organization } = useContext(OrganizationContext)
  const sortedShifts = useMemo(
    () =>
      shifts.toSorted(
        (a, b) =>
          new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
      ),
    [shifts]
  )
  const [note, setNote] = useState("")

  return (
    <>
      <section className="bg-white flex flex-col gap-[14px] justify-center items-center px-[20px] md:px-[40px] py-[24px] rounded-[16px] w-[80dvw] md:max-w-[616px] py-[24px]">
        <h3 className="self-center mx-auto font-[600] text-[#1B1818] leading-[20px] text-[16px]">
          Timesheet review
        </h3>
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
                  employee.email ||
                  "",
                readOnly: true,
              }}
            />
            <FormInputAndLabel
              label="Branch Location"
              inputProps={{
                value: employee?.location?.address || "",
                readOnly: true,
              }}
            />
            <FormInputAndLabel
              label="Position"
              inputProps={{ value: employee?.position || "", readOnly: true }}
            />
            <FormInputAndLabel
              label="Unpaid Break"
              inputProps={{
                value: msToHourMinSecond(
                  organization?.allottedBreakTimeInMilliseconds || ""
                ),
                readOnly: true,
              }}
            />
          </div>
          <h3 className="font-bold text-[#283142] text-[14px] font-[600]">
            Work days
          </h3>
          <div className="md:hidden w-[300px] sm:w-auto">
            <SwiperTimesheet shifts={sortedShifts} />
          </div>
          <div className="hidden md:grid grid-cols-1 gap-3 max-h-[40dvh] overflow-auto">
            {sortedShifts.map((shift, index) => (
              <TimesheetComponent key={shift?._id} shift={shift} />
            ))}
          </div>
          <FormInputAndLabel
            label="Add your note"
            inputProps={{
              placeholder: "Write feedback here...",
              value: note,
              onChange: (e) => setNote(e.target.value),
            }}
          />
          <div className="w-full flex flex-col gap-2 mt-[-2px]">
            <SubmitButton
              onClick={() => {
                approveMultipleShifts(note)
                setNote("")
              }}
              className={
                "px-[12px] py-[2px] disabled:cursor-not-allowed disabled:bg-primary-200 bg-[#5BC62D] text-[14px] md:py-[8px] md:px-[16px] text-white md:font-[600] rounded-[8px]"
              }
              isLoading={loading.multipleShifts}
              isDisabled={
                sortedShifts.every((it) => it.isApproved) ||
                loading.multipleShifts
              }
              loadingText="Approving timesheet"
            >
              Approve Timesheet
            </SubmitButton>
            <button
              onClick={() => {
                if (note.trim().length === 0)
                  toast.error("Please provide a reason for query")
                note.length > 0 && queryMultipleShifts(note)
                setNote("")
              }}
              className={`text-danger-600 disabled:opacity-30 disabled:cursor-not-allowed`}
              disabled={
                shifts.some((shift) => shift.isQueried) ||
                shifts.every((shift) => shift.isApproved)
              }
            >
              Query Timesheet
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Review

function SwiperTimesheet({ shifts = [], onQueryClick }) {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="max-w-[280px] h-[150px] md:max-w-none"
    >
      {shifts.map((shift) => (
        <SwiperSlide key={shift?._id}>
          <TimesheetComponent
            shift={shift}
            onQueryClick={() => setShowQueryModal(true)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
