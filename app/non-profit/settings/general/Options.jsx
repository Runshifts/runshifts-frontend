"use client";
import React, { useMemo } from "react";

class TimeOption {
  constructor(hour, minute) {
    this.hour = hour
    this.minute = minute
  }
}

function generateTimeOptions () {
  let hoursOfTheDay = new Array(24)
  hoursOfTheDay.fill('')
  hoursOfTheDay = hoursOfTheDay.map((_, index) => {
    return index
  })
  const timeOptions = hoursOfTheDay.map((hour) => {
    let minutes = new Array(3)
    minutes.fill('')
    minutes = minutes.map((_, index) => {
        if (index === 0 ) {
          return 15
        } else {
          return (index * 15) + 15
        }
    })
    return [new TimeOption(hour, 0), ...minutes.map((minute) => new TimeOption(hour, minute))]
  })

  return timeOptions.reduce((acc, current) => {
   return [...acc, ...current]
  }, [])
}

const Options = ({value, onChange, disabled}) => {
  const options = useMemo(() => {
   return generateTimeOptions()
  }, [])

  return (
    <div className="relative inline-block ">
      <select
        id="morningStartTime"
        onChange={onChange}
        value={value}
        disabled={disabled}
        className="w-full border-2 border-[#DFE1E6] rounded px-3 py-2 text-sm font-normal leading-5 text-left text-[#1D2433] "
        aria-label="Default select example"
      >
        {options.map((option, index) =>
           <option key={index} value={`${option.hour}:${option.minute}`}  selected>
           {`${option.hour}:${option.minute}`}
         </option>
        )}
      </select>
    </div>
  );
};

export default Options;
