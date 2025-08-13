"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Proficencytest from "./proficencytest";
import { CldUploadWidget } from 'next-cloudinary';
const Proficencydetail = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const formData = watch();

  return (
    <>

      <div className="mb-5 mt-5 ml-20">
        <ul className="items-center dm-sans w-[987px] text-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {["ILETS", "PTE", "TOEFL", "GMAT", "Duolingo", "SAT", "GRE"].map(
            (testName) => (
              <li
                key={testName}
                className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
              >
                <div className="flex items-center ps-3">
                  <input
                    {...register("Testname", {
                      required: "Choose Test Name",
                    })}
                    type="radio"
                    value={testName}
                    name="Testname"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={`horizontal-list-radio-${testName}`}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {testName}
                  </label>
                </div>
              </li>
            )
          )}
        </ul>
        {errors.Testname && (
          <p className="text-red-500 text-sm">{errors.Testname.message}</p>
        )}
        <Proficencytest formData={formData.Testname}/>
      </div>
    </>
  );
};

export default Proficencydetail;
