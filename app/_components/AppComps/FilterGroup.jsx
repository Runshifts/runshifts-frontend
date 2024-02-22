"use client"
import DateRangePicker from "./Datepicker"
import FilterSvg from "../../_assets/svgs/FilterSvg"
import Select, { Option } from "./Select"
import DropDown from "./Dropdown"
import SelectTrigger from "./Select"
import { formatDate } from "@/app/_utils"

function FilterGroup({
  goToNextWeek,
  goToPrevWeek,
  currentWeek,
  weekRanges = [],
  locations = [],
  departments = [],
  roles = []
}) {
  return (
    <section>
      <div className="py-4 flex gap-[8px] justify-between lg:justify-start items-center">
        <DateRangePicker
          goToNextWeek={goToNextWeek}
          goToPrevWeek={goToPrevWeek}
          currentWeek={currentWeek}
        />
        <MobileFilter />
        <ul className="hidden lg:flex flex-wrap gap-[8px]">
          <li>
            <LocationFilter options={locations} />
          </li>
          <li>
            <DepartmentsOrRolesFilter name="Departments" options={departments} />
          </li>
          <li>
            <WeekFilter options={weekRanges} />
          </li>
          <li>
            <DepartmentsOrRolesFilter name="Roles" options={roles} />
          </li>
        </ul>
      </div>
    </section>
  )
}

function LocationFilter({ options = [], isActive, currentValue = "Location" }) {
  return (
    <DropDown
      dropDownTrigger={({ isOpen }) => (
        <SelectTrigger
          isOpen={isActive || isOpen}
          name={currentValue}
          options={options}
        />
      )}
      dropdownContent={
        <>
          {options.map((opt) => (
            <Option key={opt._id}>{opt.address}</Option>
          ))}
        </>
      }
    />
  )
}

function DepartmentsOrRolesFilter({ name, options = [], isActive, currentValue }) {
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
          {options.map((opt) => (
            <Option key={opt._id}>{opt.name}</Option>
          ))}
        </>
      }
    />
  )
}

function WeekFilter({ options = [], isActive, currentValue }) {
  return (
    <DropDown
      dropDownTrigger={({ isOpen }) => (
        <SelectTrigger
          isOpen={isActive || isOpen}
          name={currentValue || "Week"}
          options={options}
        />
      )}
      dropdownContent={
        <>
          {options.map((opt, idx) => (
            <Option key={idx}>
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

function MobileFilter() {
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

export default FilterGroup
