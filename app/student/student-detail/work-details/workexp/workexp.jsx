'use client'

import React, { useEffect, useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';
import { useForm } from "react-hook-form";
import axios from "axios";
import useUserStore from "@/app/store/userid";
import { toast } from "react-toastify";
import { Download, Eye, Pen, Upload, X } from "lucide-react";
import {
  PDFDownloadLink,
  PDFViewer,
  Page,
  View,
  Image,
  StyleSheet,
  Document,
} from "@react-pdf/renderer";

const Workexp = () => {
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

const PDFDocument = ({ docImage }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src={docImage} style={styles.image} />
      </View>
    </Page>
  </Document>
);
    const [viewingDoc, setViewingDoc] = useState(null);

  const [getdata,setdata]=useState([])
  
  const [picImage, setImage] = useState();
  const [testid, settestid] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();
 const formDatavalue = watch();

  const { userId, initializeUser, adminId } = useUserStore();

  

  const getworkexp = async()=>{
    try {
      const res = await axios.post("/api/admin/getworkexp",{
        StudentId:userId
      })
      setdata(res.data)
    } catch (error) {
      toast.error("error fetching data")
    }
  }

  useEffect(() => {
    initializeUser()
    if(userId){
getworkexp()
    }
  }, [userId]);

const editworkexp=async(id)=>{
  try {
    await axios.put("/api/admin/editworkexp",{
      id:id,
       Comapanyname:formDatavalue.Comapanyname1,
      Position:formDatavalue.Position1,
      StartingDate:formDatavalue.StartingDate1,
      EndingDate:formDatavalue.EndingDate1,
      TotalExperince:formDatavalue.TotalExperince1,
      Docs:picImage
    })
    toast.success("work expericence udated successfully")
    getworkexp()
    settestid("")
  } catch (error) {
    toast.error("Error updating work experience")
  }
}

  const handleUploadSuccess = (result) => {
    const imageUrl = result.info.secure_url;
    setImage(imageUrl);
  };

  const createworkexp = async (data) => {
    try {
      await axios.post("/api/admin/createworkexp", {
        Comapanyname: data.Comapanyname,
        Position: data.Position,
        StartingDate: data.StartingDate,
        EndingDate: data.EndingDate,
        TotalExperince: data.TotalExperince,
        userId: adminId,
        StudentId: userId,
        Docs: picImage,
      });
      toast.success("Work Experience Created Successfully");
      reset(); // clear form
      setImage(null);
      getworkexp()
    } catch (error) {
      toast.error("Error Creating Work Experience");
    }
  };

  return (
    <>
    <div className=" mb-5 mt-5">
      <div className="bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 dm-sans ml-96  p-5 rounded-lg ">
        <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
          <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
              <div className="w-[100px] h-[100px] aspect-auto">
                <Image src={"/bag.png"} width={100} height={100} alt="bag" />
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto min-w-[240px]">
              <div className="text-base text-white">Work Detail</div>
              <div className="mt-2 text-sm text-red-500">
                *Add your work experience one by one*
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(createworkexp)}>
          <div className="grid grid-cols-2 gap-6 mt-[-20px]">
            {/* Select Student */}
           

            {/* Company Name */}
            <div id="input" className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Company Name
              </label>
              <input
                {...register("Comapanyname", { required: true })}
                type="text"
                placeholder="Company Name"
                                className="bg-gray-50 border-gray-300 text-white text-sm rounded-lg bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300 block w-full p-2.5 "

              />
            </div>

            {/* Position */}
            <div id="input" className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Position
              </label>
              <input
                {...register("Position", { required: true })}
                type="text"
                placeholder="Position"
                                className="bg-gray-50 border-gray-300 text-white text-sm rounded-lg bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300 block w-full p-2.5 "

              />
            </div>

            {/* Starting Date */}
            <div id="input" className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Starting Date
              </label>
              <input
                {...register("StartingDate", { required: true })}
                type="date"
                                className="bg-gray-50 border-gray-300 text-white text-sm rounded-lg bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300 block w-full p-2.5 "

              />
            </div>

            {/* Ending Date */}
            <div id="input" className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Ending Date
              </label>
              <input
                {...register("EndingDate", { required: true })}
                type="date"
                                className="bg-gray-50 border-gray-300 text-white text-sm rounded-lg bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300 block w-full p-2.5 "

              />
            </div>

            {/* Total Experience */}
            <div id="input" className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Total Experience (in years)
              </label>
              <input
                {...register("TotalExperince", { required: true })}
                type="number"
                placeholder="3"
                                className="bg-gray-50 border-gray-300 text-white text-sm rounded-lg bg-white/20  border-white/30 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-300 block w-full p-2.5 "

              />
            </div>

            {/* File Upload */}
            {userId && (
              <CldUploadWidget
                uploadPreset="fm_upload"
                onSuccess={handleUploadSuccess}
              >
                {({ open }) => (
                  <div className="mt-7">
                    <button
                      type="button"
                      onClick={() => open()}
                      className="flex gap-2 items-center justify-center text-white bg-green-600 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2 mb-2"
                    >
                      <Upload />
                      Upload Exp letter
                    </button>
                  </div>
                )}
              </CldUploadWidget>
            )}
          </div>

          <div className="sm:flex mt-5 sm:flex-row-reverse flex gap-4">
            <button
              type="submit"
              className="w-fit rounded-lg text-sm px-5 py-2 h-[50px] bg-green-500 hover:bg-violet-600 text-white transition-all duration-300"
            >
              <div className="flex gap-2 items-center">Add Experience</div>
            </button>
          </div>
        </form>
      </div>
    </div>
    {userId?.length > 1 && (
  <div className="relative w-[1020px] ml-96  mt-5 mb-5 overflow-scroll bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
 overflow-x-auto  sm:rounded-lg">
    <table className="text-sm text-left rtl:text-right text-white dark:text-gray-400 w-full">
      <thead className="text-xs text-white uppercase bg-white/10 backdrop-blur-xl hover:bg-white/15 border-white/20 shadow-xl
">
        <tr>
          <th className="px-6 py-3 ">#</th>
          <th className="px-6 py-3 min-w-[150px]">Company Name</th>
          <th className="px-6 py-3 min-w-[150px]">Position</th>
          <th className="px-6 py-3 min-w-[150px]">Start Date</th>
          <th className="px-6 py-3 min-w-[150px]">End Date</th>
          <th className="px-6 py-3 min-w-[200px]">Total Experience</th>
            <th className="px-6 py-3 min-w-[150px]">Actions</th>
          <th className="px-6 py-3 min-w-[150px]">Document</th>
        
          <th className="px-6 py-3 min-w-[150px]">Download</th>
        </tr>
      </thead>
      <tbody>
       
        {getdata.map((item, index) =>
          item.id === testid ? (
            <tr key={item.id} >
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">
                <input
                  defaultValue={item.Comapanyname}
                  {...register("Companyname1")}
                  className="w-full rounded-lg p-2 text-sm border"
                />
              </td>
              <td className="px-6 py-4">
                <input
                  defaultValue={item.Position}
                  {...register("Position1")}
                  className="w-full rounded-lg p-2 text-sm border"
                />
              </td>
              <td className="px-6 py-4">
                <input
                  type="date"
                  defaultValue={item.StartingDate}
                  {...register("StartingDate1")}
                  className="w-full rounded-lg p-2 text-sm border"
                />
              </td>
              <td className="px-6 py-4">
                <input
                  type="date"
                  defaultValue={item.EndingDate}
                  {...register("EndingDate1")}
                  className="w-full rounded-lg p-2 text-sm border"
                />
              </td>
              <td className="px-6 py-4">
                <input
                  type="number"
                  defaultValue={item.TotalExperince}
                  {...register("TotalExperince1")}
                  className="w-full rounded-lg p-2 text-sm border"
                />
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={()=>{editworkexp(item.id)}}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => settestid("")}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </td>
              <td className="px-6 py-4">
                <CldUploadWidget
                  uploadPreset="fm_upload"
                  onSuccess={handleUploadSuccess}
                >
                  {({ open }) => (
                    <button
                      type="button"
                      onClick={() => open()}
                      className="flex items-center gap-2 text-white bg-green-600 hover:bg-green-800 rounded-lg text-sm px-4 py-2"
                    >
                      <Upload /> Upload
                    </button>
                  )}
                </CldUploadWidget>
              </td>
              
              <td className="px-6 py-4">
                {item.Docs && (
                  <PDFDownloadLink
                    document={<PDFDocument docImage={item.Docs} />}
                    fileName="Document.pdf"
                  >
                    <button className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
                      Download <Download />
                    </button>
                  </PDFDownloadLink>
                )}
              </td>
            </tr>
          ) : (
            <tr key={item.id}>
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{item.Comapanyname || "None"}</td>
              <td className="px-6 py-4">{item.Position || "None"}</td>
              <td className="px-6 py-4">{item.StartingDate || "None"}</td>
              <td className="px-6 py-4">{item.EndingDate || "None"}</td>
              <td className="px-6 py-4">{item.TotalExperince || "None"}</td>
           
              <td className="px-6 py-4">
                <Pen
                  className="cursor-pointer hover:text-green-500"
                  onClick={() => settestid(item.id)}
                />
              </td>
                 <td className="px-6 py-4">
             
                  <button
                    onClick={() => setViewingDoc(item.Docs)}
                    className="flex items-center gap-2 text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    View <Eye />
                  </button>
              
              </td>
              <td className="px-6 py-4">
                {item.Docs ? (
                  <PDFDownloadLink
                    document={<PDFDocument docImage={item.Docs} />}
                    fileName="Document.pdf"
                  >
                    <button className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
                      Download <Download />
                    </button>
                  </PDFDownloadLink>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          )
        )}
      
      </tbody>
    </table>
  </div>
)}
  {viewingDoc && (
        <div className="mt-5 w-[1020px] ml-96 mb-5 dm-sans p-5 border shadow-sm rounded-md bg-white">
          <h2 className="text-lg font-bold mb-3">Viewing Document</h2>
          <PDFViewer style={{ width: "100%", height: "500px" }}>
            <PDFDocument docImage={viewingDoc} />
          </PDFViewer>
          <button
            onClick={() => setViewingDoc(null)}
            className="flex mt-5 items-center justify-center gap-2 focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <span>Close</span>
            <X />
          </button>
        </div>
      )}
    </>
  );
};

export default Workexp;
