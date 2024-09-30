import React from "react";
import FooterLogo from "./FooterLogo.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-[#F7F9FC] py-8 px-16 mt-28">
      <div className="flex items-center justify-between py-8">
        <div>
          <h1 className="text-2xl text-[#040505] font-semibold leading-9 tracking-normal text-left">
            Join our newsletter to <br /> keep up to date with us!
          </h1>
        </div>

        <div>
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
                    strokeOpacity="0.72"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
                    stroke="#040505"
                    strokeOpacity="0.72"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
      </div>

      <hr />

      <div className="flex items-center justify-between py-8">
        <div>
          <Image src={FooterLogo} alt="footer" />
          <p className="text-base text-[#040505CC] opacity-80 font-normal leading-6 tracking-normal text-left">
            We help you manage your team and <br /> business seamlessly.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="mr-4 text-sm font-medium leading-5 tracking-normal text-left text-[#040505CC]">
            <p className="mb-4">Platform</p>
            <p className="mb-4">Plans & Pricing</p>
            <p className="mb-4">Employers</p>
            <p className="mb-4">Employees</p>
          </div>

          <div className=" mx-6 text-sm font-medium leading-5 tracking-normal text-left text-[#040505CC]">
            <p className="mb-4">Company</p>
            <p className="mb-4">Blog</p>
            <p className="mb-4">Careers</p>
            <p className="mb-4">News</p>
          </div>

          <div className=" ml-4 text-sm font-medium leading-5 tracking-normal text-left text-[#040505CC]">
            <p className="mb-4">Resources</p>
            <p className="mb-4">Documentation</p>
            <p className="mb-4">Papers</p>
            <p className="mb-4">Press Conferences</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-between pt-8 pb-4 text-sm font-normal leading-5 tracking-normal text-left">
        <div className="">
          &copy; <span>2024 Runshifts.</span>
        </div>

        <div className="flex justify-between items-center space-x-5">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
