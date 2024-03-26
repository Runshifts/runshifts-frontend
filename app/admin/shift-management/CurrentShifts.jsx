"use client"
import { useContext } from "react"
import Pen from "../../_assets/svgs/Pen"
import Delete from "../../_assets/svgs/Delete"
import Image from "next/image"
import placeholderImage from "../../_assets/img/user.png"
import { AdminDashboardContext } from "../../_providers/Admin/AdminDashboardProvider"
import { formatDate } from "../../_utils"

const AllEmployeesTable = () => {
  const { currentShifts } = useContext(AdminDashboardContext)

  return (
    <div className="overflow-x-auto flex flex-col gap-4">
      <h2 className="text-[12px] md:text-base font-[600] text-[#292D32] leading-[150%]">
        Current shifts
      </h2>
      <div className="flex flex-col gap-2">
        {currentShifts.map((shift, idx) => (
          <CurrentShift key={shift._id} shift={shift} isOdd={idx % 2} />
        ))}
      </div>
    </div>
  )
}

export default AllEmployeesTable

function CurrentShift({ shift = {}, isOdd }) {
  return (
    <div
      style={{ backgroundColor: isOdd ? "#F8F9FC" : "" }}
      className="grid grid-cols-5 text-[14px] text-[#1D2433] capitalize items-center bg-white  shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] rounded p-1"
    >
      <div className="flex items-center justify-center">
        <input type="checkbox" className="form-checkbox mx-4" />
        <Image
          src={shift.assignee?.profileImage?.secure_url || placeholderImage}
          alt={shift.assignee?.firstName}
          height={24}
          width={24}
          className="rounded-full w-[24px] h-[24px]"
        />
        <div className="text-[#1D2433] truncate text-sm mx-2">
          {shift.assignee?.fullName || shift.assignee?.email}
        </div>
      </div>

      <div className="pl-4">{shift.organization?.name}</div>

      <div>{shift.location?.address}</div>

      <div>{formatDate(new Date(shift.startTime), { year: "numeric" })}</div>

      <div className="flex space-x-2 grow">
        <button className="bg-[#5BC62D] rounded text-white py-[8px] flex gap-[4px] px-[12px] py-[4px] items-center">
          <Pen />
          <span>Edit</span>
        </button>
        <button className="rounded text-[#B22A09] py-[8px] px-[10px]">
          <div className="flex items-center">
            <div className="h-[20px] w-[20px] ">
              <Delete />
            </div>
            <p className="ml-2">Delete</p>
          </div>
        </button>
      </div>
    </div>
  )
}
