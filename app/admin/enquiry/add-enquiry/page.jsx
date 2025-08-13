"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Followappointment from "./followups-appointment/followappointment";
import Enquirypic from "./enquirypic";
import { useForm } from "react-hook-form";

const Addenquiry = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formData = watch();

  return (
    <div className="flex flex-col">
      <div className="ml-44">
        <Enquirypic />
      </div>
      <div className="grid grid-cols-2 grid-rows-1 ">
        <div className="bg-white min-h-[500px] h-auto w-full dm-sans border ml-72 mt-6 p-5 mb-5 rounded-lg shadow-sm">
          <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
            <div className="flex mt-10 flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
                <div className="w-[100px] h-[100px] aspect-auto">
                  <Image
                    src={"/profile.png"}
                    width={100}
                    height={100}
                    alt="pic"
                  />
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                <div className="text-base dm-sans  font-bold text-gray-800">
                  Personal Details
                </div>
                <div className="mt-2 text-sm dm-sans text-red-500">
                  *All the fields should be filled accurately*
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-16 gap-6 mb-10">
            <div className="relative">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First name
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

            <div className="relative">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last name
                </label>
                <input
                  type="text"
                  {...register("LastName", {
                    required: "Last name is required",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

            <div className="relative">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email Address
                </label>
                <input
                  type="text"
                  {...register("Emailaddress", {
                    required: "Email is required",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Gender
              </label>

              <select
                {...register("Gender", {
                  required: "Select Gender",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.Gender && (
                <span className="text-sm text-red-500">
                  {errors.Gender.message}
                </span>
              )}
            </div>

            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Intrested Country
              </label>

              <select
                {...register("Intrestedcountry", {
                  required: "Select Intrested Country",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Choose a country</option>
                <option value="US">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ireland">Ireland</option>
                <option value="Malaysia">Malaysia</option>
              </select>
              {errors.Intrestedcountry && (
                <span className="text-sm text-red-500">
                  {errors.Intrestedcountry.message}
                </span>
              )}
            </div>
            <div className="relative">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Choose Data of Birth
                </label>
                <input
                  {...register("DOB", {
                    required: "Enter of Date of Birth",
                  })}
                  type="date"
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

            <div className="relative">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Choose Intake
                </label>
                <input
                  {...register("Intake", {
                    required: "Enter Intake",
                  })}
                  type="month"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Apply Level
              </label>

              <select
                {...register("Applylevel", {
                  required: "Enter Apply Level",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select Level</option>
                <option value="PHD">PHD</option>
                <option value="Under Graduate">Under Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Foundation course">Foundation Course</option>
                <option value="Language course">Language Course</option>
              </select>
              {errors.Applylevel && (
                <span className="text-sm text-red-500">
                  {errors.Applylevel.message}
                </span>
              )}
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Source
              </label>

              <select
                {...register("Source", {
                  required: "Choose Source",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select Source</option>
                <option value="Walk-In">Walk-In</option>
                <option value="Social Media">Social Media</option>
                <option value="Reference">Reference</option>
                <option value="Bill Boards">Bill Boards</option>
              </select>
              {errors.Source && (
                <span className="text-sm text-red-500">
                  {errors.Source.message}
                </span>
              )}
            </div>
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Test Given (Name, Score)
              </label>
              <input
                type="text"
                {...register("Test", {
                  required: "Enter Test (Ilets,PTE,etc)",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ilets"
                required
              />
              {errors.Test && (
                <span className="text-sm text-red-500">
                  {errors.Test.message}
                </span>
              )}
            </div>
            <div className="relative">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mobile Number
                </label>
                <input
                  type="number"
                  {...register("Mobilenumber", {
                    required: "Enter Mobile Number",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+92-33200000"
                  required
                />
                {errors.Mobilenumber && (
                  <span className="text-sm text-red-500">
                    {errors.Mobilenumber.message}
                  </span>
                )}
              </div>
            </div>

            <div className="relative">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Alternative Mobile Number
                </label>
                <input
                  {...register("Alternativenumber", {
                    required: "Enter Alternative Number",
                  })}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+92-33200000"
                  required
                />
              </div>
              {errors.Alternativenumber && (
                <span className="text-sm text-red-500">
                  {errors.Alternativenumber.message}
                </span>
              )}
            </div>

            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter Interested Course
              </label>
              <input
                type="text"
                {...register("Intrestedcourse", {
                  required: "Enter Intrestedcourse",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="MBA"
                required
              />
              {errors.Intrestedcourse && (
                <span className="text-sm text-red-500">
                  {errors.Intrestedcourse.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div>
          <Followappointment handleSubmit={handleSubmit} formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Addenquiry;
