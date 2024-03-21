import React from "react";
import FooterLogo from "./FooterLogo.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#F7F9FC] p-8 ">
      <div className="flex items-center justify-around py-8">
        <div>
          <h1 className="text-2xl text-[#040505] font-semibold leading-9 tracking-normal text-left">
            Join our newsletter to <br /> keep up to date with us!
          </h1>
        </div>

        <form className="flex items-center max-w-lg mx-auto">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99998 10.0001C12.3012 10.0001 14.1666 8.1346 14.1666 5.83341C14.1666 3.53223 12.3012 1.66675 9.99998 1.66675C7.69879 1.66675 5.83331 3.53223 5.83331 5.83341C5.83331 8.1346 7.69879 10.0001 9.99998 10.0001Z"
                  stroke="#040505"
                  stroke-opacity="0.72"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
                  stroke="#040505"
                  stroke-opacity="0.72"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-[#449522] rounded-lg hover:bg-[#337418] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </form>
      </div>

      <hr />

      <div className="flex items-center justify-around py-8">
        <div>
          <Image src={FooterLogo} alt="footer" />
          <p className="text-base text-[#040505CC] opacity-80 font-normal leading-6 tracking-normal text-left">
            We help you manage your team and <br /> business seamlessly.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p>Platform</p>
            <p>Plans & Pricing</p>
            <p>Employers</p>
            <p>Employees</p>
          </div>

          <div>
            <p>Company</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>News</p>
          </div>

          <div>
            <p>Resources</p>
            <p>Documentation</p>
            <p>Papers</p>
            <p>Press Conferences</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
