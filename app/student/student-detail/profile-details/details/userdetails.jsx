import Image from "next/image";
import React from "react";

const Userdetails = () => {
  return (
    <div>
      <div className="bg-white dm-sans border ml-64 mt-6 p-10 rounded-lg shadow-lg">
        <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
          <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
              <div className="w-[100px] h-[100px] aspect-auto">
                <Image src={"/profile.png"} width={100} height={100} />
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto min-w-[240px]">
              <div className="text-base dm-sans  text-gray-800">
                Edit Your Profile
              </div>
              <div className="mt-2 text-sm dm-sans text-gray-500">
                *All the fields should be filled accurately*
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-10">
          <div id="input" className="relative">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
          </div>

          <div id="input" className="relative">
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div id="input" className="relative">
            <div>
              <label
                for="email_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="text"
                id="email_nam"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe@gmail.com"
                required
              />
            </div>
          </div>

          <div id="input" className="relative">
            <form class="max-w-sm mx-auto">
              <label
                for="email_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Gender
              </label>

              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select Gender</option>
                <option value="US">Male</option>
                <option value="CA">Female</option>
              </select>
            </form>
          </div>

          <div id="input" className="relative">
            <form class="max-w-sm mx-auto">
              <label
                for="email_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Martial Status
              </label>

              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select Martial Status</option>
                <option value="US">Single</option>
                <option value="CA">Married</option>
                <option value="FR">Divorced</option>
                <option value="DE">Widowed</option>
              </select>
            </form>
          </div>

          <div id="input" className="relative">
            <form class="max-w-sm mx-auto">
              <label
                for="email_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Intrested Country
              </label>

              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">United Kingdom</option>
                <option value="DE">Ireland</option>
                <option value="DE">Malaysia</option>
              </select>
            </form>
          </div>
          <div id="input" className="relative">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Choose Data of Birth
              </label>
              <input
                type="date"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Date of Birth"
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
                Choose Intake
              </label>
              <input
                type="date"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
          </div>

          <div id="input" className="relative">
            <form class="max-w-sm mx-auto">
              <label
                for="email_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Apply Level
              </label>

              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select Level</option>
                <option value="US">PHD</option>
                <option value="CA">Under Graduate</option>
                <option value="FR">Post Graduate</option>
                <option value="DE">Language Course</option>
              </select>
            </form>
          </div>

          <div id="input" className="relative">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mobile Number
              </label>
              <input
                type="number"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+92-33200000"
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
                Alternative Mobile Number
              </label>
              <input
                type="number"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+92-33200000"
                required
              />
            </div>
          </div>

          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              type="number"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Islamanad Street-45"
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Interested Course
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="MBA"
              required
            />
          </div>
        </div>

        <div className="sm:flex sm:flex-row-reverse flex gap-4">
          <button
            className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-green-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
            type="button"
          >
            <div className="flex gap-2 items-center">Save changes</div>
          </button>
          <button
            className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-transparent border-primary text-primary focus:ring-4 focus:ring-gray-100"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
