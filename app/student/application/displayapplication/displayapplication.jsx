'use client'
import Loader from "@/app/admin/loader";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import { Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Displayapplication = () => {
  const { userId, initializeUser } = useUserStore();
  const [applicationresult, setapplicationresult] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getApplication = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/student/applicationresult", {
        userId,
      });
      setapplicationresult(res.data);
    } catch (error) {
      toast.error("Error fetching application");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeUser();
    if (userId) {
      getApplication();
    }
  }, [userId]);

  return (
    <div className="ml-96 mb-9">
      <h1 className="mt-8 text-2xl lexend-deca">Your Application Status</h1>

      <div className="relative w-[1000px] lexend-deca overflow-x-scroll shadow-md mt-5 sm:rounded-lg">
        {isLoading ? (
          <div className="p-5">
            <Loader />
          </div>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl">
              <tr>
                <th className="px-6 py-3">University</th>
                <th className="px-6 py-3">Course</th>
                <th className="px-6 py-3">Intake</th>
                <th className="px-6 py-3">Level</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Offer letter</th>
              </tr>
            </thead>
            <tbody>
              {applicationresult.length > 0 ? (
                applicationresult.map((app, index) => (
                  <tr
                    key={index}
                    className="text-white border-b bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl"
                  >
                    <td className="px-6 py-4">{app.Universityname}</td>
                    <td className="px-6 py-4">{app.Course}</td>
                    <td className="px-6 py-4">{app.Intake}</td>
                    <td className="px-6 py-4">{app.Applylevel}</td>
                    <td className="px-6 py-4">
                      {app.Applicationresult || "Pending"}
                    </td>
                    <td className="px-6 py-4 flex items-center gap-2">
                      {app.Resultdoc ? (
                        <a
                          href={app.Resultdoc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline flex items-center gap-1"
                        >
                          View <Eye size={16} />
                        </a>
                      ) : (
                        "---"
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-white">
                    No applications found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Displayapplication;
