"use client";
import useUserStore from "@/app/store/userid";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const Profilesection = () => {
  const [isExploding, setIsExploding] = useState(false);
  const { branchConsulars, fetchBranchConsulars, initializeUser } = useUserStore();

  useEffect(() => {
    initializeUser();
    fetchBranchConsulars();
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-8">
      {/* Confetti */}
      {isExploding && <Confetti recycle={false} numberOfPieces={300} />}

      {/* Profile Card */}
      <div className="relative group w-[500px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden transition-transform hover:scale-105 duration-500">
        {/* Glowing Gradient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-tr from-sky-400 via-purple-500 to-pink-500 opacity-70 blur-3xl rounded-b-full transition-all duration-700 group-hover:scale-110"></div>

        {/* Profile Image */}
        <div className="relative z-10 flex flex-col items-center pt-20">
          <div
            className="w-32 h-32 rounded-full border-4 border-white/30 overflow-hidden shadow-lg transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: "url('/Sea-2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Profile Details */}
          <div className="mt-6 text-center text-white z-10">
            {branchConsulars.map((item, index) => (
              <div key={index} className="space-y-1">
                <h2 className="text-2xl font-bold">{item.Name}</h2>
                <p className="font-semibold text-white/80">Student Consular</p>
                <p className="font-medium text-white/70">{item.BranchName} Office</p>
                <p className="font-medium text-white/70">{item.Email}</p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <button
            onClick={() => setIsExploding((prev) => !prev)}
            className="mt-6 px-6 mb-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500"
          >
            Click for a Treat 🎉
          </button>
        </div>
      </div>

      {/* Modal */}
      {isExploding && (
        <div className="fixed inset-0  flex items-center justify-center">
          <div className="relative w-[520px] bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">You Are Doing GREAT! 👏</h3>
            </div>
            <div className="p-6 text-gray-700 space-y-4">
              <p>
                Everything works out in the end. Things will get better soon.
                Better days are coming they always do. Be patient, be humble,
                and take one step at a time. Remember, you are always loved. 💖
              </p>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setIsExploding(false)}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profilesection;
