"use client";
import Image from "next/image";
import React from "react";
import Stackareachart from "../charts/stackareachart";
import CustomPieChart from "../charts/piechart";
import Headerpic from "./headerpic";
import { Link } from "lucide-react";
import Enrolldefer from "../charts/deferenrollchart";

const Dashboard = () => {
  return (
    <div className="flex dm-sans flex-col">
      <div className=" flex ml-52 mt-5 justify-center items-center ">
        <Headerpic />
      </div>
      <div className=" ml-[840px] mt-5">
        <form class="max-w-sm mx-auto">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Branch{" "}
            <strong className=" text-blue-500">(Branch Wise Stats)</strong>
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a Branch</option>
            <option value="US">Own Account</option>
            <option value="US">Lahore</option>
            <option value="CA">Islamabad</option>
            <option value="FR">Lahore</option>
            <option value="DE">Karachi</option>
          </select>
        </form>
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
              {index === 0 ? 14 : index === 1 ? 34 : index === 2 ? 34 : 24}
            </h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">
              {item}
            </h2>
          </div>
        ))}
      </div>

      <div className="flex mt-8 ml-44 flex-row justify-center ">
        <div className="flex flex-col ml-16 w-[700px]">
          <h1 className="text-center mb-5 text-2xl dm-sans">Summary Chart</h1>
          <div className="w-full  p-3 h-[330px] shadow-sm border rounded-lg">
            <Stackareachart />
          </div>
        </div>

        <div className="flex flex-col ml-3 mr-4  w-[360px]">
          <h1 className="text-center mb-5 text-2xl dm-sans">
            Country Wise Leads
          </h1>
          <div className="w-full  h-[330px] border shadow-sm rounded-lg">
            <CustomPieChart />
          </div>
        </div>
      </div>
      <div className=" mt-5 flex-col gap-5 flex justify-center items-center">
        <div>
          <h1 className="text-2xl">Defer & Enrolled Students (Country Wise)</h1>
        </div>
        <div className="w-5/6 ml-48 mb-5">
          <Enrolldefer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
