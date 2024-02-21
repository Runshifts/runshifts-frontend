import Image from "next/image";
import Avatar from "../Ellipse1.svg";
function page() {
  return (
    <section className="centered mx-auto">
      <div className="bg-white rounded-xl shadow-xl w-[288px] h-[356px] p-4 my-8 flex flex-col justify-center items-center">
        <h1 className="text-gray-900 text-base not-italic font-semibold">
          Request shift swap
        </h1>
        <Image src={Avatar} alt="dp" height={69} width={69} />

        <form action="">
          <div className="w-full">
            <label
              htmlFor="day"
              className="text-xs not-italic font-thin my-2 leading-4"
            >
              Full Name
            </label>
            <input
              type="text"
              id="Charles"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Charles"
            />
          </div>

          <p className="text-gray-800 my-2 text-start text-sm not-italic font-normal leading-5">Select day to swap</p>

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
                id="firstName"
                className="w-full border rounded-md px-3 py-2"
                placeholder="Friday"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="lastName"
                className="text-xs not-italic font-thin my-2 leading-4"
              >
                Used break time
              </label>
              <input
                type="text"
                id="breaktime"
                className="w-full border rounded-md px-3 py-2"
                placeholder="8am-2pm"
              />
            </div>
          </div>

        </form>
        
        <button className="bg-[#7ED957] text-white rounded-md px-4 py-2">
            Request swap
          </button>
      </div>
    </section>
  );
}

export default page;
