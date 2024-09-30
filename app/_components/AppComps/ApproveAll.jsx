import React from "react"

function Export({ approveAllShifts = () => {}, disabled }) {
  return (
    <section>
      <div className="flex items-center justify-center ">
        <button
          disabled={disabled ? true : false}
          onClick={approveAllShifts}
          className="bg-[#7ED957] disabled:opacity-50 disabled:cursor-not-allowed rounded-md flex items-center jusitfy-center mx-2 px-3 py-2"
        >
          <div>
            <ApproveSvg />
          </div>
          <p className="text-white px-2">Approve all</p>
        </button>
        <button className="hidden md:flex items-center justify-center border rounded-md bg-gray-100 text-gray-600 px-3 py-2">
          <ExportSvg />
          <p className="px-2">Export</p>
        </button>
      </div>
    </section>
  )
}

export default Export

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
        d="M14.44 7.25C14.25 7.25 14.06 7.18001 13.91 7.03L11.88 5L9.85001 7.03C9.56001 7.32 9.08001 7.32 8.79001 7.03C8.50001 6.74001 8.50001 6.26 8.79001 5.97L11.35 3.41C11.64 3.12 12.12 3.12 12.41 3.41L14.97 5.97C15.26 6.26 15.26 6.74001 14.97 7.03C14.82 7.18001 14.63 7.25 14.44 7.25Z"
        fill="#42526E"
      />
      <path
        d="M11.88 14.93C11.47 14.93 11.13 14.59 11.13 14.18V4.01001C11.13 3.60001 11.47 3.26001 11.88 3.26001C12.29 3.26001 12.63 3.60001 12.63 4.01001V14.18C12.63 14.6 12.29 14.93 11.88 14.93Z"
        fill="#42526E"
      />
      <path
        d="M12 20.75C6.85 20.75 3.25 17.15 3.25 12C3.25 11.59 3.59 11.25 4 11.25C4.41 11.25 4.75 11.59 4.75 12C4.75 16.27 7.73 19.25 12 19.25C16.27 19.25 19.25 16.27 19.25 12C19.25 11.59 19.59 11.25 20 11.25C20.41 11.25 20.75 11.59 20.75 12C20.75 17.15 17.15 20.75 12 20.75Z"
        fill="#42526E"
      />
    </svg>
  )
}

function ApproveSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="white"
      />
      <path
        d="M10.58 15.58C10.38 15.58 10.19 15.5 10.05 15.36L7.22 12.53C6.93 12.24 6.93 11.76 7.22 11.47C7.51 11.18 7.99 11.18 8.28 11.47L10.58 13.77L15.72 8.62998C16.01 8.33998 16.49 8.33998 16.78 8.62998C17.07 8.91998 17.07 9.39998 16.78 9.68998L11.11 15.36C10.97 15.5 10.78 15.58 10.58 15.58Z"
        fill="white"
      />
    </svg>
  )
}
