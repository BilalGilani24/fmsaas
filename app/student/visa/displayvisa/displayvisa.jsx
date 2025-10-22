'use client'
import Loader from "@/app/admin/loader";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Displayvisa = () => {
  const { userId, initializeUser, adminId } = useUserStore();
  const [applicationresult, setapplicationresult] = useState([]);
  const [isloading, setloading] = useState(true);

  const getvisa = async () => {
    try {
      setloading(true);
      const res = await axios.post('/api/student/visastatus', {
        userId: userId
      });
      setapplicationresult(res.data);
    } catch (error) {
      toast.error("Error fetching visa application");
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    initializeUser();
    if (userId) {
      getvisa();
    }
  }, [userId]);

  return (
    <div className="ml-96 mb-9">
      <h1 className="mt-8 text-2xl dm-sans">Your Visa Status</h1>

      <div className="relative w-[1000px] dm-sans overflow-x-scroll shadow-sm mt-5 sm:rounded-lg">
        {isloading ? (
        <div className="p-5">
            <Loader />
          </div>
        ) : (
          <table className="table-auto min-w-max text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-white/10 backdrop-blur-xl border-white/20 shadow-xl">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Mobile</th>
                <th className="px-6 py-3">Country</th>
                <th className="px-6 py-3">Branch</th>
                <th className="px-6 py-3">Intake</th>
                <th className="px-6 py-3">Level</th>
                <th className="px-6 py-3">Course</th>
                <th className="px-6 py-3 whitespace-nowrap">Visa Status</th>
                <th className="px-6 py-3 whitespace-nowrap">Defer Reason</th>
                <th className="px-6 py-3">Doc</th>
              </tr>
            </thead>
            <tbody>
              {applicationresult.map((visa, index) => (
                <tr
                  key={index}
                  className="bg-white/10 border-b hover:bg-white/15 text-white"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{visa.Name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visa.Email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visa.Mobilenumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visa.Country}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visa.Branch}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visa.Intake}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visa.Applylevel}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visa.Course}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visa.Visastatus}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visa.Deferreason || "---"}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {visa.Doc ? (
                      <a
                        href={visa.Doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View Doc
                      </a>
                    ) : (
                      "---"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Displayvisa;
