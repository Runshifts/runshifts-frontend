import Image from "next/image"
import ShiftSwapForm from "./ShiftSwapForm"

export default function ShiftSwapDetails({ shift }) {
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
        <ShiftSwapForm shift={shift} />
      </div>
    </>
  )
}
