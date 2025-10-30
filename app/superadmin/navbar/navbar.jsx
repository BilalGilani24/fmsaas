"use client";
import { Bell, LogOut, User } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  

  // const handleSignOut = async () => {
  //   localStorage.clear();
  //   sessionStorage.clear();
  //   await signOut({ callbackUrl: "/" });
  // };

  return (
    <nav className="w-full ml-[1250px] px-8 py-4 flex items-center justify-between rounded-b-3xl">
      {/* Left Side - Logo + Title */}
    

      {/* Right Side - Actions */}
      <div className="flex items-center gap-5">
        {/* Profile */}
        {/* <Link href={"/superadmin/profile"}>
          <button className="flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium text-gray-800 bg-gradient-to-r from-gray-100 to-gray-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <User className="w-4 h-4 text-blue-600" />
            Profile
          </button>
        </Link> */}

        {/* Notifications */}
       

        {/* Logout */}
        {/* <button
          onClick={handleSignOut}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
