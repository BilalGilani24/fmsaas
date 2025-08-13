import React from "react";

const Suggesteduni = () => {
  return (
    <>
      <div className=" dm-sans justify-center flex-row items-center flex ml-64 mt-10">
        <div className=" w-[1000px] gap-5 items-center p-2 flex flex-row h-24 border shadow-md rounded-md">
          <div>
            <label
              for="first_name"
              class="block mb-2 ml-5 text-sm font-medium text-gray-900 dark:text-white"
            >
              University name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 ml-5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="cambridge university"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Intake
            </label>
            <input
              type="date"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="cambridge university"
              required
            />
          </div>
          <div>
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Country
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">United Kingdom</option>
                <option value="DE">Ireland</option>
                <option value="Aus">Australia</option>
              </select>
            </form>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="w-fit mt-5 rounded-lg text-sm px-3 py-1 focus:outline-none h-[43px] border bg-blue-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
              type="button"
            >
              <div className="flex gap-2 items-center">Add University</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggesteduni;
