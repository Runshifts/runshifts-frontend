"use client";
import React from "react";

function HeroPageContent({ title, subtitle, onSubmit, popular }) {
  return (
    <div
      className="knowledgeb-bg bg-cover bg-center h-screen flex flex-col justify-center  items-center -mt-28 xl:justify-center xl:items-center"
    >
      <h1 className="text-4xl font-semibold tracking-normal text-left mb-8 md:text-6xl">
        {title}
      </h1>
      <p className="break-words text-sm font-normal leading-7 tracking-normal text-center text-[#706763] px-2 mb-8">
        {subtitle}
      </p>

      <form onSubmit={onSubmit}>
       
        <div className="relative w-full">
          <input
            type="search"
            id="search"
            className="block w-[300px] p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 xl:w-[700px]"
            placeholder="What would you like to know?"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#449522] hover:bg-[#1e490e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>

      <p className=" break-words text-sm font-normal leading-7 tracking-normal text-center text-[#2D6316] mt-5">
        <p className="text-[#706763] px-2">Popular searches: <span className="text-[#2D6316] font-bold">{popular}</span></p> 
      </p>
    </div>
  );
}

export default HeroPageContent;
