'use client'
import React from 'react';

const Options = () => {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute of [0, 15, 30, 45]) {
      const time = `${(hour < 10 ? '0' : '') + hour}:${(minute === 0 ? '00' : minute)}`;
      options.push(<option key={time} value={time}>{time}</option>);
    }
  }

  return (
    <div className="relative inline-block ">
      <select id="morningStartTime"
             
              className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
              aria-label="Default select example">
        <option value="" disabled selected>Select a time</option>
        {options}
      </select>
    
    </div>
  );
}

export default Options;

function ArrowdownSvg() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16.8001C11.3 16.8001 10.6 16.5301 10.07 16.0001L3.55 9.48014C3.26 9.19014 3.26 8.71014 3.55 8.42014C3.84 8.13014 4.32 8.13014 4.61 8.42014L11.13 14.9401C11.61 15.4201 12.39 15.4201 12.87 14.9401L19.39 8.42014C19.68 8.13014 20.16 8.13014 20.45 8.42014C20.74 8.71014 20.74 9.19014 20.45 9.48014L13.93 16.0001C13.4 16.5301 12.7 16.8001 12 16.8001Z" fill="#8294B4"/>
</svg>

    )
}
