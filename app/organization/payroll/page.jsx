import React from "react"
import AddFunds from "../../_components/AppComps/AddFunds"
import DatePicker from "../../_components/AppComps/Datepicker"
import PayrollTable from "./PayrollTable"

function Payroll() {
  return (
    <section className="mx-2 p-3">
      <div className="flex items-center justify-between py-3">
        <h1 className="text-[#292D32] font-semibold  md:text-2xl ">Payroll</h1>
        <AddFunds />
      </div>

      <DatePicker />

      <div className="my-3  text-[#252525] grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="bg-[#E5F7DD] p-4 flex items-center justify-center rounded-lg">
          <div className="bg-[#CBF0BC] p-2 rounded-full">
            <EarnedSvg />
          </div>

          <div className="px-4">
            <h1 className="font-xl font-bold py-2">$3,434,656</h1>
            <p className="text-xs py-1">Total earned wage</p>
          </div>
        </div>

        <div className="bg-[#E5F7DD] p-4 flex items-center justify-start rounded-lg">
          <div className="bg-[#CBF0BC] p-2 rounded-full">
            <RequestedSvg />
          </div>

          <div className="px-4">
            <h1 className="font-xl font-bold py-2">$293,923</h1>
            <p className="text-xs py-1">Requested EWA</p>
          </div>
        </div>

        <div className="bg-[#E5F7DD] p-4 flex items-center justify-center rounded-lg">
          <div className="bg-[#CBF0BC] p-2 rounded-full">
            <NextSvg />
          </div>

          <div className="px-4">
            <h1 className="font-xl font-bold py-2">$3,432,654</h1>
            <p className="text-xs py-1">Next due</p>
          </div>
        </div>
      </div>

      <div className="my-2">
        <h1 className="font-semibold text-sm my-2">Payroll Activity</h1>

        <PayrollTable />
      </div>
    </section>
  )
}

export default Payroll

function EarnedSvg() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.5 31.875H10.5C5.025 31.875 1.875 28.725 1.875 23.25V12.75C1.875 7.275 5.025 4.125 10.5 4.125H25.5C30.975 4.125 34.125 7.275 34.125 12.75V23.25C34.125 28.725 30.975 31.875 25.5 31.875ZM10.5 6.375C6.21 6.375 4.125 8.46 4.125 12.75V23.25C4.125 27.54 6.21 29.625 10.5 29.625H25.5C29.79 29.625 31.875 27.54 31.875 23.25V12.75C31.875 8.46 29.79 6.375 25.5 6.375H10.5Z"
        fill="#2D6316"
      />
      <path
        d="M18 23.625C14.895 23.625 12.375 21.105 12.375 18C12.375 14.895 14.895 12.375 18 12.375C21.105 12.375 23.625 14.895 23.625 18C23.625 21.105 21.105 23.625 18 23.625ZM18 14.625C16.14 14.625 14.625 16.14 14.625 18C14.625 19.86 16.14 21.375 18 21.375C19.86 21.375 21.375 19.86 21.375 18C21.375 16.14 19.86 14.625 18 14.625Z"
        fill="#2D6316"
      />
      <path
        d="M8.25 22.875C7.635 22.875 7.125 22.365 7.125 21.75V14.25C7.125 13.635 7.635 13.125 8.25 13.125C8.865 13.125 9.375 13.635 9.375 14.25V21.75C9.375 22.365 8.865 22.875 8.25 22.875Z"
        fill="#2D6316"
      />
      <path
        d="M27.75 22.875C27.135 22.875 26.625 22.365 26.625 21.75V14.25C26.625 13.635 27.135 13.125 27.75 13.125C28.365 13.125 28.875 13.635 28.875 14.25V21.75C28.875 22.365 28.365 22.875 27.75 22.875Z"
        fill="#2D6316"
      />
    </svg>
  )
}

