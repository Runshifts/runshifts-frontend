import React from "react"

function TrackerFilterGroup() {
  return (
    <section>
      <div className="flex items-center justify-start my-4">
        <input
          type="text"
          placeholder="Search members..."
          className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] px-2 py-2 h-10 mr-2 rounded"
          name="members"
        />
        <div className="hidden md:flex">
          <select
            className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] m-2 mx-2 h-10 w-32 rounded flex justify-between items-center"
            aria-label="Default select example"
          >
            <option>Location</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] m-2  mx-2 h-10 w-32 rounded flex justify-between items-center"
            aria-label="Default select example"
          >
            <option>Department</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] m-2  mx-2 h-10 w-32 rounded flex justify-between items-center"
            aria-label="Default select example"
          >
            <option>Position</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            className="bg-[#F4F5F7] border-none text-xs text-[#7A869A] m-2  mx-2 h-10 w-32 rounded flex justify-between items-center"
            aria-label="Default select example"
          >
            <option>30 Days</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="border py-2 px-1 w-fit rounded flex justify-between items-center md:hidden">
          <p className="px-2">Filter</p>
          <div className="px-2">
            <FilterSvg />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackerFilterGroup

function FilterSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9399 22.65C10.4599 22.65 9.9899 22.53 9.5499 22.29C8.6699 21.8 8.1399 20.91 8.1399 19.91V14.61C8.1399 14.11 7.8099 13.36 7.4999 12.98L3.7599 9.02C3.1299 8.39 2.6499 7.31 2.6499 6.5V4.2C2.6499 2.6 3.8599 1.35 5.3999 1.35H18.5999C20.1199 1.35 21.3499 2.58 21.3499 4.1V6.3C21.3499 7.35 20.7199 8.54 20.1299 9.13L15.7999 12.96C15.3799 13.31 15.0499 14.08 15.0499 14.7V19C15.0499 19.89 14.4899 20.92 13.7899 21.34L12.4099 22.23C11.9599 22.51 11.4499 22.65 10.9399 22.65ZM5.3999 2.85C4.6999 2.85 4.1499 3.44 4.1499 4.2V6.5C4.1499 6.87 4.4499 7.59 4.8299 7.97L8.6399 11.98C9.1499 12.61 9.6499 13.66 9.6499 14.6V19.9C9.6499 20.55 10.0999 20.87 10.2899 20.97C10.7099 21.2 11.2199 21.2 11.6099 20.96L12.9999 20.07C13.2799 19.9 13.5599 19.36 13.5599 19V14.7C13.5599 13.63 14.0799 12.45 14.8299 11.82L19.1099 8.03C19.4499 7.69 19.8599 6.88 19.8599 6.29V4.1C19.8599 3.41 19.2999 2.85 18.6099 2.85H5.3999Z"
        fill="#ACB8CD"
      />
      <path
        d="M5.99992 10.75C5.85992 10.75 5.72992 10.71 5.59992 10.64C5.24992 10.42 5.13992 9.95 5.35992 9.6L10.2899 1.7C10.5099 1.35 10.9699 1.24 11.3199 1.46C11.6699 1.68 11.7799 2.14 11.5599 2.49L6.62992 10.39C6.48992 10.62 6.24992 10.75 5.99992 10.75Z"
        fill="#ACB8CD"
      />
    </svg>
  )
}
