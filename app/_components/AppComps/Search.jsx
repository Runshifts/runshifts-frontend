import React from 'react'

function Search({ children }) {
  return (
    <button className='custom-search'>
        {children}
    </button>

     <select
            className="bg-[#F4F5F7] border-none text-[#7A869A] text-xs m-2 mx-2 h-10 w-32 rounded-md flex justify-between items-center"
            aria-label="Default select example"
          >
            <option>Location</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
  )
}

export default Search