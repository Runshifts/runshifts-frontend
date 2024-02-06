import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardCarousel = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="block my-3 mx-24 md:hidden">
            <h1 className='font-bold text-[#252525] text-sm py-2'>Work days</h1>

      <Slider {...settings}>
        {daysOfWeek.map((day, index) => (
          <div key={index} className="p-4 border border-separate border-gray-300 rounded md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className='flex '>
            <p className='text-xs bg-gray-200 rounded-full mb-2'>{day}</p>
            <p className='text-sm mb-2 px-2 font-semibold'>Dec 5, 2023</p>
            </div>
            
            <p className='text-[14px] mb-4 font-semibold'>
              Hid subcomponents with duplicative name
            </p>
            <div className="flex items-center justify-start">
              <button className='bg-[#5BC62D] px-2 py-1 text-white rounded-sm'>
                Approve
              </button>
              <button className="text-red-700 font-bold px-2">
                Query
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CardCarousel;
