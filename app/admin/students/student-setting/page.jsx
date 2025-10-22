"use client";
import React, { useEffect, useState } from "react";
import Settingpic from "./settingpic";
import axios from "axios";
import useUserStore from "@/app/store/userid";
import { toast } from "react-toastify";
import Loader from "../../loader";

const Studentsetting = () => {
  const { userId, initializeUser, fetchBranchConsulars } = useUserStore();
 const [data, setdata] = useState([]);
 const [isloading,setloading]=useState(false)
  useEffect(() => {
    initializeUser();
    fetchBranchConsulars();
  }, [initializeUser, userId]);
  useEffect(() => {
    getstudent();
  }, [userId]);

 

  const getstudent = async () => {
    try {
      setloading(false)
      const res = await axios.post("/api/admin/getstudents", {
        AdminId: userId,
      });
      setdata(res.data);
    setloading(true)
    } catch (error) {
      toast.error("Error Fetching Students");
    }
  };

  const updatestudentstatus=async(id)=>{
  try {
     await axios.put("/api/admin/updstudentstatus",{
id:id
    })
    toast.success("Student status updated successfully")
    getstudent();
  } catch (error) {
    toast.error("Error updating student status")
    console.log(error)
  }
  }

  return (
    <div>
      <div>
        <Settingpic />
      </div>
      <div className="relative overflow-x-auto   rounded-md mt-10 ml-[230px]">
        <table className="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>
              <th scope="col" className="px-6 py-3">
                Branch
              </th>
                <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-2 py-3">
                Activate / Deactivate
              </th>
            </tr>
          </thead>
          {!isloading? (
              <div className="p-5">  <Loader/></div>
          
            ) :(
          <tbody>
            {data?.map((item, index) => (
              <tr
                key={index}
                className="  bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                >
                  {item.Name}
                </th>
                <td className="px-6 py-4">{item.Email}</td>
                <td className="px-6 py-4">{item.Mobile}</td>
                <td className="px-6 py-4">{item.BranchName}</td>
                <td className="px-6 py-4">{item.Password}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-row  justify-center items-center  gap-5">
                    {item.Status ? "Active" : "De-Actived"}
                    <div>
                      <div className={`point relative w-1.5 h-1.5 ${item.Status? "bg-green-500" : "bg-red-500" }  rounded-full`}>
                        <div className={`absolute inset-[-3px] w-3 h-3 ${item.Status? "bg-green-500" : "bg-red-500" }  rounded-full animate-ping`}></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-16 py-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={item.Status} onChange={()=>updatestudentstatus(item.id)}  className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-red-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>)}
        </table>
      </div>
    </div>
  );
};

export default Studentsetting;
