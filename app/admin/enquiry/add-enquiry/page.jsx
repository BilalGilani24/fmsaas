"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Followappointment from "./followups-appointment/followappointment";
import Enquirypic from "./enquirypic";
import { useForm } from "react-hook-form";
import Select from "react-select";

const Addenquiry = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Intrestedcountry: [],
    },
  });

  // register Intrestedcountry for validation
  useEffect(() => {
    register("Intrestedcountry", {
      required: "Please select at least one country",
    });
  }, [register]);

  const formData = watch();

  const options = [
    { value: "United States", label: "United States" },
    { value: "Canada", label: "Canada" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Ireland", label: "Ireland" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Finland", label: "Finland" },
    { value: "Sweden", label: "Sweden" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "Germany", label: "Germany" },
    { value: "Romania", label: "Romania" },
    { value: "Spain", label: "Spain" },
    { value: "France", label: "France" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Others", label: "Others" },
  ];

  return (
    <div className="flex flex-col">
      <div className="ml-44">
        <Enquirypic />
      </div>

      <div className="grid grid-cols-2 grid-rows-1 ml-10">
        <div className="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl min-h-[637px] h-auto w-full dm-sans ml-72 mt-6 p-5 mb-5 rounded-lg">
          <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
            <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
                <div className="w-[100px] h-[100px] aspect-auto">
                  <Image src={"/profile.png"} width={100} height={100} alt="pic" />
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                <div className="text-white dm-sans font-bold">Personal Details</div>
                <div className="mt-2 text-sm dm-sans text-white">
                  *All the fields should be filled accurately*
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-3 mt-[-30px] gap-6">
            {/* First Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                First name
              </label>
              <input
                type="text"
                {...register("FirstName", { required: "First name is required" })}
                className="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
                placeholder="John"
              />
              {errors.FirstName && (
                <span className="text-sm text-red-600">{errors.FirstName.message}</span>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Last name
              </label>
              <input
                type="text"
                {...register("LastName", { required: "Last name is required" })}
                className="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
                placeholder="Doe"
              />
              {errors.LastName && (
                <span className="text-sm text-red-600">{errors.LastName.message}</span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Email Address
              </label>
              <input
                type="email"
                {...register("Emailaddress", { required: "Email is required" })}
                className="w-full bg-white/20 text-white border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
                placeholder="Doe@gmail.com"
              />
              {errors.Emailaddress && (
                <span className="text-sm text-red-600">
                  {errors.Emailaddress.message}
                </span>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Select Gender
              </label>
              <select
                {...register("Gender", { required: "Select Gender" })}
                className="w-full bg-white/20 text-white border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
              >
                <option value="">Select Gender</option>
                <option value="Male" className="text-black">Male</option>
                <option value="Female" className="text-black">Female</option>
              </select>
              {errors.Gender && (
                <span className="text-sm text-red-600">{errors.Gender.message}</span>
              )}
            </div>

            {/* Interested Countries (multi-select) */}
       <div>
  <label className="block mb-2 text-sm font-medium text-white">
    Select Interested Countries
  </label>
  <Select
    isMulti
    options={options}
    className="text-black"
    onChange={(selectedOptions) =>
      setValue(
        "Intrestedcountry",
        selectedOptions
          ? selectedOptions.map((opt) => opt.value).join(", ")
          : ""
      )
    }
  />
  {errors.Intrestedcountry && (
    <span className="text-sm text-red-600">
      {errors.Intrestedcountry.message}
    </span>
  )}
</div>

            {/* DOB */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Choose Date of Birth
              </label>
              <input
                {...register("DOB", { required: "Enter Date of Birth" })}
                type="date"
                className="w-full bg-white/20 text-white border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
              />
              {errors.DOB && (
                <span className="text-sm text-red-600">{errors.DOB.message}</span>
              )}
            </div>

            {/* Intake */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Choose Intake
              </label>
              <input
                {...register("Intake", { required: "Enter Intake" })}
                type="month"
                className="w-full bg-white/20 text-white border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
              />
              {errors.Intake && (
                <span className="text-sm text-red-600">{errors.Intake.message}</span>
              )}
            </div>

            {/* Apply Level */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Select Apply Level
              </label>
              <select
                {...register("Applylevel", { required: "Enter Apply Level" })}
                className="w-full bg-white/20 text-white border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
              >
                <option value="">Select Level</option>
                <option value="PHD" className="text-black">PHD</option>
                <option value="Undergraduate" className="text-black">Undergraduate</option>
                <option value="Postgraduate" className="text-black">Postgraduate</option>
                <option value="Foundation course" className="text-black">Foundation Course</option>
                <option value="Language course" className="text-black">Language Course</option>
              </select>
              {errors.Applylevel && (
                <span className="text-sm text-red-600">{errors.Applylevel.message}</span>
              )}
            </div>

            {/* Source */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Select Source
              </label>
              <select
                {...register("Source", { required: "Choose Source" })}
                className="w-full bg-white/20 text-white border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
              >
                <option value="">Select Source</option>
                <option value="Walk-In" className="text-black">Walk-In</option>
                <option value="Social Media" className="text-black">Social Media</option>
                <option value="Reference" className="text-black">Reference</option>
                <option value="Bill Boards" className="text-black">Bill Boards</option>
              </select>
              {errors.Source && (
                <span className="text-sm text-red-600">{errors.Source.message}</span>
              )}
            </div>

            {/* Test Given */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Test Given (Name, Score)
              </label>
              <input
                type="text"
                {...register("Test", { required: "Enter Test (IELTS, PTE, etc.)" })}
                className="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
                placeholder="IELTS"
              />
              {errors.Test && (
                <span className="text-sm text-red-600">{errors.Test.message}</span>
              )}
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Mobile Number
              </label>
              <input
                type="tel"
                {...register("Mobilenumber", { required: "Enter Mobile Number" })}
                className="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
                placeholder="+92-33200000"
              />
              {errors.Mobilenumber && (
                <span className="text-sm text-red-600">
                  {errors.Mobilenumber.message}
                </span>
              )}
            </div>

            {/* Alternative Number */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Alternative Mobile Number
              </label>
              <input
                type="tel"
                {...register("Alternativenumber", {
                  required: "Enter Alternative Number",
                })}
                className="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
                placeholder="+92-33200000"
              />
              {errors.Alternativenumber && (
                <span className="text-sm text-red-600">
                  {errors.Alternativenumber.message}
                </span>
              )}
            </div>

            {/* Interested Course */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Enter Interested Course
              </label>
              <input
                type="text"
                {...register("Intrestedcourse", {
                  required: "Enter Interested Course",
                })}
                className="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
                placeholder="MBA"
              />
              {errors.Intrestedcourse && (
                <span className="text-sm text-red-600">
                  {errors.Intrestedcourse.message}
                </span>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Enter Address
              </label>
              <input
                type="text"
                {...register("Address", { required: "Enter Address" })}
                className="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-300"
                placeholder="Islamabad"
              />
              {errors.Address && (
                <span className="text-sm text-red-600">{errors.Address.message}</span>
              )}
            </div>
          </div>
        </div>

        {/* Right column — Followappointment */}
        <div>
          <Followappointment handleSubmit={handleSubmit} formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Addenquiry;
