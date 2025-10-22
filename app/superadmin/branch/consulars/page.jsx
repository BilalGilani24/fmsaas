"use client";
import React, { useEffect, useState } from "react";
import Createconsulars from "./createconsulars/createconsulars";
import useBranchStore from "@/app/store/branchstore";
import axios from "axios";
import { toast } from "react-toastify";

const Consulars = () => {
  const { branches, fetchBranches } = useBranchStore();
  const [getdata, setdata] = useState([]);

  useEffect(() => {
    fetchBranches();
  }, [fetchBranches]);
  const fetchconsulars = async () => {
    try {
      const response = await axios.get("/api/fetchconsulars");
      setdata(response.data);
    } catch (error) {
      toast.error("Error fetching consulars accounts");
    }
  };
  useEffect(() => {
    fetchconsulars();
  }, []);
  return (
    <div>
      <div className="dm-sans">
        <div>
          <Createconsulars />
        </div>
        <div className=" ml-[940px]  mt-3">
          <form class="max-w-sm mx-auto">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Branch{" "}
              <strong className="text-blue-500">(Branch Wise Consulars)</strong>
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Choose Branch</option>
              {branches.map((item, index) => (
                <option key={index} value={item.Branchname}>
                  {item.Branchname}
                </option>
              ))}
            </select>
          </form>
        </div>
        <div class="relative w-[940px] overflow-x-scroll  rounded-md mt-5 mb-10 ml-[270px]">
          <table class="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
">
              <tr>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32"> Consular Name</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Password</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Mobile</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Branch Name</div>
                </th>

                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-2 py-3">
                  Activate / Deactivate
                </th>
              </tr>
            </thead>
            {getdata.map((item, index) => (
              <tbody key={index}>
                <tr class="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                  >
                    {item.Name}
                  </th>
                  <td class="px-6 py-4">{item.Email}</td>
                  <td class="px-6 py-4">{item.Password}</td>
                  <td class="px-6 py-4">{item.Mobile}</td>
                  <td class="px-6 py-4">{item.BranchName}</td>

                  <td class="px-6 py-4">
                    <div className="flex flex-row  justify-center items-center  gap-5">
                      <div>{item.Status ? "Active" : "Deactivated"}</div>
                      {item.Status ? (
                        <div>
                          <div class="point relative w-1.5 h-1.5 bg-green-500 rounded-full">
                            <div class="absolute inset-[-3px] w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td className="px-16 py-4">
                    <label class="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked
                        value=""
                        class="sr-only peer"
                      />
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Consulars;
