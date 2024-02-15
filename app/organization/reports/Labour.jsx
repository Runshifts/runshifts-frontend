import React from "react";

function Labour() {
  return (
    <div className="h-[356px] w-[315px] bg-white rounded-xl shadow-xl">
        <div className="flex justify-between items-center">
        <h1 className="text-gray-900 text-sm p-4 not-italic font-normal leading-5 uppercase">
        Labour Cost
      </h1>
      <select
            className="bg-white text-gray-500 text-xs m-2  mx-2 h-10 w-32 rounded-md flex justify-between items-center"
            aria-label="Default select example"
          >
            <option>Last 30 days</option>
            <option value="1">Last 7 days</option>
            <option value="2">Last 14 days</option>
            <option value="3">Last 3 months</option>
          </select>
        </div>     
      <hr />

      <div className="mx-auto my-5 p-3">
        <p className="text-gray-600 text-center text-xs not-italic font-normal leading-4 p-2">Earnings</p>
        <h1 className="text-gray-900 text-center text-3xl not-italic font-semibold leading-9">£150,967.64</h1>
      </div>

      <div className="mx-auto my-5 p-3">
        <p className="text-gray-600 text-center text-xs not-italic font-normal leading-4 p-2">Overtime Earnings</p>
        <h1 className="text-gray-900 text-center text-3xl not-italic font-semibold leading-9">£1,967.64</h1>
      </div>
    </div>
  );
}

export default Labour;
