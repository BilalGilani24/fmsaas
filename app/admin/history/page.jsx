import Image from "next/image";
import React from "react";

const Studenthistory = () => {
  return (
    <div className="grid grid-cols-2 ml-3 h-auto grid-rows-1 mt-10 mb-5 dm-sans">
      <div className=" h-auto ml-56 w-80 bg-white rounded-md shadow-sm border">
        <div className=" flex justify-center items-center mt-3 mb-5">
          <Image
            src={"/profile.png"}
            width={100}
            height={100}
            className="rounded-full"
            alt="pic"
          />
        </div>

        <div className="flex flex-col gap-1 p-3 mb-1">
          <div>
            <strong>Full Name:</strong> Syed Muhammad Bilal Shoaib
          </div>
          <div>
            {" "}
            <strong>DOB:</strong> 24/01/2024
          </div>
          <div>
            {" "}
            <strong>Mobile:</strong> +92-3329792617
          </div>
        </div>
        <div className=" flex flex-col  ">
          <h1 className="w-full bg-red-500 text-center p-1.5 text-white ">
            Personal Details
          </h1>

          <ul className="mt-2 px-2 py-2 text-md ml-2 text-gray-600">
            <li>
              <strong>Created Date:</strong> 07/11/2024 03:13pm
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Updated Date:</strong> 07/11/2024 03:33pm
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Interested Course:</strong> IT
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Nationality:</strong> Sri Lanka
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Email:</strong> insaf_faiz@yahoo.com
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Intake:</strong> Nov-2024
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Interested Country:</strong> UK
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Apply Level:</strong> Post-graduate
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Martial Status:</strong> Single
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Source:</strong> Refrence
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Assigned By:</strong> Syed Muhammad Bilal
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Assigned To:</strong> Syed Muahmmad Bilal
            </li>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

            <li>
              <strong>Created By:</strong> Syed Muahmmad Bilal
            </li>
          </ul>
        </div>
      </div>
      <div className="flex h-auto ml-[-70px] rounded-md flex-col bg-white shadow-sm border w-[700px]">
        <h1 className="w-full rounded-t-md bg-red-500 text-center p-1.5 text-white ">
          University Application
        </h1>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  <div className=" w-48"> Created-Date/Updated-Date</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Country
                </th>
                <th scope="col" class="px-6 py-3">
                  University
                </th>
                <th scope="col" class="px-6 py-3">
                  Course
                </th>
                <th scope="col" class="px-6 py-3">
                  Intake
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17
                </th>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Laptop</td>
                <td class="px-6 py-4">$2999</td>
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
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h1 className="w-full  bg-red-500 text-center p-1.5 text-white ">
            Application Documents
          </h1>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    <div className=" w-48"> Document Name</div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Document
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Update Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Updated By
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
                    Apple MacBook Pro 17
                  </th>
                  <td class="px-6 py-4">Silver</td>
                  <td class="px-6 py-4">Laptop</td>
                  <td class="px-6 py-4">$2999</td>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="w-full  bg-red-500 text-center p-1.5 text-white ">
            Account
          </h1>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    <div className=" w-48"> Created-Date/Updated-Date</div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <div className="w-24">Invoice Date</div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <div className="w-24">Total Amount</div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <div className="w-24"> Paid Amount</div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <div className="w-32">Pending Amount</div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <div>Status</div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <div className=" w-24">Created By</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17
                  </th>
                  <td class="px-6 py-4">Silver</td>
                  <td class="px-6 py-4">Laptop</td>
                  <td class="px-6 py-4">$2999</td>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studenthistory;
