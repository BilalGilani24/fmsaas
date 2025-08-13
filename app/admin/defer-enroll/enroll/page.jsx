'use client'
import React, { useEffect, useState } from "react";
import Enrollpic from "./enrollpic";
import { Eye, Mail, MessageCircle } from "lucide-react";
import { toast } from "react-toastify";
import useUserStore from "@/app/store/userid";
import axios from "axios";
const Enrolled = () => {
     const { userId, initializeUser } = useUserStore();
    const [getdata,setdata]=useState([])
    useEffect(()=>{
      initializeUser()
      if(userId){
        getenroll()
      }
    },[userId])
    const getenroll=async()=>{
      try {
        const res=await axios.post("/api/admin/getenroll",{
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
        <Enrollpic />
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
                  <div className="w-32">Applied Country</div>
                </th>
                
                <th scope="col" class="px-6 py-3">
                  <div className="w-24">Course</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-24">Intake</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-44">View Approval Letter</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-28">Visa Status</div>
                </th>
  <th scope="col" class="px-6 py-3">
                  <div className="w-28">Apply Level</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Assigned By</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Assigned To</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Branch
                </th>
              </tr>
            </thead>
            <tbody>
              {getdata.map((item)=>(<div key={item.id}> <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
               

                <td class="px-6 py-4">
                  <div className="w-48">{item.Name}</div>
                </td>
                <td class="px-6 py-4">
                  <div className="w-36">{item.Email}</div>
                </td>
                <td class="px-6 py-4">{item.Mobilenumber}</td>
                <td class="px-6 py-4">{item.Appliedcountry}</td>
               

                <td class="px-6 py-4">{item.Course} </td>
              
                <td class="px-6 py-4">
               {item.Enrollintake}
                </td>
                  <td class="px-6 py-4"><div className="ml-10" onClick={() => window.open(item.Approveletter, "_blank")}><Eye/></div></td>
                <td class="px-6 py-4">
                  <div className=" p-2 text-center  text-black  rounded-lg    bg-green-500 cursor-pointer">
                    Approved
                  </div>
                </td>
              
                 <td class="px-6 py-4">{item.Applylevel}</td>
                <td class="px-6 py-4">None</td>
                <td class="px-6 py-4">
                 None
                </td>
                <td class="px-6 py-4">{item.Branch}</td>
     
              </tr></div>))}
              
          
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Enrolled;
