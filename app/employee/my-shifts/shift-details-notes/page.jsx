import Image from "next/image";
import Avatar from "../Avatar.svg";
function page() {
  return (
    <section className="centered mx-auto">
      <div className="bg-white rounded-xl shadow-xl w-[669px] p-4 my-8 flex flex-col justify-center items-center">
        <h1 className="text-gray-900 text-base not-italic font-semibold">
          Shift details
        </h1>
        <Image src={Avatar} alt="dp" height={69} width={69} />

        <div className="flex flex-row p-2">
          <form action="" className="p-2 m-2 basis-1/2">
            <p className="text-gray-800 my-2 text-start text-sm not-italic font-normal leading-5">
              Your shift details
            </p>

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

            <div className="my-3 flex space-x-2 ">
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
                  placeholder="Monday"
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

            <label
              htmlFor="location"
              className="text-xs not-italic font-thin my-2 leading-4"
            >
              Location
            </label>
            <div className="relative flex  justify-center items-center">
              <input
                type="text"
                id="location"
                className="w-full border rounded-md px-3 py-2 pr-10"
                placeholder="23 Joy Boy Avenue, London"
              />
              {/* Placeholder icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0.5 right-2 text-gray-400"
              >
                <path
                  d="M15.65 21.4102C15.22 21.4102 14.79 21.3202 14.44 21.1502L9.19004 18.5202C8.89004 18.3702 8.30004 18.3802 8.01004 18.5502L5.65004 19.9002C4.63004 20.4802 3.58004 20.5602 2.79004 20.0902C1.99004 19.6302 1.54004 18.6902 1.54004 17.5102V7.79016C1.54004 6.88016 2.14004 5.85016 2.93004 5.40016L7.26004 2.92016C7.99004 2.50016 9.10004 2.47016 9.85004 2.85016L15.1 5.48016C15.4 5.63016 15.98 5.61016 16.28 5.45016L18.63 4.11016C19.65 3.53016 20.7 3.45016 21.49 3.92016C22.29 4.38016 22.74 5.32016 22.74 6.50016V16.2302C22.74 17.1402 22.14 18.1702 21.35 18.6202L17.02 21.1002C16.64 21.3002 16.14 21.4102 15.65 21.4102ZM8.64004 16.9202C9.07004 16.9202 9.50004 17.0102 9.85004 17.1802L15.1 19.8102C15.4 19.9602 15.98 19.9402 16.28 19.7802L20.61 17.3002C20.93 17.1202 21.24 16.5802 21.24 16.2202V6.49016C21.24 5.86016 21.06 5.39016 20.73 5.21016C20.41 5.03016 19.91 5.10016 19.37 5.41016L17.02 6.75016C16.29 7.17016 15.18 7.20016 14.43 6.82016L9.18004 4.19016C8.88004 4.04016 8.30004 4.06016 8.00004 4.22016L3.67004 6.70016C3.35004 6.88016 3.04004 7.42016 3.04004 7.79016V17.5202C3.04004 18.1502 3.22004 18.6202 3.54004 18.8002C3.86004 18.9902 4.36004 18.9102 4.91004 18.6002L7.26004 17.2602C7.65004 17.0302 8.15004 16.9202 8.64004 16.9202Z"
                  fill="#706763"
                />
                <path
                  d="M8.56006 17.75C8.15006 17.75 7.81006 17.41 7.81006 17V4C7.81006 3.59 8.15006 3.25 8.56006 3.25C8.97006 3.25 9.31006 3.59 9.31006 4V17C9.31006 17.41 8.97006 17.75 8.56006 17.75Z"
                  fill="#706763"
                />
                <path
                  d="M15.73 20.7501C15.32 20.7501 14.98 20.4101 14.98 20.0001V6.62012C14.98 6.21012 15.32 5.87012 15.73 5.87012C16.14 5.87012 16.48 6.21012 16.48 6.62012V20.0001C16.48 20.4101 16.14 20.7501 15.73 20.7501Z"
                  fill="#706763"
                />
              </svg>
            </div>
          </form>

          <div className="border border-r m-2"></div>

          <div action="" className="p-2 m-2 basis-2/3">
            <p className="text-gray-800 my-2 text-start text-sm not-italic font-normal leading-5">
              Notes
            </p>

            <div className="flex items-start justify-center mb-3 mt-1 ">
              <Image src={Avatar} alt="dp" height={34} width={34} />
              <div className="mx-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm mr-5  text-[#36322F] not-italic font-semibold leading-4 ">
                    You
                  </p>
                  <p className="text-sm mr-3 text-[#9A928D] not-italic font-normal leading-4">
                    05:15 PM
                  </p>
                  <p className="text-sm text-[#9A928D] not-italic font-normal leading-4">
                    17 Dec 2023
                  </p>
                </div>
                <p className="bg-[#7ED957] rounded-full w-fit my-2 px-1 text-white text-xs">
                  Normal
                </p>
                <p className="text-xs text-[#706763] not-italic font-normal leading-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="flex items-start justify-center mb-1 mt-3">
              <div className="mx-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm mr-4  text-[#36322F] not-italic font-semibold leading-4 ">
                    Mathew
                  </p>
                  <p className="text-sm mr-2 text-[#9A928D] not-italic font-normal leading-4">
                    05:15 PM
                  </p>
                  <p className="text-sm text-[#9A928D] not-italic font-normal leading-4">
                    17 Dec 2023
                  </p>
                </div>
                <p className="bg-[#7ED957] rounded-full w-fit my-2 px-1 text-white text-xs">
                  Normal
                </p>
                <p className="text-xs text-[#706763] not-italic font-normal leading-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <Image src={Avatar} alt="dp" height={34} width={34} />

            </div>

            <div className="my-4 flex items-center justify-start text-xs">
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  name="default-radio"
                  className="w-4 h-4 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlhtmlFor="default-radio-2"
                  className="bg-[#7ED957] rounded-full mx-2 px-2 text-white text-xs"
                >
                  Normal
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlhtmlFor="default-radio-2"
                  className="bg-[#FFAB00] rounded-full mx-2 px-2 text-white text-[10px]"
                >
                  Attention needed
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  htmlhtmlFor="default-radio-2"
                  className="bg-[#DE350B] rounded-full mx-2 px-2 text-white text-xs"
                >
                  Urgent
                </label>
              </div>
            </div>

            <form>
              <div className="flex flex-col my-3">
                <label
                  htmlhtmlFor="textarea"
                  className="text-sm font-semibold pb-1 pt-1 text-gray-500"
                >
                  Leave a note
                </label>
                <textarea
                  id="textarea"
                  placeholder="Write note..."
                  rows="4"
                  className="text-sm border border-gray-300 px-3 py-2 rounded-md"
                />
              </div>

              <div className="flex flex-col items-start">
              <button className="bg-[#B2E89A] text-[#2D6316] text-xs p-1 my-2 rounded-md">
                Send note
              </button>
              <button className="bg-gray-100 text-[#2D6316] text-xs p-1 my-2 rounded-md">
                Close
              </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
