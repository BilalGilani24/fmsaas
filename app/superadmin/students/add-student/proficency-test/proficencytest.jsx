import Image from "next/image";
import React from "react";
import Proficencydetail from "./proficencydetail";

const Proficencytest = () => {
  return (
    <>
      <div className="ml-64 mt-5">
        <Proficencydetail />
        <div className="bg-white dm-sans mb-5 border p-5 rounded-lg shadow-md">
          <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
            <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
                <div className="w-[100px] h-[100px] aspect-auto">
                  <Image src={"/test.png"} width={100} height={100} />
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                <div className="text-base text-gray-800">Proficency Test</div>
                <div className="mt-2 text-sm text-red-500">
                  *Add student proficency test one by one*
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-[-20px] ">
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Listening
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="8"
                  required
                />
              </div>
            </div>

            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Reading
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="4"
                  required
                />
              </div>
            </div>

            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Writing
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="6"
                  required
                />
              </div>
            </div>

            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Speaking
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="7"
                  required
                />
              </div>
            </div>
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Overall
                </label>
                <input
                  type="number"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="3"
                  required
                />
              </div>
            </div>
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Total Score{" "}
                  <span className="text-red-600">(PTE,DUOLINGO)</span>
                </label>
                <input
                  type="number"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="57"
                  required
                />
              </div>
            </div>
          </div>

          <div className="sm:flex sm:flex-row-reverse flex gap-4 mt-5">
            <button
              className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-blue-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
              type="button"
            >
              <div className="flex gap-2 items-center">Add Proficency Test</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proficencytest;
