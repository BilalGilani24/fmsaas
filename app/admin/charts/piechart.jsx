"use client";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";


const CustomPieChart = () => {
   const [ukEnroll, setUkEnroll] = useState(0);
    const [ausEnroll, setAusEnroll] = useState(0);
    const [canEnroll, setCanEnroll] = useState(0);
    const [malaysiaEnroll, setMalaysiaEnroll] = useState(0);
    const [usEnroll, setUsEnroll] = useState(0);
   const { userId, initializeUser } = useUserStore();
   const data01 = [
  { name: "Australia", value: ausEnroll || 0 },
  { name: "United Kingdom", value: ukEnroll || 0 },
  { name: "United States", value: usEnroll || 0 },
  { name: "Canada", value: canEnroll || 0},
  { name: "Malaysia", value: malaysiaEnroll || 0},
 
];

     const getenqleads = async () => {
       try {
         const res = await axios.post("/api/admin/enqleads", {
           userId: userId,
         });
   
         const data = res.data || [];
   
         setUkEnroll(data.find((item) => item.country === "United Kingdom")?.count || 0);
         setAusEnroll(data.find((item) => item.country === "Australia")?.count || 0);
         setCanEnroll(data.find((item) => item.country === "Canada")?.count || 0);
         setMalaysiaEnroll(data.find((item) => item.country === "Malaysia")?.count || 0);
         setUsEnroll(data.find((item) => item.country === "United States")?.count || 0);
       } catch (error) {
         console.error("Error fetching leads length:", error);
         toast.error("Error getting leads");
       }
     };
    useEffect(() => {
       initializeUser();
       if (userId) {
        getenqleads()
       }
     }, [userId]);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="40%"
          outerRadius={90}
          fill="#8884d8"
          label
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
