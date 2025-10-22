'use client'
import useUserStore from "@/app/store/userid";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, History, Mail, MessageCircle, Pen, Upload, UserPlus, X } from "lucide-react";
import Invoicepic from "./invoicepic";
import { toast } from "react-toastify";
import { CldUploadWidget } from "next-cloudinary";
import {
  PDFDownloadLink,
  PDFViewer,
  Page,
  View,
  Image,
  StyleSheet,
  Document,
} from "@react-pdf/renderer";
import Loader from "../loader";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 0,
    padding: 0,
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
const Invoices = () => {
 const [viewingDocs, setViewingDocs] = useState([]);
  // ⭐ ADDED: State for the search query
  const [searchQuery, setSearchQuery] = useState("");

const PDFDocument = ({ docImages }) => (
  <Document>
    {docImages.map((img, index) => (
      <Page key={index} size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={img} style={styles.image} />
        </View>
      </Page>
    ))}
  </Document>
);

   const { userId, initializeUser, branchConsulars, fetchBranchConsulars } =useUserStore();
const [getdata,setdata]=useState([])
const [getid,setid]=useState()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const formvalues= watch()
    useEffect(() => {
      initializeUser();
      fetchBranchConsulars();
    }, [initializeUser, userId]);
       const [isloading,setloading]=useState(false)

    const getinvoices=async()=>{
      try {
        setloading(false)
        const res = await axios.post("/api/admin/getconsultancyinvoice",{
          userId:userId
        })
setdata(res.data)
setloading(true)
      } catch (error) {
        toast.error("Error fetching invoices")
      }
    }
     useEffect(() => {
      if(userId){
 getinvoices()
      }
 
    }, [userId]);
      const [picImage, setImage] = useState();
       const [picImage1, setImage1] = useState();
      const handleUploadSuccess = (result) => {
        const imageUrl = result.info.secure_url;
        setImage(imageUrl);
      };
        const handleUploadSuccess1 = (result) => {
        const imageUrl1 = result.info.secure_url;
        setImage1(imageUrl1);
      };
      const updatedinvoicedocs=async(id)=>{
        try {
          await axios.put("/api/admin/uploadinvoices",{
            id:id,
               Docs:picImage,
       Secounddocs:picImage1 
          })
          setid("")
          toast.success("Inovice upload successfully")
        } catch (error) {
          toast.error("Error uploading invoice")
        }
      }

      // ⭐ ADDED: Filter logic to apply the search
      const filteredInvoices = getdata.filter(invoice =>
        // Search by Name, Email, or Phone Number (case-insensitive)
        invoice.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.Phonenumber.includes(searchQuery)
      );

  return (
    <>
    <div className="flex flex-col dm-sans">
      <div>
        <Invoicepic />
      </div>
      <div className="flex flex-row justify-end mt-10">
        <div className="flex w-auto p-3 h-11 mr-[385px]   rounded-lg gap-5 items-center justify-center bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 flex-row">
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
        {/* ⭐ UPDATED: Added onChange handler for the search input */}
        <form className="w-96">
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
              className="block w-full p-2.5 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300"
              placeholder="Search Invoices"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            {/* ⭐ UPDATED: Added a button to clear the search */}
            {searchQuery && (
               <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-white absolute end-2 bottom-1.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                  Clear
              </button>
            )}
            {!searchQuery && (
              <button
                type="submit"
                className="text-white absolute end-2 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="w-[1100px]  rounded ml-56 mb-10 mt-3 overflow-x-auto">
        <div className="relative w-full ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs  text-white uppercase bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <div className="w-36">Reciept Creation Date</div>
                </th>

                <th scope="col" className="px-6 py-3">
                  <div className="w-80">Name</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="w-36">Email</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="w-36">Mobile</div>
                </th>

                <th scope="col" className="px-6 py-3">
                  <div className="w-36">Status</div>
                </th>
             
                <th scope="col" className="px-6 py-3">
                  <div className="w-44">Consultancy Charges</div>
                </th>

                <th scope="col" className="px-6 py-3">
                  <div className="w-36">Amount Recieved</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="w-36">Amount Due</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="w-44">View Receipt</div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="w-44">Action</div>
                </th>
              </tr>
            </thead>
            {!isloading?(<div className="p-5">  <Loader/></div>):(
            <tbody>
             
               {/* ⭐ UPDATED: Using filteredInvoices instead of getdata */}
               {filteredInvoices.map((invoice, index) => (
                invoice.id === getid ?(
    <tr
      key={index}
      className=" border-b text-white bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
      >
        {new Date(invoice.createdAt).toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </th>
      <td className="px-6 py-4">
        <div className="flex flex-row gap-2">
          <div className="mt-3 text-white">{invoice.Name}</div>
          
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="w-36 text-white">{invoice.Email}</div>
      </td>
      <td className="px-6 py-4 text-white">{invoice.Phonenumber}</td>
      <td className="px-6 py-4">
        <form className="w-32">
          <div

            className="bg-gray-50 border-lamaYellow text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
          <p>{invoice.Consultancyfee && invoice.Secoundpayment !== "" ? "Paid": "Half-Paid"}</p>
          </div>
        </form>
      </td>
      <td className="px-6 py-4 text-white">40000</td>
      <td className="px-6 py-4 text-white">   {Number(invoice.Consultancyfee) + Number(invoice.Secoundpayment)}</td>
    
      <td className="px-6 py-4 mt-10">{invoice.Consultancyfee - invoice.Secoundpayment }</td>
        <td className="px-6 py-4">
        
        <Eye  onClick={() => setViewingDocs(invoice.Docs)} className="ml-5 hover:text-blue-500 cursor-pointer" />
      </td>
           <td className="px-6 py-4">
      <CldUploadWidget
                uploadPreset="fm_upload"
                onSuccess={handleUploadSuccess}
              >
                {({ open }) => {
                  return (
                    <div className=" mt-7 ">
                      <button
                        className="flex w-42 gap-2 items-center justify-center text-white bg-green-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={() => open()}
                      >
                        <Upload />
                        Upload First Payment File
                      </button>
                    </div>
                  );
                }}
              </CldUploadWidget>
              </td>
              {invoice.Secoundpayment !== ""?              <td >
      <CldUploadWidget
                uploadPreset="fm_upload"
                onSuccess={handleUploadSuccess1}
              >
                {({ open }) => {
                  return (
                    <div className=" mt-7 ">
                      <button
                        className="flex gap-2 w-44 items-center justify-center text-white bg-green-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={() => open()}
                      >
                        <Upload />
                        Upload Secound Payment File
                      </button>
                    </div>
                  );
                }}
              </CldUploadWidget>
              </td>:""}
  
    
       <td className="px-6  py-4">
                      <div className="flex mt-5 gap-2">
                        <button
                          type="button"
                         onClick={()=>updatedinvoicedocs(invoice.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          onClick={() => setid("")}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
      <td className="px-6 py-4">
        <Pen onClick={()=>setid(invoice.id)} className="hover:text-green-700 text-red-600 cursor-pointer" />
      </td>
    
 </tr>
  ):
  <tr
      key={index}
      className="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl text-white
"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
      >
        {new Date(invoice.createdAt).toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </th>
      <td className="px-6 py-4">
        <div className="flex flex-row gap-2">
          <div className="mt-3">{invoice.Name}</div>
         
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="w-36">{invoice.Email}</div>
      </td>
      <td className="px-6 py-4">{invoice.Phonenumber}</td>
      <td className="px-6 py-4">
        <form className="w-32">
          <div

            className="text-white"
          >
          <p>{invoice.Consultancyfee && invoice.Secoundpayment !== "" ? "Paid": "Half-Paid"}</p>
          </div>
        </form>
      </td>
      <td className="px-6 py-4">40000</td>
<td className="px-6 py-4">
  {Number(invoice.Consultancyfee) + Number(invoice.Secoundpayment)}
</td>
    <td className="px-6 py-4">{invoice.Consultancyfee - invoice.Secoundpayment }</td>
 
      <td className="px-6 py-4">
        
        <Eye onClick={() =>
    setViewingDocs([invoice.Docs, invoice.Secounddocs].filter(Boolean))
  } className="ml-5 hover:text-blue-500 cursor-pointer" />
      </td>
      <td className="px-6 py-4">
        <Pen onClick={()=>setid(invoice.id)} className="hover:text-green-700 text-red-600 cursor-pointer" />
      </td>
    </tr>))}
             
            
            </tbody>)}
          </table>
        </div>
      </div>
        {viewingDocs.length > 0 && (
  <div className="mt-4 w-[1000px] ml-72 mb-4 dm-sans p-5 border shadow-md rounded-md bg-white">
    <h2 className="text-lg font-bold mb-3">Viewing Document</h2>
    <PDFViewer style={{ width: "100%", height: "500px" }}>
      <PDFDocument docImages={viewingDocs} />
    </PDFViewer>
    <button
      onClick={() => setViewingDocs([])}
      className="flex mt-5 items-center justify-center gap-2 focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      <span>Close</span>
      <X />
    </button>
  </div>
)}
    </div>
    
    </>
  );
};

export default Invoices;