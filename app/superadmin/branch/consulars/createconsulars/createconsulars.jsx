"use client";
import useBranchStore from "@/app/store/branchstore";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Createconsulars = () => {
  const { branches, fetchBranches } = useBranchStore();
  const [getbranch, setbranch] = useState();
  const [loading, isloading] = useState();
  const [getname, setname] = useState();
  const [getemail, setemail] = useState();
  const [getpassword, setpassword] = useState();
  const [getmobile, setmobile] = useState();
  useEffect(() => {
    fetchBranches();
  }, [fetchBranches]);
  const clearinputs = () => {
    setemail("");
    setname("");
    setpassword("");
    setmobile("");
  };
  const createconsular = async () => {
    try {
      isloading(false);
      if (!getbranch || !getname || !getemail || !getpassword || !getmobile) {
        toast.error(
          "Please fill all the inputs to create the consular account 👦"
        );
      } else {
        await axios.post("/api/adminregister", {
          Name: getname,
          Email: getemail,
          BranchName: getbranch,
          Password: getpassword,
          Mobile: getmobile,
        });
        isloading(true);
        clearinputs();
        toast.success("Consular Account Created Successfully 🎉");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error creating consular account");
    }
  };

  return (
    <div class="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 p-6 ml-[270px]  rounded-lg mt-10 ">
      <div class="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
        <div class="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div class="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
            <div class="w-[100px] h-[100px] aspect-auto">
              <Image
                src={"/profile.png"}
                width={100}
                height={100}
                alt="picture"
              />
            </div>
          </div>
          <div class="flex flex-col self-stretch my-auto min-w-[240px]">
            <div class="text-base text-white">Create Consulars</div>
            <div class="mt-2 text-sm text-red-500">
              *Fill the information correctly*
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6 mb-10">
        <div id="input" class="relative">
          <form class="max-w-sm mr-12 mx-auto">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Select Branch
            </label>
            <select
              id="countries"
              onChange={(e) => setbranch(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[430px] p-2.5 bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2  transition placeholder-gray-300"
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

        <div id="input" class="relative">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            value={getname}
            onChange={(e) => setname(e.target.value)}
            id="first_name"
              class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[430px] p-2.5 bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2  transition placeholder-gray-300"
            placeholder="Fm"
            required
          />
        </div>
        <div id="input" class="relative">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Mobile Number
          </label>
          <input
            type="text"
            value={getmobile}
            onChange={(e) => setmobile(e.target.value)}
            id="first_name"
              class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[430px] p-2.5 bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2  transition placeholder-gray-300"
            placeholder="0333-3333333"
            required
          />
        </div>
        <div id="input" class="relative">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            value={getemail}
            onChange={(e) => setemail(e.target.value)}
            id="first_name"
              class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[430px] p-2.5 bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2  transition placeholder-gray-300"
            placeholder="fm@edu.com"
            required
          />
        </div>

        <div id="input" class="relative">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Create Password
          </label>
          <input
            type="text"
            value={getpassword}
            onChange={(e) => setpassword(e.target.value)}
            id="first_name"
              class="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[430px] p-2.5 bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2  transition placeholder-gray-300"
            placeholder="#123B24@"
            required
          />
        </div>
      </div>

      <div class="sm:flex sm:flex-row-reverse flex gap-4">
        <button
          onClick={() => createconsular()}
          class="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px]  bg-blue-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
          type="button"
        >
          <div class="flex gap-2 items-center">
            {!loading ? "Create Account" : "Creating..."}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Createconsulars;
