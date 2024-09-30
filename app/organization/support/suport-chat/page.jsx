"use client"
import React from "react";
import Banner from "../Banner";
import Footer from "../Footer";

function page() {
  return (
    <div>
      <div className=" border w-[373px] h-fit m-2 ">
        <div className="my-1 p-2"> 
        <Banner />
        </div>
        <div className="flex flex-col items-end justify-cneter mr-4">
          <div className=" bg-[#5BC62D] rounded-b-xl rounded-tl-xl flex flex-col items-end">
            <p className="font-normal leading-4 text-white text-xs p-5 ">
              What problem are you trying to resolve?
            </p>
          </div>

          <div className="w-1/2">
            <label
              htmlFor="number of workers"
              className="text-xs  font-thin m-2 mr-2 leading-4"
            >
              Department
            </label>
            <select
              className="bg-gray-100 border-2  text-gray-500 py-2 mx-2 h-10 w-full rounded-md flex justify-between items-center"
              aria-label="Default select example"
            >
              <option>User account</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <p className="text-center text-xs">08:15 AM</p>
        </div>

        <hr />
        <div className="my-2 py-3">
        <Footer />
        </div>
      </div>

    </div>
  );
}

export default page;


