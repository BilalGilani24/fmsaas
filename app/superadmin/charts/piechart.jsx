"use client";
import React, { useEffect, useState } from "react";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import { toast } from "react-toastify";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const CustomPieChart = () => {
  const { userId, initializeUser } = useUserStore();

    const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Malaysia",
    "Australia",
    "Finland",
    "Lithuania",
    "Spain",
    "Ireland",
    "France",
    "Germany",
    "Sweden",
    "Romania",
    "UAE",
  ];

  const [leads, setLeads] = useState(
    countries.reduce((acc, country) => ({ ...acc, [country]: 0 }), {})
  );
  const [isLoading, setIsLoading] = useState(false);

  const fetchLeads = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post("/api/admin/enqleads", { userId });
      const data = res.data || [];

      const counts = {};
      countries.forEach((country) => {
        counts[country] = data.find((item) => item.country === country)?.count || 0;
      });
      setLeads(counts);
    } catch (error) {
      console.error("Error fetching leads:", error);
      toast.error("Error getting leads");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initializeUser();
    if (userId) fetchLeads();
  }, [userId]);

  const chartData = countries.map((country) => ({
    name: country,
    value: leads[country] || 0,
  }));

  const hasData = chartData.some((item) => item.value > 0);

  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      {isLoading ? (
        <p className="text-gray-400 text-lg">Loading...</p>
      ) : hasData ? (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              data={chartData}
              cx="50%"
              cy="40%"
              outerRadius={90}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-400 text-lg">No data available</p>
      )}
    </div>
  );
};

export default CustomPieChart;
