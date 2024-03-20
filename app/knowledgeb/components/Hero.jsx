"use client";
import React from "react";

function HeroPageContent({ title, subtitle, onSubmit, popular }) {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundImage: "url(./Frame.svg)" }}
    >
      <h1 className="text-6xl font-semibold tracking-normal text-left mb-8">
        {title}
      </h1>
      <p className=" break-words text-lg font-normal leading-7 tracking-normal text-center text-[#706763] mb-8">
        {subtitle}
      </p>

      <form onSubmit={onSubmit}>
       
        <div className="relative max-w-full">
          <input
            type="search"
            id="search"
            className="block w-[700px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="What would you like to know?"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#449522] hover:bg-[#1e490e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <p className=" break-words text-lg font-normal leading-7 tracking-normal text-center text-[#2D6316] mt-5">
        <p className="text-[#706763]">Popular searches: <span className="text-[#2D6316]">{popular}</span></p> 
      </p>

      {/* <form onSubmit={onSubmit} className="flex">
        <input type="text" className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:ring focus:border-blue-500" placeholder="Enter your email" />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r focus:outline-none focus:ring focus:border-blue-500">{buttonText}</button>
      </form> */}
    </div>
  );
}

export default HeroPageContent;
