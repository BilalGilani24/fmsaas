'use client';
import axios from "axios";
import { X } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Addapplicationmodal = ({ setcreateapplicationmodal, applicationID,Email,Country }) => {
  const { register, handleSubmit, reset } = useForm();
  const createstudentapplicatin = async (data) => {
    try {
      await axios.post('/api/admin/createuniapplication', {
        applicationId: applicationID,
        Universityname: data.Universityname,
        Course: data.Course,
        Intake: data.Intake,
        Applylevel: data.Applylevel,
      });
      toast.success("Student application created successfully");
      setcreateapplicationmodal(false);
      reset(); // Clear form after submission
     await applicationemail(data.Universityname);
    } catch (error) {
      console.error(error);
      toast.error("Failed to create application");
    }
  };

  const applicationemail=async(universityName)=>{
    try {
      await axios.post('/api/admin/applicationemail',{
        email:Email,
        country:Country,
        university:universityName
      })
      toast.success("Email send to student successfully")
    } catch (error) {
      toast.error("Failed to send email to student")
      console.log(error)
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
rounded-lg  dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-white dark:text-white">
              Create Student Application
            </h3>
            <button
              onClick={() => setcreateapplicationmodal((pre) => !pre)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <X color="red" />
            </button>
          </div>

          <form onSubmit={handleSubmit(createstudentapplicatin)} className="container px-4 mx-auto p-3">
            <div className="max-w-md mx-auto px-8 py-6 bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 rounded-lg  border">
              <div className="mb-4">
                <label className="block text-gray-800 mb-1">University</label>
                <input
                  {...register("Universityname")}
                  className="w-full px-4 text-black py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter university name"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1">Course</label>
                <input
                  {...register("Course")}
                  className="w-full px-4 py-2 text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter course name"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1">Intake</label>
                <input
                  {...register("Intake")}
                  type="month"
                  className="w-full px-4 py-2 text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Choose Intake"
                />
              </div>
              <div className="mb-8">
                <label className="block text-gray-800 mb-1">Apply Level</label>
                <select
                  {...register("Applylevel")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Select Apply Level</option>
                  <option value="PHD">PHD</option>
                  <option value="Under Graduate">Under Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Foundation course">Foundation Course</option>
                  <option value="Language course">Language Course</option>
                </select>
              </div>
              <button
                className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                type="submit"
              >
                Create Application
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Addapplicationmodal;
