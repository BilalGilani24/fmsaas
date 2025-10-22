"use client";
import React, { useEffect } from "react";
import Followupsappointment from "./followups-appointmnet/followupsappointment";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Select from "react-select";

const Personaldetails = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const formData = watch();
    useEffect(() => {
      register("Intrestedcountry", {
        required: "Please select at least one country",
      });
    }, [register]);
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
    <div className=" absolute mt-[500px] ml-56  ">
      <div className="flex flex-col  ">
        <div className="grid grid-cols-2  grid-rows-1 gap-5  ">
          <div className="border-white/20 shadow-md  bg-white/10 backdrop-blur-xl min-h-[600px] h-auto w-[700px] dm-sans  mt-[-140px] p-5  mb-5 rounded-lg ">
            <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10 mt-5">
              <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
                  <div className="w-[100px] h-[100px] aspect-auto">
                    <Image src={"/astudnets.png"} width={100} height={100} />
                  </div>
                </div>
                <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                  <div className="text-base dm-sans  font-bold text-white">
                    Student Details
                  </div>
                  <div className="mt-2 text-sm dm-sans text-white">
                    *All the fields should be filled accurately*
                  </div>
                  <div className="mt-2 text-sm dm-sans font-bold text-red-600">
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
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    First name<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("FirstName", {
                      required: "First name is required",
                    })}
                  class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
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
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    {...register("LastName", {
                      required: "Last name is required",
                    })}
                                      class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"

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
                  <label class="block mb-2 text-sm font-medium text-white dark:text-white">
                    Email Address<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("Emailaddress", {
                      required: "Email address is required",
                    })}
                                      class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"

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
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Mobile Number<span className="text-red-700">*</span>
                  </label>
                  <input
                    type="number"
                    {...register("Mobilenumber", {
                      required: "Enter Mobile number",
                    })}
                                      class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"

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

              <div id="input" className="relative">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Alternative Mobile Number
                  </label>
                  <input
                    type="number"
                    {...register("Alternativenumber")}
                                      class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"

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
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Enter Interested Course
                </label>
                <input
                  type="text"
                  {...register("Intrestedcourse", {
                    required: "Enter Course",
                  })}
                                    class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"

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
  <label className="block mb-2 text-sm font-medium text-white">
    Select Gender
  </label>
  <select
    {...register("Gender", { required: "Choose Gender" })}
    className="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
  >
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
  {errors.Gender && (
    <span className="text-sm text-red-500">{errors.Gender.message}</span>
  )}
</div>


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
              <div id="input" className="relative">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Choose Data of Birth
                  </label>
                  <input
                    type="date"
                    {...register("DOB", {
                      required: "Choose DOB",
                    })}
                                      class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"

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
                    class="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Choose Intake
                  </label>
                  <input
                    type="month"
                    {...register("Intake", {
                      required: "Choose Intake",
                    })}
                                      class="w-full bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"

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
                  <label class="block mb-2 text-sm font-medium text-white dark:text-white">
                    Select Apply Level
                  </label>

                  <select
                    {...register("Applylevel", {
                      required: "Select Apply level",
                    })}
                  class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                  >
                    <option value=''>Select Level</option>
                    <option value="PHD">PHD</option>
                    <option value="Under Graduate">Undergraduate</option>
                    <option value="Post Graduate">Postgraduate</option>
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
                  <label class="block mb-2 text-sm font-medium text-white dark:text-white">
                    Select Source
                  </label>

                  <select
                    {...register("Source", {
                      required: "Choose Source",
                    })}
                  class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                  >
                    <option value={''}>Select Source</option>
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
              <div id="input" className="relative mt-[-15px]">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Test Given (Name, Score)
                </label>
                <input
                  type="text"
                  {...register("Test", {
                    required: "Enter Test",
                  })}
                                    class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"

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
