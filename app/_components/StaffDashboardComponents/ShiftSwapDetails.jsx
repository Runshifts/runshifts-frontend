import Image from "next/image"
import ShiftSwapForm from "./ShiftSwapForm"
import placeholderImage from "../../_assets/img/user.png"
import { UserContext } from "../../_providers/UserProvider"
import { useContext } from "react"

export default function ShiftSwapDetails({ shift }) {
  const { user } = useContext(UserContext)
  return (
    <>
      <div className="flex flex-col items-center gap-[14px] p-4 bg-white rounded-[16px] max-w-[356px]">
        <h3 className="text-center font-[600] text-[16px] text-[#1B1818]">
          Shift details
        </h3>
        <Image
          width={69}
          height={69}
          alt=""
          className="rounded-full w-[69px] h-[69px] object-cover"
          src={shift.assignee?.profileImage?.secure_url || placeholderImage}
        />
        <ShiftSwapForm
          currentShift={shift}
          showHeader={false}
          centerButton={true}
          idOfUserToShowShiftOptions={user?._id}
          employee={shift?.assignee}
        />
      </div>
    </>
  )
}
