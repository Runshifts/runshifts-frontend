import DateRangePicker from "../../_components/AppComps/Datepicker";
import TimesheetCalendarScroll from "./TimesheetCalendarScroll";
import Queries from "./Queries";
import WorkersFilter from "./WorkersFilter";

function page() {
  return (
    <section className="p-3 h-screen">
      <div className="flex items-center justify-between py-3">
        <h1 className="custom-h1">Timesheet</h1>

        <div className="bg-[#F4F5F7] border-none text-[#7A869A] text-xs m-2 px-2 mx-2 h-10 w-32 rounded flex justify-around items-center cursor-pointer">
        <DownloadSvg />
          <p>Download</p>
          
        </div>
      </div>

      <div className="flex justify-start items-center">
        <div>
          <DateRangePicker />
        </div>
        <select
          className="bg-[#F4F5F7] border-none text-[#7A869A] text-sm m-2 mx-2 h-10 w-fit rounded-md flex justify-between items-center"
          aria-label="Default select example"
        >
          <option>7 Dec - 21 Dec</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div>
          <WorkersFilter />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xl p-4">
        <TimesheetCalendarScroll />

        <Queries />
      </div>
    </section>
  );
}

export default page;

function DownloadSvg() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.88 14.99C11.69 14.99 11.5 14.92 11.35 14.77L8.79001 12.21C8.50001 11.92 8.50001 11.44 8.79001 11.15C9.08001 10.86 9.56001 10.86 9.85001 11.15L11.88 13.18L13.91 11.15C14.2 10.86 14.68 10.86 14.97 11.15C15.26 11.44 15.26 11.92 14.97 12.21L12.41 14.77C12.26 14.92 12.07 14.99 11.88 14.99Z"
        fill="#292D32"
      />
      <path
        d="M11.8799 14.92C11.4699 14.92 11.1299 14.58 11.1299 14.17V4C11.1299 3.59 11.4699 3.25 11.8799 3.25C12.2899 3.25 12.6299 3.59 12.6299 4V14.17C12.6299 14.58 12.2899 14.92 11.8799 14.92Z"
        fill="#292D32"
      />
      <path
        d="M12 20.93C6.85 20.93 3.25 17.33 3.25 12.18C3.25 11.77 3.59 11.43 4 11.43C4.41 11.43 4.75 11.77 4.75 12.18C4.75 16.45 7.73 19.43 12 19.43C16.27 19.43 19.25 16.45 19.25 12.18C19.25 11.77 19.59 11.43 20 11.43C20.41 11.43 20.75 11.77 20.75 12.18C20.75 17.33 17.15 20.93 12 20.93Z"
        fill="#292D32"
      />
    </svg>
  );
}
