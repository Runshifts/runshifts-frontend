import React from "react"

function LogExportGroup() {
  return (
    <section>
      <div className="flex items-center justify-center ">
        <button className="flex items-center justify-center border rounded-sm bg-gray-100 text-gray-600  text-sm font-semibold mx-2 px-2 py-1">
          <ExportSvg />
          <p className="px-2">Export as csv</p>
        </button>
        <MoreSvg />
      </div>
    </section>
  )
}

export default LogExportGroup

function ExportSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.44 7.24988C14.25 7.24988 14.06 7.17988 13.91 7.02988L11.88 4.99988L9.85001 7.02988C9.56001 7.31988 9.08001 7.31988 8.79001 7.02988C8.50001 6.73988 8.50001 6.25988 8.79001 5.96988L11.35 3.40988C11.64 3.11988 12.12 3.11988 12.41 3.40988L14.97 5.96988C15.26 6.25988 15.26 6.73988 14.97 7.02988C14.82 7.17988 14.63 7.24988 14.44 7.24988Z"
        fill="#42526E"
      />
      <path
        d="M11.88 14.9298C11.47 14.9298 11.13 14.5898 11.13 14.1798V4.00977C11.13 3.59977 11.47 3.25977 11.88 3.25977C12.29 3.25977 12.63 3.59977 12.63 4.00977V14.1798C12.63 14.5998 12.29 14.9298 11.88 14.9298Z"
        fill="#42526E"
      />
      <path
        d="M12 20.75C6.85 20.75 3.25 17.15 3.25 12C3.25 11.59 3.59 11.25 4 11.25C4.41 11.25 4.75 11.59 4.75 12C4.75 16.27 7.73 19.25 12 19.25C16.27 19.25 19.25 16.27 19.25 12C19.25 11.59 19.59 11.25 20 11.25C20.41 11.25 20.75 11.59 20.75 12C20.75 17.15 17.15 20.75 12 20.75Z"
        fill="#42526E"
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
