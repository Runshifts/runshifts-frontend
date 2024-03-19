import React from "react";
import Button from "../../../_components/AppComps/Button";

function CatForm() {
  return (
    <div>
      <div className="max-w-sm rounded-lg  shadow-lg px-3 my-5">
        <form className="max-w-sm p-4">
          <div className="mb-5">
            <label className="block text-xs font-semibold leading-5 tracking-normal text-left text-[#202223] dark:text-white">
              Category name
            </label>
            <input
              type="category"
              id="category"
              className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Select category"
              required
            />
            <p className="text-sm font-normal leading-5 tracking-normal text-left text-[#6D7175]">
              slug: bathroom-accessories
            </p>
          </div>

          <div className="mb-2">
            <label className="block text-xs font-semibold leading-5 tracking-normal text-left text-[#202223] dark:text-white">
              Parent category
            </label>
            <select
              className="shadow-sm bg-gray-50 border border-gray-200 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              aria-label="Default select example"
            >
              <option>select parent</option>
              <option value="1">Scheduling</option>
              <option value="2">Tracker</option>
              <option value="3">User account</option>
              <option value="3">Payment</option>
            </select>
          </div>
        </form>
        <div className="ml-5 pb-3">
          <Button>
            <div className="flex items-center justify-center">
              <PlusSvg />
              <p>Add category</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CatForm;

function PlusSvg() {
    return (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 12.75H6.5C6.09 12.75 5.75 12.41 5.75 12C5.75 11.59 6.09 11.25 6.5 11.25H18.5C18.91 11.25 19.25 11.59 19.25 12C19.25 12.41 18.91 12.75 18.5 12.75Z"
          fill="white"
        />
        <path
          d="M12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V6C11.75 5.59 12.09 5.25 12.5 5.25C12.91 5.25 13.25 5.59 13.25 6V18C13.25 18.41 12.91 18.75 12.5 18.75Z"
          fill="white"
        />
      </svg>
    );
  }
  
