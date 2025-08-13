'use client'
import { History, Mail, MessageCircle, Pen, Upload, UserPlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import Visapic from "./visapic";
import axios from "axios";
import { toast } from "react-toastify";
import useUserStore from "@/app/store/userid";

import { CldUploadWidget } from "next-cloudinary";


const Visa = () => {
  const [getdata,setdata]=useState([])
  const { userId, initializeUser } = useUserStore();
const [getid,setid]=useState()
const [getstatus,setstatus]=useState()
const [getreason,setreason]=useState()

const getvisa= async()=>{
  try {
    const res = await axios.post('/api/admin/getvisa',{
      AdminId:userId
    })
    setdata(res.data)
  } catch (error) {
    console.log(error)
    toast.error("Error fetching visa application")
  }
}
 useEffect(()=>{
    initializeUser()
    if(userId){
  getvisa()
    }
  
  },[userId])

 const updatevisastatus = async (id) => {
  // Check if required fields are missing
if ((getstatus === "Rejected" || getstatus === "Approved") && (!getreason || !picImage || !getstatus)) {
  alert("Please provide both the reason, visa status and the document before updating.");
  return;
}

  try {
    await axios.put('/api/admin/editvisa', {
      id: id,
      Visastatus: getstatus,
      Doc: picImage,
      Deferreason: getreason
    });

    getvisa();
    setid();
    toast.success("Visa status updated successfully");
  } catch (error) {
    toast.error("Error updating visa status");
  }
};

const movetoenroll=async(id)=>{
  if (getstatus === "Rejected" && !getreason || !picImage || !getstatus) {
    alert("Please provide both the reason, visa status and the document before updating .");
    return;
  }
  try {
    await axios.post("/api/admin/movetoenroll",{
      id:id
    })
    toast.success("Move to enroll student")
  } catch (error) {
    toast.error("Error moving to enroll student")
  }
}
const movetodefer=async(id)=>{
  if (getstatus === "Rejected" && !getreason || !picImage || !getstatus) {
    alert("Please provide both the reason, visa status and the document before updating .");
    return;
  }
  try {
    await axios.post("/api/admin/movetodefer",{
      id:id
    })
    toast.success("Move to defer student")
  } catch (error) {
    toast.error("Error moving to defer student")
  }
}
    const [picImage, setImage] = useState();
  
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
        <div className="flex w-auto p-3 h-11 mr-[385px]  border  rounded-lg gap-5 items-center justify-center bg-white shadow-sm flex-row">
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
        <form class="w-96">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Student"
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="w-[1100px] border rounded ml-56 mb-10 mt-3 overflow-x-auto">
        <div class="relative w-full ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Create Date / Last Update
                </th>

                <th scope="col" class="px-6 py-3">
                  <div className="w-48">Name</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-42">Email</div>
                </th>
                <th scope="col" class="px-6 py-3 ">
                  <div className="w-42">Mobile</div>
                </th>
                <th scope="col" class="px-6 py-3">
<div className={`${getstatus=="Rejected"||"Approved"?"w-20":"w-52"}`}>Visa Status</div>                </th>
               
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Applied Country</div>
                </th>
              
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Assigned To</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Assigned By</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Intake
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className=" w-32">Apply Level</div>
                </th>
                
                <th scope="col" class="px-6 py-3">
                  Branch
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {getdata.map((item)=>
                item.id==getid? <tr key={item.id} class="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                <th key={item.id}
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                                   {new Date(item.createdAt).toLocaleString()} / {new Date(item.updatedAt).toLocaleString()}

               
                </th>

                <td key={item.id} class="px-6 py-4">
                  {" "}
                  <div className="flex flex-row gap-2 ">
                    <div className="mt-3">{item.Name}</div>
                    <div className="flex flex-row  bg-lamaPurple cursor-pointer h-auto  p-2 text-black rounded-lg  gap-1 ">
                      History <History />
                    </div>
                  </div>
                </td>
                <td key={item.id} class="px-6 py-4">
                  <div className="w-36">{item.Email}</div>
                </td>
                <td key={item.id} class="px-6 py-4 ">
                 <div className="ml-5"> {item.Mobilenumber}</div>
                  </td>
                <td key={item.id} class="px-6 py-4">
                  <div className="flex flex-row gap-5">
                  {" "}
                  <form className={`${getstatus=="Rejected"||"Approved"?"w-52":"w-32"}`}>
                    <select
                    onChange={(e)=>setstatus(e.target.value)}
                      id="countries"
                      class="bg-gray-50 border border-purple-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose status</option>
                      <option value="Applied">Applied</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Not Applied">Not Applied</option>
                    </select>
                  </form>
                  {getstatus=="Rejected"? <input
                onChange={(e)=>setreason(e.target.value)}
                  className="w-36 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter Reason"
                  type="text"
                />:""}
                 {(getstatus === "Rejected" || getstatus === "Approved") ?
                  <CldUploadWidget
                              uploadPreset="fm_upload"
                              onSuccess={handleUploadSuccess}
                                options={{
      resourceType: "auto", // allows image, video, raw (PDF falls under 'raw')
      clientAllowedFormats: ["image", "pdf"], // allow both images and PDFs
      maxFileSize: 10485760, // Optional: 10MB max size
    }}
                            >
                              {({ open }) => (
                                <button
                                  onClick={() => open()}
                                  className="flex w-40  gap-2 items-center justify-center text-white bg-green-600 hover:bg-gray-900 font-small rounded-sm text-sm h-10 "
                                >
                                  <Upload />
                                  Upload Doc
                                </button>
                              )}
                            </CldUploadWidget>:" "}
                </div>
                </td>
                
                

                <td key={item.id}  class="px-6 py-4">{item.Country}</td>
                <td key={item.id} class="px-6 py-4">None</td>
                <td key={item.id} class="px-6 py-4">None</td>
                <td key={item.id} class="px-6 py-4"><div className="w-20">{item.Intake}</div></td>
                <td key={item.id} class="px-6 py-4">{item.Applylevel}</td>
                <td key={item.id} class="px-6 py-4">{item.Branch}</td>
             
                <td key={item.id} onClick={()=>{updatevisastatus(item.id);  if (getstatus === "Approved") {
       movetoenroll(item.id);
    } else if (getstatus === "Rejected") {
       movetodefer(item.id);
    }}} class="px-6 py-4 text-blue-700 cursor-pointer">
               Update
                </td>
 <td class="px-6 py-4 cursor-pointer text-red-600" onClick={()=>setid()}>
Cancel
                </td>
                
              </tr>
              :
               <tr key={item.id} class="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                <th key={item.id}
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                                   {new Date(item.createdAt).toLocaleString()} / {new Date(item.updatedAt).toLocaleString()}

               
                </th>

                <td  key={item.id}class="px-6 py-4">
                  {" "}
                  <div className="flex flex-row gap-2 ">
                    <div className="mt-3">{item.Name}</div>
                    <div className="flex flex-row  bg-lamaPurple cursor-pointer h-auto  p-2 text-black rounded-lg  gap-1 ">
                      History <History />
                    </div>
                  </div>
                </td>
                <td key={item.id} class="px-6 py-4">
                  <div className="w-36">{item.Email}</div>
                </td>
                <td key={item.id} class="px-6 py-4 ">
                 <div className="ml-5"> {item.Mobilenumber}</div>
                  </td>
                <td key={item.id} class="px-6 py-4">
                  {item.Visastatus==""?"Pending":item.Visastatus}
                 
                </td>
                

                <td key={item.id} class="px-6 py-4">{item.Country}</td>
                <td key={item.id} class="px-6 py-4">None</td>
                <td key={item.id} class="px-6 py-4">None</td>
                <td key={item.id} class="px-6 py-4"><div className="w-20">{item.Intake}</div></td>
                <td key={item.id} class="px-6 py-4">{item.Applylevel}</td>
                <td key={item.id} class="px-6 py-4">{item.Branch}</td>
             
               

                <td key={item.id} class="px-6 py-4">
                  <Pen onClick={()=>setid(item.id)} className=" hover:text-green-700 text-red-600 cursor-pointer" />
                </td>
              </tr>
               
)}
                           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Visa;
