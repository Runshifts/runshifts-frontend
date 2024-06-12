"use client"
import React, { useCallback, useState } from "react"
import FormHeading from "../_components/Auth/Heading"
import { SubmitButton } from "../_components/Auth/Inputs"
import DebouncedDropdownSearch from "../_components/Auth/DebouncedDropdownSearch"
import useAxios from "../_hooks/useAxios"
import toast from "react-hot-toast"

export default function StepOne({
  isActive,
  onSubmit = () => {},
  organizationType,
}) {
  const fetchData = useAxios()
  const [industry, setIndustry] = useState("")
  const [employeeCount, setEmployeeCount] = useState("")

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (!industry || !employeeCount)
        return toast.error("All fields are required!")
      const [minStaffCount, maxStaffCount] = employeeCount.split("-")
      const body = {
        name: sessionStorage.getItem("businessName"),
        industry,
        maxStaffCount,
        minStaffCount,
        type: organizationType,
      }
      const res = await fetchData("/organizations", "post", body)
      if (res.statusCode === 201) onSubmit(res.organization)
      else toast.error(res.message || "Something went wrong")
    },
    [industry, employeeCount, fetchData]
  )

  if (!isActive) return
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-[17px]">
          <FormHeading>Tell us about your organization</FormHeading>
          <DebouncedDropdownSearch
            selectedId={industry}
            handleOptionSelect={(industry) => setIndustry(industry?._id || "")}
            pathName="industries"
            placeholder={`${
              organizationType === "for-profit"
                ? "Organization's industry"
                : "Non-profit's industry"
            }`}
          />
        </div>
        <div className="flex gap-[8px] flex-wrap">
          <StaffCountButton
            value="1-10"
            onClick={() => setEmployeeCount("1-10")}
            isSelected={employeeCount === "1-10"}
          />
          <StaffCountButton
            value="11-50"
            onClick={() => setEmployeeCount("11-50")}
            isSelected={employeeCount === "11-50"}
          />
          <StaffCountButton
            value="51-150"
            onClick={() => setEmployeeCount("51-150")}
            isSelected={employeeCount === "51-150"}
          />
          <StaffCountButton
            value="151-499"
            onClick={() => setEmployeeCount("151-499")}
            isSelected={employeeCount === "151-499"}
          />
          <StaffCountButton
            value="500"
            onClick={() => setEmployeeCount("500+")}
            isSelected={employeeCount === "500+"}
          />
        </div>
        <SubmitButton type="submit">Next</SubmitButton>
      </form>
    </>
  )
}

function StaffCountButton({ value, onClick = () => {}, isSelected }) {
  return (
    <button
      type="button"
      className={`flex flex-col max-w-[100px] grow shrink-0 tracking-[-1.1%] items-center justify-center text-center p-4 outline-none rounded-md border border-[#D0D5DD] font-[500] text-[#000000CC] ${
        isSelected ? "bg-blue-500 text-white" : "bg-white"
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}
