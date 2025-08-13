import React from "react";
import { Eye, History, Mail, MessageCircle, Pen, UserPlus } from "lucide-react";
import Invoicepic from "./invoicepic";

const Invoices = () => {
  return (
    <div className="flex flex-col dm-sans">
      <div>
        <Invoicepic />
      </div>
      <div className="flex flex-row justify-end mt-10">
        <div className="flex w-auto p-3 h-11 mr-[385px] border  rounded-lg gap-5 items-center justify-center bg-white shadow-sm flex-row">
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
              placeholder="Search Invoices"
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
                  <div className="w-36">Reciept Creation Date</div>
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
                  <div className="w-32">Status</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Application Fees</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-44">Consultancy Charges</div>
                </th>

                <th scope="col" class="px-6 py-3">
                  <div className="w-24">Total</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-20">Amount Due</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-24">View Receipt</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-16">Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  7/11/2024 - 3:14-PM
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
                      class="bg-gray-50 border-lamaYellow  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose status</option>
                      <option value="US">Paid</option>
                      <option value="CA">Pending</option>
                      <option value="FR">Over-Due</option>
                      <option value="FR">Half-Paid</option>
                    </select>
                  </form>
                </td>
                <td class="px-6 py-4">40000</td>
                <td class="px-6 py-4">40000</td>

                <td class="px-6 py-4">40000</td>
                <td class="px-6 py-4">222</td>
                <td class="px-6 py-4">
                  <Eye className="ml-5 hover:text-blue-500" />
                </td>

                <td class="px-6 py-4">
                  <Pen className=" hover:text-green-700 text-red-600 cursor-pointer" />
                </td>
              </tr>
              <tr class="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  7/11/2024 - 3:14-PM
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
                      class="bg-gray-50 border-lamaYellow text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose status</option>
                      <option value="US">Paid</option>
                      <option value="CA">Pending</option>
                      <option value="FR">Over-Due</option>
                      <option value="FR">Half-Paid</option>
                    </select>
                  </form>
                </td>
                <td class="px-6 py-4">40000</td>
                <td class="px-6 py-4">40000</td>

                <td class="px-6 py-4">40000</td>
                <td class="px-6 py-4">10,000</td>

                <td class="px-6 py-4">
                  {" "}
                  <Eye className="ml-5 hover:text-blue-500" />
                </td>

                <td class="px-6 py-4">
                  <Pen className=" hover:text-green-700 text-red-600 cursor-pointer" />
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  7/11/2024 - 3:14-PM
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
                      class="bg-gray-50 border-lamaYellow text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose status</option>
                      <option value="US">Paid</option>
                      <option value="CA">Pending</option>
                      <option value="FR">Over-Due</option>
                      <option value="FR">Half-Paid</option>
                    </select>
                  </form>
                </td>
                <td class="px-6 py-4">5000</td>
                <td class="px-6 py-4">40000</td>

                <td class="px-6 py-4">40000</td>
                <td class="px-6 py-4">5000</td>
                <td class="px-6 py-4">
                  {" "}
                  <Eye className="ml-5 hover:text-blue-500" />
                </td>

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

export default Invoices;
