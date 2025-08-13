"use client";
import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Australia", value: 400 },
  { name: "United Kingdom", value: 300 },
  { name: "United States", value: 300 },
  { name: "Canada", value: 200 },
  { name: "Malaysia", value: 278 },
  { name: "Ireland", value: 189 },
];

const CustomPieChart = () => {
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
