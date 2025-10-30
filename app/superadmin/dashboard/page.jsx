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
  const [fetchbranch, setbranch] = useState([]);
  const [getbranchname, setbranchname] = useState("");

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

  const getbranches = async () => {
    try {
      const response = await axios.get("/api/Branch/Getbranch");
      setbranch(response.data);
    } catch (error) {
      toast.error("Error Fetching Branches");
    }
  };

  // Fetch all stats based on branch or userId
  const fetchAllStats = () => {
    if (getbranchname) {
      // Fetch by branch name
      fetchStat("/api/superadmin/branchenqlength", "enquiry", { BranchName: getbranchname });
      fetchStat("/api/superadmin/branchstudentlength", "students", { BranchName: getbranchname });
      fetchStat("/api/superadmin/branchapplength", "applications", { BranchName: getbranchname });
      fetchStat("/api/superadmin/branchvisalength", "visa", { BranchName: getbranchname });
    } else if (userId) {
      // Fetch by userId (original behavior)
      fetchStat("/api/admin/enqlength", "enquiry", { userId });
      fetchStat("/api/admin/studentlength", "students", { AdminId: userId });
      fetchStat("/api/admin/applicationlength", "applications", { AdminId: userId });
      fetchStat("/api/admin/getvisalength", "visa", { AdminId: userId });
    }
  };

  useEffect(() => {
    getbranches();
    initializeUser();
  }, []);

  useEffect(() => {
    if (userId || getbranchname) {
      fetchAllStats();
    }
  }, [userId, getbranchname]);

  const statCards = [
    { label: "Enquiry", key: "enquiry" },
    { label: "Students", key: "students" },
    { label: "Applications", key: "applications" },
    { label: "Visa", key: "visa" },
  ];

  const handleClearBranch = () => {
    setbranchname("");
  };

  return (
    <div className="relative ml-52 min-h-screen flex flex-col overflow-hidden text-white">
      {/* Header */}
      <div className="flex justify-center mt-6">
        <Headerpic />
      </div>

      {/* Branch Selector */}
      <div className="ml-[850px] flex-col mt-3">
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Select Branch
            <strong className="text-red-500">(Branch Wise Consulars)</strong>
          </label>
          <select
            id="countries"
            value={getbranchname}
            onChange={(e) => setbranchname(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-white/20 border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
          >
            <option value="">Choose Branch</option>
            {fetchbranch.map((item, index) => (
              <option key={index} value={item.Branchname}>
                {item.Branchname}
              </option>
            ))}
          </select>
        </form>
        <div>
          {getbranchname && (
            <div
              className="ml-10 cursor-pointer text-white hover:text-red-600 mt-2"
              onClick={handleClearBranch}
            >
              Clear Selection
            </div>
          )}
        </div>
      </div>

      {/* Stat cards */}
      <div className="flex flex-wrap cursor-default justify-center gap-8 mt-12 px-6">
        {statCards.map(({ label, key }, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/10 backdrop-blur-xl border-white/20 shadow-md p-4 w-60 text-center transition-all duration-300 hover:bg-white/15"
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
                <Loader />
              </div>
            ) : (
              <h1 className="text-4xl font-extrabold my-4 tracking-tight">
                {stats[key]?.length || 0}
              </h1>
            )}

            <h2 className="capitalize text-sm font-medium text-gray-200">
              {label}
            </h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="flex flex-col ml-10 mb-10 lg:flex-row justify-center items-start gap-5 mt-16 px-10">
        {/* Area chart */}
        <div className="flex flex-col border-white/20 shadow-md rounded-2xl bg-white/10 backdrop-blur-xl p-6 w-[850px]">
          <h1 className="text-xl font-semibold mb-4">
            Defer & Enrolled Students (Country Wise)
          </h1>
          <Enrolldefer branchName={getbranchname} />
        </div>

        {/* Pie chart */}
        <div className="border-white/20 shadow-md rounded-2xl bg-white/10 backdrop-blur-xl p-6 w-[380px] h-[390px]">
          <h1 className="text-xl font-semibold text-center mb-4">
            Country Wise Leads
          </h1>
          <CustomPieChart branchName={getbranchname} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;