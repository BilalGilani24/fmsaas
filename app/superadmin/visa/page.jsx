import { History, Mail, MessageCircle, Pen, UserPlus } from "lucide-react";
import React from "react";
import Visapic from "./visapic";

const Visa = () => {
  return (
    <div className="flex flex-col dm-sans">
      <div>
        <Visapic />
      </div>
      <div className="  ml-[940px]  mt-3">
        <form class="max-w-sm mx-auto">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Branch{" "}
            <strong className="text-blue-500">(Branch Wise Visa)</strong>
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
      <div className="flex flex-row  justify-end mt-3">
        <div className="flex w-auto p-3 h-11 mr-[385px]  border  rounded-lg gap-5 items-center justify-center bg-white shadow-sm flex-row">
          <div className="flex text-sm flex-row cursor-pointer hover:text-blue-600 gap-2">
            Send Mail
            <span>
              <Mail className="text-blue-500" size={20} />
            </span>
          </div>
          <div className="flex text-sm flex-row cursor-pointer hover:text-blue-600 gap-2">
            Send Whatsapp Message
            <MessageCircle className="text-blue-500" size={20} />
          </div>
        </div>
        <form class="w-96">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Student"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="w-[1100px] border rounded ml-56 mb-10 mt-3 overflow-x-auto">
        <div class="relative w-full ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Create Date / Last Update
                </th>

                <th scope="col" class="px-6 py-3">
                  <div className="w-80">Name</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-42">Email</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-42">Mobile</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Visa Status
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Doc Status</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Applied Country</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Passport No</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Assigned To</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Assigned By</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Intake
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className=" w-32">Apply Level</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  University
                </th>
                <th scope="col" class="px-6 py-3">
                  Course
                </th>
                <th scope="col" class="px-6 py-3">
                  Branch
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  7/11/2024 3:14-PM
                  <span className=" h-6 w-auto p-2 bg-lamaYellow rounded-xl ml-2 hover:bg-lamaPurple cursor-pointer">
                    Revert To Applications
                  </span>
                </th>

                <td class="px-6 py-4">
                  {" "}
                  <div className="flex flex-row gap-2 ">
                    <div className="mt-3">Syed Muhammad Bilal Shoaib</div>
                    <div className="flex flex-row  bg-lamaPurple cursor-pointer h-auto  p-2 text-black rounded-lg  gap-1 ">
                      History <History />
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div className="w-36">bilalshoaib644@gmail.com</div>
                </td>
                <td class="px-6 py-4">03329792617</td>
                <td class="px-6 py-4">
                  {" "}
                  <form className="w-32">
                    <select
                      id="countries"
                      class="bg-gray-50 border border-purple-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose status</option>
                      <option value="US">Applied</option>
                      <option value="CA">Approved</option>
                      <option value="FR">Rejected</option>
                      <option value="FR">Not Applied</option>
                    </select>
                  </form>
                </td>
                <td>
                  <div className=" p-2 text-center  text-black  rounded-lg    bg-red-500 cursor-pointer">
                    Pending
                  </div>
                </td>

                <td class="px-6 py-4">United Kingdom</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">$2999</td>
                <td class="px-6 py-4">
                  <Pen className=" hover:text-green-700 text-red-600 cursor-pointer" />
                </td>
              </tr>
              <tr class="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  7/11/2024 3:14-PM
                  <span className=" h-6 w-auto p-2 bg-lamaYellow rounded-xl ml-2 hover:bg-lamaPurple cursor-pointer">
                    Revert To Applications
                  </span>
                </th>

                <td class="px-6 py-4">
                  {" "}
                  <div className="flex flex-row gap-2 ">
                    <div className="mt-3">Syed Muhammad Bilal Shoaib</div>
                    <div className="flex flex-row  bg-lamaPurple cursor-pointer h-auto  p-2 text-black rounded-lg  gap-1 ">
                      History <History />
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div className="w-36">bilalshoaib644@gmail.com</div>
                </td>
                <td class="px-6 py-4">03329792617</td>
                <td class="px-6 py-4">
                  {" "}
                  <form className="w-32">
                    <select
                      id="countries"
                      class="bg-gray-50 border border-purple-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose status</option>
                      <option value="US">Applied</option>
                      <option value="CA">Approved</option>
                      <option value="FR">Rejected</option>
                      <option value="FR">Not Applied</option>
                    </select>
                  </form>
                </td>
                <td>
                  <div className=" p-2 text-center  text-black  rounded-lg    bg-red-500 cursor-pointer">
                    Pending
                  </div>
                </td>

                <td class="px-6 py-4">United Kingdom</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">$1999</td>
                <td class="px-6 py-4">White</td>
                <td class="px-6 py-4">Laptop PC</td>
                <td class="px-6 py-4">Laptop PC</td>

                <td class="px-6 py-4">
                  <Pen className=" hover:text-green-700 text-red-600 cursor-pointer" />
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  7/11/2024 3:14-PM
                  <span className=" items-center  h-6 w-auto p-2 bg-lamaYellow hover:bg-lamaPurple cursor-pointer rounded-xl ml-2">
                    Revert To Applications
                  </span>
                </th>

                <td class="px-6 py-4">
                  {" "}
                  <div className="flex flex-row gap-2 ">
                    <div className="mt-3">Syed Muhammad Bilal Shoaib</div>
                    <div className="flex flex-row  bg-lamaPurple cursor-pointer h-auto  p-2 text-black rounded-lg  gap-1 ">
                      History <History />
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div className="w-36">bilalshoaib644@gmail.com</div>
                </td>
                <td class="px-6 py-4">03329792617</td>
                <td class="px-6 py-4">
                  {" "}
                  <form className="w-32">
                    <select
                      id="countries"
                      class="bg-gray-50 border border-purple-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose status</option>
                      <option value="US">Applied</option>
                      <option value="CA">Approved</option>
                      <option value="FR">Rejected</option>
                      <option value="FR">Not Applied</option>
                    </select>
                  </form>
                </td>
                <td>
                  <div className="p-2 text-center  text-black  rounded-lg    bg-green-400 cursor-pointer">
                    Submitted
                  </div>
                </td>

                <td class="px-6 py-4">United Kingdom</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">$99</td>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">$99</td>
                <td class="px-6 py-4">Black</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">Accessories</td>
                <td class="px-6 py-4">
                  <Pen className=" hover:text-green-700 text-red-600 cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Visa;
