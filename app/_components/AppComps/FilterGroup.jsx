"use client"
import FilterSvg from "../../_assets/svgs/FilterSvg"
import SelectTrigger, { Option } from "./Select"
import DropDown from "./Dropdown"
import { capitalizeFirstLetter, formatDate } from "../../_utils"
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
            <Option
              isSelected={currentLocation?.address === opt?.address}
              onClick={() => updateCurrentValue(opt._id)}
              key={opt._id}
            >
              {opt.address}
            </Option>
          ))}
        </>
      }
    />
  )
}

export function DepartmentsOrPositionsFilter({
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
            <Option
              isSelected={
                opt.name.toLowerCase() === currentValue?.toLowerCase()
              }
              onClick={() => updateCurrentValue(opt.name)}
              key={opt._id}
            >
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
  const displayName = useMemo(() => {
    return currentValue
      ? `${formatDate(currentValue.start)}  -  ${formatDate(currentValue.end)}`
      : "Week"
  }, [currentValue])
  
  return (
    <DropDown
      dropDownTrigger={({ isOpen }) => (
        <SelectTrigger
          isOpen={isActive || isOpen}
          name={displayName}
          options={options}
        />
      )}
      dropdownContent={
        <>
          <Option onClick={() => updateCurrentValue(null)}>Week</Option>
          {[
            ...options.map((opt, idx) => (
              <Option
                key={idx}
                onClick={() => updateCurrentValue(opt, idx)}
                isSelected={
                  opt.start.toDateString() ===
                  currentValue?.start.toDateString()
                }
              >
                <span className="flex justify-between">
                  <>{formatDate(opt.start)}</>
                  &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
                  <>{formatDate(opt.end)}</>
                </span>
              </Option>
            )),
          ].reverse()}
        </>
      }
    />
  )
}

export function UsersFilter({
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
          shouldApplyStyles={false}
          isOpen={isActive || isOpen}
          name={currentValue?.firstName || currentValue?.email || name}
          options={options}
          className="flex items-center capitalize justify-between w-full text-[14px] text-info-600 font-[600]"
        />
      )}
      dropdownContent={
        <>
          <Option onClick={() => updateCurrentValue(null)}>{name}</Option>
          {options.map((opt) => (
            <Option
              isSelected={currentValue?.email === opt.email}
              onClick={() => updateCurrentValue(opt)}
              key={opt._id}
            >
              {capitalizeFirstLetter(opt.firstName || opt.email)}
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
