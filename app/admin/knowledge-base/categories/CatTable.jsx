import React from "react";

function Table() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" class="px-6 py-3">
              <input type="checkbox" />
            </th>
            <th scope="col" class="px-6 py-3">
              Category name
            </th>
            <th scope="col" class="px-6 py-3">
              Description
            </th>
            <th scope="col" class="px-6 py-3">
              Count
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="col" class="px-6 py-3">
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Uncategorized
            </th>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">43</td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="col" class="px-6 py-3">
              <input type="checkbox" />
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Scheduling
            </th>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">23</td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="col" class="px-6 py-3">
              <input type="checkbox" />
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Tracker
            </th>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">5</td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="col" class="px-6 py-3">
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              -- Check-in time
            </th>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">34</td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="col" class="px-6 py-3">
              <input type="checkbox" />
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              User account
            </th>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">7</td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="col" class="px-6 py-3">
              <input type="checkbox" />
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Payment
            </th>
            <td class="px-6 py-4">-</td>
            <td class="px-6 py-4">7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
