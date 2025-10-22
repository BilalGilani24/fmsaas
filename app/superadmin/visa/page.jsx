'use client'
import { History, Mail, MessageCircle, Pen, Upload, UserPlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import Visapic from "./visapic";
import axios from "axios";
import { toast } from "react-toastify";
import useUserStore from "@/app/store/userid";
import { CldUploadWidget } from "next-cloudinary";
import Loader from "../loader";

const Visa = () => {
  const [getdata, setdata] = useState([]);
  const { userId, initializeUser } = useUserStore();
  const [getid, setid] = useState();
  const [getstatus, setstatus] = useState();
  const [getreason, setreason] = useState();
  const [picImage, setImage] = useState();
  const [searchQuery, setSearchQuery] = useState("");
const [isloading,setloading]=useState(false)
  const getvisa = async () => {
    try {
      setloading(false)
      const res = await axios.post("/api/admin/getvisa", {
        AdminId: userId,
      });
      setdata(res.data);
      setloading(true)
    } catch (error) {
      console.log(error);
      toast.error("Error fetching visa application");
    }
  };

  useEffect(() => {
    initializeUser();
    if (userId) {
      getvisa();
    }
  }, [userId]);

  const updatevisastatus = async (id) => {
    if (
      (getstatus === "Rejected" || getstatus === "Approved") &&
      (!getreason || !picImage || !getstatus)
    ) {
      alert("Please provide both the reason, visa status and the document before updating.");
      return;
    }

    try {
      await axios.put("/api/admin/editvisa", {
        id: id,
        Visastatus: getstatus,
        Doc: picImage,
        Deferreason: getreason,
      });

      getvisa();
      setid();
      toast.success("Visa status updated successfully");
    } catch (error) {
      toast.error("Error updating visa status");
    }
  };

  const movetoenroll = async (id) => {
    if (getstatus === "Approved" && !getreason || !picImage || !getstatus) {
      alert("Please provide both the reason, visa status and the document before updating .");
      return;
    }
    try {
      await axios.post("/api/admin/movetoenroll", {
        id: id,
      });
      toast.success("Move to enroll student");
    } catch (error) {
      toast.error("Error moving to enroll student");
    }
  };

  const movetodefer = async (id) => {
    if (getstatus === "Rejected" && !getreason || !picImage || !getstatus) {
      alert("Please provide both the reason, visa status and the document before updating .");
      return;
    }
    try {
      await axios.post("/api/admin/movetodefer", {
        id: id,
      });
      toast.success("Move to defer student");
    } catch (error) {
      toast.error("Error moving to defer student");
    }
  };

  const handleUploadSuccess = (result) => {
    const imageUrl = result.info.secure_url;
    setImage(imageUrl);
  };

  return (
    <div className="flex flex-col dm-sans">
      <div>
        <Visapic />
      </div>
      <div className="flex flex-row justify-end mt-10">
        <div className="flex w-auto p-3 h-11 mr-[385px]  rounded-lg gap-5 items-center justify-center bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl  flex-row">
          <div className="flex text-sm flex-row cursor-pointer hover:text-blue-600 gap-2">
            Send Mail
            <span>
              <Mail className="text-blue-500" size={20} />
            </span>
          </div>
          <div className="flex text-sm flex-row cursor-pointer hover:text-blue-600 gap-2">
            Send Whatsapp Message
            <MessageCircle className="text-blue-500" size={20} />
          </div>
        </div>

        {/* Search Box */}
        <form className="w-96" onSubmit={(e) => e.preventDefault()}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full p-2.5 ps-10 text-sm  placeholder-white border-gray-300 rounded-lg bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Student"
            />
            <button
              type="submit"
              className="text-white absolute end-2 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Table */}
      <div className="w-[1100px] rounded ml-56 mb-10 mt-3 overflow-x-auto">
        <div className="relative w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white w-auto  uppercase bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl ">
              <tr>
                <th scope="col" className="px-6 py-3">Create Date / Last Update</th>
                <th scope="col" className="px-6 py-3"><div className="w-48">Name</div></th>
                <th scope="col" className="px-6 py-3"><div className="w-42">Email</div></th>
                <th scope="col" className="px-6 py-3"><div className="w-42">Mobile</div></th>
                <th scope="col" className="px-6 py-3">
                  <div className={`${getstatus=="Rejected"||"Approved"?"w-20":"w-52"}`}>Visa Status</div>
                </th>
                <th scope="col" className="px-6 py-3"><div className="w-32">Applied Country</div></th>
                <th scope="col" className="px-6 py-3"><div className="w-32">Assigned To</div></th>
                <th scope="col" className="px-6 py-3"><div className="w-32">Assigned By</div></th>
                <th scope="col" className="px-6 py-3">Intake</th>
                <th scope="col" className="px-6 py-3"><div className="w-32">Apply Level</div></th>
                <th scope="col" className="px-6 py-3">Branch</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            {!isloading?(<div className="p-5">  <Loader/></div>):(
            <tbody>
              {getdata
                .filter((item) =>
                  item.Name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.Email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.Mobilenumber?.toString().includes(searchQuery)
                )
                .map((item) =>
                  item.id == getid ? ( 
                    <tr key={item.id} className="bg-white/10 backdrop-blur-xl text-white hover:bg-white/15 border-white/20 shadow-xl">
                      {/* Editable Row */}
                      <th className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                        {new Date(item.createdAt).toLocaleString()} / {new Date(item.updatedAt).toLocaleString()}
                      </th>
                      <td className="px-6 py-4">
                        <div className="flex flex-row gap-2 ">
                          <div className="mt-3">{item.Name}</div>
                         
                        </div>
                      </td>
                      <td className="px-6 py-4"><div className="w-36">{item.Email}</div></td>
                      <td className="px-6 py-4"><div className="ml-5">{item.Mobilenumber}</div></td>
                      <td className="px-6 py-4">
                        <div className="flex flex-row gap-5">
                          <form className={`${getstatus=="Rejected"||"Approved"?"w-52":"w-32"}`}>
                            <select
                              onChange={(e) => setstatus(e.target.value)}
                              id="countries"
                              className="bg-gray-50 border border-purple-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            >
                              <option selected>Choose status</option>
                              <option value="Applied">Applied</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                              <option value="Not Applied">Not Applied</option>
                            </select>
                          </form>
                          {getstatus == "Rejected" ? (
                            <input
                              onChange={(e) => setreason(e.target.value)}
                              className="w-36 rounded-sm text-black focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                              placeholder="Enter Reason"
                              type="text"
                            />
                          ) : (
                            ""
                          )}
                          {(getstatus === "Rejected" || getstatus === "Approved") ? (
                            <CldUploadWidget
                              uploadPreset="fm_upload"
                              onSuccess={handleUploadSuccess}
                              options={{
                                resourceType: "auto",
                                clientAllowedFormats: ["image", "pdf"],
                                maxFileSize: 10485760,
                              }}
                            >
                              {({ open }) => (
                                <button
                                  onClick={() => open()}
                                  className="flex w-40 gap-2 items-center justify-center text-white bg-green-600 hover:bg-gray-900 rounded-sm text-sm h-10"
                                >
                                  <Upload />
                                  Upload Doc
                                </button>
                              )}
                            </CldUploadWidget>
                          ) : (
                            " "
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">{item.Country}</td>
                      <td className="px-6 py-4">None</td>
                      <td className="px-6 py-4">None</td>
                      <td className="px-6 py-4"><div className="w-20">{item.Intake}</div></td>
                      <td className="px-6 py-4">{item.Applylevel}</td>
                      <td className="px-6 py-4">{item.Branch}</td>
                  <td
  onClick={async () => {
    try {
      // First, wait for visa status update to complete
      await updatevisastatus(item.id);

      // Then move to enroll or defer based on status
      if (getstatus === "Approved") {
        await movetoenroll(item.id);
      } else if (getstatus === "Rejected") {
        await movetodefer(item.id);
      }
    } catch (error) {
      console.error("Error in update sequence:", error);
      toast.error("Error processing visa update sequence");
    }
  }}
  className="px-6 py-4 text-blue-400 cursor-pointer"
>
  Update
</td>

                      <td className="px-6 py-4 cursor-pointer text-red-500" onClick={() => setid()}>
                        Cancel
                      </td>
                    </tr>
                  ) : (
                    <tr key={item.id} className="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl text-white">
                      {/* Normal Row */}
                      <th className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                        {new Date(item.createdAt).toLocaleString()} / {new Date(item.updatedAt).toLocaleString()}
                      </th>
                      <td className="px-6 py-4">
                        <div className="flex flex-row gap-2 ">
                          <div className="mt-3">{item.Name}</div>
                        
                        </div>
                      </td>
                      <td className="px-6 py-4"><div className="w-36">{item.Email}</div></td>
                      <td className="px-6 py-4"><div className="ml-5">{item.Mobilenumber}</div></td>
                      <td className="px-6 py-4">{item.Visastatus===""?"Pending":item.Visastatus}</td>
                      <td className="px-6 py-4">{item.Country}</td>
                      <td className="px-6 py-4">None</td>
                      <td className="px-6 py-4">None</td>
                      <td className="px-6 py-4"><div className="w-20">{item.Intake}</div></td>
                      <td className="px-6 py-4">{item.Applylevel}</td>
                      <td className="px-6 py-4">{item.Branch}</td>
                      <td className="px-6 py-4">
                        <Pen onClick={() => setid(item.id)} className="hover:text-green-700 text-red-600 cursor-pointer" />
                      </td>
                    </tr>
                  )
                )}
            </tbody>)}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Visa;
