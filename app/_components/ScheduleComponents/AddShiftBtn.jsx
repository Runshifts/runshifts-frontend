import React from "react"

export default function AddShift({ onClick }) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={onClick}
        className="border border-dashed border-gray-800 leading-[20px] text-[14px] font-[600] rounded-md p-1 text-gray-800 "
      >
        Add Shift
      </button>
    </div>
  )
}