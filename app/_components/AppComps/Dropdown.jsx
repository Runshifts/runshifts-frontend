import useOutsideClick from "../../_hooks/useOutsideClick"
import { useState } from "react"

export default function DropDown({
  dropdownContent,
  dropDownTrigger,
  disabled = false,
}) {
  const [showDropDown, setShowDropDown] = useState(false)
  const dropdownRef = useOutsideClick(() => setShowDropDown(false))

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={(e) => {
          e.stopPropagation()
          disabled === false && setShowDropDown(true)
        }}
      >
        {typeof dropDownTrigger === "function"
          ? dropDownTrigger({ isOpen: showDropDown })
          : dropDownTrigger}
      </div>
      <div
        className={`${
          showDropDown
            ? "max-h-[400px] overflow-auto pb-[44px]"
            : "max-h-0 overflow-hidden"
        } absolute shadow rounded-[3px] z-[10] top-[calc(115%)] bg-white min-w-full w-max flex flex-col items-start text-[14px]`}
      >
        {typeof dropdownContent === "function"
          ? dropdownContent({
              toggleDropDown: (value) => {
                setShowDropDown(value)
              },
            })
          : dropdownContent}
      </div>
    </div>
  )
}
