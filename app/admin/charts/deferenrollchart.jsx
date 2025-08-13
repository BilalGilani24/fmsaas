"use client";
import useUserStore from "@/app/store/userid";
import axios from "axios";
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

const Enrolldefer = () => {
  const { userId, initializeUser } = useUserStore();

  // Defer states
  const [ukDefer, setUkDefer] = useState(0);
  const [ausDefer, setAusDefer] = useState(0);
  const [canDefer, setCanDefer] = useState(0);
  const [malaysiaDefer, setMalaysiaDefer] = useState(0);
  const [usDefer, setUsDefer] = useState(0);

  // Enroll states
  const [ukEnroll, setUkEnroll] = useState(0);
  const [ausEnroll, setAusEnroll] = useState(0);
  const [canEnroll, setCanEnroll] = useState(0);
  const [malaysiaEnroll, setMalaysiaEnroll] = useState(0);
  const [usEnroll, setUsEnroll] = useState(0);

  // Chart data
  const data = [
    {
      name: "United States",
      Enroll: usEnroll,
      Defer: usDefer,
    },
    {
      name: "United Kingdom",
      Enroll: ukEnroll,
      Defer: ukDefer,
    },
    {
      name: "Canada",
      Enroll: canEnroll,
      Defer: canDefer,
    },
    {
      name: "Malaysia",
      Enroll: malaysiaEnroll,
      Defer: malaysiaDefer,
    },
    {
      name: "Australia",
      Enroll: ausEnroll,
      Defer: ausDefer,
    },
  ];

  const [opacity, setOpacity] = useState({
    Defer: 1,
    Enroll: 1,
  });

  const handleMouseEnter = (o) => {
    const { dataKey } = o;
    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o) => {
    const { dataKey } = o;
    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  const getDeferLength = async () => {
    try {
      const res = await axios.post("/api/admin/deferlength", {
        AdminId: userId,
      });

      const data = res.data || [];

      setUkDefer(data.find((item) => item.country === "United Kingdom")?.count || 0);
      setAusDefer(data.find((item) => item.country === "Australia")?.count || 0);
      setCanDefer(data.find((item) => item.country === "Canada")?.count || 0);
      setMalaysiaDefer(data.find((item) => item.country === "Malaysia")?.count || 0);
      setUsDefer(data.find((item) => item.country === "United States")?.count || 0);
    } catch (error) {
      console.error("Error fetching defer length:", error);
      toast.error("Error getting Defer Length");
    }
  };

  const getEnrollLength = async () => {
    try {
      const res = await axios.post("/api/admin/enrollength", {
        AdminId: userId,
      });

      const data = res.data || [];

      setUkEnroll(data.find((item) => item.country === "United Kingdom")?.count || 0);
      setAusEnroll(data.find((item) => item.country === "Australia")?.count || 0);
      setCanEnroll(data.find((item) => item.country === "Canada")?.count || 0);
      setMalaysiaEnroll(data.find((item) => item.country === "Malaysia")?.count || 0);
      setUsEnroll(data.find((item) => item.country === "United States")?.count || 0);
    } catch (error) {
      console.error("Error fetching enroll length:", error);
      toast.error("Error getting Enroll Length");
    }
  };

  useEffect(() => {
    initializeUser();
    if (userId) {
      getDeferLength();
      getEnrollLength();
    }
  }, [userId]);

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
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
