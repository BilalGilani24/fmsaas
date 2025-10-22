"use client";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Followupsappointment = ({ formData, handleSubmit }) => {
  const [followupdate, setfollowupdate] = useState();
  const [getfollowtime, setfollowtime] = useState();
  const [getfollowremarks, setfollowremarks] = useState();
  const [appointmentdate, setappointment] = useState();
  const [getappointmenttime, setappointmenttime] = useState();
  const [getappointmentremarks, setappointmentremarks] = useState();
  const { userId, initializeUser, branchConsulars, fetchBranchConsulars } =
    useUserStore();
  let singlebranchname = branchConsulars.map((item) => item.BranchName)[0];

  useEffect(() => {
    initializeUser();
    fetchBranchConsulars();
  }, [initializeUser]);

  const generateRandomPassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const passwordLength = 8;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password;
  };
  const generatedpassword = generateRandomPassword();
  const createstudentaccount = async () => {
    try {
      await axios.post("/api/admin/studentregister", {
        Email: formData.Emailaddress,
        Name: formData.FirstName + formData.LastName,
        BranchName: singlebranchname,
        Mobile: formData.Mobilenumber,
        Password: generatedpassword,
        AdminId: userId,
      });
    } catch (error) {
      toast.error("Error creating student account");
    }
  };
  const createstudent = async () => {
    try {
      await axios.post("/api/admin/createstudentenq", {
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        Emailaddress: formData.Emailaddress,
        Gender: formData.Gender,
        Intrestedcountry: formData.Intrestedcountry,
        DOB: formData.DOB,
        userId: userId,
        Intake: formData.Intake,
        Applylevel: formData.Applylevel,
        Test: formData.Test,
        Branchname: singlebranchname,
        Source: formData.Source,
        Mobilenumber: formData.Mobilenumber,
        Alternativenumber: formData.Alternativenumber,
        Intrestedcourse: formData.Intrestedcourse,
        Appointmentdate: appointmentdate,
        Appointmenttime: getappointmenttime,
        Appointmentremarks: getfollowremarks,
        Followupdate: followupdate,
        Followuptime: getfollowtime,
        Followupremarks: getappointmentremarks,
        AdminId: userId,
      });
      createstudentaccount();
      toast.success("Student enquiry and account created successfully");
    } catch (error) {
      toast.error("Error Creating Student Enquiry");
    }
  };
  const sendappointmentemail= async()=>{
    try {
      await axios.post("/api/Appointmentemail",{
        email:formData?.Emailaddress,
        appointmentTime: appointmentdate+getappointmenttime,
            appoinmentremarks:getappointmentremarks
  
      })
      toast.success("Appointment email send successfully")
    } catch (error) {
      toast.error("Error sending appointment email")
    }
  }
  return (
    <>
      <div className="flex dm-sans flex-col mt-[-140px] ml-32   gap-4">
        <div className="flex flex-col  border-white/20 shadow-md rounded-2xl bg-white/10 backdrop-blur-xl  h-[270px] w-[340px] ">
          <div className="p-2 px-5">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Follow-up Date
            </label>
            <input
              type="date"
              onChange={(e) => setfollowupdate(e.target.value)}
                                      class="w-full bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
              placeholder="John"
              required
            />
          </div>
          <div className="p-2 px-5">
            <form class="max-w-[20rem] mx-auto">
              <label
                for="time"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Select Follow Time:
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                  onChange={(e) => setfollowtime(e.target.value)}
                  class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  min="09:00"
                  max="18:00"
                  required
                />
              </div>
            </form>
          </div>
          <div className="p-2 px-5">
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Follow up Remarks
            </label>
            <input
              type="text"
              onChange={(e) => setfollowremarks(e.target.value)}
                                      class="w-full bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="flex  flex-col border-white/20 shadow-md rounded-2xl bg-white/10 backdrop-blur-xlrounded-md h-[315px] mb-10 w-[340px]  ">
          <div className="p-2 px-5">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Appointment Date
            </label>
            <input
              type="date"
              onChange={(e) => setappointment(e.target.value)}
                                      class="w-full bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
              placeholder="John"
              required
            />
          </div>
          <div className="p-2 px-5">
            <form class="max-w-[20rem] mx-auto">
              <label
                for="time"
                class="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Appointment Time
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                  onChange={(e) => setappointmenttime(e.target.value)}
                  class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  min="09:00"
                  max="18:00"
                  required
                />
              </div>
            </form>
          </div>
          <div className="p-2 px-5">
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Appointment Remarks
            </label>
            <input
              type="text"
              onChange={(e) => setappointmentremarks(e.target.value)}
                                      class="w-full bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
              placeholder="bring passport"
              required
            />

           
            <button
              type="button"
              //onClick={handleSubmit(createstudent)}
              onClick={handleSubmit(async () => {
    await createstudent(); 

    // ✅ Run sendappointmentemail only if both date & time exist
    if (appointmentdate && getappointmenttime) {
      await sendappointmentemail();
    }
  })}
              className="text-white w-full mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Create Student
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Followupsappointment;
