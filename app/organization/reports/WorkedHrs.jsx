import React from 'react'

function WorkedHrs() {
  return (
    <div className='w-full bg-white p-3 rounded-lg shadow-xl'>
         <div className='flex justify-between items-center'>
            <p>Worked Hours</p>
            <select
            className="bg-white text-gray-500 m-2  mx-2 h-10 w-32 rounded-md flex justify-between items-center"
            aria-label="Default select example"
          >
            <option>Last 30 days</option>
            <option value="1">Last 7 days</option>
            <option value="2">Last 14 days</option>
            <option value="3">Last 3 months</option>
          </select>
        </div>

        <div className='grid grid-cols-2 gap-4'>
            <div className='bg-[#354258] rounded-xl  p-4'>
                <p className=' not-italic font-normal text-[11px] text-white text-start '>Sept 1 - 6</p>
                <div className='flex items-center justify-between'>
                    <div className='text-white'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>48</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Hours worked</p>
                    </div>
                    <div className='text-[#98E179]'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>8</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Overtime hours</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#354258] rounded-xl  p-4'>
                <p className=' not-italic font-normal text-[11px] text-white text-start '>Sept 1 - 6</p>
                <div className='flex items-center justify-between'>
                    <div className='text-white'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>48</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Hours worked</p>
                    </div>
                    <div className='text-[#98E179]'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>8</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Overtime hours</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#354258] rounded-xl  p-4'>
                <p className=' not-italic font-normal text-[11px] text-white text-start '>Sept 1 - 6</p>
                <div className='flex items-center justify-between'>
                    <div className='text-white'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>48</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Hours worked</p>
                    </div>
                    <div className='text-[#98E179]'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>8</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Overtime hours</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#354258] rounded-xl  p-4'>
                <p className=' not-italic font-normal text-[11px] text-white text-start '>Sept 1 - 6</p>
                <div className='flex items-center justify-between'>
                    <div className='text-white'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>48</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Hours worked</p>
                    </div>
                    <div className='text-[#98E179]'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>8</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Overtime hours</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkedHrs