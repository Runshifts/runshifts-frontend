"use client"
import DownChevron from "../../_assets/svgs/DownChevron"
import { useCallback } from "react"
import DropDown from "./Dropdown"

export default function Select({
  name,
  options = [],
  handleSelect = () => {},
  children,
  ...props
}) {

  const onSelect = useCallback(
    (option) => {
      console.log(option)
      handleSelect(option)
    },
    [handleSelect]
  )

  return (
    <DropDown
      dropDownTrigger={({ isOpen }) => (
        <div
          {...props}
          aria-label={name}
          role="listbox"
          className={`${
            isOpen ? "border-solid border-black" : "border-transparent"
          } border cursor-pointer relative bg-[#F4F5F7] text-[#7A869A] px-[8px] py-[4px] gap-[23px] text-[14px] leading-[20px] rounded-md flex justify-between items-center`}
        >
          {name} <DownChevron />
        </div>
      )}
      dropdownContent={
        <>
          {options.map((opt) => (
            <Option key={opt} onClick={() => onSelect(opt)}>{opt}</Option>
          ))}
        </>
      }
    />
  )
}

function Option({ children, onClick }) {
  return (
    <span
      onClick={onClick}
      role="option"
      className="cursor-pointer block w-full text-[#172B4D] hover:bg-[#F4F5F7] capitalize text-sm font-normal leading-tight px-[16px] py-1.5 justify-start items-center"
    >
      {children}
    </span>
  )
}
