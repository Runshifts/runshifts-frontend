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
    <div className="relative inline-block w-64">
      <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option value="" disabled selected>Select a time</option>
        {options}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"/></svg>
      </div>
    </div>
  );
}

export default Options;
