"use client";
import React, { useEffect, useState } from "react";
import Stackareachart from "../charts/stackareachart";
import CustomPieChart from "../charts/piechart";
import Headerpic from "./headerpic";
import { Link } from "lucide-react";
import Enrolldefer from "../charts/deferenrollchart";
import axios from "axios";
import { toast } from "react-toastify";
import useUserStore from "@/app/store/userid";

const Dashboard = () => {
const [getdata,setdata]=useState([])
const { userId, initializeUser } = useUserStore();
const [getstudent,setstudent]=useState([])
const  [getapplication,setapplication]=useState([])
const [getvisa,setvisa]=useState([])
  const getenqlenth= async()=>{
    try {
      const res= await axios.post("/api/admin/enqlength",{
        userId:userId
      })
      setdata(res.data)
    } catch (error) {
      toast.error("Error getting enquiry length")
    }
  }
  const getstudentlength= async()=>{
    try {
      const res= await axios.post("/api/admin/studentlength",{
        AdminId:userId
      })
      setstudent(res.data)
    } catch (error) {
      toast.error("Error getting student length")
    }
  }
  useEffect(()=>{
      initializeUser()
      if(userId){
    getenqlenth();
    getstudentlength();
    getapplicationlength();
    getvisalength()
      }
    
    },[userId])
     const getvisalength=async()=>{
        try {
      const res= await axios.post("/api/admin/getvisalength",{
        AdminId:userId
      })
      setvisa(res.data)
    } catch (error) {
      toast.error("Error getting student length")
    }
    }
    const getapplicationlength=async()=>{
        try {
      const res= await axios.post("/api/admin/applicationlength",{
        AdminId:userId
      })
      setapplication(res.data)
    } catch (error) {
      toast.error("Error getting student length")
    }
    }
  return (
    <div className="flex flex-col">
      <div className=" flex ml-52 mt-5 justify-center items-center ">
        <Headerpic />
      </div>

      <div className="dm-sans justify-center ml-52 mt-8 items-center flex flex-row gap-5">
        {["Enquiry", "Students", "Applications", "Visa"].map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl ${
              index % 2 === 0 ? "bg-lamaPurple" : "bg-lamaYellow"
            } p-4 w-60`}
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
                2024/25
              </span>
              <Link width={20} height={20} />
            </div>
            <h1 className="text-2xl font-semibold my-4">
              {index === 0 ? getdata?.length : index === 1 ? getstudent?.length : index === 2 ? getapplication?.length : getvisa?.length}
            </h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">
              {item}
            </h2>
          </div>
        ))}
      </div>
  <div className="flex mt-10">
          <h1 className="text-xl ml-96">Defer & Enrolled Students (Country Wise)</h1>
         
        </div>
        <div className=" mt-[-25px] ml-[1000px]">
           <h1 className="text-center  text-xl dm-sans">
            Country Wise Leads
          </h1>
        </div>
      <div className="flex ml-44 mt-5 flex-row justify-center ">
       
       <div className=" mt-1 flex-col gap-5 border shadow-sm rounded-lg flex justify-center items-center">
       
        <div className="w-[800px] px-10  ">
          <Enrolldefer />
        </div>
      </div>

        <div className="flex flex-col ml-3 mr-4  w-[360px]">
         
          <div className="w-full  h-[380px] border shadow-sm rounded-lg">
            <CustomPieChart />
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Dashboard;
