import Image from "next/image"
import placeholderImage from "../../_assets/img/user.png"
import { SeverityPill } from "../../employee/my-shifts/ShiftNotesForm"

export default function NoteLikeChatSkeleton({ shouldJustifyStart = false }) {
  return (
    <article
      className={`animate-pulse flex items-start gap-2 max-w-[279px] ${
        shouldJustifyStart ? "justify-start" : "flex-row-reverse  justify-end"
      }`}
    >
      <Image
        src={placeholderImage}
        width={34}
        height={34}
        alt=""
        className="rounded-full w-[34px] h-[34px]"
      />
      <div className="flex flex-col items-start justify-start gap-1 min-w-[237px]">
        <h4 className="flex gap-2 justify-start">
          <span className="bg-gray-700/30 w-[80px] h-[8px]"></span>
          <span className="bg-gray-700/30 w-[80px] h-[8px]"></span>
        </h4>
        <SeverityPill severity="normal"></SeverityPill>
        <p className="bg-gray-700/20 w-full min-h-8"></p>
      </div>
    </article>
  )
}
