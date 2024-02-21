import DateRangePicker from "@/app/_components/AppComps/Datepicker";
import WorkersFilter from "../timesheet/WorkersFilter";
import EarningsActivities from "./EarningsActivities";
import EarningTable from "./EarningTable";

function page() {
  return (
    <section className="p-4 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-[#283142] font-medium leading-7 text-2xl mt-3 mb-2 md:font-bold">
          Earning
        </h1>
        <div>
          <button className="px-2 py-1 mx-1 bg-[#5BC62D] text-sm rounded-sm">
            <div className="flex items-center">
              <BagSvg />
              <p className="text-white  text-sm">Request overtime</p>
            </div>
          </button>

          <button className="px-2 py-1 mx-1 bg-gray-100 text-[#42526E] text-sm rounded-sm">
            <div className="flex items-center">
              <ExportSvg />
              <p className="text-center text-[#42526E] text-sm not-italic font-medium leading-5">
                {" "}
                Export
              </p>
            </div>
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <DateRangePicker />
        <WorkersFilter />
      </div>

      <EarningsActivities />

      <EarningTable />
    </section>
  );
}

export default page;

function BagSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 16.19H9.5C9.09 16.19 8.75 15.85 8.75 15.44C8.75 15.03 9.09 14.69 9.5 14.69H14.5C14.91 14.69 15.25 15.03 15.25 15.44C15.25 15.85 14.91 16.19 14.5 16.19Z"
        fill="white"
      />
      <path
        d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V13C11.25 12.59 11.59 12.25 12 12.25C12.41 12.25 12.75 12.59 12.75 13V18C12.75 18.41 12.41 18.75 12 18.75Z"
        fill="white"
      />
      <path
        d="M5.19994 10.46C5.00994 10.46 4.81994 10.38 4.66994 10.24C4.45994 10.03 4.38994 9.7 4.50994 9.42L6.36994 4.98C6.40994 4.89 6.42994 4.83 6.45994 4.78C7.93994 1.37 9.82994 0.539999 13.1699 1.82C13.3599 1.89 13.5099 2.04 13.5899 2.23C13.6699 2.42 13.6699 2.63 13.5899 2.82L10.6599 9.62C10.5399 9.89 10.2699 10.07 9.96994 10.07H7.11994C6.54994 10.07 6.00994 10.18 5.48994 10.4C5.39994 10.44 5.29994 10.46 5.19994 10.46ZM10.6099 2.75C9.36994 2.75 8.60994 3.56 7.81994 5.4C7.80994 5.43 7.78994 5.46 7.77994 5.49L6.46994 8.6C6.68994 8.58 6.89994 8.57 7.11994 8.57H9.46994L11.8799 2.97C11.4099 2.82 10.9899 2.75 10.6099 2.75Z"
        fill="white"
      />
      <path
        d="M18.29 10.27C18.22 10.27 18.14 10.26 18.07 10.24C17.7 10.13 17.29 10.07 16.87 10.07H9.96998C9.71998 10.07 9.47998 9.94 9.33998 9.73C9.20998 9.52 9.17998 9.25 9.27998 9.02L12.18 2.29C12.33 1.93 12.77 1.69 13.14 1.81C13.26 1.85 13.37 1.9 13.49 1.95L15.85 2.94C17.23 3.51 18.15 4.11 18.75 4.83C18.87 4.97 18.97 5.12 19.06 5.27C19.17 5.44 19.27 5.65 19.34 5.86C19.37 5.93 19.42 6.06 19.45 6.2C19.73 7.14 19.59 8.31 18.99 9.81C18.87 10.09 18.59 10.27 18.29 10.27ZM11.11 8.57H16.88C17.2 8.57 17.51 8.6 17.82 8.65C18.1 7.78 18.16 7.11 18 6.57C17.98 6.48 17.96 6.44 17.95 6.4C17.89 6.24 17.85 6.15 17.8 6.07C17.73 5.96 17.68 5.87 17.6 5.78C17.17 5.26 16.41 4.78 15.28 4.32L13.3 3.49L11.11 8.57Z"
        fill="white"
      />
      <path
        d="M15.9 22.75H8.1C7.82 22.75 7.56 22.73 7.3 22.7C3.79 22.46 1.79 20.46 1.55 16.91C1.52 16.69 1.5 16.42 1.5 16.15V14.2C1.5 11.95 2.84 9.92 4.91 9.02C5.61 8.72 6.36 8.57 7.13 8.57H16.89C17.46 8.57 18.01 8.65 18.52 8.81C20.87 9.52 22.52 11.74 22.52 14.2V16.15C22.52 16.37 22.51 16.58 22.5 16.78C22.28 20.69 20 22.75 15.9 22.75ZM7.12 10.07C6.55 10.07 6.01 10.18 5.49 10.4C3.97 11.06 2.99 12.55 2.99 14.2V16.15C2.99 16.36 3.01 16.57 3.03 16.77C3.22 19.62 4.62 21.02 7.43 21.21C7.68 21.24 7.88 21.26 8.09 21.26H15.89C19.19 21.26 20.81 19.81 20.97 16.71C20.98 16.53 20.99 16.35 20.99 16.15V14.2C20.99 12.39 19.78 10.77 18.06 10.24C17.69 10.13 17.28 10.07 16.86 10.07H7.12Z"
        fill="white"
      />
      <path
        d="M2.23999 14.95C1.82999 14.95 1.48999 14.61 1.48999 14.2V11.27C1.48999 8.12 3.71999 5.4 6.79999 4.8C7.06999 4.75 7.34999 4.85 7.52999 5.06C7.69999 5.27 7.74999 5.57 7.63999 5.82L5.88999 10C5.80999 10.18 5.66999 10.32 5.49999 10.4C3.97999 11.06 2.99999 12.55 2.99999 14.2C2.98999 14.61 2.65999 14.95 2.23999 14.95ZM5.59999 6.82C4.31999 7.54 3.38999 8.8 3.09999 10.27C3.53999 9.82 4.04999 9.44 4.62999 9.16L5.59999 6.82Z"
        fill="white"
      />
      <path
        d="M21.7599 14.95C21.3499 14.95 21.0099 14.61 21.0099 14.2C21.0099 12.39 19.7999 10.77 18.0799 10.24C17.8799 10.18 17.7099 10.04 17.6199 9.85C17.5299 9.66 17.5199 9.44 17.5999 9.25C18.0699 8.08 18.1899 7.23 17.9999 6.57C17.9799 6.48 17.9599 6.44 17.9499 6.4C17.8199 6.11 17.8899 5.77 18.1199 5.55C18.3499 5.33 18.6999 5.28 18.9799 5.43C21.1599 6.57 22.5099 8.81 22.5099 11.27V14.2C22.5099 14.61 22.1699 14.95 21.7599 14.95ZM19.2499 9.09C19.8799 9.38 20.4399 9.79 20.9099 10.28C20.7199 9.3 20.2499 8.41 19.5599 7.71C19.5099 8.13 19.4099 8.59 19.2499 9.09Z"
        fill="white"
      />
    </svg>
  );
}

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
        d="M14.44 7.25C14.25 7.25 14.06 7.18 13.91 7.03L11.88 5L9.85001 7.03C9.56001 7.32 9.08001 7.32 8.79001 7.03C8.50001 6.74 8.50001 6.26 8.79001 5.97L11.35 3.41C11.64 3.12 12.12 3.12 12.41 3.41L14.97 5.97C15.26 6.26 15.26 6.74 14.97 7.03C14.82 7.18 14.63 7.25 14.44 7.25Z"
        fill="#42526E"
      />
      <path
        d="M11.8799 14.93C11.4699 14.93 11.1299 14.59 11.1299 14.18V4.01C11.1299 3.6 11.4699 3.26 11.8799 3.26C12.2899 3.26 12.6299 3.6 12.6299 4.01V14.18C12.6299 14.6 12.2899 14.93 11.8799 14.93Z"
        fill="#42526E"
      />
      <path
        d="M12 20.75C6.85 20.75 3.25 17.15 3.25 12C3.25 11.59 3.59 11.25 4 11.25C4.41 11.25 4.75 11.59 4.75 12C4.75 16.27 7.73 19.25 12 19.25C16.27 19.25 19.25 16.27 19.25 12C19.25 11.59 19.59 11.25 20 11.25C20.41 11.25 20.75 11.59 20.75 12C20.75 17.15 17.15 20.75 12 20.75Z"
        fill="#42526E"
      />
    </svg>
  );
}
