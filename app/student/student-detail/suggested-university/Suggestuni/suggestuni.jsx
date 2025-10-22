'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import useUserStore from "@/app/store/userid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Pen } from "lucide-react"; // Make sure this icon is installed or imported

const Suggesteduni = () => {
    const { userId, initializeUser, adminId } = useUserStore();

  const [getdata, setdata] = useState([]);
  const [testid, settestid] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();
 const formDatavalue = watch();


  const getsuggesteduniversity = async () => {
    try {
      const res = await axios.post("/api/admin/getsuggesteduni", {
        StudentId: userId,
      });
      setdata(res.data);
    } catch (error) {
      toast.error("Error fetching data");
    }
  };

  const createsuggesteduni = async (data) => {
    try {
      await axios.post("/api/admin/createsuggesteduni", {
        Universityname: data.Universityname,
        Intake: data.Intake,
        Country: data.Country,
        userId: adminId,
        StudentId: userId,
      });
      toast.success("Suggested University Added!");
      reset();
      getsuggesteduniversity(); // refresh table after add
    } catch (error) {
      console.error(error);
      toast.error("Failed to add university");
    }
  };
const editsuggesteduniversity = async (id) => {
  try {
    // Find the original data for this row
    const original = getdata.find((item) => item.id === id);

    const payload = {
      id,
      Universityname: formDatavalue.Universityname1 || original.Universityname,
      Intake: formDatavalue.Intake1 || original.Intake,
      Country: formDatavalue.Country1 || original.Country,
    };

    await axios.put("/api/admin/editsuggesteduni", payload);
    toast.success("University updated successfully!");
    settestid("");
    getsuggesteduniversity(); // Refresh data
  } catch (error) {
    toast.error("Failed to update");
  }
};




  useEffect(() => {
    initializeUser()
    if (userId) getsuggesteduniversity();
  }, [userId]);

  return (
    <>
    <div className="flex dm-sans justify-center mb-5  mt-5 px-4">
      <div className="w-[1000px] p-6 rounded-md bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 dark:bg-gray-800">
        {/* Header */}
        <div className="flex flex-wrap gap-5 items-center w-full mb-8">
          <div className="flex flex-wrap flex-1 gap-5 items-center min-w-[240px]">
            <div className="flex relative flex-col justify-center bg-gray-100 h-[70px] rounded-[16px] overflow-hidden w-[70px]">
              <Image src="/university.jpg" width={100} height={100} alt="University" />
            </div>
            <div className="flex flex-col min-w-[240px]">
              <div className="text-base text-white">Suggested University</div>
              <div className="mt-2 text-sm text-red-500">
                *Add university suggestion one by one*
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(createsuggesteduni)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Select Student */}
            

            {/* University Name */}
            <div className="flex flex-col">
              <label htmlFor="university" className="mb-2 text-sm font-medium text-white dark:text-white">
                University name
              </label>
              <input
                type="text"
                id="university"
                placeholder="Cambridge University"
                {...register("Universityname", { required: true })}
                                className="bg-gray-50 border-gray-300 text-white text-sm rounded-lg bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300 block w-full p-2.5 "
              />
              {errors.Universityname && <span className="text-red-500 text-xs mt-1">Required</span>}
            </div>

            {/* Intake */}
            <div className="flex flex-col">
              <label htmlFor="intake" className="mb-2 text-sm font-medium text-white dark:text-white">
                Select Intake
              </label>
              <input
                type="month"
                id="intake"
                {...register("Intake", { required: true })}
                                className="bg-gray-50 border-gray-300 text-white text-sm rounded-lg bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300 block w-full p-2.5 "
              />
              {errors.Intake && <span className="text-red-500 text-xs mt-1">Required</span>}
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label htmlFor="country" className="mb-2 text-sm font-medium text-white dark:text-white">
                Select Country
              </label>
              <select
                id="country"
                {...register("Country", { required: true })}
                                className="bg-gray-50 border-gray-300 text-black text-sm rounded-lg bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300 block w-full p-2.5 "
              >
                <option value="">Choose a country</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ireland">Ireland</option>
                <option value="Australia">Australia</option>
              </select>
              {errors.Country && <span className="text-red-500 text-xs mt-1">Required</span>}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end mt-2">
              <button
                className="rounded-lg text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white"
                type="submit"
              >
                Add University
              </button>
            </div>
          </div>
        </form>
      </div>

    
    </div>
      {/* Table Display */}
      {userId?.length > 1 && (
        <div className="relative w-[1020px] ml-2  mt-5 mb-5 overflow-hidden bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 text-white overflow-x-auto sm:rounded-lg">
          <table className="text-sm text-left text-white dark:text-gray-400 w-full">
            <thead className="text-xs text-white uppercase bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3 min-w-[150px]">University Name</th>
                <th className="px-6 py-3 min-w-[150px]">Intake</th>
                <th className="px-6 py-3 min-w-[150px]">Country</th>
                <th className="px-6 py-3 min-w-[150px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {getdata.map((item, index) =>
                item.id === testid ? (
                  <tr key={item.id}>
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">
                      <input
                    
                        {...register("Universityname1")}
                        className="w-full rounded-lg p-2 text-sm border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="month"
                      
                        {...register("Intake1")}
                        className="w-full rounded-lg p-2 text-sm border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                  
                        {...register("Country1")}
                        className="w-full rounded-lg p-2 text-sm border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => editsuggesteduniversity(item.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          onClick={() => settestid()}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr key={item.id}>
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{item.Universityname || "None"}</td>
                    <td className="px-6 py-4">{item.Intake || "None"}</td>
                    <td className="px-6 py-4">{item.Country || "None"}</td>
                    <td className="px-6 py-4">
                      <Pen
                        className="cursor-pointer hover:text-green-500"
                        onClick={() => settestid(item.id)}
                      />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Suggesteduni;
