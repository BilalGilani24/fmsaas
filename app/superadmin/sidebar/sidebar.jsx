"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  CalendarDays,
  ClipboardPlus,
  ChevronDown,
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
  Receipt,
  Handshake,
  ReceiptPoundSterling,
  MapPinHouse,
  HousePlus,
  UserRound,
  LogOut,
} from "lucide-react";
import useUserStore from "@/app/store/userid";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);
  const { branchConsulars, fetchBranchConsulars, initializeUser } = useUserStore();

  useEffect(() => {
    initializeUser();
    fetchBranchConsulars();
  }, []);

  const handleSignOut = async () => {
    localStorage.clear();
    sessionStorage.clear();
    await signOut({ callbackUrl: "/" });
  };

  const toggleSection = useCallback(
    (section) => setOpenSection((prev) => (prev === section ? null : section)),
    []
  );

  const menuItems = [
    {
      title: "Dashboard",
      href: "/superadmin/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      title: "Calendar",
      href: "/superadmin/calender",
      icon: <CalendarDays />,
    },
    {
      title: "Enquiry",
      icon: <ClipboardPlus />,
      section: "enquiry",
      children: [
        { title: "Create Enquiry", href: "/superadmin/enquiry/add-enquiry", icon: <Pen /> },
        { title: "View Enquiry", href: "/superadmin/enquiry/view-enquiry", icon: <View /> },
      ],
    },
    {
      title: "Students",
      icon: <GraduationCap />,
      section: "students",
      children: [
        { title: "Create Student", href: "/superadmin/students/add-student", icon: <Pen /> },
        { title: "View Student", href: "/superadmin/students/view-student", icon: <View /> },
        { title: "Student Setting", href: "/superadmin/students/student-setting", icon: <UserCog /> },
      ],
    },
    {
      title: "Application",
      icon: <FileUser />,
      section: "application",
      children: [{ title: "View Application", href: "/superadmin/application/view-application", icon: <View /> }],
    },
    {
      title: "Visa",
      href: "/superadmin/visa",
      icon: <TicketsPlane />,
    },
    {
      title: "Defer/Enrolled",
      icon: <University />,
      section: "defer",
      children: [
        { title: "Defer", href: "/superadmin/defer-enroll/defer", icon: <Frown /> },
        { title: "Enrolled", href: "/superadmin/defer-enroll/enroll", icon: <Smile /> },
      ],
    },
    {
      title: "Invoices",
      icon: <ReceiptText />,
      section: "invoices",
      children: [
        { title: "All Invoices", href: "/superadmin/invoices", icon: <Receipt /> },
        { title: "Consultancy Invoices", href: "/superadmin/invoices/created-invoice/consultancy-invoice", icon: <Handshake /> },
        { title: "Application Invoices", href: "/superadmin/invoices/created-invoice/application-invoice", icon: <ReceiptPoundSterling /> },
      ],
    },
    {
      title: "Branches",
      icon: <MapPinHouse />,
      section: "branches",
      children: [
        { title: "Create Branch", href: "/superadmin/branch/create-branch", icon: <HousePlus /> },
        { title: "Consulars", href: "/superadmin/branch/consulars", icon: <UserCog /> },
      ],
    },
    {
      title: "Profile",
      href: "/superadmin/profile",
      icon: <UserRound />,
    },
  ];

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 z-40 w-60 h-screen bg-white/10 border-white/20 shadow-xl transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      {/* Logo */}
      <div className="flex w-full h-16 bg-red-600 justify-center items-center border-white/20">
        <Image src="/Fm.webp" width={200} height={100} alt="Logo" />
      </div>

      {/* Menu */}
      <div className="h-full flex flex-col overflow-y-auto px-3 py-4 bg-white/10 backdrop-blur-xl border-white/20 shadow-xl">
        <ul className="space-y-2 flex-grow">
          {menuItems.map((item, idx) =>
            item.children ? (
              <li key={idx}>
                <button
                  onClick={() => toggleSection(item.section)}
                  className="flex items-center justify-between w-full p-2 text-white rounded-lg hover:bg-white/20 group"
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ms-6">{item.title}</span>
                  </div>
                  <ChevronDown
                    className={`transform transition-transform ${
                      openSection === item.section ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSection === item.section && (
                  <ul className="pl-6 mt-2 space-y-1">
                    {item.children.map((subItem, i) => (
                      <li key={i}>
                        <Link
                          href={subItem.href}
                          className="flex items-center p-2 rounded-lg text-white hover:bg-white/20"
                        >
                          {subItem.icon}
                          <span className="ms-3">{subItem.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="flex items-center p-2 text-white rounded-lg hover:bg-white/20 group"
                >
                  {item.icon}
                  <span className="ms-6">{item.title}</span>
                </Link>
              </li>
            )
          )}

          {/* Logout Button */}
          <li>
            <button
              onClick={handleSignOut}
              className="flex items-center w-full p-2 text-white rounded-lg hover:bg-white/20 group"
            >
              <LogOut />
              <span className="ms-6">Logout</span>
            </button>
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
            {branchConsulars.map((item) => (
              <div key={item.id}>
                <h4 className="font-semibold text-white">{item.Name}</h4>
                <span className="text-xs text-white/60">{item.Email}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;