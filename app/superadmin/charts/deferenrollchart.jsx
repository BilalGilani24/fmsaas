"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import useUserStore from "@/app/store/userid";

const Enrolldefer = () => {
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

  const [stats, setStats] = useState({ Defer: {}, Enroll: {} });
  const [opacity, setOpacity] = useState({ Defer: 1, Enroll: 1 });

  const handleMouseEnter = ({ dataKey }) =>
    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  const handleMouseLeave = ({ dataKey }) =>
    setOpacity((op) => ({ ...op, [dataKey]: 1 }));

  const fetchStats = async (api, key) => {
    try {
      const res = await axios.post(api, { AdminId: userId });
      const data = res.data || [];
      const counts = {};
      countries.forEach(
        (country) =>
          (counts[country] =
            data.find((item) => item.country === country)?.count || 0)
      );
      setStats((prev) => ({ ...prev, [key]: counts }));
    } catch (error) {
      console.error(`Error fetching ${key} length:`, error);
      toast.error(`Error getting ${key} Length`);
    }
  };

  useEffect(() => {
    initializeUser();
    if (!userId) return;
    fetchStats("/api/admin/deferlength", "Defer");
    fetchStats("/api/admin/enrollength", "Enroll");
  }, [userId]);

  const data = countries.map((country) => ({
    name: country,
    Enroll: stats.Enroll[country] || 0,
    Defer: stats.Defer[country] || 0,
  }));

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" tick={{ fill: "#fff", fontSize: 11 }} />
          <YAxis tick={{ fill: "#fff", fontSize: 10 }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#333", border: "none", fontSize: 10 }}
            labelStyle={{ color: "#fff", fontSize: 10 }}
            itemStyle={{ color: "#fff", fontSize: 10 }}
          />
          <Legend
            wrapperStyle={{ color: "#fff", fontSize: 20 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Line
            type="monotone"
            dataKey="Defer"
            strokeOpacity={opacity.Defer}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Enroll"
            strokeOpacity={opacity.Enroll}
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Enrolldefer;