function RequestedSvg() {
  return (
    <svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 22.875C15.6483 22.875 13.4583 20.685 13.4583 18C13.4583 15.315 15.6483 13.125 18.3333 13.125C21.0183 13.125 23.2083 15.315 23.2083 18C23.2083 20.685 21.0183 22.875 18.3333 22.875ZM18.3333 15.375C16.8933 15.375 15.7083 16.56 15.7083 18C15.7083 19.44 16.8933 20.625 18.3333 20.625C19.7733 20.625 20.9583 19.44 20.9583 18C20.9583 16.56 19.7733 15.375 18.3333 15.375Z"
        fill="#2D6316"
      />
      <path
        d="M28.0833 22.875C27.4683 22.875 26.9583 22.365 26.9583 21.75V14.25C26.9583 13.635 27.4683 13.125 28.0833 13.125C28.6983 13.125 29.2083 13.635 29.2083 14.25V21.75C29.2083 22.365 28.6983 22.875 28.0833 22.875Z"
        fill="#2D6316"
      />
      <path
        d="M7.83334 34.125C3.90334 34.125 0.708344 30.93 0.708344 27C0.708344 23.07 3.90334 19.875 7.83334 19.875C11.7633 19.875 14.9583 23.07 14.9583 27C14.9583 30.93 11.7633 34.125 7.83334 34.125ZM7.83334 22.125C5.14834 22.125 2.95834 24.315 2.95834 27C2.95834 29.685 5.14834 31.875 7.83334 31.875C10.5183 31.875 12.7083 29.685 12.7083 27C12.7083 24.315 10.5183 22.125 7.83334 22.125Z"
        fill="#2D6316"
      />
      <path
        d="M6.33318 29.6251C5.95818 29.6251 5.58316 29.4301 5.37316 29.0851C5.05816 28.5601 5.22318 27.8551 5.76318 27.5401L6.90319 26.8502C7.00819 26.7902 7.08318 26.6551 7.08318 26.5351V25.1401C7.08318 24.5251 7.59318 24.0151 8.20818 24.0151C8.82319 24.0151 9.33319 24.5251 9.33319 25.1401V26.5351C9.33319 27.4501 8.83822 28.3201 8.05822 28.7851L6.91821 29.4752C6.73821 29.5802 6.52818 29.6251 6.33318 29.6251Z"
        fill="#2D6316"
      />
      <path
        d="M25.8333 31.125H13.0833C12.4683 31.125 11.9583 30.615 11.9583 30C11.9583 29.385 12.4683 28.875 13.0833 28.875H25.8333C30.1233 28.875 32.2083 26.79 32.2083 22.5V13.5C32.2083 9.21 30.1233 7.125 25.8333 7.125H10.8333C6.54334 7.125 4.45834 9.21 4.45834 13.5V22.8C4.45834 23.415 3.94834 23.925 3.33334 23.925C2.71834 23.925 2.20834 23.415 2.20834 22.8V13.5C2.20834 8.025 5.35834 4.875 10.8333 4.875H25.8333C31.3083 4.875 34.4583 8.025 34.4583 13.5V22.5C34.4583 27.975 31.3083 31.125 25.8333 31.125Z"
        fill="#2D6316"
      />
    </svg>
  )
}

function NextSvg() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9966 29.445C16.2266 29.445 13.7216 28.2 11.7416 22.245L10.6616 19.005L7.42163 17.925C1.48163 15.945 0.236633 13.44 0.236633 11.67C0.236633 9.91498 1.48163 7.39498 7.42163 5.39998L20.1566 1.15498C23.3366 0.0899847 25.9916 0.404984 27.6266 2.02498C29.2616 3.64498 29.5766 6.31498 28.5116 9.49498L24.2666 22.23C22.2716 28.2 19.7666 29.445 17.9966 29.445ZM8.12663 7.54498C3.95663 8.93998 2.47163 10.59 2.47163 11.67C2.47163 12.75 3.95663 14.4 8.12663 15.78L11.9066 17.04C12.2366 17.145 12.5066 17.415 12.6116 17.745L13.8716 21.525C15.2516 25.695 16.9166 27.18 17.9966 27.18C19.0766 27.18 20.7266 25.695 22.1216 21.525L26.3666 8.78998C27.1316 6.47998 26.9966 4.58998 26.0216 3.61498C25.0466 2.63998 23.1566 2.51998 20.8616 3.28498L8.12663 7.54498Z"
        fill="#2D6316"
      />
    </svg>
  )
}
