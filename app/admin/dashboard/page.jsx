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
import Loader from "../loader";

const Dashboard = () => {
  const [stats, setStats] = useState({
    enquiry: [],
    students: [],
    applications: [],
    visa: [],
  });

  const [loading, setLoading] = useState({
    enquiry: true,
    students: true,
    applications: true,
    visa: true,
  });

  const { userId, initializeUser } = useUserStore();

  // Generic function to fetch stats
  const fetchStat = async (api, key, payload = {}) => {
    setLoading((prev) => ({ ...prev, [key]: true }));
    try {
      const res = await axios.post(api, payload);
      setStats((prev) => ({ ...prev, [key]: res.data }));
    } catch (error) {
      toast.error(`Error getting ${key} length`);
    } finally {
      setLoading((prev) => ({ ...prev, [key]: false }));
    }
  };

  useEffect(() => {
    initializeUser();
    if (!userId) return;

    fetchStat("/api/admin/enqlength", "enquiry", { userId });
    fetchStat("/api/admin/studentlength", "students", { AdminId: userId });
    fetchStat("/api/admin/applicationlength", "applications", { AdminId: userId });
    fetchStat("/api/admin/getvisalength", "visa", { AdminId: userId });
  }, [userId]);

  const statCards = [
    { label: "Enquiry", key: "enquiry" },
    { label: "Students", key: "students" },
    { label: "Applications", key: "applications" },
    { label: "Visa", key: "visa" },
  ];

  return (
    <div className="relative ml-52 min-h-screen flex flex-col overflow-hidden text-white">
      {/* Header */}
      <div className="flex justify-center mt-6">
        <Headerpic />
      </div>

      {/* Stat cards */}
      <div className="flex flex-wrap cursor-default justify-center gap-8 mt-12 px-6">
        {statCards.map(({ label, key }, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/10 backdrop-blur-xl  border-white/20 shadow-md p-4 w-60 text-center transition-all duration-300 hover:bg-white/15"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full text-green-200">
                2025
              </span>
              <Link width={20} height={20} className="text-gray-300" />
            </div>

            {/* Loader or value */}
            {loading[key] ? (
              <div className="flex justify-center my-4">
               <Loader/>
              </div>
            ) : (
              <h1 className="text-4xl font-extrabold my-4 tracking-tight">
                {stats[key]?.length || 0}
              </h1>
            )}

            <h2 className="capitalize text-sm font-medium text-gray-200">{label}</h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="flex flex-col ml-10 mb-10 lg:flex-row justify-center items-start gap-5 mt-16 px-10">
        {/* Area chart */}
        <div className="flex flex-col  border-white/20 shadow-md rounded-2xl bg-white/10 backdrop-blur-xl p-6 w-[850px]">
          <h1 className="text-xl font-semibold mb-4">
            Defer & Enrolled Students (Country Wise)
          </h1>
          <Enrolldefer />
        </div>

        {/* Pie chart */}
        <div className=" border-white/20 shadow-md rounded-2xl bg-white/10 backdrop-blur-xl p-6 w-[380px] h-[390px]">
          <h1 className="text-xl font-semibold text-center mb-4">
            Country Wise Leads
          </h1>
          <CustomPieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
