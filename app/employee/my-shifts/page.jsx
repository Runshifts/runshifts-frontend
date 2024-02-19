import DateRangePicker from "@/app/_components/AppComps/Datepicker";
import ShiftsCalenderScroll from "./ShiftsCalenderScroll";


function page() {
  return (
    <section className="p-3 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-[#292D32] font-semibold text-2xl md:font-bold">
          My Shifts
        </h1>
        <div>
          <button className="p-2 mx-1 bg-[#5BC62D] text-white text-sm rounded-sm">
            Request overtime
          </button>
          <button className="p-2 mx-1 text-[#42526E] bg-white text-sm rounded-sm">
            Request overtime
          </button>
        </div>
      </div>

      <div>
        <DateRangePicker />
      </div>

      <ShiftsCalenderScroll />
    </section>
  );
}

export default page;