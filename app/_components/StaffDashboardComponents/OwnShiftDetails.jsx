import Image from "next/image"
import ShiftAcceptanceForm from "./ShiftAcceptanceForm"
import placeholderImage from "../../_assets/img/user.png"
import ShiftSwapForm from "./ShiftSwapForm"
import ShiftNotesSection from "./ShiftNotesSection"

export default function OwnShiftDetails({ shift = {}, onClose = () => {} }) {
  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-[16px] max-w-[638px] max-h-[100dvh] md:max-h-unset overflow-auto">
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
      <div className="flex gap-4 items-stretch flex-wrap md:flex-nowrap">
        <ShiftAcceptanceForm shift={shift} onFinish={() => onClose()} />
        <div className="w-[1px] min-h-[260px] bg-[#E2E2E2] hidden md:block"></div>
        {shift.isAccepted ? (
          <div className="max-h-[60dvh] overflow-y-auto grow md:max-w-[318px] shrink-0">
            <ShiftNotesSection shift={shift} />
          </div>
        ) : (
          <div>
            <ShiftSwapForm currentShift={shift} showHeader />
          </div>
        )}
      </div>
      {shift.isAccepted && (
        <div className="flex items-center justify-self-center w-full md:ml-auto grow md:max-w-[330px]">
          <button
            onClick={onClose}
            className="text-info-[500] bg-[#091E420A] px-3 py-[6px] rounded-sm capitalize"
          >
            close
          </button>
        </div>
      )}
    </div>
  )
}
