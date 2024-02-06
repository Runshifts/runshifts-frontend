import React from "react"

function Export() {
  return (
    <section>
      <div className="flex items-center justify-center ">
        <button className="bg-[#7ED957] rounded-md flex items-center jusitfy-center mx-2 px-3 py-2">
          <div>
            <ExportSvg />
          </div>
          <p className="text-white px-2">Export</p>
        </button>
        <button className="hidden md:flex items-center justify-center border rounded-md bg-gray-100 text-gray-600 px-3 py-2">
          <CopySvg />
          <p className="px-2">Duplicate</p>
        </button>
        <div className="bg-gray-200 mx-2">
          <MoreSvg />
        </div>
      </div>
    </section>
  )
}

export default Export

function CopySvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1 22.75H6.9C2.99 22.75 1.25 21.01 1.25 17.1V12.9C1.25 8.99 2.99 7.25 6.9 7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V17.1C16.75 21.01 15.01 22.75 11.1 22.75ZM6.9 8.75C3.8 8.75 2.75 9.8 2.75 12.9V17.1C2.75 20.2 3.8 21.25 6.9 21.25H11.1C14.2 21.25 15.25 20.2 15.25 17.1V12.9C15.25 9.8 14.2 8.75 11.1 8.75H6.9Z"
        fill="#42526E"
      />
      <path
        d="M17.1 16.75H16C15.59 16.75 15.25 16.41 15.25 16V12.9C15.25 9.8 14.2 8.75 11.1 8.75H8C7.59 8.75 7.25 8.41 7.25 8V6.9C7.25 2.99 8.99 1.25 12.9 1.25H17.1C21.01 1.25 22.75 2.99 22.75 6.9V11.1C22.75 15.01 21.01 16.75 17.1 16.75ZM16.75 15.25H17.1C20.2 15.25 21.25 14.2 21.25 11.1V6.9C21.25 3.8 20.2 2.75 17.1 2.75H12.9C9.8 2.75 8.75 3.8 8.75 6.9V7.25H11.1C15.01 7.25 16.75 8.99 16.75 12.9V15.25Z"
        fill="#42526E"
      />
    </svg>
  )
}

function MoreSvg() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="24"
        height="24"
        transform="translate(0.5)"
        fill="white"
        fillOpacity="0.01"
      />
      <path
        d="M5.5 14C6.60457 14 7.5 13.1046 7.5 12C7.5 10.8954 6.60457 10 5.5 10C4.39543 10 3.5 10.8954 3.5 12C3.5 13.1046 4.39543 14 5.5 14Z"
        fill="#42526E"
      />
      <path
        d="M12.5 14C13.6046 14 14.5 13.1046 14.5 12C14.5 10.8954 13.6046 10 12.5 10C11.3954 10 10.5 10.8954 10.5 12C10.5 13.1046 11.3954 14 12.5 14Z"
        fill="#42526E"
      />
      <path
        d="M19.5 14C20.6046 14 21.5 13.1046 21.5 12C21.5 10.8954 20.6046 10 19.5 10C18.3954 10 17.5 10.8954 17.5 12C17.5 13.1046 18.3954 14 19.5 14Z"
        fill="#42526E"
      />
    </svg>
  )
}

function ExportSvg() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.94 7.25C14.75 7.25 14.56 7.18 14.41 7.03L12.38 5L10.35 7.03C10.06 7.32 9.58001 7.32 9.29001 7.03C9.00001 6.74 9.00001 6.26 9.29001 5.97L11.85 3.41C12.14 3.12 12.62 3.12 12.91 3.41L15.47 5.97C15.76 6.26 15.76 6.74 15.47 7.03C15.32 7.18 15.13 7.25 14.94 7.25Z"
        fill="white"
      />
      <path
        d="M12.3799 14.93C11.9699 14.93 11.6299 14.59 11.6299 14.18V4.01C11.6299 3.6 11.9699 3.26 12.3799 3.26C12.7899 3.26 13.1299 3.6 13.1299 4.01V14.18C13.1299 14.6 12.7899 14.93 12.3799 14.93Z"
        fill="white"
      />
      <path
        d="M12.5 20.75C7.35 20.75 3.75 17.15 3.75 12C3.75 11.59 4.09 11.25 4.5 11.25C4.91 11.25 5.25 11.59 5.25 12C5.25 16.27 8.23 19.25 12.5 19.25C16.77 19.25 19.75 16.27 19.75 12C19.75 11.59 20.09 11.25 20.5 11.25C20.91 11.25 21.25 11.59 21.25 12C21.25 17.15 17.65 20.75 12.5 20.75Z"
        fill="white"
      />
    </svg>
  )
}
