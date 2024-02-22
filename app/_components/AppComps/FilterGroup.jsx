"use client"
import FilterSvg from "../../_assets/svgs/FilterSvg"
import SelectTrigger, { Option } from "./Select"
import DropDown from "./Dropdown"
import { formatDate } from "@/app/_utils"
import { useMemo } from "react"

export function LocationFilter({
  options = [],
  isActive,
  currentValue,
  updateCurrentValue,
}) {
  const currentLocation = useMemo(
    () => options.find((it) => it._id === currentValue),
    [options, currentValue]
  )
  return (
    <DropDown
      dropDownTrigger={({ isOpen }) => (
        <SelectTrigger
          isOpen={isActive || isOpen}
          name={currentLocation?.address || "Location"}
          options={options}
        />
      )}
      dropdownContent={
        <>
          <Option onClick={() => updateCurrentValue(null)}>Location</Option>
          {options.map((opt) => (
            <Option onClick={() => updateCurrentValue(opt._id)} key={opt._id}>
              {opt.address}
            </Option>
          ))}
        </>
      }
    />
  )
}

export function DepartmentsOrRolesFilter({
  name,
  options = [],
  isActive,
  currentValue,
  updateCurrentValue,
}) {
  return (
    <DropDown
      dropDownTrigger={({ isOpen }) => (
        <SelectTrigger
          isOpen={isActive || isOpen}
          name={currentValue || name}
          options={options}
        />
      )}
      dropdownContent={
        <>
          <Option onClick={() => updateCurrentValue(null)}>{name}</Option>
          {options.map((opt) => (
            <Option onClick={() => updateCurrentValue(opt.name)} key={opt._id}>
              {opt.name}
            </Option>
          ))}
        </>
      }
    />
  )
}

export function WeekFilter({
  options = [],
  isActive,
  currentValue,
  updateCurrentValue,
}) {
  return (
    <DropDown
      dropDownTrigger={({ isOpen }) => (
        <SelectTrigger
          isOpen={isActive || isOpen}
          name={
            currentValue
              ? `${formatDate(currentValue.start)}  -  ${formatDate(
                  currentValue.end
                )}`
              : "Week"
          }
          options={options}
        />
      )}
      dropdownContent={
        <>
          <Option onClick={() => updateCurrentValue(null)}>Week</Option>
          {options.map((opt, idx) => (
            <Option key={idx} onClick={() => updateCurrentValue(opt, idx)}>
              <span className="flex justify-between">
                <>{formatDate(opt.start)}</>
                &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
                <>{formatDate(opt.end)}</>
              </span>
            </Option>
          ))}
        </>
      }
    />
  )
}

export function MobileFilter() {
  return (
    <DropDown
      dropDownTrigger={
        <div className="border py-3 px-1 w-32 rounded-md flex justify-between items-center lg:hidden">
          <p className="px-2">Filter</p>
          <div className="px-2">
            <FilterSvg />
          </div>
        </div>
      }
      dropdownContent={
        <ul className="flex flex-wrap max-w-[90dvw]">filterOpts for mobile</ul>
      }
    />
  )
}
