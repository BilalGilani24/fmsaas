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
  View,
  University,
  Briefcase,
  FileCheck,
  User,
  CalendarDays,
  ClipboardPlus,
  Pen,
  GraduationCap,
  UsersRound,
  ReceiptText,
  Frown,
  Smile,
  UserCog,
  Handshake,
  ReceiptPoundSterling,
  Receipt,
  MapPinHouse,
  HousePlus,
} from "lucide-react"; // Add more icons here
import Image from "next/image";

const Sidebar = () => {
  const [isPersonalDetailOpen, setIsPersonalDetailOpen] = useState(false);
  const [isStundetDetailOpen, setIsStudentlDetailOpen] = useState(false);
  const [isApplicationDetailOpen, setIsApplicationlDetailOpen] =
    useState(false);
  const [isStundetOpen, setIsStudentOpen] = useState(false);
  const [isInvoiceOpen, setInvoiceOpen] = useState(false);
  const [isBranchopen, setIsbranchopen] = useState(false);
  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-56 border-r h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex w-full h-16 bg-red-600 justify-center items-center">
          <Image src={"/Fm.webp"} width={200} height={100} />
        </div>
        <div className="h-full flex flex-col overflow-y-auto px-3 py-4 bg-white dark:bg-gray-800">
          <ul className=" dm-sans space-y-2  flex-grow">
            <li>
              <Link
                href="/superadmin/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LayoutDashboard />
                <span className="ms-6 ">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                href="/superadmin/calender"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CalendarDays />
                <span className="flex-1 ms-6 whitespace-nowrap">Calender</span>
              </Link>
            </li>
            {/* Personal Details with Submenu */}
            <li>
              <button
                onClick={() => setIsPersonalDetailOpen(!isPersonalDetailOpen)}
                className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center">
                  <ClipboardPlus />
                  <span className="ms-6">Enquiry</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform ${
                    isPersonalDetailOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Submenu with Icons */}
              {isPersonalDetailOpen && (
                <ul className="pl-5 space-y-2 mt-2">
                  <li>
                    <Link
                      href="/superadmin/enquiry/add-enquiry"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Pen className="w-5 h-5" />
                      <span className="ms-3">Create Enquiry</span>
                    </Link>
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                  <li>
                    <Link
                      href="/superadmin/enquiry/view-enquiry"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <View className="w-5 h-5" />
                      <span className="ms-3">View Enquiry</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => setIsStudentlDetailOpen(!isStundetDetailOpen)}
                className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center">
                  <GraduationCap />
                  <span className="ms-6">Students</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform ${
                    isStundetDetailOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Submenu with Icons */}
              {isStundetDetailOpen && (
                <ul className="pl-5 space-y-2 mt-2">
                  <li>
                    <Link
                      href="/superadmin/students/add-student"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Pen className="w-5 h-5" />
                      <span className="ms-3">Create Student</span>
                    </Link>
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                  <li>
                    <Link
                      href="/superadmin/students/view-student"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <View className="w-5 h-5" />
                      <span className="ms-3">View Student</span>
                    </Link>
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                  <li>
                    <Link
                      href="/superadmin/students/student-setting"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <UserCog className="w-5 h-5" />
                      <span className="ms-3">Student Setting</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={() =>
                  setIsApplicationlDetailOpen(!isApplicationDetailOpen)
                }
                className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center">
                  <FileUser />
                  <span className="ms-6">Application</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform ${
                    isApplicationDetailOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Submenu with Icons */}
              {isApplicationDetailOpen && (
                <ul className="pl-5 space-y-2 mt-2">
                  <li>
                    <Link
                      href="/superadmin/application/view-application"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <View className="w-5 h-5" />
                      <span className="ms-3">View Application</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/superadmin/visa"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <TicketsPlane />
                <span className="flex-1 ms-6 whitespace-nowrap">Visa</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsStudentOpen(!isStundetOpen)}
                className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center">
                  <University />
                  <span className="ms-6">Defer/Enrolled</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform ${
                    isStundetOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Submenu with Icons */}
              {isStundetOpen && (
                <ul className="pl-5 space-y-2 mt-2">
                  <li>
                    <Link
                      href="/superadmin/defer-enroll/defer"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Frown className="w-5 h-5" />
                      <span className="ms-3">Defer</span>
                    </Link>
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                  <li>
                    <Link
                      href="/superadmin/defer-enroll/enroll"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Smile className="w-5 h-5" />
                      <span className="ms-3">Enrolled</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <button
              onClick={() => setInvoiceOpen(!isInvoiceOpen)}
              className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <div className="flex items-center">
                <ReceiptText />
                <span className="ms-6">Invoices</span>
              </div>
              <ChevronDown
                className={`transform transition-transform ${
                  isInvoiceOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isInvoiceOpen && (
              <ul className="pl-5 space-y-2 mt-2">
                <li>
                  <Link
                    href="/superadmin/invoices"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Receipt className="w-6 h-6" />
                    <span className="ms-3">All Invoices</span>
                  </Link>
                </li>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <li>
                  <Link
                    href="/superadmin/invoices/created-invoice/consultancy-invoice"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Handshake className="w-6 h-6" />
                    <span className="ms-3">Consultancy Invoices</span>
                  </Link>
                </li>
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <li>
                  <Link
                    href="/superadmin/invoices/created-invoice/application-invoice"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <ReceiptPoundSterling className="w-6 h-6" />
                    <span className="ms-3">Application Invoices</span>
                  </Link>
                </li>
              </ul>
            )}
            <li>
              <button
                onClick={() => setIsbranchopen(!isBranchopen)}
                className="flex items-center justify-between w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="flex items-center">
                  <MapPinHouse />
                  <span className="ms-6">Branches</span>
                </div>
                <ChevronDown
                  className={`transform transition-transform ${
                    isBranchopen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isBranchopen && (
                <ul className="pl-5 space-y-2 mt-2">
                  <li>
                    <Link
                      href="/superadmin/branch/create-branch"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <HousePlus className="w-5 h-5" />
                      <span className="ms-3">Create Branch</span>
                    </Link>
                  </li>
                  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                  <li>
                    <Link
                      href="/superadmin/branch/consulars"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <UserCog className="w-5 h-5" />
                      <span className="ms-3">Consulars</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Adjusting profile section */}
          <div className="border-t mt-2  mb-12 p-1.5 flex items-center">
            <img src="/cat.jpg" alt="Avatar" className="w-12 h-12 rounded-lg" />
            <div className="ml-2">
              <h4 className="font-semibold">Bilal</h4>
              <span className="text-xs text-gray-600">
                bilalshoaib644@gmail.com
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
