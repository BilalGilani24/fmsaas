"use client";
import axios from "axios";
import { Pen, PlusCircle, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Createbranch = () => {
  const [branchname, setbranchname] = useState();
  const [loading, isloading] = useState(true);
  const [fetchloading, setfetchloading] = useState(false);
  const [fetchbranch, setbranch] = useState([]);
  const [edit, setedit] = useState(true);
  const [updatedname, setupdatedname] = useState();
  const [getid, setid] = useState("");
  const CreateBranches = async () => {
    try {
      isloading(false);
      if (!branchname) {
        return toast.error("Please Enter Branch Name");
      } else {
        await axios.post("/api/Branch/Createbranch", {
          Branchname: branchname,
        });
        toast.success("Branch Created Successfully");
        setbranchname("");
        getbranches();
        isloading(true);
      }
    } catch (error) {
      toast.error("Erorr Creating Branch");
    }
  };

  const gettingid = (id) => {
    setid(id);
  };
  const getbranches = async () => {
    try {
      setfetchloading(false);
      const response = await axios.get("/api/Branch/Getbranch");
      setbranch(response.data);
      setfetchloading(true);
    } catch (error) {
      toast.error("Error Fetching Branches");
    }
  };
  const deletebranches = async (branchid) => {
    try {
      await axios.delete("/api/Branch/Deletebranch", {
        data: { id: branchid },
      });
      toast.success("Branch Delete Successfully");
      getbranches();
    } catch (error) {
      console.log(error);
      toast.error("Erorr Deleteing Branch");
    }
  };
  const editbranch = async (branchid) => {
    try {
      await axios.put("/api/Branch/Editbranch", {
        id: branchid,
        Branchname: updatedname,
      });

      toast.success("Branch Name Update Successfully");
      getbranches();
      canceledit();
    } catch (error) {
      toast.error("Error Updating Branch Name");
    }
  };
  const canceledit = () => {
    setedit(true);
    setid(null);
  };
  useEffect(() => {
    getbranches();
  }, []);
  return (
    <div>
      <div class=" mx-auto mt-10 ml-40">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <PlusCircle size={20} color="blue" />
          </div>
          <input
            value={branchname}
            onChange={(e) => setbranchname(e.target.value)}
            id="default-search"
            class="block w-[400px] p-4 ps-10 text-sm text-gray-900   rounded-lg bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
            placeholder="Islamabad,Lahore,Karachi"
          />
          <button
            type="submit"
            onClick={() => CreateBranches()}
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? "Create Branch" : "Creating Branch..."}
          </button>
        </div>
      </div>
      {fetchloading ? (
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-72 gap-y-10  mt-5 px-2 py-3  ">
          {fetchbranch.map((item, index) => (
            <div key={index} class="w-32 h-24  shadow-xl
 rounded-xl">
              <div class="absolute  flex w-auto h-24 overflow-hidden bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 
 shadow-sm max-w-96 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" height="96" width="16">
                  <path
                    stroke-linecap="round"
                    stroke-width="2"
                    stroke="indianred"
                    fill="indianred"
                    d="M 8 0 
               Q 4 4.8, 8 9.6 
               T 8 19.2 
               Q 4 24, 8 28.8 
               T 8 38.4 
               Q 4 43.2, 8 48 
               T 8 57.6 
               Q 4 62.4, 8 67.2 
               T 8 76.8 
               Q 4 81.6, 8 86.4 
               T 8 96 
               L 0 96 
               L 0 0 
               Z"
                  ></path>
                </svg>
                {item.id === getid && edit ? (
                  <div className="flex flex-row gap-2  justify-center items-center">
                    {" "}
                    <input
                      type="text"
                      value={updatedname}
                      onChange={(e) => setupdatedname(e.target.value)}
                      id="first_name"
                      class="bg-gray-50  h-10.5 mt-2  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
"
                      placeholder="isl,lhr,kr"
                      required
                    />
                    <div className="flex flex-row gap-2 mt-2">
                      <button
                        onClick={() => editbranch(item.id)}
                        className="bg-blue-700 hover:bg-green-500 rounded-lg px-4 py-2 text-white"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => canceledit()}
                        className="bg-blue-700 hover:bg-red-500 rounded-lg px-4 py-2 mr-3 text-white"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row">
                    <div class="mx-2.5 overflow-hidden w-20">
                      <p class="mt-7 absolute text-xl font-bold text-white leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
                        {item.Branchname}
                      </p>
                    </div>
                    <div className="flex flex-row ml-36">
                      <button class="w-16 cursor-pointer focus:outline-none">
                        <Pen color="brown" onClick={() => gettingid(item.id)} />
                      </button>
                      <button class="w-16 cursor-pointer focus:outline-none">
                        <Trash2
                          color="brown"
                          onClick={() => deletebranches(item.id)}
                        />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div role="status" className=" flex justify-center items-center mt-32">
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
          <span class="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Createbranch;
