import React from 'react'

function Snapshot() {
  return (
    <section>
        <div className=' bg-[#efeded] rounded-md my-3 p-2'>
            <h1 className='text-[#292D32] py-3 font-semibold text-lg'>Today&apos;s snapshot</h1>

            <div className='grid grid-cols-1 gap-3 mx-3 md:grid-cols-3 '>
                <div className='bg-white rounded-md text-gray-700'>
                    <div className='ml-4  p-3 m-2 leading-4 py-2'>
                        <h1 className=' pt-3 font-semibold text-lg'>Scheduled: 6 Hrs</h1>
                        <p className='text-xs underline cursor-pointer'>View today&apos;s schedule</p>
                    </div>
                    <div className='border border-b border-gray-300'></div>

                    <div className='ml-4  p-3 m-2 leading-4 py-2'>
                        <h1 className='font-semibold text-lg' >Unfilled open shifts</h1>
                        <p className='text-xs underline cursor-pointer'>View details</p>
                    </div>
                </div>
                <div className='bg-white rounded-md text-gray-700'>
                    <div className='ml-4  p-3 m-2 leading-4 py-2'>
                        <h1 className=' pt-3 font-semibold text-lg'>Currently clocked in: 5 Hrs</h1>
                        <p className='text-xs underline cursor-pointer'>View time tracker</p>
                    </div>

                    <div className='border border-b border-gray-300'></div>

                    <div className='ml-4  p-3 m-2 leading-4 py-2'>
                        <h1 className='font-semibold text-lg' >Users with time off</h1>
                        <p className='text-xs underline cursor-pointer'>View time off requests</p>
                    </div>
                </div>

                <div className='bg-white rounded-md text-gray-700'>
                    <div className='ml-4  p-3 m-2 leading-4 py-2'>
                        <h1 className=' pt-3 font-semibold text-lg'>Cureently on break: 4</h1>
                        <p className='text-xs underline cursor-pointer'>View time tracker</p>
                    </div>
                    <div className='border border-b border-gray-300'></div>

                    <div className='ml-4  p-3 m-2 leading-4 py-2'>
                        <h1 className='font-semibold text-lg' >Pending shifts requests</h1>
                        <p className='text-xs underline cursor-pointer'>View pending shift requests</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Snapshot