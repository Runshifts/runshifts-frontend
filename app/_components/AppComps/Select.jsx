"use client"
import DownChevron from "../../_assets/svgs/DownChevron"

export default function SelectTrigger({
  name,
  children,
  isOpen,
  shouldApplyStyles = true,
  ...props
}) {
  return (
    <div
      {...props}
      aria-label={name}
      role="listbox"
      className={`${
        shouldApplyStyles
          ? `${
              isOpen ? "border-black" : "border-transparent"
            } border-solid border h-full border cursor-pointer relative bg-[#F4F5F7] text-[#7A869A] px-[8px] py-[4px] gap-[23px] text-[14px] leading-[20px] rounded-md flex justify-between items-center`
          : ""
      } ${props.className}`}
    >
      {children || name} <DownChevron />
    </div>
  )
}

export function Option({ children, onClick, isSelected, style }) {
  return (
    <span
      onClick={onClick}
      role="option"
      className={`cursor-pointer block w-full text-[#172B4D] hover:bg-[#F4F5F7] capitalize text-sm font-normal leading-tight px-[16px] py-1.5 justify-start items-center ${
        isSelected && "bg-gray-100"
      }`}
      style={style}
    >
      {children}
    </span>
  )
}
