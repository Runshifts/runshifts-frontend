import React from "react";
import Button from "../../../_components/AppComps/Button";

function page() {
  return (
    <section className="">
      <form class="max-w-sm mx-auto my-3 p-5 bg-whitw rounded-lg shadow-lg">
        
        <div className="text-[#1B1818] text-center">
            <p className="text-sm  font-normal leading-4 my-1">Dispute Details</p>
            <h1 className="text-base font-semibold leading-5 ">12 Jan 2024</h1>
            <p className="text-xs text-[#AEA7A3] font-normal leading-3 my-1 ">ID:12342334 <span className="text-[#706763] ml-2">Status Open</span></p>
        </div>

        <div className="mb-5">
          <label
            for="fullName"
            className="block mb-1 text-xs font-hairline leading-4 tracking-normal text-left text-[#6B778C] dark:text-white"
          >
            Full Name
          </label>
          <input
            type="fullName"
            id="fullName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Daniel Riggs"
            required
          />
        </div>

        <div className="mb-5">
          <label
            for="email"
            className="block mb-1 text-xs font-hairline leading-4 tracking-normal text-left text-[#6B778C] dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="d.riggs@gmail.com"
            required
          />
        </div>

        <div className="mb-5">
          <label
            for="company"
            className="block mb-1 text-xs font-hairline leading-4 tracking-normal text-left text-[#6B778C] dark:text-white"
          >
            Company
          </label>
          <input
            type="company"
            id="company"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Daniel Riggs"
            required
          />
        </div>

        <div>
          <label
            for="message"
            className="block mb-2 mt-4 text-sm font-medium text-[#303030] dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="I requested a withdrawal and this payment has not dropped for 3 days now. Can this be resolved?"
          ></textarea>
        </div>

        <div className="mt-6 mb-3">
          <Button>Inititate transaction</Button>
        </div>

        <hr />

        <div>
          <label
            for="reply"
            className="block mb-2 mt-4 text-sm font-medium text-[#303030] dark:text-white"
          >
            Reply
          </label>
          <textarea
            id="reply"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Reply here..."
          ></textarea>
        </div>

        <div className="mt-4 mb-3">
          <Button>Send</Button>
        </div>

        <hr />

        <div className="flex items-items-center justify-start mt-4 mb-3">
          <Button>Mark as resolved</Button>
          <button className="ml-2">Back</button>
        </div>

      </form>
    </section>
  );
}

export default page;
