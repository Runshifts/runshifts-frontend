import DateRangePicker from "../../_components/AppComps/Datepicker";
import TimesheetCalendarScroll from "./TimesheetCalendarScroll";
import Queries from "./Queries";
import WorkersFilter from "./WorkersFilter";

function page() {
  return (
    <section className="p-3 h-screen">
      <h1 className="custom-h1">
        Timesheet
      </h1>

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
  )
}

export default page
