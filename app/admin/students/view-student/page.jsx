'use client'
import { History, Mail, MessageCircle, Pen, UserPlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import Viewstudentpic from "./viewstudentpic";
import Link from "next/link";
import axios from "axios";
import useUserStore from "@/app/store/userid";
import { toast } from "react-toastify";

const Viewstudent = () => {
  const { userId, initializeUser, fetchBranchConsulars } = useUserStore();
  const [getdata,setdata]=useState([])
  const [getid,setid]=useState()
  const [getstatus,setstatus]=useState()
  const getstudents=async()=>{
    try {
       const res= await axios.post("/api/admin/getcreatedstudent",{
      AdminId: userId,
    })
    setdata(res.data)
    } catch (error) {
      toast.error('Error getting students')
      console.log(error)
    }
   
  }
const editcreatedstudent = async(id)=>{
  try {
    await axios.put('/api/admin/editcreeatedstudent',{
      id:id,
      Studentstatus:getstatus
    })
    toast.success("Student status updated sucessfully")
    setid('')
    getstudents()
  } catch (error) {
    toast.error("Error updating student status")
  }
}

  useEffect(()=>{
    initializeUser()
    if(userId){
  getstudents()
    }
  getuser()
  },[userId])
   const movetoapplication = async (id) => {
   try {
     
     await axios.post("/api/admin/movetoapplication",{
       id:id
     });
     await axios.put("/api/admin/movetoapplication", {
       id: id
     });
     toast.success("Student moved to application successfully");
   
   } catch (error) {
     console.log(error);
     toast.error("Error moving to students");
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
  if (getdata.length > 0) {
    // Extract all unique userIds from the data
    const ids = getdata.map(item => item.userId);
    docsubmission(ids);
  }
}, [getdata]);
  return (
    <div className="flex flex-col dm-sans">
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
      <Viewstudentpic />
      <div className="flex flex-row justify-end mt-10">
        <div className="flex w-auto p-3 h-11 mr-[390px] border  rounded-lg gap-5 items-center justify-center bg-white shadow-sm flex-row">
         
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

      <div className="w-[1100px]  border rounded mb-5 ml-56 mt-3 overflow-x-auto">
        <div class="relative w-full ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs  dm-sans text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Create Date / Last Update
                </th>

                <th scope="col" class="px-6 py-3">
                  <div className="w-72">Name</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Mobile
                </th>
                <th scope="col" class="px-6 py-3">
                  Student Status
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-20">Doc status</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Countries
                </th>
                <th scope="col" class="px-6 py-3 ">
               <div className="w-32">Language Test</div>
                </th>
                <th scope="col" class="px-6 py-3">
                 <div className="w-32">Assigned By</div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div className="w-32">Assigned To</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Intake
                </th>
                <th scope="col" class="px-6 py-3">
                  <div className="w-32">Apply Level</div>
                </th>
                <th scope="col" class="px-6 py-3">
                  Source
                </th>
                <th scope="col" class="px-6 py-3">
                  Course
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
            
              item.id==getid ? <tr key={item.id}  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                key={item.id}
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   {new Date(item.createdAt).toLocaleString()} / {new Date(item.updatedAt).toLocaleString()}

                <button  disabled={item.Movetoapplication === false}
 onClick={()=> movetoapplication(item.id)}  className=" h-10 w-auto px-2 bg-lamaYellow rounded-lg ml-2 hover:bg-lamaPurple cursor-pointer">
   {item.Movetoapplication==false?"Moved to application":"Move to application"}  
                      </button>
              
                </th>

                <td key={item.id} class="px-6 py-4">
                  {" "}
                  <div className="flex flex-row gap-2 ">
                    <Link href={"/admin/students/created-student"}>
                      <div>{item.FirstName} {item.LastName}</div>
                    </Link>
                    <div className="flex flex-row bg-lamaPurple cursor-pointer h-auto w-auto p-2 text-black rounded-lg  gap-1 ">
                      History <History />
                    </div>
                  </div>
                </td>
                <td key={item.id} class="px-6 py-4">{item.Emailaddress}</td>
                <td key={item.id} class="px-6 py-4">{item.Mobilenumber}</td>
                <td key={item.id} class="px-6 py-4">
                  {" "}
                <form className="w-32">
  <select
    onChange={(e) => setstatus(e.target.value)}
    id="countries"
    className="bg-gray-50 border-purple-600 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option value="">Choose status</option>
    <option value="ShortListing Fixed">ShortListing Fixed</option>
    <option value="Document">Document</option>
    <option value="University Shortlisting">University Shortlisting</option>
    <option value="Document Sending">Document Sending</option>
    <option value="University List Sent">University List Sent</option>
    <option value="Doc pending">Doc pending</option>
    <option value="Intrested">Intrested</option>
    <option value="Not Intrested">Not Intrested</option>
  </select>
</form>
                </td>
                <td key={item.id}>
                  <div className="px-6 py-2  text-black  rounded-lg  bg-green-400 cursor-pointer">
                    Submitted
                  </div>
                </td>

                <td key={item.id} class="px-6 py-4">{item.Intrestedcountry}</td>
                <td key={item.id} class="px-6 py-4">{item.Test}</td>
                <td key={item.id} class="px-6 py-4">None</td>
                <td key={item.id} class="px-6 py-4">None</td>
                <td key={item.id} class="px-6 py-4">{item.Intake}</td>
                <td key={item.id} class="px-6 py-4">{item.Applylevel}</td>
                <td key={item.id} class="px-6 py-4">{item.Source}</td>
                <td key={item.id} class="px-6 py-4">{item.Intrestedcourse}</td>
                <td key={item.id} class="px-6 py-4">{item.Branchname}</td>
                       <td key={item.id} className="px-6 py-4">
                      <div className="flex flex-row">
                        <button
                          type="button"
                          onClick={() => editcreatedstudent(item.id)}
                          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => setid("")}
                          className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                <td key={item.id} class="px-6 py-4">
                  <Pen  className=" hover:text-green-700 text-red-600 cursor-pointer" />
                </td>
              </tr>:
              <tr key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                key={item.id}
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                   {new Date(item.createdAt).toLocaleString()} / {new Date(item.updatedAt).toLocaleString()}

                   <button  disabled={item.Movetoapplication === false}
 onClick={()=> movetoapplication(item.id)}  className=" h-10 w-auto px-2 bg-lamaYellow rounded-lg ml-2 hover:bg-lamaPurple cursor-pointer">
   {item.Movetoapplication==false?"Moved to application":"Move to application"}  
                      </button>
                                <button
        onClick={() => {setIsOpen(true);setstudentid(item.userId)}}
        className="bg-blue-600 text-white px-4 ml-3 py-2 rounded-lg hover:bg-blue-700"
      >
     Assign Case
      </button>
                </th>

                <td key={item.id} class="px-6 py-4">
                  {" "}
                  <div className="flex flex-row gap-2 ">
                    <Link  href={"/admin/students/created-student"}>
                      <div className="mt-3">{item.FirstName} {item.LastName}</div>
                    </Link>
                    <div className="flex flex-row bg-lamaPurple cursor-pointer h-auto w-auto p-2 text-black rounded-lg  gap-1 ">
                      History <History />
                    </div>
                  </div>
                </td>
                <td key={item.id} class="px-6 py-4">{item.Emailaddress}</td>
                <td key={item.id} class="px-6 py-4">{item.Mobilenumber}</td>
                <td key={item.id} class="px-6 py-4">
                  {" "}
                  <form className="w-32">
                   {/* <select
  defaultValue={item.Studentstatus || ""}
  className="bg-gray-50 border-purple-600 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
>
  <option value="">Choose status</option>
  <option value="ShortListing Fixed">ShortListing Fixed</option>
  <option value="Document">Document</option>
  <option value="University Shortlisting">University Shortlisting</option>
  <option value="Document Sending">Document Sending</option>
  <option value="University List Sent">University List Sent</option>
  <option value="Doc pending">Doc pending</option>
  <option value="Intrested">Intrested</option>
  <option value="Not Intrested">Not Intrested</option>
</select> */}
{item.Studentstatus==""?"Pending":item.Studentstatus}
                  </form>
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

                <td key={item.id}  class="px-6 py-4">{item.Intrestedcountry}</td>
                <td key={item.id} class="px-6 py-4">{item.Test}</td>
                <td key={item.id} class="px-6 py-4">None</td>
                <td key={item.id} class="px-6 py-4">None</td>
                <td key={item.id} class="px-6 py-4"><div className="w-20">{item.Intake}</div> </td>
                <td key={item.id} class="px-6 py-4">{item.Applylevel}</td>
                <td key={item.id} class="px-6 py-4">{item.Source}</td>
                <td key={item.id} class="px-6 py-4">{item.Intrestedcourse}</td>
                <td key={item.id} class="px-6 py-4">{item.Branchname}</td>
                <td key={item.id} class="px-6 py-4">
                  <Pen onClick={()=>setid(item.id)} className=" hover:text-green-700 text-red-600 cursor-pointer" />
                </td>
              </tr>)}
             
            
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Viewstudent;
