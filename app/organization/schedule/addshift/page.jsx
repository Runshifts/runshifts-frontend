import React from "react";

function AddShift() {
  return (
    <section className="centered mt-8 ">
      <div className="max-w-lg bg-white rounded-xl p-4 m-2 flex flex-col justify-center shadow-xl">
        <h1 className="text-center font-bold">Add shift</h1>
        <div>
          <div className="flex items-center justify-center flex-col md:flex-row">
            <div className="">
              <label className="font-thin text-gray-300 px-2 text-xs">
                Branch location
              </label>
              <select
                className="form-select bg-gray-100 m-2 h-10 w-52 border-2 border-gray-300 text-gray-400  rounded-sm flex justify-between items-center"
                aria-label="Default select example"
              >
                <option selected>Select Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="">
              <label className="font-thin text-gray-300 px-2 text-xs">
                Assign to
              </label>
              <select
                className="form-select bg-gray-100 m-2  h-10 w-52 border-2 border-gray-300 text-gray-400  rounded-sm flex justify-between items-center"
                aria-label="Default select example"
              >
                <option selected>Select employee</option>
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
                className="form-select bg-gray-100 m-2  h-10 w-52 border-2 border-gray-300 text-gray-400  rounded-sm flex justify-between items-center"
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
                className="form-select bg-gray-100 m-2  h-10 w-52 border-2 border-gray-300 text-gray-400  rounded-sm flex justify-between items-center"
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

        <div className="my-2">
          <p className="font-thin text-gray-300 px-2 py-2 text-xs ">
            Radio group model
          </p>
          <div className="flex items center flex-col md:flex-row">
            <div className="flex px-2 py-2">
              <input type="checkbox" className="px-2 form-checkbox" />
              <label className="px-2 text-xs font-semibold">Morning Shift</label>
            </div>

            <div className="flex px-2 py-2">
              <input type="checkbox" className="px-2 form-checkbox" />
              <label className="px-2 text-xs font-semibold">Afternoon Shift</label>
            </div>

            <div className="flex px-2 py-2">
              <input type="checkbox" className="px-2 form-checkbox" />
              <label className="px-2 text-xs font-semibold">Evening Shift</label>
            </div>

            <div className="flex px-2 py-2">
              <input type="checkbox" className="px-2 form-checkbox" />
              <label className="px-2 text-xs font-semibold">Custom</label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col md:flex-row">
          <div className="">
            <label className="font-thin text-gray-300 px-2 text-xs">
              Start
            </label>
            <select
              className="form-select bg-gray-100 m-2 h-10 w-52 border-2 border-gray-300 text-gray-400  rounded-sm flex justify-between items-center"
              aria-label="Default select example"
            >
              <option selected>00:00</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div>
            <label className="font-thin text-gray-300 px-2 text-xs">End</label>
            <select
              className="form-select bg-gray-100 m-2 h-10 w-52 border-2 border-gray-300 text-gray-400  rounded-sm flex justify-between items-center"
              aria-label="Default select example"
            >
              <option selected>00:00</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div>
          <label className="font-thin text-gray-300 px-2 text-xs">Note</label>
          <div>
          <input
            type="text"
            placeholder="This is a note..."
            className="bg-gray-100 m-2 p-2 h-10 border-2 border-gray-300 text-gray-400 rounded-sm flex justify-between items-center"
          />
          </div>
         
        </div>

        <div className="flex px-2 py-2 font-semibold">
          <input type="checkbox" className="px-2 form-checkbox" />
          <label className="px-2 text-xs">Enable Geofencing</label>
        </div>

        <button className="bg-[#7ED957] m-2 h-10 text-white rounded-sm ">
          Publish
        </button>
        <button className="m-2 h-10 text-[#252525] font-bold rounded-sm ">
          Cancel
        </button>
      </div>
    </section>
  );
}

export default AddShift;
