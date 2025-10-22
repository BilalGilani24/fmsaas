'use client'
import React, { useEffect, useState } from "react";
import Enrollpic from "./enrollpic";
import { Eye, Mail, MessageCircle, Pen } from "lucide-react";
import { toast } from "react-toastify";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import Loader from "../../loader";

const Enrolled = () => {
  const { userId, initializeUser } = useUserStore();
  const [getdata, setdata] = useState([]);
const [getid,setid]=useState()
const [getvalue,setvalue]=useState()
const [isloading,setloading]=useState(false)
  useEffect(() => {
    initializeUser();
    if (userId) {
      getenroll();
    }
  }, [userId]);

  const getenroll = async () => {
    try {
      setloading(false)
      const res = await axios.post("/api/admin/getenroll", {
        AdminId: userId,
      });
      setdata(res.data);
      setloading(true)
    } catch (error) {
      toast.error("Error fetching the enrolled students");
    }
  };
const updatestatus=async(id)=>{
  try {
    await axios.put('/api/admin/editenroll',{
      id:id,
      isEnrolled:getvalue
    })
    toast.success("Student enroll status successfully")
    getenroll()
    setid()
  } catch (error) {
    toast.error("Error updating student enroll status")
  }
}

  return (
    <div className="flex flex-col dm-sans">
      {/* Top Banner */}
      <Enrollpic />

      {/* Action bar */}
      <div className="flex flex-row justify-between items-center mt-10 px-10">
        <div className="flex w-auto p-3 h-11 ml-48 rounded-lg gap-5 items-center bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl">
          <div className="flex text-sm cursor-pointer hover:text-blue-600 gap-2">
            Send Mail
            <Mail className="text-blue-500" size={20} />
          </div>
          <div className="flex text-sm cursor-pointer hover:text-blue-600 gap-2">
            Send Whatsapp Message
            <MessageCircle className="text-blue-500" size={20} />
          </div>
        </div>

        {/* Search */}
        <form className="w-96">
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
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
              className="block w-full p-2.5 pl-10 rounded-lg text-sm bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
"
              placeholder="Search Student"
              required
            />
            <button
              type="submit"
              className="absolute right-2 bottom-1.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Table */}
      <div className="w-[1100px] rounded ml-56 mb-10 mt-5 overflow-x-auto shadow-sm">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
">
                <tr>
      <th className="px-6 py-3 whitespace-nowrap text-left">Name</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Email</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Mobile</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Applied Country</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Course</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Intake</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Enrollment Status</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">View Approval Letter</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Visa Status</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Apply Level</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Assigned By</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Assigned To</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Branch</th>
      <th className="px-6 py-3 whitespace-nowrap text-left">Action</th>
    </tr>
          </thead>
          {!isloading?(<div className="p-5">  <Loader/></div>):(
          <tbody>
            {getdata.map((item) => (
              item.id===getid?   <tr
                key={item.id}
                className="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">{item.Name}</td>
                <td className="px-6 py-4">{item.Email}</td>
                <td className="px-6 py-4">{item.Mobilenumber}</td>
                <td className="px-6 py-4">{item.Appliedcountry}</td>
                <td className="px-6 py-4">{item.Course}</td>
                <td className="px-6 py-4">{item.Enrollintake}</td>
                               <td className="px-6 py-4 flex gap-4">
  <label className="flex items-center gap-2">
    <input
      type="radio"
      name={`enrollment-${item.id}`} // unique per row
      value="Enrolled"
      className="w-4 h-4"
       onChange={(e)=>setvalue(e.target.value)}
    />
    Enrolled
  </label>
  <label className="flex items-center w-28 gap-2">
    <input
      type="radio"
      name={`enrollment-${item.id}`} // unique per row
      value="Not enrolled"
      className="w-4 h-4"
      onChange={(e)=>setvalue(e.target.value)}
    />
    Not Enrolled
  </label>
</td>
                {/* Enrollment Checkboxes */}
              

                <td
                  className="px-6 py-4 cursor-pointer"
                  onClick={() => window.open(item.Approveletter, "_blank")}
                >
                  <Eye className="text-blue-600 hover:scale-110 transition" />
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-sm font-medium rounded-lg bg-green-500 text-white">
                    Approved
                  </span>
                </td>
                <td className="px-6 py-4">{item.Applylevel}</td>
                <td className="px-6 py-4">None</td>
                <td className="px-6 py-4">None</td>
                <td className="px-6 py-4">{item.Branch}</td>
                   <td onClick={()=>updatestatus(item.id)} className="px-6 py-4 cursor-pointer text-blue-500">Update</td>
                    <td onClick={()=>setid()} className="px-6 py-4 cursor-pointer text-red-500">Cancel</td>
                
                <td onClick={()=>setid(item.id)} className="px-6 py-4"><Pen/></td>
               
              </tr>:
              <tr
                key={item.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">{item.Name}</td>
                <td className="px-6 py-4">{item.Email}</td>
                <td className="px-6 py-4">{item.Mobilenumber}</td>
                <td className="px-6 py-4">{item.Appliedcountry}</td>
                <td className="px-6 py-4">{item.Course}</td>
                <td className="px-6 py-4">{item.Enrollintake}</td>
                
                {/* Enrollment Checkboxes */}

              <td className="px-6 py-4">{item.isEnrolled==""?"Pending":item.isEnrolled}</td>
                <td
                  className="px-6 py-4 cursor-pointer"
                  onClick={() => window.open(item.Approveletter, "_blank")}
                >
                  <Eye className="text-blue-600 hover:scale-110 transition" />
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-sm font-medium rounded-lg bg-green-500 text-white">
                    Approved
                  </span>
                </td>
                <td className="px-6 py-4">{item.Applylevel}</td>
                <td className="px-6 py-4">None</td>
                <td className="px-6 py-4">None</td>
                <td className="px-6 py-4">{item.Branch}</td>
                <td onClick={()=>setid(item.id)} className="px-6 py-4"><Pen/></td>
              </tr>
            ))}
          </tbody>)}
        </table>
      </div>
    </div>
  );
};

export default Enrolled;
