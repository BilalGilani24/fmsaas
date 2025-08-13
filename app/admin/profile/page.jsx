"use client";
import useUserStore from "@/app/store/userid";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const Profilesection = () => {
  const [isExploding, setIsExploding] = useState(false);
  const { branchConsulars, fetchBranchConsulars, initializeUser } =
    useUserStore();
  useEffect(() => {
    initializeUser();
    fetchBranchConsulars();
  }, []);
  return (
    <div className="mt-10 justify-center items-center">
      <>{isExploding && <Confetti />}</>
      <div class="group border before:hover:scale-95 before:hover:w-[500px] before:hover:h-[500px] before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-[500px] before:h-52 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-red-500 before:absolute before:top-0 w-[500px] h-[500px] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div
          style={{
            width: "120px", // Set the width of the div
            height: "120px", // Set the height of the div
            backgroundImage: "url('/Sea-2.jpg')", // Replace with the image URL
            backgroundSize: "cover", // Ensure the image fits entirely inside the div
            backgroundPosition: "center", // Center the image inside the div
            // Prevent tiling of the image
          }}
          class="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"
        ></div>
        <div class="z-10  dm-sans group-hover:-translate-y-10 transition-all duration-500">
          {branchConsulars.map((item, index) => (
            <div key={index}>
              <span class="text-2xl font-semibold">{item.Name}</span>
              <p className=" font-semibold">Student Consular</p>
              <p className=" font-semibold">{item.BranchName} Office</p>
              <p className=" font-semibold">{item.Email}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsExploding((pre) => !pre)}
          class="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
        >
          Click To Get a Treat
        </button>
      </div>
      {isExploding && (
        <div className="flex justify-center items-center ">
          <div
            aria-hidden="true"
            class=" overflow-y-auto ml-[500px] dm-sans mt-52  overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-[532px] max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    You Are Doing GREAT! 👏
                  </h3>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Everything works out in the end. Things will get better very
                    soon. Better days are coming they always do. Be patient, be
                    humble, and stop trying to control everything. Just let go
                    and take one step at a time. Remember, you are always loved.
                    💖
                  </p>
                </div>

                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={() => setIsExploding((pre) => !pre)}
                    data-modal-hide="default-modal"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profilesection;
