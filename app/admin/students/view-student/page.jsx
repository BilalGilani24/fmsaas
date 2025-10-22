'use client'
import { History, Mail, MessageCircle, Pen, UserPlus } from "lucide-react";
import React, { useEffect, useState } from "react";
import Viewstudentpic from "./viewstudentpic";
import Link from "next/link";
import axios from "axios";
import useUserStore from "@/app/store/userid";
import { toast } from "react-toastify";
import Loader from "../../loader";

const Viewstudent = () => {
  const { userId, initializeUser } = useUserStore();
  const [getdata,setdata]=useState([])
  const [getid,setid]=useState()
  const [getstatus,setstatus]=useState()
  const [isloading,setloading]=useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  
  const getstudents=async()=>{
    try {
      setloading(false)
       const res= await axios.post("/api/admin/getcreatedstudent",{
      AdminId: userId,
    })
    setdata(res.data)
    setloading(true)
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

// Filter data based on search query
const filteredData = getdata.filter((item) => {
  const query = searchQuery.toLowerCase();
  return (
    item.FirstName?.toLowerCase().includes(query) ||
    item.LastName?.toLowerCase().includes(query) ||
    item.Emailaddress?.toLowerCase().includes(query) ||
    item.Mobilenumber?.toLowerCase().includes(query) ||
    item.Studentstatus?.toLowerCase().includes(query) ||
    item.Intrestedcountry?.toLowerCase().includes(query) ||
    item.Test?.toLowerCase().includes(query) ||
    item.Intake?.toLowerCase().includes(query) ||
    item.Applylevel?.toLowerCase().includes(query) ||
    item.Source?.toLowerCase().includes(query) ||
    item.Intrestedcourse?.toLowerCase().includes(query) ||
    item.Branchname?.toLowerCase().includes(query)
  );
});

const handleSearchSubmit = (e) => {
  e.preventDefault();
};

  return (
    <div className="flex flex-col dm-sans">
         <div>
      {/* Button to open modal */}
    

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl  rounded-lg  w-full max-w-lg p-6">
            <h1 className="text-xl font-semibold mb-4">Assign Case</h1>

            <div className="space-y-3 max-h-64 overflow-y-auto">
              {getuserdata.map((user) => (
                <div
                  key={user.id}
                  className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${
                    selectedUser?.id === user.id
                      ? "border-blue-500 bg-blue-700"
                      : ""
                  }`}
                  onClick={() => handleSelect(user)}
                >
                  <div>
                    <p className="font-medium">{user.Name} ({user.BranchName})</p>
                    <p className="text-white text-sm">{user.Email}</p>
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
                className="px-4 py-2 border rounded "
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
        <div className="flex w-auto p-3 h-11 mr-[390px] rounded-lg gap-5 items-center justify-center bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl flex-row">
         
          <div className="flex text-sm flex-row cursor-pointer  gap-2">
            Send Mail
            <span>
              <Mail className="text-blue-500" size={20} />
            </span>
          </div>
          <div className="flex text-sm flex-row cursor-pointer  gap-2">
            Send Whatsapp Message
            <MessageCircle className="text-blue-500" size={20} />
          </div>
        </div>
        <form onSubmit={handleSearchSubmit} className="w-96">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-white sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
          
            <input
              type="search"
              id="default-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full p-2.5 ps-2 text-sm placeholder-white text-white bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl rounded-lg"
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

      <div className="w-[1100px]  rounded mb-5 ml-56 mt-3 overflow-x-auto">
        <div className="relative w-full ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs  dm-sans text-white uppercase bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl">
              <tr>
    <th scope="col" className="px-6 py-3 whitespace-nowrap">
      <div className="w-40">Create Date / Last Update</div>
    </th>
    <th scope="col" className="px-6 py-3 whitespace-nowrap">
      <div className="w-72">Name</div>
    </th>
    <th scope="col" className="px-6 py-3 whitespace-nowrap">Email</th>
    <th scope="col" className="px-6 py-3 whitespace-nowrap">Mobile</th>
    <th scope="col" className="px-6 py-3 whitespace-nowrap">Student Status</th>
    <th scope="col" className="px-6 py-3 whitespace-nowrap">
      <div className="w-28">Doc Status</div>
    </th>
    <th scope="col" className="px-6 py-3 ">Countries</th>
    <th scope="col" className="px-6 py-3 ">
      <div className="w-32">Language Test</div>
    </th>
    <th scope="col" className="px-6 py-3 ">
      <div className="w-32">Assigned By</div>
    </th>
    <th scope="col" className="px-6 py-3 ">
      <div className="w-32">Assigned To</div>
    </th>
    <th scope="col" className="px-6 py-3 ">Intake</th>
    <th scope="col" className="px-6 py-3 ">
      <div className="w-32">Apply Level</div>
    </th>
    <th scope="col" className="px-6 py-3 ">Source</th>
    <th scope="col" className="px-6 py-3 ">Course</th>
    <th scope="col" className="px-6 py-3 ">Branch</th>
    <th scope="col" className="px-6 py-3 ">Action</th>
  </tr>
            </thead>
            {!isloading?(<div className="p-5">  <Loader/></div>):(
            <tbody>
              {filteredData.map((item)=>
            
              item.id==getid ? <tr key={item.id} className="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl">
                <th
                
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                >
                 {new Date(item?.createdAt).toLocaleString("en-PK", {
                        timeZone: "Asia/Karachi",
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}{" "}
                      /{" "}
                      {new Date(item?.updatedAt).toLocaleString("en-PK", {
                        timeZone: "Asia/Karachi",
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}

                <button  disabled={item.Movetoapplication === false}
 onClick={()=> movetoapplication(item.id)} className={`h-10 px-4 ml-2 rounded-lg transition-all duration-300 
    ${item.Movetoapplication === false 
      ? "bg-green-500/30 text-white cursor-not-allowed backdrop-blur-md border border-green-300/40 shadow-inner" 
      : "bg-green-400/30 hover:bg-green-300/40 text-white backdrop-blur-md border border-green-200/40 shadow-lg hover:shadow-green-400/50"
    }`}
>
  {item.Movetoapplication === false ? "Moved to Application" : "Move to Application"}
                      </button>
              
                </th>

                <td className="px-6 py-4">
                  {" "}
                  <div className="flex text-white flex-row gap-2 ">
                    <Link href={"/admin/students/created-student"}>
                      <div>{item.FirstName} {item.LastName}</div>
                    </Link>
                   
                  </div>
                </td>
                <td className="px-6 py-4 text-white">{item.Emailaddress}</td>
                <td className="px-6 py-4 text-white">{item.Mobilenumber}</td>
                <td className="px-6 py-4">
                  {" "}
                <form className="w-32">
  <select
    onChange={(e) => setstatus(e.target.value)}
    id="countries"
    className="bg-gray-50 border-purple-600 border text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                            <td>
  {(() => {
    const match = isSubmitted.find(
      sub => sub.StudentId === item.userId // compare IDs
    );

    if (!match) {
      return (
        <div className="px-6 py-2 text-white rounded-lg bg-gray-300">
          No Data
        </div>
      );
    }

    return match.result ? (
      <div className="px-4 w-40 text-center py-2 text-white rounded-lg bg-green-400">
        Submitted
      </div>
    ) : (
      <div className="px-4 py-2 text-center  w-40 text-white rounded-lg bg-red-400">
        Not Submitted
      </div>
    );
  })()}
</td>

                <td className="px-6 py-4 text-white">{item.Intrestedcountry}</td>
                <td className="px-6 py-4 text-white">{item.Test}</td>
                <td className="px-6 py-4 text-white">None</td>
                <td className="px-6 py-4 text-white">None</td>
                <td className="px-6 py-4 text-white">{item.Intake}</td>
                <td className="px-6 py-4 text-white">{item.Applylevel}</td>
                <td className="px-6 py-4 text-white">{item.Source}</td>
                <td className="px-6 py-4 text-white">{item.Intrestedcourse}</td>
                <td className="px-6 py-4 text-white">{item.Branchname}</td>
                       <td className="px-6 py-4">
                      <div className="flex flex-row">
                        <button
                          type="button"
                          onClick={() => editcreatedstudent(item.id)}
                          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => setid()}
                          className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
              
              </tr>
              :
              <tr key={item.id} className="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl text-white">
                <th
                
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                >
                   {new Date(item?.createdAt).toLocaleString("en-PK", {
                        timeZone: "Asia/Karachi",
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}{" "}
                      /{" "}
                      {new Date(item?.updatedAt).toLocaleString("en-PK", {
                        timeZone: "Asia/Karachi",
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}

                   <button  disabled={item.Movetoapplication === false}
 onClick={()=> movetoapplication(item.id)}  className={`h-10 px-4 ml-2 rounded-lg transition-all duration-300 
    ${item.Movetoapplication === false 
      ? "bg-green-500/30 text-white cursor-not-allowed backdrop-blur-md border border-green-300/40 shadow-inner" 
      : "bg-green-400/30 hover:bg-green-300/40 text-white backdrop-blur-md border border-green-200/40 shadow-lg hover:shadow-green-400/50"
    }`}
>
   {item.Movetoapplication==false?"Moved to application":"Move to application"}  
                      </button>
                                <button
        onClick={() => {setIsOpen(true);setstudentid(item.userId)}}
        className="bg-blue-800/30 hover:bg-blue-300/40 py-2 ml-3 p-3 rounded-md text-white backdrop-blur-md border border-blue-400/40 "
      >
     Assign Case
      </button>
                </th>

                <td className="px-6 py-4">
                  {" "}
                  <div className="flex flex-row gap-2 ">
                    <Link  href={"/admin/students/created-student"}>
                      <div className="mt-3">{item.FirstName} {item.LastName}</div>
                    </Link>
                  
                  </div>
                </td>
                <td className="px-6 py-4">{item.Emailaddress}</td>
                <td className="px-6 py-4">{item.Mobilenumber}</td>
                <td className="px-6 py-4">
                  {" "}
                  <form className="w-32">
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
        <div className="px-6 py-2 text-white rounded-lg bg-gray-300">
          No Data
        </div>
      );
    }

    return match.result ? (
      <div className="px-4 w-40 text-center py-2 text-white rounded-lg bg-green-400">
        Submitted
      </div>
    ) : (
      <div className="px-4 py-2 text-center  w-40 text-white rounded-lg bg-red-400">
        Not Submitted
      </div>
    );
  })()}
</td>

                <td className="px-6 py-4">{item.Intrestedcountry}</td>
                <td className="px-6 py-4">{item.Test}</td>
                <td className="px-6 py-4">None</td>
                <td className="px-6 py-4">None</td>
                <td className="px-6 py-4"><div className="w-20">{item.Intake}</div> </td>
                <td className="px-6 py-4">{item.Applylevel}</td>
                <td className="px-6 py-4">{item.Source}</td>
                <td className="px-6 py-4">{item.Intrestedcourse}</td>
                <td className="px-6 py-4">{item.Branchname}</td>
                <td className="px-6 py-4">
                  <Pen disabled={item.Movetoapplication === false} onClick={()=>setid(item.id)} className=" hover:text-green-700 text-red-600 cursor-pointer" />
                </td>
              </tr>)}
             
            
            
            </tbody>)}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Viewstudent;