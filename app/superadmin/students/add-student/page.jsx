"use client";
import {
  BookOpenIcon,
  Briefcase,
  GraduationCap,
  School,
  UserPlus,
} from "lucide-react";
import React, { useState } from "react";
import Personaldetails from "./personal-details/personaldetails";
import Academicdetails from "./academic-details/academicdetails";
import Proficencytest from "./proficency-test/proficencytest";
import Workexp from "./work-exp/workexp";
import Suggesteduni from "./suggested-university/suggesteduni";
import Addstudentpic from "./addstudentpic";
import Proficencydetail from "./proficency-test/proficencydetail";

const Addstudent = () => {
  const [displayComponent, setdisplayComponent] = useState(1);

  return (
    <div className="flex flex-col">
      <div>
        <Addstudentpic />
      </div>
      <div className="flex flex-row dm-sans relative justify-center items-center ml-64 mt-5 rounded-lg border-white/20 shadow-md l bg-white/10 backdrop-blur-xl h-12 w-[1003px] p-1 gap-5">
        <div
          onClick={() => setdisplayComponent(1)}
          className={`flex flex-row ${
            displayComponent === 1 ? "text-blue-500 font-bold" : "text-white"
          } gap-2 cursor-pointer hover:text-blue-500`}
        >
          Personal Details
          <span>
            <UserPlus className="text-blue-500" />
          </span>
        </div>
        <div
          onClick={() => setdisplayComponent(2)}
          className={`flex flex-row ${
            displayComponent === 2 ? "text-blue-500 font-bold" : "text-white"
          } gap-2 cursor-pointer hover:text-blue-500`}
        >
          Academic Details
          <span>
            <GraduationCap className="text-blue-500" />
          </span>
        </div>
        <div
          onClick={() => setdisplayComponent(3)}
          className={`flex flex-row ${
            displayComponent === 3 ? "text-blue-500 font-bold" : "text-white"
          } gap-2 cursor-pointer hover:text-blue-500`}
        >
          Proficency Test
          <span>
            <BookOpenIcon className="text-blue-500" />
          </span>
        </div>
        <div
          onClick={() => setdisplayComponent(4)}
          className={`flex flex-row ${
            displayComponent === 4 ? "text-blue-500 font-bold" : "text-white"
          } gap-2 cursor-pointer hover:text-blue-500`}
        >
          Work Experience
          <span>
            <Briefcase className="text-blue-500" />
          </span>
        </div>
        <div
          onClick={() => setdisplayComponent(5)}
          className={`flex flex-row ${
            displayComponent === 5 ? "text-blue-500 font-bold" : "text-white"
          } gap-2 cursor-pointer hover:text-blue-500`}
        >
          Suggested University
          <span>
            <School className="text-blue-500" />
          </span>
        </div>
      </div>

      {displayComponent === 1 && <Personaldetails />}
      {displayComponent === 2 && <Academicdetails />}
      {displayComponent === 3 && <Proficencydetail />}
      {displayComponent === 4 && <Workexp />}
      {displayComponent === 5 && <Suggesteduni />}
    </div>
  );
};

export default Addstudent;
