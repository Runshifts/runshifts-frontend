import React from 'react'

function Snapshot() {
  return (
    <section>
        <div className=' bg-[#efeded] rounded-md my-3 p-2'>
            <h1 className='text-[#292D32] mx-3 py-3 font-semibold text-lg'>Wages</h1>

            

            <div className='grid grid-cols-1 gap-3 mx-3 md:grid-cols-2 '>
                <div className='bg-white rounded-md text-gray-700 flex justify-between items-center'>
                    <div className='ml-4 p-3 m-2 leading-4 py-2'>
                        <h1 className=' pt-3 font-semibold text-lg'>Today&apos;s labour cost</h1>
                        <p className='text-xs underline cursor-pointer'>View today&apos;s cost</p>
                    </div>
                    <div>
                        <p className='font-semibold mr-4'>$203</p>
                    </div>
                </div>

                <div className='bg-white rounded-md text-gray-700 flex justify-between items-center'>
                    <div className='ml-4  p-3 m-2 leading-4 py-2'>
                        <h1 className=' pt-3 font-semibold text-lg'>Week&apos;s labour cost</h1>
                        <p className='text-xs underline cursor-pointer'>View week&apos;s cost</p>
                    </div>
                    <div>
                        <p className='font-semibold mr-4'>$2,203</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Snapshot