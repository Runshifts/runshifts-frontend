import React from 'react';

const ScrollingTimeTable = () => {
  const hours = Array.from({ length: 12 }, (_, index) => index + 8); // Generate hours from 8 am to 7 pm

  return (
    <div className="rounded-lg overflow-x-auto">
      <table className="min-w-full bg-gray-200 rounded-lg p-2">
        
        
        <thead>
        <p className='text-center text-gray-600 font-bold py-2 '>Name</p>
            {hours.map((hour, index) => (
              <th key={index} className={`border border-gray-300  text-gray-600 font-bold px-4 py-2 ${index === 0 ? 'border-r-0' : ''}`}>
                {hour % 12 || 12}{hour < 12 ? 'am' : 'pm'}
              </th>
            ))}
        </thead>
        <tbody>
          <p className='text-center border border-t text-xs font-bold mt-3 text-gray-600 bg-red-200 rounded-full'>Ottobong</p>

            {hours.map((_, index) => (
              <td key={index} className={`border border-gray-300 px-4 py-2 ${index === 0 ? 'border-r-0' : ''}`}>
                <p className='text-gray-200'>.</p>
              </td>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollingTimeTable;
