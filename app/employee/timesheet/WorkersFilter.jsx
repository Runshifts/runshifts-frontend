import React from 'react'

function WorkersFilter() {
  return (
    <div className='block mx-auto md:hidden'>
        <select
              id="select2"
              className="border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="option1">Wokers</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
    </div>
  )
}

export default WorkersFilter