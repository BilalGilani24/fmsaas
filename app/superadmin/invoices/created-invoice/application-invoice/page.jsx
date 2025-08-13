import React from "react";
import { Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";
const Applicationinvoice = () => {
  return (
    <div>
      <div class="bg-white p-8 ml-52 border mt-5 rounded-lg shadow-md">
        <div class="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
          <div class="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div class="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
              <div class="w-[100px] h-[100px] aspect-auto">
                <Image src={"/invo.png"} width={90} height={100} />
              </div>
            </div>
            <div class="flex flex-col self-stretch my-auto min-w-[240px]">
              <div class="text-base text-gray-800">
                University Application Invoice
              </div>
              <div class="mt-2 text-sm  text-red-500">
                PLEASE CHOOSE CORRECT OPTIONS AND AMOUNT
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6 mb-10">
          <div id="input" class="relative">
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Name
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="US">Choose Name</option>

                <option value="US">Bilal</option>
                <option value="CA">Gilani</option>
                <option value="FR">Bilal Gilani</option>
                <option value="DE">Gilani</option>
              </select>
            </form>
          </div>

          <div id="input" class="relative">
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Phone Number
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>

          <div id="input" class="relative">
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an Email
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>

          <div id="input" class="relative">
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Payment Method
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="US">Choose Payment Method</option>
                <option value="CA">Mastercard</option>
                <option value="CA">Visacard</option>
                <option value="FR">Sadapay</option>
                <option value="DE">Nayapay</option>
              </select>
            </form>
          </div>

          <div id="input" class="relative">
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Payment Status
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="US">Choose Payment Status</option>
                <option value="CA">Paid</option>
                <option value="FR">Half-Paid</option>
              </select>
            </form>
          </div>
          <div id="input" class="relative">
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Country
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="US">Choose Country</option>
                <option value="CA">USA</option>
                <option value="CA">United Kingdom</option>
                <option value="FR">Australia</option>
                <option value="DE">Canada</option>
              </select>
            </form>
          </div>
          <div id="input" class="relative">
            <label
              for="first_name"
              class="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter University Name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 ml-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Oxford University"
              required
            />
          </div>
          <div id="input" class="relative">
            <label
              for="first_name"
              class="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Application Fee Amount
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 ml-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="15000"
              required
            />
          </div>
        </div>

        <div class="sm:flex sm:flex-row-reverse flex gap-4 ">
          <button
            class="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-blue-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
            type="button"
          >
            <div class="flex gap-2 items-center">Create Reciept</div>
          </button>
        </div>
      </div>
      {/* {ss} */}
      <div className="min-h-screen flex items-center justify-center ml-52 py-10">
        <div className="max-w-4xl dm-sans mx-auto border bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-6 mb-6">
            <div>
              <div className="bg-red-600 w-auto h-auto p-3 ">
                <Image src="/fm-logo.png" width={200} height={200} />
              </div>
              <h1 className="text-3xl mt-5 font-bold text-red-600">INVOICE</h1>
            </div>
            <div className="mt-[70px]">
              <p className="text-lg text-gray-500">Invoice Date</p>
              <p className="font-bold">February 23, 2025</p>
            </div>
          </div>

          {/* Client Info */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800">Invoice To:</h2>
            <p className="text-gray-700">Bilal Gilani</p>
            <p className="text-gray-700">Phone: +123-456-7890</p>
            <p className="text-gray-700">Email: bilalshoaib644@gmail.com</p>
          </div>

          <div>
            <h1 className="text-md font-bold">
              Service Type: University Application Fee
            </h1>
            <h1 className="text-md font-bold">Country Name: United Kingdom</h1>
            <h1 className="text-md font-bold">
              University Name: Oxford University
            </h1>
          </div>

          {/* Payment Summary */}
          <div className="flex justify-between items-center border-t pt-6 mt-6">
            <div>
              <p className="font-bold">
                Payment Method:{" "}
                <span className="text-gray-600 font-medium">Mastercard</span>
              </p>
              <p className="font-bold mt-1">
                Payment Status:{" "}
                <span className="text-gray-600 font-medium">Paid</span>
              </p>
            </div>
            <div className="text-right">
              <h3 className="text-red-600 text-xl font-bold">
                Total: PKR 15,000
              </h3>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="mt-6 text-sm text-gray-600">
            <p className="font-bold">
              Terms & Conditions: Fm-Consultants only charge Twenty Thousand
              advance and Twenty Thousand on the time of visa applying
            </p>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center text-gray-700">
            <p className="text-lg font-semibold text-red-600">Thank You</p>
            <div className="mt-4 flex flex-row gap-5 justify-center">
              <div className="flex flex-row items-center justify-center gap-2">
                <Phone color="red" /> +92-321-8453460
              </div>
              <div className="flex flex-row gap-2 justify-center items-center">
                <Mail color="red" /> info@fmglobaledu.com
              </div>
              <div className="flex flex-row gap-2 justify-center items-center">
                <Globe color="red" /> www.fmglobaledu.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicationinvoice;
