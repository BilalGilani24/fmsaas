'use client'
import useUserStore from "@/app/store/userid";
import { Eye } from "lucide-react";
import React, { useEffect, useState } from "react";

const Displayapplication = () => {
    const { userId, initializeUser, adminId } = useUserStore();
const getapplication=async()=>{
  try {
   const res= await axios.post('/api/admin/getapplications',{
      AdminId:adminId
    })
    setdata(res.data)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
initializeUser()
},[])
  return (
    <div className="ml-96 mb-9">
      <h1 className=" mt-8 text-2xl lexend-deca  ">Your Application Status</h1>
      <div className="relative w-[1000px] lexend-deca border overflow-x-scroll shadow-md mt-5 sm:rounded-lg">
        <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
              <th scope="col" className="px-6 py-3">
                Created Date
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                University
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Intake
              </th>
              <th scope="col" className="px-6 py-3">
                Deadline
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Offer letter
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Application Processed</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                08/10/2024 05:15 pm
              </th>
              <td className="px-6 py-4">Sience</td>
              <td className="px-6 py-4">
                South Australia Institute of Business & Technology{" "}
              </td>
              <td className="px-6 py-4">
                Academic English Elementary to Advanced (CELUSA){" "}
              </td>
              <td className="px-6 py-4">Feb-2025 </td>
              <td className="px-6 py-4">23/10/2024 </td>

              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Application Processed
                </a>
              </td>
              <td className="px-6 py-4">--- <Eye/> </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                08/10/2024 05:15 pm
              </th>
              <td className="px-6 py-4">Australia</td>
              <td className="px-6 py-4">
                INTO-University of Western Australia
              </td>
              <td className="px-4 py-4">
                Academic English Elementary to Advanced (CELUSA){" "}
              </td>
              <td className="px-6 py-4">Feb-2025 </td>
              <td className="px-6 py-4">23/10/2024 </td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Application Processed
                </a>
              </td>
              <td className="px-6 py-4">--- <Eye/></td>

            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                08/10/2024 05:15 pm
              </th>
              <td className="px-6 py-4">
                Australia
                <br></br>
                <strong>Finalized</strong>
              </td>
              <td className="px-6 py-4">
                INTO-University of Western Australia
              </td>
              <td className="px-6 py-4">
                Academic English Elementary to Advanced (CELUSA){" "}
              </td>
              <td className="px-6 py-4">Feb-2025 </td>
              <td className="px-6 py-4">23/10/2024 </td>
              <td className="px-6 py-4 text-right">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Application Processed
                </a>
              </td>
              <td className="px-6 py-4">--- <Eye/> </td> 

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Displayapplication;
