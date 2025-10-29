"use client";
import {
  Mail,
  MessageCircle,
  Pen,
  Search
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Viewenqpic from "./viewenqpic";
import axios from "axios";
import { toast } from "react-toastify";
import useUserStore from "@/app/store/userid";
import { useForm } from "react-hook-form";
import Loader from "../../loader";

const Viewenquiry = () => {
  const { register, watch } = useForm();
  const formData = watch();
  const [getdetail, setdetail] = useState([]);
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, isloading] = useState(false);
  const [getid, setid] = useState();

  const { userId, initializeUser } = useUserStore();
  const [getbranchname,setbranchname]=useState()
  const Enquirydeatails = async () => {
    isloading(false);
    try {
      const res = await axios.post("/api/admin/getadminenq", {
        userId: userId,
      });
      setdetail(res.data);
      setFilteredDetails(res.data);
    } catch (error) {
      toast.error("Error Fetching Enquiries");
      console.log(error);
    } finally {
      isloading(true);
    }
  };
    const [fetchbranch, setbranch] = useState([]);
    const [branchdata,setbranchdata]=useState([])
  
   useEffect(() => {
  
    getbranches()
    initializeUser()
    if(userId){
      Enquirydeatails();
    }
  }, []);
  useEffect(()=>{
 if(getbranchname){
      fetchbranchenq()
    }
  },[getbranchname])
    const fetchbranchenq=async()=>{
      try {
        isloading(false);
        const res = await axios.post('/api/superadmin/branchenq',{
          BranchName:getbranchname
        })
setbranchdata(res.data)
      } catch (error) {
        toast.error("Error fetching branch wise  data")
        console.log(error)
      }finally {
      isloading(true);
    }
    }
const getbranches = async () => {
    try {
      const response = await axios.get("/api/Branch/Getbranch");
      setbranch(response.data);
   
    } catch (error) {
      toast.error("Error Fetching Branches");
    }
  };
 

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredDetails(getdetail);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = getdetail.filter((item) => {
        return (
          item.FirstName?.toLowerCase().includes(query) ||
          item.LastName?.toLowerCase().includes(query) ||
          item.Emailaddress?.toLowerCase().includes(query) ||
          item.Mobilenumber?.toString().includes(query) ||
          item.Intrestedcourse?.toLowerCase().includes(query) ||
          item.Intrestedcountry?.toLowerCase().includes(query) ||
          item.Enquirystatus?.toLowerCase().includes(query) ||
          item.Test?.toLowerCase().includes(query) ||
          item.Applylevel?.toLowerCase().includes(query) ||
          item.Source?.toLowerCase().includes(query) ||
          item.Branchname?.toLowerCase().includes(query) ||
          item.Appointmentremarks?.toLowerCase().includes(query)
        );
      });
      setFilteredDetails(filtered);
    }
  }, [searchQuery, getdetail]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const canceledit = () => {
    setid(null);
  };

  const Updateenquiry = async (id) => {
    try {
      const payload = { id };

      Object.keys(formData).forEach((key) => {
        if (
          formData[key] !== undefined &&
          formData[key] !== null &&
          formData[key] !== ""
        ) {
          payload[key] = formData[key];
        }
      });

      await axios.put("/api/admin/editadminenq", payload);

      toast.success("Enquiry Updated Successfully");
      Enquirydeatails();
      canceledit();
    } catch (error) {
      toast.error("Error Updating Enquiry");
      console.error(error);
    }
  };

  const movetostudents = async (id) => {
    try {
      await axios.put("/api/admin/movetostudent", {
        id: id
      });
      await axios.post("/api/admin/movetostudent",{
        id:id
      })
      toast.success("Enquiry moved to student successfully");
      toast.success("Student account created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error moving to students");
    }
  };

  return (
    <div className="flex flex-col  dm-sans"  >
      <div>
        <Viewenqpic />
      </div>
      <div className=" ml-[950px]  flex-col  mt-3">
          <form class="max-w-sm mx-auto">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Select Branch
              <strong className="text-red-500">(Branch Wise Consulars)</strong>
            </label>
            <select
              id="countries"
               onChange={(e)=>setbranchname(e.target.value)}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
            >
              <option>Choose Branch</option>
              {fetchbranch.map((item, index) => (
                <option              
 key={index} value={item.Branchname}>
                  {item.Branchname}
                </option>
              ))}
            </select>
          </form><div>{getbranchname?<div className=" cursor-pointer" onClick={()=>setbranchname('')}>Clear</div>:""}</div>  </div>
      <div className="flex flex-row justify-end mt-10">
        <div className="flex w-auto p-2 h-11 mr-[398px]  rounded-lg gap-5 items-center justify-center bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl  flex-row">
         
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
        <form className="w-96" onSubmit={handleSearchSubmit}>
          
          <div className="relative">
           
            <input
              type="search"
              id="default-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full p-2.5 ps-2 text-sm text-white placeholder-white   rounded-md  bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl"
              placeholder="Search Enquiries"
            />
            <button
              type="submit"
              className="text-white absolute end-2 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             <Search size={20}/>
            </button>
          </div>
        </form>
      </div>

      <div className="w-[1100px] h-auto min-h-60  mb-5 rounded ml-56 mt-3 overflow-x-auto" >
        <div className="relative w-full ">
          <table className="w-full  text-sm text-left rtl:text-right text-white dark:text-gray-400">
            <thead className="text-xs  bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Create Date / Last Update
                </th>

                <th scope="col" className="px-6 py-3">
                  <div className=" w-28">First Name</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className=" w-28">Last Name</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className=" w-32">Date of Birth</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className=" w-32">Course</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Countries
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className=" w-32">Enquiry Status</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className=" w-48">Language/Proficency-Test</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className=" w-32">Created By</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="w-32">Student Address</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className=" w-20">Intake</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className=" w-32">Apply level</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Source
                </th>
                <th scope="col" className="px-6 py-3">
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className=" w-20">Remarks</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            {!loading ? (
              <div className="p-5">  <Loader/></div>
          
            ) : (
              <tbody>
                {(getbranchname ? branchdata : filteredDetails).map((item, index) => (
                  <tr
                    key={index}
                    className=" bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl "
                  >
                    <th
                      scope="row"
                      key={index}
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
                      
                 <button
  disabled={item.Movetostudent === false}
  onClick={() => movetostudents(item.id)}
  className={`h-10 px-4 ml-2 rounded-lg transition-all duration-300 
    ${item.Movetostudent === false 
      ? "bg-green-500/30 text-white cursor-not-allowed backdrop-blur-md border border-green-300/40 shadow-inner" 
      : "bg-green-400/30 hover:bg-green-300/40 text-white backdrop-blur-md border border-green-200/40 shadow-lg hover:shadow-green-400/50"
    }`}
>
  {item.Movetostudent === false ? "Moved to students" : "Move to students"}
</button>

                    </th>
                    {item.id === getid ? (
                      <>
                        <td className="px-6 py-6">
                          <input
                            type="text"
                            {...register("FirstName")}
                            class="bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                            placeholder="First-Name"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <input
                            type="text"
                            {...register("LastName")}
                            class="bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                            placeholder="Last-Name"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <input
                            type="text"
                            {...register("Emailaddress")}
                            class="bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                            placeholder="Email-Address"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <input
                            type="number"
                            {...register("Mobilenumber")}
                            class="bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                            placeholder="Mobile"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <input
                            type="date"
                            {...register("DOB")}
                            class="bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                            placeholder="DOB"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <input
                            type="text"
                            {...register("Intrestedcourse")}
                            class="bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                            placeholder="Course"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <select
                            {...register("Intrestedcountry")}
                            className="bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                          >
                            <option>Select Countries</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="Malaysia">Malaysia</option>
                          </select>
                        </td>
                        <td className="px-6 py-6">
                          <select
                            {...register("Enquirystatus")}
                            className="bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                          >
                            <option>Select Enquiry Status</option>
                            <option value="Intrested">Intrested</option>
                            <option value="Not Intrested">Not Intrested</option>
                            <option value="Future Enquiry">
                              Future Enquiry
                            </option>
                            <option value="Follow Up">Follow Up</option>
                          </select>
                        </td>
                        <td className="px-6 py-6">
                          <input
                            {...register("Test")}
                            type="text"
                            id="first_name"
                            class="bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                            placeholder="Language/Proficency-Test"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          {item.FirstName} {item.LastName}
                        </td>
                        <td className="px-6 py-6">
                          <select className="bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300">
                            <option>Select Consular</option>
                            <option value="Intrested">Intrested</option>
                            <option value="Under Graduate">Bilal</option>
                            <option value="Post Graduate">Post Graduate</option>
                            <option value="Foundation course">
                              Foundation Course
                            </option>
                            <option value="Language course">
                              Language Course
                            </option>
                          </select>
                        </td>
                        <td className="px-6 py-6">
                          <input
                            {...register("Intake")}
                            type="month"
                            id="first_name"
                            class="bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                            placeholder="Intake"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <select
                            {...register("Applylevel")}
                            className="bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                          >
                            <option>Select Apply Level</option>
                            <option value="Bachelors">Bachelors</option>
                            <option value="Masters">Masters</option>
                            <option value="PHD">PHD</option>
                            <option value="Foundation Course">
                              Foundation Course
                            </option>
                          </select>
                        </td>
                        <td className="px-6 py-6">
                          <select
                            {...register("Source")}
                            className="bg-white/20 text-black border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                          >
                            <option>Select Source</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Bill Boards">Bill Boards</option>
                            <option value="Post Graduate"> Reference</option>
                          </select>
                        </td>
                        <td className="px-6 py-6">{item.Branchname}</td>
                        <td className="px-6 py-6">
                          <input
                            type="text"
                            {...register("Appointmentremarks")}
                            class="bg-white/20 text-white border border-white/30 rounded-lg p-2 pr-10 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
                            placeholder="Remarks"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex flex-row gap-2 ">
                            <button
                              onClick={() => Updateenquiry(item.id)}
                              type="button"
                              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                              Update
                            </button>

                            <button
                              onClick={() => canceledit()}
                              type="button"
                              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4">{item.FirstName}</td>
                        <td className="px-6 py-4">{item.LastName}</td>

                        <td className="px-6 py-4">{item.Emailaddress}</td>
                        <td className="px-6 py-4">{item.Mobilenumber}</td>
                        <td className="px-6 py-4">{item.DOB}</td>
                        <td className="px-6 py-4">{item.Intrestedcourse}</td>
                        <td className="px-6 py-4">{item.Intrestedcountry}</td>
                        <td className="px-6 py-4">{item.Enquirystatus==''?"Pending":item.Enquirystatus}</td>
                        <td className="px-6 py-4">{item.Test}</td>

                        <td className="px-6 py-4">{item.FirstName}</td>
                        <td className="px-6 py-4">{item.Address}</td>
                        <td className="px-6 py-4">{item.Intake}</td>
                        <td className="px-6 py-4">{item.Applylevel}</td>
                        <td className="px-6 py-4">{item.Source}</td>
                        <td className="px-6 py-4">{item.Branchname}</td>
                        <td className="px-6 py-4">{item.Appointmentremarks}</td>
                        <td
                          className="px-6 py-4"
                          onClick={() => setid(item.id)}
                        >
                          <Pen className=" hover:text-green-700 text-red-500 cursor-pointer" />
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Viewenquiry;