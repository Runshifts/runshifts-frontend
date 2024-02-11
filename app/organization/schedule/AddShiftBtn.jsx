import React from 'react'
import Link from "next/link"

function AddShift() {
  return (
    <Link href='/organization/schedule/addshift'>
    <button className='border border-dotted border-gray-700 text-xs font-bold rounded-md p-1 text-gray-600 '>
        Add Shift
    </button>
    </Link>
    
  )
}

export default AddShift