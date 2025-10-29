"use client";
import React, { useEffect, useState } from "react";
import Createconsulars from "./createconsulars/createconsulars";
import axios from "axios";
import { toast } from "react-toastify";

const Consulars = () => {
  const [getdata, setdata] = useState([]);
      const [fetchbranch, setbranch] = useState([]);
    const [getbranchname,setbranchname]=useState()
      const [branchdata,setbranchdata]=useState([])
  
const getbranches = async () => {
    try {
      const response = await axios.get("/api/Branch/Getbranch");
      setbranch(response.data);
   
    } catch (error) {
      toast.error("Error Fetching Branches");
    }
  };
     const fetchbranchconsulars=async()=>{
        try {
          
          const res = await axios.post('/api/superadmin/branchwiseconsulars',{
            BranchName:getbranchname
          })
  setbranchdata(res.data)
        } catch (error) {
          toast.error("Error fetching branch wise  data")
          console.log(error)
        }
      }
      useEffect(()=>{
        getbranches()
        if(getbranchname){
          fetchbranchconsulars()
        }
      },[getbranchname])
  
  const fetchconsulars = async () => {
    try {
      const response = await axios.get("/api/fetchconsulars");
      setdata(response.data);
    } catch (error) {
      toast.error("Error fetching consulars accounts");
    }
  };
  useEffect(() => {
    fetchconsulars();
  }, []);
  
  return (
    <div>
      <div className="dm-sans">
        <div>
          <Createconsulars />
        </div>
       <div className=" ml-[950px]  flex-col  mt-3">
          <form class="max-w-sm mx-auto">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Select Branch
              <strong className="text-red-500">(Branch Wise Consulars)</strong>
            </label>
            <select
              id="countries"
               onChange={(e)=>setbranchname(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
            >
              <option>Choose Branch</option>
              {fetchbranch.map((item, index) => (
                <option              
 key={index} value={item.Branchname}>
                  {item.Branchname}
                </option>
              ))}
            </select>
          </form><div>{getbranchname?<div className=" cursor-pointer" onClick={()=>setbranchname('')}>Clear</div>:""}</div>  </div>
        <div class="relative w-[940px] overflow-x-scroll  rounded-md mt-5 mb-10 ml-[270px]">
          <table class="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
">
              <tr>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32"> Consular Name</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Password</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Mobile</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Branch Name</div>
                </th>

                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-2 py-3">
                  Activate / Deactivate
                </th>
              </tr>
            </thead>
            {(getbranchname? branchdata: getdata).map((item, index) => (
              <tbody key={index}>
                <tr class="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    {item.Name}
                  </th>
                  <td class="px-6 py-4">{item.Email}</td>
                  <td class="px-6 py-4">{item.Password}</td>
                  <td class="px-6 py-4">{item.Mobile}</td>
                  <td class="px-6 py-4">{item.BranchName}</td>

                  <td class="px-6 py-4">
                    <div className="flex flex-row  justify-center items-center  gap-5">
                      <div>{item.Status ? "Active" : "Deactivated"}</div>
                      {item.Status ? (
                        <div>
                          <div class="point relative w-1.5 h-1.5 bg-green-500 rounded-full">
                            <div class="absolute inset-[-3px] w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td className="px-16 py-4">
                    <label class="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked
                        value=""
                        class="sr-only peer"
                      />
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Consulars;
