"use client"
import DateRangePicker from "./Datepicker"
import FilterSvg from "@/app/_assets/svgs/FilterSvg"
import Select from "./Select"
import DropDown from "./Dropdown"

function FilterGroup({ goToNextWeek, goToPrevWeek, currentWeek }) {
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
          <FilterOptions />
        </ul>
      </div>
    </section>
  )
}

function FilterOptions() {
  return (
    <>
      <li>
        <Select name="Location" options={["one", "two", "three"]} />
      </li>
      <li>
        <Select name="Department" options={["one", "two", "three"]} />
      </li>
      <li>
        <Select name="Week" options={["one", "two", "three"]} />
      </li>
      <li>
        <Select name="Manager" options={["one", "two", "three"]} />
      </li>
    </>
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
