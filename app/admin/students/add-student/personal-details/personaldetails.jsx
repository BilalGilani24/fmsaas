"use client";
import React from "react";
import Followupsappointment from "./followups-appointmnet/followupsappointment";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Personaldetails = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formData = watch();

  return (
    <div className=" absolute mt-[500px] ml-64  ">
      <div className="flex flex-col  ">
        <div className="grid grid-cols-2  grid-rows-1 gap-5  ">
          <div className="bg-white h-[695px] w-[700px] dm-sans border mt-[-140px] p-5  mb-5 rounded-lg shadow-sm">
            <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10 mt-5">
              <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
                  <div className="w-[100px] h-[100px] aspect-auto">
                    <Image src={"/astudnets.png"} width={100} height={100} />
                  </div>
                </div>
                <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                  <div className="text-base dm-sans  font-bold text-gray-800">
                    Student Details
                  </div>
                  <div className="mt-2 text-sm dm-sans text-gray-500">
                    *All the fields should be filled accurately*
                  </div>
                  <div className="mt-2 text-sm dm-sans text-red-500">
                    (Firstname, mobile number and email is mandatory)
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 mt-[-20px] gap-6 mb-10">
              <div id="input" className="relative">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("FirstName", {
                      required: "First name is required",
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                  {errors.FirstName && (
                    <span className="text-sm text-red-500">
                      {errors.FirstName.message}
                    </span>
                  )}
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
                    {...register("LastName", {
                      required: "Last name is required",
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                  {errors.LastName && (
                    <span className="text-sm text-red-500">
                      {errors.LastName.message}
                    </span>
                  )}
                </div>
              </div>

              <div id="input" className="relative">
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email Address<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("Emailaddress", {
                      required: "Email address is required",
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Doe@gmail.com"
                    required
                  />
                  {errors.Emailaddress && (
                    <span className="text-sm text-red-500">
                      {errors.Emailaddress.message}
                    </span>
                  )}
                </div>
              </div>
              <div id="input" className="relative">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile Number<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("Mobilenumber", {
                      required: "Email address is required",
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+92-33200000"
                    required
                  />
                  {errors.Mobilenumber && (
                    <span className="text-sm text-red-500">
                      {errors.Emailaddress.message}
                    </span>
                  )}
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
                    {...register("Alternativenumber")}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+92-33200000"
                    required
                  />
                  {errors.Alternativenumber && (
                    <span className="text-sm text-red-500">
                      {errors.Alternativenumber.message}
                    </span>
                  )}
                </div>
              </div>

              <div id="input" className="relative">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Interested Course
                </label>
                <input
                  type="text"
                  {...register("Intrestedcourse", {
                    required: "Enter Course",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="MBA"
                  required
                />
                {errors.Intrestedcourse && (
                  <span className="text-sm text-red-500">
                    {errors.Intrestedcourse.message}
                  </span>
                )}
              </div>
              <div id="input" className="relative">
                <form class="max-w-sm mx-auto">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select Gender
                  </label>

                  <select
                    {...register("Gender", {
                      required: "Choose Gender",
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </form>
                {errors.Gender && (
                  <span className="text-sm text-red-500">
                    {errors.Gender.message}
                  </span>
                )}
              </div>

              <div id="input" className="relative">
                <form class="max-w-sm mx-auto">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select Intrested Country
                  </label>

                  <select
                    {...register("Intrestedcountry", {
                      required: "Choose Intrested Country",
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Choose a country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Malaysia">Malaysia</option>
                  </select>
                </form>
                {errors.Intrestedcountry && (
                  <span className="text-sm text-red-500">
                    {errors.Intrestedcountry.message}
                  </span>
                )}
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
                    {...register("DOB", {
                      required: "Choose DOB",
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Date of Birth"
                    required
                  />
                  {errors.DOB && (
                    <span className="text-sm text-red-500">
                      {errors.DOB.message}
                    </span>
                  )}
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
                    type="month"
                    {...register("Intake", {
                      required: "Choose Gender",
                    })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                  {errors.Intake && (
                    <span className="text-sm text-red-500">
                      {errors.Intake.message}
                    </span>
                  )}
                </div>
              </div>

              <div id="input" className="relative">
                <form class="max-w-sm mx-auto">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select Apply Level
                  </label>

                  <select
                    {...register("Applylevel", {
                      required: "Select Apply level",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Level</option>
                    <option value="PHD">PHD</option>
                    <option value="Under Graduate">Under Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Language Course">Language Course</option>
                  </select>
                </form>
                {errors.Applylevel && (
                  <span className="text-sm text-red-500">
                    {errors.Applylevel.message}
                  </span>
                )}
              </div>
              <div id="input" className="relative">
                <form class="max-w-sm mx-auto">
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select Source
                  </label>

                  <select
                    {...register("Source", {
                      required: "Choose Source",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Select Source</option>
                    <option value="Refrence">Refrence</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Bill Boards">Bill Boards</option>
                    <option value="Walk-In">Walk-In</option>
                  </select>
                </form>
                {errors.Source && (
                  <span className="text-sm text-red-500">
                    {errors.Source.message}
                  </span>
                )}
              </div>
              <div id="input" className="relative">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Test Given (Name, Score)
                </label>
                <input
                  type="text"
                  {...register("Test", {
                    required: "Enter Test",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ilets"
                  required
                />
                {errors.Test && (
                  <span className="text-sm text-red-500">
                    {errors.Test.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div>
            <Followupsappointment
              formData={formData}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personaldetails;
