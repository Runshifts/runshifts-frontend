import TrackerContent from './TrackerContent'

function page() {
  return (
    <section className="p-3 h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-[#7A869A] font-medium leading-7 text-2xl mt-3 mb-2 md:font-bold">
          Tracker
        </h1>
        <div className="bg-gray-100 p-2 rounded">
          <p className="text-center  text-[#42526E] text-sm not-italic font-medium leading-5">Remaining shift time: <span className="text-sm not-italic font-bold leading-5">7hr 23mins 23secs</span></p>
        </div>

      </div>
      <div>
        <TrackerContent />
      </div>
    </section>
  );
}

export default page;
