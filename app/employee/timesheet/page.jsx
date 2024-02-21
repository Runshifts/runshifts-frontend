import DateRangePicker from "@/app/_components/AppComps/Datepicker";
import TimesheetCalendarScroll from "./TimesheetCalendarScroll";
import Queries from "./Queries";
import WorkersFilter from "./WorkersFilter";

function page() {
  return (
    <section className="p-3 h-screen">
        <h1 className="text-[#7A869A] font-medium leading-7 text-2xl mt-3 mb-2 md:font-bold">
          Timesheet
        </h1>
       

      <div className="flex justify-between items-center md:hidden">
        <DateRangePicker />
        <WorkersFilter />
      </div>

      <div className="bg-white rounded-xl shadow-xl p-4">
        <TimesheetCalendarScroll />

        <Queries />
      </div>
    </section>
  );
}

export default page;
