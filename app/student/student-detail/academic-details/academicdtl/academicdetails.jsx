"use client";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import { Upload } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Singlestudentdetail from "./singlestudentdetail";

const Academicdetails = () => {
  const { userId, initializeUser, adminId } = useUserStore();

  const [picImage, setImage] = useState();
  const [getacademic, setacademic] = useState([]);
  const handleUploadSuccess = (result) => {
    const imageUrl = result.info.secure_url;
    setImage(imageUrl);
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formData = watch();
  useEffect(() => {
    initializeUser();
  
  }, [initializeUser, userId]);
 
  useEffect(() => {
    if(userId){
  getstudentacademic();
    }
  
  }, [userId]);

  const getstudentacademic = async () => {
    try {
      const res = await axios.post("/api/admin/getacademicdetails", {
        StudentId: userId,
      });
      setacademic(res.data);
    } catch (error) {
      toast.error("Error Fetching Student Academic Details");
    }
  };
  const createacademics = async () => {
    try {
      await axios.post("/api/admin/createacademicdetails", {
        Qualification: formData.Qualification,
        Subject: formData.Subject,
        Institute: formData.Institute,
        Grade: formData.Grade,
        Backlogs: formData.Backlogs,
        YearStarting: formData.YearStarting,
        Yearpassing: formData.Yearpassing,
        Docs: picImage,
        userId: adminId,
        StudentId: userId,
      });
      toast.success("Successfully Added Student Academic Details");
    } catch (error) {
      toast.error("Error Creating Student Academic Details");
    }
  };
  return (
    <div className="flex  mb-10 mt-5">
      <div>
        <div className="bg-white  dm-sans border p-5 rounded-lg shadow-sm">
          <div className="flex flex-wrap gap-5 items-center  w-[960px]  max-md:max-w-full mb-10">
            <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
                <div className="w-[100px] h-[100px] aspect-auto">
                  <Image src={"/cap.png"} width={100} height={100} />
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                <div className="text-base text-gray-800">Academic Detail</div>
                <div className="mt-2 text-sm text-red-500">
                  *Add student academic qualifications one by one*
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-[-20px]  ">
           
            <div id="input" className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Qualification
              </label>
              <select
                {...register("Qualification", {
                  required: "Choose Student Qualification",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select Qualification</option>
                <option value="Matric">Matric</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Under Graduate">Under Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="PHD">PHD</option>
              </select>
              {errors.Qualification && (
                <span className="text-sm text-red-500">
                  {errors.Qualification.message}
                </span>
              )}
            </div>
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subjects/Major/Degree
                </label>
                <input
                  type="text"
                  {...register("Subject", {
                    required: "Enter Subject",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Science"
                  required
                />
                {errors.Subject && (
                  <span className="text-sm text-red-500">
                    {errors.Subject.message}
                  </span>
                )}
              </div>
            </div>
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  College/Board/University
                </label>
                <input
                  type="text"
                  {...register("Institute", {
                    required: "Enter Subject",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Federal Board"
                  required
                />
                {errors.Institute && (
                  <span className="text-sm text-red-500">
                    {errors.Institute.message}
                  </span>
                )}
              </div>
            </div>
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Percentage/Grade
                </label>
                <input
                  type="number"
                  {...register("Grade", {
                    required: "Enter Subject",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="90%"
                  required
                />
                {errors.Grade && (
                  <span className="text-sm text-red-500">
                    {errors.Grade.message}
                  </span>
                )}
              </div>
            </div>
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Backlogs/Compartment
                </label>
                <input
                  type="text"
                  {...register("Backlogs", {
                    required: "Enter Subject",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="0"
                  required
                />
                {errors.Backlogs && (
                  <span className="text-sm text-red-500">
                    {errors.Backlogs.message}
                  </span>
                )}
              </div>
            </div>{" "}
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Year of Starting
                </label>
                <input
                  type="date"
                  {...register("YearStarting", {
                    required: "Enter Starting Year",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
                {errors.YearStarting && (
                  <span className="text-sm text-red-500">
                    {errors.YearStarting.message}
                  </span>
                )}
              </div>
            </div>
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Year of Passing
                </label>
                <input
                  type="date"
                  {...register("Yearpassing", {
                    required: "Enter Passing Year",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
                {errors.Yearpassing && (
                  <span className="text-sm text-red-500">
                    {errors.Yearpassing.message}
                  </span>
                )}
              </div>
            </div>
            {userId && (
              <div id="input" className="relative">
                <div>
                  <label
                    for="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Upload (PDF,PNG,JPG)
                  </label>

          <CldUploadWidget
                    uploadPreset="fm_upload"
                    onSuccess={handleUploadSuccess}
                  >
                    {({ open }) => {
                      return (
                        <div className=" mt-5 ">
                          <button
                            className="flex gap-2 items-center justify-center text-white bg-green-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            onClick={() => open()}
                          >
                            <Upload />
                            Upload Files
                          </button>
                        </div>
                      );
                    }}
                  </CldUploadWidget>
                </div>
              </div>
            )}
          </div>

          <div className="sm:flex sm:flex-row-reverse mt-5 flex gap-4">
            <button
              className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-blue-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
              onClick={handleSubmit(createacademics)}
            >
              Add Qualification
            </button>
          </div>
        </div>
        {userId?.length > 1 && <Singlestudentdetail getacademic={getacademic} getstudentacademic={getstudentacademic} />}
      </div>
    </div>
  );
};

export default Academicdetails;
