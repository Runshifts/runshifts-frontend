import useOutsideClick from "../../_hooks/useOutsideClick"
import { useState } from "react"

export default function DropDown({ dropdownContent, dropDownTrigger }) {
  const [showDropDown, setShowDropDown] = useState(false)
  const dropdownRef = useOutsideClick(() => setShowDropDown(false))

  return (
    <div
      ref={dropdownRef}
      onClick={(e) => {
        e.stopPropagation()
        setShowDropDown((prev) => !prev)
      }}
      onFocus={() => setShowDropDown(true)}
      className="relative"
    >
      {typeof dropDownTrigger === "function"
        ? dropDownTrigger({ isOpen: showDropDown })
        : dropDownTrigger}
      <div
        className={`${
          showDropDown
            ? "max-h-[50dvh] overflow-auto"
            : "max-h-0 overflow-hidden"
        } absolute shadow rounded-[3px] z-[10] top-[calc(115%)] right-0 bg-white min-w-full w-max flex flex-col items-start text-[14px]`}
      >
        {dropdownContent}
      </div>
    </div>
  )
}
