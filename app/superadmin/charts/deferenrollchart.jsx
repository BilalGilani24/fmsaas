"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "America",
    Enroll: 4000,
    Defer: 2400,
    amt: 2400,
  },
  {
    name: "United Kingdom",
    Enroll: 3000,
    Defer: 1398,
    amt: 2210,
  },
  {
    name: "Canada",
    Enroll: 2000,
    Defer: 9800,
    amt: 2290,
  },
  {
    name: "Malaysia",
    Enroll: 9090,
    Defer: 3908,
    amt: 2000,
  },
  {
    name: "Australia",
    Enroll: 1890,
    Defer: 4800,
    amt: 2181,
  },
];

const Enrolldefer = () => {
  const [opacity, setOpacity] = React.useState({
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

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
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
