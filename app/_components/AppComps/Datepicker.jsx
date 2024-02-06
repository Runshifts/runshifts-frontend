"use client"
import React, { useState } from 'react';

const DateRangePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    setCurrentDate(newDate);
  };

  const formatDate = (date) => {
    const options = {  month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="flex my-4 mb-4">
      <button
        className="text-sm font-bold"
        onClick={() => updateDate(-1)}
      >
        &lt;
      </button>
      <div className="font-bold text-sm text-[#252525] px-2">
        {formatDate(new Date(currentDate.setDate(currentDate.getDate() - 4)))} to{' '}
        {formatDate(new Date(currentDate.setDate(currentDate.getDate() + 4)))}
      </div>
      <button
        className="text-sm"
        onClick={() => updateDate(1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default DateRangePicker;
