import InfoIcon from "../../_assets/svgs/Info"

export default function TwoFAInfoBlock({ heading, text }) {
  return (
    <div className="flex bg-[#DEEBFF] p-4 items-start justify-start gap-[16px] p-4 rounded-[3px]">
      <InfoIcon />
      <div className="flex flex-col gap-[8px]">
        <p className="text-base font-[100] text-[#172B4D] leading-[20px]">
          {heading}
        </p>
        <p className="text-[#172B4D] text-[14px] font-[400] leading-[20px]">
          {text}
        </p>
      </div>
    </div>
  )
}
