import React from "react"

function TrackerFilterGroup() {
  return (
    <section>
      <div className="hidden md:flex items-center justify-start my-6">
        {/* <div
          className="bg-gray-100 text-gray-500 m-2 mx-2 h-10 w-32 rounded-md flex justify-between items-center"
        > */}

        <input
          type="text"
          placeholder="Search members..."
          className="bg-gray-100 px-2 py-2 mx-2 text-gray-500 rounded-md"
          name="members"
        />
        {/* </div> */}
        <select
          className="bg-gray-100 text-gray-500 m-2 mx-2 h-10 w-32 rounded-md flex justify-between items-center"
          aria-label="Default select example"
        >
          <option>Location</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select
          className="bg-gray-100 text-gray-500 m-2  mx-2 h-10 w-32 rounded-md flex justify-between items-center"
          aria-label="Default select example"
        >
          <option>Department</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </section>
  )
}

export default TrackerFilterGroup
