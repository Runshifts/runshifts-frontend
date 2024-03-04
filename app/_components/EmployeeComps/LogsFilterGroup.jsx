import React from "react"

function TrackerFilterGroup() {
  return (
    <section>
      <div className="flex items-center justify-start my-4">
        {/* <div
          className="bg-gray-100 text-gray-500 m-2 mx-2 h-10 w-32 rounded-md flex justify-between items-center"
        > */}

        <input
          type="text"
          placeholder="Search logs..."
          className="bg-gray-100 px-2 py-2 mr-2 text-[#7A869A] rounded-md"
          name="logs"
        />
        {/* </div> */}
        <div className="hidden md:flex items-center">
          <select
            className="bg-gray-100 text-[#7A869A] m-2 mx-2 h-10 w-32 rounded-md flex justify-between items-center"
            aria-label="Default select example"
          >
            <option>Location</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <div className=" py-2 px-1 bg-gray-100 text-[#7A869A] rounded-md flex h-10 w-32  justify-center items-center">
          <p className="px-2">Date</p>
          <div className="px-2">
            <DateSvg />
          </div>
        </div>
        </div>

        <div className="text-[#7A869A] border mr-3 py-2 px-1 w-24 rounded-md flex justify-between items-center md:hidden">
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

function DateSvg() {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#7A869A"/>
<path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="#7A869A"/>
<path d="M15 22.75H9C3.38 22.75 2.25 20.1 2.25 15.82V9.65C2.25 4.91 3.85 2.98 7.96 2.75H16C16.01 2.75 16.03 2.75 16.04 2.75C20.15 2.98 21.75 4.91 21.75 9.65V15.82C21.75 20.1 20.62 22.75 15 22.75ZM8 4.25C5.2 4.41 3.75 5.29 3.75 9.65V15.82C3.75 19.65 4.48 21.25 9 21.25H15C19.52 21.25 20.25 19.65 20.25 15.82V9.65C20.25 5.3 18.81 4.41 15.98 4.25H8Z" fill="#7A869A"/>
<path d="M20.75 18.35H3.25C2.84 18.35 2.5 18.01 2.5 17.6C2.5 17.19 2.84 16.85 3.25 16.85H20.75C21.16 16.85 21.5 17.19 21.5 17.6C21.5 18.01 21.16 18.35 20.75 18.35Z" fill="#7A869A"/>
<path d="M12 8.25C10.77 8.25 9.73 8.92 9.73 10.22C9.73 10.84 10.02 11.31 10.46 11.61C9.85 11.97 9.5 12.55 9.5 13.23C9.5 14.47 10.45 15.24 12 15.24C13.54 15.24 14.5 14.47 14.5 13.23C14.5 12.55 14.15 11.96 13.53 11.61C13.98 11.3 14.26 10.84 14.26 10.22C14.26 8.92 13.23 8.25 12 8.25ZM12 11.09C11.48 11.09 11.1 10.78 11.1 10.29C11.1 9.79 11.48 9.5 12 9.5C12.52 9.5 12.9 9.79 12.9 10.29C12.9 10.78 12.52 11.09 12 11.09ZM12 14C11.34 14 10.86 13.67 10.86 13.07C10.86 12.47 11.34 12.15 12 12.15C12.66 12.15 13.14 12.48 13.14 13.07C13.14 13.67 12.66 14 12 14Z" fill="#7A869A"/>
</svg>

    )
}