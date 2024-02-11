import React from "react";
import profilepic from "../../../public/dashboardImgs/timesheet1.svg";
import Review from "./Review";
import Image from "next/image";

function TimesheetReview() {
  return (
    <section className="centered mt-8 ">
      <div className="max-w-lg bg-white rounded-xl p-4 m-2 flex flex-col justify-center shadow-xl">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-bold">Timesheet Review</h1>
          <Image src={profilepic} height={50} width={50} alt="profile pic" />
        </div>
        <div>
          <div className="flex items-center justify-center flex-col md:flex-row">
            <div className="">
              <label className="font-thin text-gray-300 px-2 text-xs">
                Name
              </label>
              <select
                className="form-select bg-gray-100 m-2  h-10 w-56 border-2 border-gray-300 text-gray-400  rounded-sm flex justify-between items-center"
                aria-label="Default select example"
              >
                <option selected>Charlse Jenkins</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="">
              <label className="font-thin text-gray-300 px-2 text-xs">
                Branch location
              </label>
              <select
                className="form-select bg-gray-100 m-2 h-10 w-56 border-2 border-gray-300 text-gray-400  rounded-sm flex justify-between items-center"
                aria-label="Default select example"
              >
                <option selected>Select Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col md:flex-row">
            <div className="">
              <label className="font-thin text-gray-300 px-2 text-xs">
                Position
              </label>
              <select
                className="form-select bg-gray-100 m-2  h-10 w-56 border-2 border-gray-300 text-gray-400  rounded-sm flex justify-between items-center"
                aria-label="Default select example"
              >
                <option selected>Choose position</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="">
              <label className="font-thin text-gray-300 px-2 text-xs">
                Unpaid break
              </label>
              <select
                className="form-select bg-gray-100 m-2  h-10 w-56 border-2 border-gray-300 text-gray-400  rounded-sm flex justify-between items-center"
                aria-label="Default select example"
              >
                <option selected>00:00</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        <div className="px-6">
          {/* <h1 className='font-bold text-[#252525] text-sm py-2'>Work days</h1> */}
          <Review />
        </div>

        <div className="flex items-center justify-center flex-col my-4">
          {/* <label className="font-thin text-gray-300 px-2 text-xs">Add your Note</label> */}
          <div>
            <input
              type="text"
              placeholder="Write feedback here..."
              className="bg-gray-100 m-2 p-2 w-[250px] h-10 border-2 border-gray-300 text-gray-400 rounded-sm md:w-[450px]"
            />
          </div>

          <div className="">
            <button className="bg-[#5BC62D] mx-auto my-2 h-10 w-full text-white rounded-sm md:w-[470px] ">
              Approve timesheet
            </button>
            <button className="m-2 w-full h-10 mx-auto my-2 text-red-800 font-bold rounded-sm md:w-[470px]">
              Query timesheet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimesheetReview;
