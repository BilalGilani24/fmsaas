"use client";
import {
  History,
  Mail,
  MessageCircle,
  Move,
  Pen,
  UserPlus,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Viewenqpic from "./viewenqpic";
import axios from "axios";
import { toast } from "react-toastify";
import useUserStore from "@/app/store/userid";
import { useForm } from "react-hook-form";

const Viewenquiry = () => {
  const { register, watch, handleSubmit } = useForm();
  const formData = watch();
  const [getdetail, setdetail] = useState([]);
  const [loading, isloading] = useState(false);
  const [getid, setid] = useState();

  const { userId, initializeUser } = useUserStore();
  const Enquirydeatails = async () => {
    isloading(false);
    try {
      const res = await axios.post("/api/admin/getadminenq", {
        userId: userId,
      });
      setdetail(res.data);
    } catch (error) {
      toast.error("Error Fetching Enquiries");
      console.log(error);
    } finally {
      isloading(true);
    }
  };
  useEffect(() => {
    initializeUser()
    if(userId){
 Enquirydeatails();
    }
   
  }, []);
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
    <div className="flex flex-col dm-sans">
      <div>
        <Viewenqpic />
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
        <form className="w-96">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
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
              className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Enquiries"
              required
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

      <div className="w-[1100px] border mb-5 rounded ml-56 mt-3 overflow-x-auto">
        <div className="relative w-full ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  <div className="w-32">Assinged To</div>
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
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <tbody>
                {getdetail.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      key={index}
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
                      
                      <button  disabled={item.Movetostudent === false}
 onClick={()=>movetostudents(item.id)}  className=" h-10 w-auto px-2 bg-lamaYellow rounded-lg ml-2 hover:bg-lamaPurple cursor-pointer">
   {item.Movetostudent==false?"Moved to students":"Move to students"}  
                      </button>
                    </th>
                    {item.id === getid ? (
                      <>
                        <td className="px-6 py-6">
                          <input
                            type="text"
                            {...register("FirstName")}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="First-Name"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <input
                            type="text"
                            {...register("LastName")}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Last-Name"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <input
                            type="text"
                            {...register("Emailaddress")}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-40  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Email-Address"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <input
                            type="number"
                            {...register("Mobilenumber")}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-40  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Mobile"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <input
                            type="date"
                            {...register("DOB")}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-40  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="DOB"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <input
                            type="text"
                            {...register("Intrestedcourse")}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-40  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Course"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <select
                            {...register("Intrestedcountry")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-28  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-28  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-40  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Language/Proficency-Test"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          {item.FirstName} {item.LastName}
                        </td>
                        <td className="px-6 py-6">
                          <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-28  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-28  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Intake"
                            required
                          />
                        </td>
                        <td className="px-6 py-6">
                          <select
                            {...register("Applylevel")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-28  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-28  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-28  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        <td className="px-6 py-4">None</td>
                        <td className="px-6 py-4">{item.Intake}</td>
                        <td className="px-6 py-4">{item.Applylevel}</td>
                        <td className="px-6 py-4">{item.Source}</td>
                        <td className="px-6 py-4">{item.Branchname}</td>
                        <td className="px-6 py-4">{item.Appointmentremarks}</td>
                        <td
                          className="px-6 py-4"
                          onClick={() => setid(item.id)}
                        >
                          <Pen className=" hover:text-green-700 text-red-600 cursor-pointer" />
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
