"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  CalendarDays,
  ClipboardPlus,
  Pen,
  View,
  GraduationCap,
  UserCog,
  FileUser,
  TicketsPlane,
  University,
  Frown,
  Smile,
  ReceiptText,
  Handshake,
  ReceiptPoundSterling,
  Receipt,
  ChevronDown,
  FileBadge,
} from "lucide-react";
import Image from "next/image";
import useUserStore from "@/app/store/userid";

const Sidebar = () => {
  const [isPersonalDetailOpen, setIsPersonalDetailOpen] = useState(false);
  const [isStundetDetailOpen, setIsStudentlDetailOpen] = useState(false);
  const [isApplicationDetailOpen, setIsApplicationlDetailOpen] =
    useState(false);
  const [isStundetOpen, setIsStudentOpen] = useState(false);
  const [isInvoiceOpen, setInvoiceOpen] = useState(false);
  const { branchConsulars, fetchBranchConsulars, initializeUser } = useUserStore();
  useEffect(() => {
    initializeUser();
    fetchBranchConsulars();
  }, []);
  const divider = <div className="border-b border-white/20 my-2" />;

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 z-40 w-60 h-[100vh] bg-white/10 backdrop-blur-md  border-white/20 shadow-xl transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      {/* Logo/Header */}
      <div className="flex w-full bg-red-700 h-16 justify-center items-center border-b border-white/20">
        <Image src={"/Fm.webp"} width={200} height={70} alt="picss" />
      </div>

      {/* Main Content */}
      <div className="h-full flex flex-col overflow-y-auto px-4 py-6 text-white">
        <ul className="space-y-2 flex-grow">
          {/* Dashboard */}
          <li>
            <Link
              href="/admin/dashboard"
              className="flex items-center p-2 text-white rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              <LayoutDashboard />
              <span className="ms-4">Dashboard</span>
            </Link>
            {divider}
          </li>

          {/* Calendar */}
          <li>
            <Link
              href="/admin/calender"
              className="flex items-center p-2 text-white rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              <CalendarDays />
              <span className="ms-4">Calendar</span>
            </Link>
            {divider}
          </li>

          {/* Enquiry Menu */}
        
          <li>
            <button
              onClick={() => setIsPersonalDetailOpen(!isPersonalDetailOpen)}
              className="flex items-center justify-between w-full p-2 text-white rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              <div className="flex items-center">
                <FileBadge />
                <span className="ms-4">Enquiry</span>
              </div>
              <ChevronDown
                className={`transform transition-transform ${
                  isPersonalDetailOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {divider}
            {isPersonalDetailOpen && (
              <ul className="pl-6 space-y-2 mt-2">
                <li>
                  <Link
                    href="/admin/enquiry/add-enquiry"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <Pen className="w-5 h-5" />
                    <span className="ms-3">Create Enquiry</span>
                  </Link>
                  {divider}
                </li>
                <li>
                  <Link
                    href="/admin/enquiry/view-enquiry"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <View className="w-5 h-5" />
                    <span className="ms-3">View Enquiry</span>
                  </Link>
                  {divider}
                </li>
              </ul>
            )}
          </li>

          {/* Students */}
          <li>
            <button
              onClick={() => setIsStudentlDetailOpen(!isStundetDetailOpen)}
              className="flex items-center justify-between w-full p-2 text-white rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              <div className="flex items-center ">
                <GraduationCap />
                <span className="ms-4">Students</span>
              </div>
              <ChevronDown
                className={`transform transition-transform ${
                  isStundetDetailOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {divider}
            {isStundetDetailOpen && (
              <ul className="pl-6 space-y-2 mt-2">
                <li>
                  <Link
                    href="/admin/students/add-student"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <Pen className="w-5 h-5" />
                    <span className="ms-3">Create Student</span>
                  </Link>
                  {divider}
                </li>
                <li>
                  <Link
                    href="/admin/students/view-student"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <View className="w-5 h-5" />
                    <span className="ms-3">View Student</span>
                  </Link>
                  {divider}
                </li>
                <li>
                  <Link
                    href="/admin/students/student-setting"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <UserCog className="w-5 h-5" />
                    <span className="ms-3">Student Setting</span>
                  </Link>
                  {divider}
                </li>
              </ul>
            )}
          </li>

          {/* Application */}
          <li>
            <button
              onClick={() =>
                setIsApplicationlDetailOpen(!isApplicationDetailOpen)
              }
              className="flex items-center justify-between w-full p-2 text-white rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              <div className="flex items-center">
                <FileUser />
                <span className="ms-4">Application</span>
              </div>
              <ChevronDown
                className={`transform transition-transform ${
                  isApplicationDetailOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {divider}
            {isApplicationDetailOpen && (
              <ul className="pl-6 space-y-2 mt-2">
                <li>
                  <Link
                    href="/admin/application/view-application"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <View className="w-5 h-5" />
                    <span className="ms-3">View Application</span>
                  </Link>
                  {divider}
                </li>
              </ul>
            )}
          </li>

          {/* Visa */}
          <li>
            <Link
              href="/admin/visa"
              className="flex items-center p-2 text-white rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              <TicketsPlane />
              <span className="ms-4">Visa</span>
            </Link>
            {divider}
          </li>

          {/* Defer/Enroll */}
          <li>
            <button
              onClick={() => setIsStudentOpen(!isStundetOpen)}
              className="flex items-center justify-between w-full p-2 text-white rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              <div className="flex items-center">
                <University />
                <span className="ms-4">Defer/Enrolled</span>
              </div>
              <ChevronDown
                className={`transform transition-transform ${
                  isStundetOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {divider}
            {isStundetOpen && (
              <ul className="pl-6 space-y-2 mt-2">
                <li>
                  <Link
                    href="/admin/defer-enroll/defer"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <Frown className="w-5 h-5" />
                    <span className="ms-3">Defer</span>
                  </Link>
                  {divider}
                </li>
                <li>
                  <Link
                    href="/admin/defer-enroll/enroll"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <Smile className="w-5 h-5" />
                    <span className="ms-3">Enrolled</span>
                  </Link>
                  {divider}
                </li>
              </ul>
            )}
          </li>

          {/* Invoices */}
          <li>
            <button
              onClick={() => setInvoiceOpen(!isInvoiceOpen)}
              className="flex items-center justify-between w-full p-2 text-white rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              <div className="flex items-center">
                <ReceiptText />
                <span className="ms-4">Invoices</span>
              </div>
              <ChevronDown
                className={`transform transition-transform ${
                  isInvoiceOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isInvoiceOpen && (
              <ul className="pl-6 space-y-2 mt-2">
                <li>
                  <Link
                    href="/admin/invoices"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <Receipt className="w-6 h-6" />
                    <span className="ms-3">All Invoices</span>
                  </Link>
                  {divider}
                </li>
                <li>
                  <Link
                    href="/admin/invoices/created-invoice/consultancy-invoice"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <Handshake className="w-6 h-6" />
                    <span className="ms-3">Consultancy Invoices</span>
                  </Link>
                  {divider}
                </li>
                <li>
                  <Link
                    href="/admin/invoices/created-invoice/application-invoice"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-white/10"
                  >
                    <ReceiptPoundSterling className="w-6 h-6" />
                    <span className="ms-3">Application Invoices</span>
                  </Link>
                  {divider}
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Profile Section */}
        <div className="border-t border-white/20 mb-12 pt-4 px-2 flex items-center">
          <img
            src="/cat.jpg"
            alt="Avatar"
            className="w-12 h-12 rounded-xl border border-white/20"
          />
          <div className="ml-3">
            {branchConsulars.map((item)=><div>
                <h4 className="font-semibold text-white">{item.Name}</h4>
            <span className="text-xs text-white/60">
             {item.Email}
            </span>
            </div>)}
           
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
