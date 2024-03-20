import React, { useState } from 'react';

const TimerComponent = () => {
  const [timerState, setTimerState] = useState('Start Break');
  const [isPaused, setIsPaused] = useState(false);

  const handleButtonClick = () => {
    if (timerState === 'Start Break' || timerState === 'Resume') {
      setTimerState('Pause Break');
      setIsPaused(true);
    } else {
      setTimerState('Resume');
      setIsPaused(false);
    }
  };

  return (
    <div className=''>
      <div className='bg-[#354258] rounded-xl flex h-48 p-4 flex-col items-start'>
        <p className='text-base text-white not-italic font-normal my-2'>Break Time</p>
        <p className='text-5xl text-white not-italic font-semibold leading-8 my-2'>30:00 <span className='text-[#5B7198]'>MIN</span></p>
        <button className='bg-[#FFCD66] text-[#354258] rounded w-full my-2 px-3 py-2' onClick={handleButtonClick}>
          {timerState}
        </button>
      </div>
    </div>
  );
};

export default TimerComponent;
