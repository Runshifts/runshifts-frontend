import React from "react"
import Link from "next/link"

function TeamAppgroup() {
  return (
    <section>
      <div className="flex items-center justify-center ">
        <Link href="/organization/team/newmember">
          <button className="bg-[#5BC62D] rounded-sm flex items-center jusitfy-center text-sm mx-1 px-2 py-1">
            <div>
              <AddSvg />
            </div>
            <p className="text-white px-2">Add New</p>
          </button>
        </Link>

        <button className="hidden md:flex items-center justify-center border rounded-sm bg-gray-100 text-gray-600  text-sm font-semibold mx-2 px-2 py-1">
          <ImportSvg />
          <p className="px-2">Import from csv</p>
        </button>
        <MoreSvg />
      </div>
    </section>
  )
}

export default TeamAppgroup

function ImportSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.88 14.9901C11.69 14.9901 11.5 14.9201 11.35 14.7701L8.79001 12.2101C8.50001 11.9201 8.50001 11.4401 8.79001 11.1501C9.08001 10.8601 9.56001 10.8601 9.85001 11.1501L11.88 13.1801L13.91 11.1501C14.2 10.8601 14.68 10.8601 14.97 11.1501C15.26 11.4401 15.26 11.9201 14.97 12.2101L12.41 14.7701C12.26 14.9201 12.07 14.9901 11.88 14.9901Z"
        fill="#42526E"
      />
      <path
        d="M11.88 14.92C11.47 14.92 11.13 14.58 11.13 14.17V4C11.13 3.59 11.47 3.25 11.88 3.25C12.29 3.25 12.63 3.59 12.63 4V14.17C12.63 14.58 12.29 14.92 11.88 14.92Z"
        fill="#42526E"
      />
      <path
        d="M12 20.9299C6.85 20.9299 3.25 17.3299 3.25 12.1799C3.25 11.7699 3.59 11.4299 4 11.4299C4.41 11.4299 4.75 11.7699 4.75 12.1799C4.75 16.4499 7.73 19.4299 12 19.4299C16.27 19.4299 19.25 16.4499 19.25 12.1799C19.25 11.7699 19.59 11.4299 20 11.4299C20.41 11.4299 20.75 11.7699 20.75 12.1799C20.75 17.3299 17.15 20.9299 12 20.9299Z"
        fill="#42526E"
      />
    </svg>
  )
}

function AddSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
        fill="white"
      />
      <path
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="white"
      />
    </svg>
  )
}

function MoreSvg() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="3" fill="#091E42" fillOpacity="0.04" />
      <rect
        width="24"
        height="24"
        transform="translate(4 4)"
        fill="white"
        fillOpacity="0.01"
      />
      <path
        d="M9 18C10.1046 18 11 17.1046 11 16C11 14.8954 10.1046 14 9 14C7.89543 14 7 14.8954 7 16C7 17.1046 7.89543 18 9 18Z"
        fill="#42526E"
      />
      <path
        d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
        fill="#42526E"
      />
      <path
        d="M23 18C24.1046 18 25 17.1046 25 16C25 14.8954 24.1046 14 23 14C21.8954 14 21 14.8954 21 16C21 17.1046 21.8954 18 23 18Z"
        fill="#42526E"
      />
    </svg>
  )
}
