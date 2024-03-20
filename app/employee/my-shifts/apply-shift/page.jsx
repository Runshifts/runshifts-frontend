
function page() {
  return (
    <section className="centered mx-auto">
      <div className="bg-white rounded-xl shadow-xl w-[288px] h-[171px] p-4 my-8 flex flex-col justify-center items-center">
        <h1 className="text-gray-900 text-base not-italic font-semibold">
          Apply for Shift
        </h1>

        <form action="">
          
          <div className="mb-4 flex space-x-2">
            <div className="w-1/2">
              <label
                htmlFor="day"
                className="text-xs not-italic font-thin my-2 leading-4"
              >
                Day
              </label>
              <input
                type="text"
                id="day"
                className="w-full border rounded-md px-3 py-2"
                placeholder="Thursday"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="lastName"
                className="text-xs not-italic font-thin my-2 leading-4"
              >
                Duration
              </label>
              <input
                type="text"
                id="duration"
                className="w-full border rounded-md px-3 py-2"
                placeholder="3pm-9pm"
              />
            </div>
          </div>

        </form>
        
        <button className="bg-[#7ED957] text-white rounded-md px-4 py-2">
            Apply
          </button>
      </div>
    </section>
  );
}

export default page;
