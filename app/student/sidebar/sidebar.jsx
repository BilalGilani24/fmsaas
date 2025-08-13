"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  UserRoundPen,
  Files,
  LayoutDashboard,
  FileUser,
  TicketsPlane,
  NotebookPen,
  LogOut,
  ChevronDown,
  GraduationCap,
  University,
  Briefcase,
  FileCheck,
  User,
} from "lucide-react"; // Add more icons here
import Image from "next/image";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const [isPersonalDetailOpen, setIsPersonalDetailOpen] = useState(false);
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/", redirect: false }); // Redirect to the root after sign-out
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 border-r h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex w-full h-16 bg-red-700 justify-center items-center">
          <Image src={"/Fm.webp"} width={200} height={100} />
        </div>
        <div className="h-full flex flex-col px-3 py-4 bg-white dark:bg-gray-800">
          <ul className="dm-sans space-y-2 font-medium flex-grow">
            <li>
              <Link
                href="/student/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LayoutDashboard />
                <span className="ms-6">Dashboard</span>
              </Link>
            </li>

            {/* Personal Details with Submenu */}
            <li>
              <button
                onClick={() => setIsPersonalDetailOpen(!isPersonalDetailOpen)}
                className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center">
                  <UserRoundPen />
                  <span className="ms-6">Personal Details</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform ${
                    isPersonalDetailOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Submenu with Icons */}
              {isPersonalDetailOpen && (
                <ul className="pl-10 space-y-2 mt-2">
                  {/* <li>
                    <Link
                      href="/student/student-detail/profile-details"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <User className="w-5 h-5" />
                      <span className="ms-3">Profile Details</span>
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="/student/student-detail/academic-details"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <GraduationCap className="w-5 h-5" />
                      <span className="ms-3">Academic Details</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/student/student-detail/work-details"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Briefcase className="w-5 h-5" />
                      <span className="ms-3">Work Experience</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/student/student-detail/test-details"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FileCheck className="w-5 h-5" />
                      <span className="ms-3">English Test</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/student/student-detail/suggested-university"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <University className="w-5 h-5" />
                      <span className="ms-3">Suggested University</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

         
            <li>
              <Link
                href="/student/application"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FileUser />
                <span className="flex-1 ms-6 whitespace-nowrap">
                  Application
                </span>
              </Link>
            </li>
            <li>
              <a
                href="/student/visa"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <TicketsPlane />
                <span className="flex-1 ms-6 whitespace-nowrap">Visa</span>
              </a>
            </li>
            <li>
              <Link
                href="/student/notes"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <NotebookPen />
                <span className="flex-1 ms-6 whitespace-nowrap">Notes</span>
              </Link>
            </li>
            <li
              onClick={handleSignOut}
              className="flex items-center p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <LogOut />
              <span className="flex-1 ms-6 whitespace-nowrap">Log out</span>
            </li>
          </ul>

          {/* Adjusting profile section */}
          <div className="border-t mt-5 mb-10 p-3 flex items-center">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt="Avatar"
              className="w-10 h-10 rounded-md"
            />
            <div className="ml-3">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
