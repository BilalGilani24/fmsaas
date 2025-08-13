import React from "react";
import Settingpic from "./settingpic";

const Studentsetting = () => {
  return (
    <div className="dm-sans">
      <div>
        <Settingpic />
      </div>
      <div className=" ml-[940px]  mt-3">
        <form class="max-w-sm mx-auto">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Branch{" "}
            <strong className="text-blue-500">(Branch Wise Students)</strong>
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a Branch</option>
            <option value="US">Own Account</option>
            <option value="US">Lahore</option>
            <option value="CA">Islamabad</option>
            <option value="FR">Lahore</option>
            <option value="DE">Karachi</option>
          </select>
        </form>
      </div>
      <div class="relative overflow-x-auto border rounded-md mt-5 ml-[270px]">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Student Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Mobile
              </th>
              <th scope="col" class="px-6 py-3">
                Course
              </th>
              <th scope="col" class="px-6 py-3">
                Country
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-2 py-3">
                Activate / Deactivate
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                dum
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">
                <div className="flex flex-row  justify-center items-center  gap-5">
                  <div>Active</div>
                  <div>
                    <div class="point relative w-1.5 h-1.5 bg-green-500 rounded-full">
                      <div class="absolute inset-[-3px] w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-16 py-4">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked
                    value=""
                    class="sr-only peer"
                  />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">
                <div className="flex flex-row  justify-center items-center  gap-5">
                  <div>Active</div>
                  <div>
                    <div class="point relative w-1.5 h-1.5 bg-green-500 rounded-full">
                      <div class="absolute inset-[-3px] w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-16 py-4">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    checked
                    class="sr-only peer"
                  />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>

            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">
                <div className="flex flex-row  justify-center items-center  gap-5">
                  <div>Active</div>
                  <div>
                    <div class="point relative w-1.5 h-1.5 bg-green-500 rounded-full">
                      <div class="absolute inset-[-3px] w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-16 py-4">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    checked
                    class="sr-only peer"
                  />
                  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Studentsetting;
