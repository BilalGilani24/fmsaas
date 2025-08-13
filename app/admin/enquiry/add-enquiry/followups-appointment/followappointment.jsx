"use client";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getSession } from "next-auth/react";

const Followappointment = ({ formData, handleSubmit }) => {
  const [loading, setloading] = useState(false);
  const [followupdate, setfollowupdate] = useState();
  const [getfollowtime, setfollowtime] = useState();
  const [getfollowremarks, setfollowremarks] = useState();
  const [appointmentdate, setappointment] = useState();
  const [getappointmenttime, setappointmenttime] = useState();
  const [getappointmentremarks, setappointmentremarks] = useState();
  const { userId, initializeUser, branchConsulars, fetchBranchConsulars } =
    useUserStore();
  let singlebranchname = branchConsulars
    .map((item) => item.BranchName)
    .join(", ");
console.log(formData.Intrestedcountry)
  useEffect(() => {
    initializeUser();
    fetchBranchConsulars();
  }, [initializeUser]);

  const createnquiry = async () => {
    setloading(true); // Start the loading state
    try {
      await axios.post("/api/admin/createenq", {
        FirstName: formData?.FirstName,
        LastName: formData?.LastName,
        Emailaddress: formData?.Emailaddress,
        Gender: formData?.Gender,
        Intrestedcountry: formData?.Intrestedcountry,
        DOB: formData?.DOB,
        Source: formData.Source,
        Branchname: singlebranchname,
        userId: userId,
        Intake: formData?.Intake,
        Applylevel: formData?.Applylevel,
        Test: formData?.Test,
        Mobilenumber: formData?.Mobilenumber,
        Alternativenumber: formData?.Alternativenumber,
        Intrestedcourse: formData?.Intrestedcourse,
        Appointmentdate: appointmentdate,
        Appointmenttime: getappointmenttime,
        Appointmentremarks: getappointmentremarks,
        Followupdate: followupdate,
        Followuptime: getfollowtime,
        Followupremarks: getfollowremarks,
      });
      toast.success("Enquiry Created Successfully");
    } catch (error) {
      toast.error("Failed To Create Enquiry");
    } finally {
      setloading(false);
    }
  };


  return (
    <>
      <div className="flex dm-sans flex-col ml-80 mt-6  gap-4">
        <div className="flex flex-col  bg-white shadow-sm rounded-md h-[270px] w-[360px] border ">
          <div className="p-2 px-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Follow-up Date{" "}
            </label>
            <input
              onChange={(e) => setfollowupdate(e.target.value)}
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
            />
          </div>{" "}
          <div className="p-2 px-5">
            <form className="max-w-[20rem] mx-auto">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Follow Time:
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="time"
                  id="time"
                  className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  min="09:00"
                  max="18:00"
                  onChange={(e) => setfollowtime(e.target.value)}
                />
              </div>
            </form>
          </div>{" "}
          <div className="p-2 px-5">
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Follow up Remarks
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              onChange={(e) => setfollowremarks(e.target.value)}
            />
          </div>
        </div>
        <div className="flex bg-white flex-col shadow-sm rounded-md h-auto w-[360px] border ">
          <div className="p-2 px-5">
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Appointment Date
            </label>
            <input
              type="date"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              onChange={(e) => setappointment(e.target.value)}
            />
          </div>{" "}
          <div className="p-2 px-5">
            <form className="max-w-[20rem] mx-auto">
              <label
                for="time"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Appointment Time
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="time"
                  id="time"
                  className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  min="09:00"
                  max="18:00"
                  onChange={(e) => setappointmenttime(e.target.value)}
                />
              </div>
            </form>
          </div>{" "}
          <div className="p-2 px-5">
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Appointment Remarks
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              onChange={(e) => setappointmentremarks(e.target.value)}
            />
            <button
              onClick={handleSubmit(createnquiry)}
              type="button"
              className="text-white w-full mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {loading ? "...Creating" : "Create Enquiry"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Followappointment;
