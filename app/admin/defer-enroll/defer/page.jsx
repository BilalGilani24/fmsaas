'use client'
import React, { useEffect, useState } from "react";
import Deferpic from "./deferpic";
import { Eye, Mail, MessageCircle, Pen, UserPlus } from "lucide-react";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import { toast } from "react-toastify";

const Defer = () => {
    const { userId, initializeUser } = useUserStore();
    const [getdata,setdata]=useState([])
    useEffect(()=>{
      initializeUser()
      if(userId){
        getdefer()
      }
    },[userId])
    const getdefer=async()=>{
      try {
        const res=await axios.post("/api/admin/getdefer",{
          AdminId:userId
        })
        setdata(res.data)
      } catch (error) {
        toast.error("Error fetching the defer students")
      }
    }
  return (
    <div className="flex flex-col dm-sans">
      <div>
        <Deferpic />
      </div>
      <div className="flex flex-row justify-end mt-10">
        <div className="flex w-auto p-3 h-11 mr-[385px]  border  rounded-lg gap-5 items-center justify-center bg-white shadow-sm flex-row">
          <div className="flex text-sm flex-row cursor-pointer hover:text-blue-600 gap-2">
            Send Mail
            <span>
              <Mail className="text-blue-500" size={20} />
            </span>
          </div>
          <div className="flex text-sm flex-row cursor-pointer hover:text-blue-600 gap-2">
            Send Whatsapp Message
            <MessageCircle className="text-blue-500" size={20} />
          </div>
        </div>
        <form class="w-96">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Student"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="w-[1100px] border rounded ml-56 mb-10 mt-3 overflow-x-auto">
        <div class="relative w-full ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              

                <th scope="col" class="px-6 py-3">
                  <div className="w-42">Name</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-42">Email</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-42">Mobile</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-24">Defer Intake</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-24">Defer Reason</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-24">Defer Letter</div>
                </th>
               
                <th scope="col" class="px-6 py-3">
                  <div className="w-28">Applied Country</div>
                </th>

                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Assigned To</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Assigned By</div>
                </th>
                
                <th scope="col" class="px-6 py-3">
                  <div className=" w-32">Apply Level</div>
                </th>

                <th scope="col" class="px-6 py-3">
                  Course
                </th>
                <th scope="col" class="px-6 py-3">
                  Branch
                </th>
              </tr>
            </thead>
           
             <tbody>
  {getdata.map((item, index) => (
    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
     
      <td className="px-6 py-4">
        <div className="w-48">{item.Name}</div>
      </td>
      <td className="px-6 py-4">
        <div className="w-36">{item.Email}</div>
      </td>
      <td className="px-6 py-4">{item.Mobilenumber}</td>
      <td className="px-6 py-4">{item.Deferintake}</td>
      <td>
        <div className="p-2 text-center text-black rounded-lg bg-red-500 cursor-pointer">
          {item.Deferreason}
        </div>
      </td>
      <td className="px-6 py-4">
        <Eye   onClick={() => window.open(item.Deferletter, "_blank")} className="hover:text-blue-500" />
      </td>
      <td className="px-6 py-4">{item.Appliedcountry}</td>
      <td className="px-6 py-4">None</td>
      <td className="px-6 py-4">None</td>
      <td className="px-6 py-4">{item.Applylevel}</td>
      <td className="px-6 py-4">{item.Course}</td>
      <td className="px-6 py-4">{item.Branch}</td>
    </tr>
  ))}
</tbody>

           
          </table>
        </div>
      </div>
    </div>
  );
};

export default Defer;
