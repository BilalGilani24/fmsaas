"use client";
import { Bell, LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [display, setDisplay] = useState(false);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/", redirect: false }); // Redirect to the root after sign-out
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div
      className="flex mt-2 ml-[-20px] dm-sans bg-white gap-2 justify-end items-center w-full"
      suppressHydrationWarning={true}
    >
      <div className="dm-sans inline-flex rounded-md shadow-sm" role="group">
        <Link href={"/admin/profile"}>
          <button
            type="button"
            className="inline-flex items-center  px-4 py-3 text-sm font-medium text-blue-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </button>
        </Link>

        <button
          type="button"
          onClick={() => setDisplay((prev) => !prev)}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <Bell className="w-4 h-4 mr-2" />
          Notifications <span className="ml-2">(3)</span>
        </button>

        <button
          onClick={handleSignOut}
          type="button"
          className="inline-flex  items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>

      {display && (
        <div className="z-10 absolute shadow-md overflow-x-auto bg-white h-72 w-[450px] border mt-[350px] ml-[-300px] rounded">
          <div className="text-xl font-bold border-b p-3">Notifications</div>

          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b text-gray-600 w-auto h-auto p-3"
              >
                <div className="flex items-center">
                  <span className="mr-3">
                    <Image
                      src={"/profile.png"}
                      width={110}
                      height={110}
                      className="rounded-full"
                      alt="profile image"
                    />
                  </span>
                  <p>
                    Bilal from Islamabad branch applied visa for Hamza in Jerry
                    office
                  </p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-md mb-1">11/4/2024,12:02pm</p>
                  <button
                    type="button"
                    className="text-white w-32 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Mark as Read
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
