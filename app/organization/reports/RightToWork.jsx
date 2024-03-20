import React from 'react';

const Donut = () => {
  

  return (
    <div className='h-[356px] w-[315px] bg-white rounded-xl shadow-xl'>
      <h1 className='text-gray-900 text-sm text-center p-4 not-italic font-normal leading-5 uppercase'>RIGHT TO WORK</h1>
      <hr />
      <div className='flex flex-col items-center justify-center mx- mt-6 mb-4'>
        <p className="text-gray-600 text-center text-xs not-italic font-normal leading-4 my-2">Remaining Time</p>
      <div className='bg-[#354258] rounded-xl h-[98px] w-[210px] p-4'>
                <div className='flex items-center justify-between'>
                    <div className='text-white'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>8</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Years</p>
                    </div>
                    <div
                     className='text-white'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>4</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Months</p>
                    </div>
                    <div className='text-white'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>28</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Days</p>
                    </div>
                    <div className='text-white'>
                        <h1 className='text-center text-3xl not-italic font-semibold leading-8'>59</h1>
                        <p className='text-center not-italic font-normal text-[11px]'>Minutes</p>
                    </div>
                </div>
            </div>
      </div>    
    </div>
  );
};

export default Donut;
