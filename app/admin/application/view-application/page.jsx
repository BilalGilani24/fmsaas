"use client";
import React, { useEffect, useState } from "react";
import { History, Mail, MessageCircle, Pen, UserPlus } from "lucide-react";
import Applicationpic from "../applicationpic";
import Applicationmodal from "../view-application-modal/applicationmodal";
import Addapplicationmodal from "../add-application-modal/addapplicationmodal";
import axios from "axios";
import useUserStore from "@/app/store/userid";
import { toast } from "react-toastify";

const Viewapplication = () => {
  const [Viewapplicationmodal, setviewapplicationmodal] = useState(false);
  const [createapplicationmodal, setcreateapplicationmodal] = useState(false);
  const [data,setdata]=useState([])
  const { userId, initializeUser, fetchBranchConsulars } = useUserStore();
  const [getapplicationid,setapplicationid]=useState()
const getapplication=async()=>{
  try {
   const res= await axios.post('/api/admin/getapplications',{
      AdminId:userId
    })
    setdata(res.data)
  } catch (error) {
    console.log(error)
  }
}

  useEffect(()=>{
    initializeUser()
    if(userId){
  getapplication()
    }
  getuser()
  },[userId])
 const movetovisa = async (id) => {
   try {
     
     await axios.post("/api/admin/movetovisa",{
       id:id
     });
     await axios.put("/api/admin/movetovisa", {
       id: id
     });
     toast.success("Application moved to visa successfully");
   
   } catch (error) {
     console.log(error);
     toast.error("Error moving to visa");
   }
 };
  const [isOpen, setIsOpen] = useState(false);
   const [selectedUser, setSelectedUser] = useState(null);
   const [getstudentid,setstudentid]=useState()
 
   const handleSelect = (user) => {
     setSelectedUser(user);
     
   };
 
   
 const [getuserdata,setuserdata]=useState([])
   const getuser= async()=>{
 try {
   const res = await axios.get("/api/getusers")
   setuserdata(res.data)
 } catch (error) {
   toast.error("Error fetching consulars")
 }
   }
 
 const assigncase= async()=>{
   try {
     await axios.put("/api/admin/assigncase",{
       userId:getstudentid,
       AdminId:selectedUser.id,
       StudentId:getstudentid
     })
     toast.success("Case assigned successfully")
     setIsOpen(false)
   } catch (error) {
     toast.error("Error assingning case")
   }
 }
 const [isSubmitted,setSubmitted]=useState([])
  const docsubmission=async(id)=>{
   try {
     const res=await axios.post('/api/admin/document',{
       StudentId:id
     })
     setSubmitted(res.data)
   } catch (error) {
     toast.error("Error displaying document submission")
   }
  }
 
  useEffect(() => {
   if (data.length > 0) {
     // Extract all unique userIds from the data
     const ids = data.map(item => item.userId);
     docsubmission(ids);
   }
 }, [data]);
 
  return (
    <div className="flex flex-col dm-sans">
      {Viewapplicationmodal && (
        <Applicationmodal setviewapplicationmodal={setviewapplicationmodal} applicationID={getapplicationid} />
      )}
      {createapplicationmodal && (
        <Addapplicationmodal
          setcreateapplicationmodal={setcreateapplicationmodal} applicationID={getapplicationid}
        />
      )}
      <div>
        <Applicationpic />
      </div>
          <div>
      {/* Button to open modal */}
    

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <h1 className="text-xl font-semibold mb-4">Assign Case</h1>

            <div className="space-y-3 max-h-64 overflow-y-auto">
              {getuserdata.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${
                    selectedUser?.id === user.id
                      ? "border-blue-500 bg-blue-50"
                      : ""
                  }`}
                  onClick={() => handleSelect(user)}
                >
                  <div>
                    <p className="font-medium">{user.Name} ({user.BranchName})</p>
                    <p className="text-gray-500 text-sm">{user.Email}</p>
                  </div>
                  <input
                    type="radio"
                    name="selectedUser"
                    checked={selectedUser?.id === user.id}
                    readOnly
                    className="accent-blue-500 w-5 h-5"
                  />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={()=>assigncase()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
      <div className="flex flex-row justify-end mt-10">
        <div className="flex w-auto p-3 h-11 mr-[388px] border  rounded-lg gap-5 items-center justify-center bg-white shadow-sm flex-row">
          
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
              placeholder="Search Student/Application"
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

      <div
        className="w-[1100px] border rounded ml-56 mb-10
       mt-3 overflow-x-auto"
      >
        <div class="relative w-full ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs border  text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Create Date / Last Update
                </th>

                <th scope="col" class="px-6 py-3">
                  <div className="w-80">Name</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Mobile
                </th>
                <th scope="col" class="px-6 py-3">
                  Application
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-24">Docs Status</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-40">Intrested Country</div>
                </th>
                <th scope="col" class="px-6 py-3 ">
                  <div className="w-32">Language Test</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Assigned By</div>{" "}
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Assigned to</div>{" "}
                </th>
                <th scope="col" class="px-6 py-3">
                    <div className="w-28">Intake</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className=" w-28">Apply Level</div>
                </th>

                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Intrested Course</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Branch
                </th>
            
              </tr>
            </thead>
            <tbody>
              {data.map((item)=> <div key={item.id}><tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                                    {new Date(item.createdAt).toLocaleString()} / {new Date(item.updatedAt).toLocaleString()}

                   <button  disabled={item.Movetovisa === false}
 onClick={()=> movetovisa(item.id)}  className=" h-10 w-auto px-2 bg-lamaYellow rounded-lg ml-2 hover:bg-lamaPurple cursor-pointer">
   {item.Movetovisa==false?"Moved to visa":"Move to visa"}  
                      </button>
                                         <button
        onClick={() => {setIsOpen(true);setstudentid(item.userId)}}
        className="bg-blue-600 text-white px-4 ml-3 py-2 rounded-lg hover:bg-blue-700"
      >
     Assign Case
      </button>
                </th>

                <td class="px-6 py-4">
                  {" "}
                  <div className="flex flex-row gap-2 ">
                    <div className="mt-3">{item.FirstName} {item.LastName}</div>
                    <div className="flex flex-row  bg-lamaPurple cursor-pointer h-auto  p-2 text-black rounded-lg  gap-1 ">
                      History <History />
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">{item.Emailaddress}</td>
                <td class="px-6 py-4">{item.Mobilenumber}</td>
                <td class="px-4 py-2  ">
                  <div className="flex mt-[-20px] flex-row gap-2">
                    <div
                      onClick={() =>{
                        setviewapplicationmodal(!Viewapplicationmodal);
                        setapplicationid(item.id);}
                      }
                      className="px-8 py-2 h-9 w-48 text-black  rounded-lg  mt-4  bg-lamaPurple cursor-pointer"
                    >
                      View Applications
                    </div>
                    <div
                   onClick={() => {
  setcreateapplicationmodal(!createapplicationmodal);
  setapplicationid(item.id);
}}
                      className="px-4 py-2 h-9 w-40  text-black  rounded-lg  mt-4  bg-lamaSky cursor-pointer"
                    >
                      + Add Applications
                    </div>
                  </div>
                </td>
                 <td>
  {(() => {
    const match = isSubmitted.find(
      sub => sub.StudentId === item.userId // compare IDs
    );

    if (!match) {
      return (
        <div className="px-6 py-2 text-black rounded-lg bg-gray-300">
          No Data
        </div>
      );
    }

    return match.result ? (
      <div className="px-4 w-40 text-center py-2 text-black rounded-lg bg-green-400">
        Submitted
      </div>
    ) : (
      <div className="px-4 py-2 text-center  w-40 text-black rounded-lg bg-red-400">
        Not Submitted
      </div>
    );
  })()}
</td>

                <td class="px-6 py-4">{item.Intrestedcountry}</td>
                <td class="px-6 py-4">{item.Test}</td>
                <td class="px-6 py-4">None</td>
                <td class="px-6 py-4">None</td>
                <td class="px-6 py-4">{item.Intake}</td>
                <td class="px-6 py-4">{item.Applylevel}</td>

                <td class="px-6 py-4">{item.Intrestedcourse}</td>
                <td class="px-6 py-4">{item.Branchname}</td>
               
              </tr>
              </div> 
         )}
             
        
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Viewapplication;
