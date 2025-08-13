"use client";
import React, { useEffect, useState } from "react";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { CldUploadWidget } from "next-cloudinary";
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
const Proficencytest = ({ formData }) => {
  const [viewingDoc, setViewingDoc] = useState(null);
  const [getdata, setdata] = useState([]);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
   const { userId, initializeUser, adminId } = useUserStore();
  const [testid, settestid] = useState();
  const formDatavalue = watch();


  const createporficencytest = async () => {
    try {
      await axios.post("/api/admin/createproficencytest", {
        StudentId: userId,
        Testname: formData,
        Listening: formDatavalue.Listening,
        Reading: formDatavalue.Reading,
        Writing: formDatavalue.Writing,
        Speaking: formDatavalue.Speaking,
        Overall: formDatavalue.Overall,
        Totalscore: formDatavalue.Totalscore,
        userId: adminId,
        Docs: picImage,
      });
      toast.success("Proficency test added successfully");
      getproficencytest();
    } catch (error) {
      toast.error("Error adding proficeny test");
      console.log(error);
    }
  };
  const getproficencytest = async () => {
    try {
      const res = await axios.post("/api/admin/getproficencytest", {
        StudentId: userId,
      });
      setdata(res.data);
    } catch (error) {
      toast.error("Error getting the proficency test");
      console.log(error);
    }
  };
  const editproficencytest= async(id)=>{
    try {
         await axios.put("/api/admin/editproficencytest", {
        id: id,
        Testname:formDatavalue.Testname1,
Listening:formDatavalue.Listening1,
Reading:formDatavalue.Reading1,
Writing:formDatavalue.Writing1,
Speaking:formDatavalue.Speaking1,
Overall:formDatavalue.Overall1,
Totalscore:formDatavalue.Totalscore1,
Docs:picImage
      });
        settestid("")
      toast.success("Proficency test updated successfully")
      getproficencytest()
    
    } catch (error) {
      console.log(error)
      toast.error("Error updating proficency test")
    }
  }
  useEffect(() => {
    initializeUser()
    if (userId) {
      getproficencytest();
    }
  }, [userId]);

  const [picImage, setImage] = useState();
  const handleUploadSuccess = (result) => {
    const imageUrl = result.info.secure_url;
    setImage(imageUrl);
  };
  return (
    <>
      <div className="mr-3 mt-5">
        <div className="bg-white dm-sans mb-5 border p-5 rounded-lg shadow-sm">
          <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
            <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
              <div className="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
                <div className="w-[100px] h-[100px] aspect-auto">
                  <image src={"/test.png"} width={100} height={100} />
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                <div className="text-base text-gray-800">Proficency Test</div>
                <div className="mt-2 text-sm text-red-500">
                  *Add student proficency test one by one*
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-[-20px] ">
          
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Listening
                </label>
                <input
                  type="text"
                  {...register("Listening", {
                    required: "Enter Listening Module",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="8"
                  required
                />
                {errors.Listening && (
                  <span className="text-sm text-red-500">
                    {errors.Listening.message}
                  </span>
                )}
              </div>
            </div>

            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Reading
                </label>
                <input
                  type="text"
                  {...register("Reading", {
                    required: "Enter Reading Module",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="4"
                  required
                />
                {errors.Reading && (
                  <span className="text-sm text-red-500">
                    {errors.Reading.message}
                  </span>
                )}
              </div>
            </div>

            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Writing
                </label>
                <input
                  type="text"
                  {...register("Writing", {
                    required: "Enter Writing Module",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="6"
                  required
                />
                {errors.Writing && (
                  <span className="text-sm text-red-500">
                    {errors.Writing.message}
                  </span>
                )}
              </div>
            </div>

            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Speaking
                </label>
                <input
                  type="text"
                  {...register("Speaking", {
                    required: "Enter Speaking Module",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="7"
                  required
                />
                {errors.Speaking && (
                  <span className="text-sm text-red-500">
                    {errors.Speaking.message}
                  </span>
                )}
              </div>
            </div>
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Overall
                </label>
                <input
                  type="number"
                  {...register("Overall", {
                    required: "Enter Overall Score",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="3"
                  required
                />
                {errors.Overall && (
                  <span className="text-sm text-red-500">
                    {errors.Overall.message}
                  </span>
                )}
              </div>
            </div>
            <div id="input" className="relative">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Total Score
                  <span className="text-red-600">(PTE,DUOLINGO)</span>
                </label>
                <input
                  type="number"
                  {...register("Totalscore", {
                    required: "Enter Totalscore",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="57"
                  required
                />
                {errors.Totalscore && (
                  <span className="text-sm text-red-500">
                    {errors.Totalscore.message}
                  </span>
                )}
              </div>
            </div>
            {userId && (
              <CldUploadWidget
                uploadPreset="fm_upload"
                onSuccess={handleUploadSuccess}
              >
                {({ open }) => {
                  return (
                    <div className=" mt-7 ">
                      <button
                        className="flex gap-2 items-center justify-center text-white bg-green-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={() => open()}
                      >
                        <Upload />
                        Upload Files
                      </button>
                    </div>
                  );
                }}
              </CldUploadWidget>
            )}
          </div>

          <div className="sm:flex sm:flex-row-reverse flex gap-4 mt-5">
            <button
              onClick={createporficencytest}
              className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-blue-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
              type="button"
            >
              <div className="flex gap-2 items-center">Add Proficency Test</div>
            </button>
          </div>
        </div>
      </div>
      {userId?.length > 1 && (
        <div className="relative w-[1000px] mt-10 overflow-scroll border bg-white overflow-x-auto shadow-md sm:rounded-lg">
          <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
  <th className="px-6 py-3 min-w-[50px]">#</th>
  <th className="px-6 py-3 min-w-[150px]">Test Name</th>
  <th className="px-6 py-3 min-w-[150px]">Listening</th>
  <th className="px-6 py-3 min-w-[150px]">Reading</th>
  <th className="px-6 py-3 min-w-[150px]">Writing</th>
  <th className="px-6 py-3 min-w-[150px]">Speaking</th>
  <th className="px-6 py-3 min-w-[150px]">Overall</th>
  <th className="px-6 py-3 min-w-[150px]">Total Score</th>
  <th className="px-6 py-3 min-w-[150px]">Actions</th>
  <th className="px-6 py-3 min-w-[150px]">Document</th>
  <th className="px-6 py-3 min-w-[150px]">Download</th>
</tr>
            </thead>
            <tbody>
              {getdata.map((item, index) =>
                item.id == testid ? (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                       <td className="px-6 py-4">
                      <input
                        defaultValue={item.Testname}
                        {...register("Testname1")}
                        className="w-full rounded-lg p-2 text-sm border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        defaultValue={item.Listening}
                        {...register("Listening1")}
                        className="w-full rounded-lg p-2 text-sm border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        defaultValue={item.Reading}
                        {...register("Reading1")}
                        className="w-full rounded-lg p-2 text-sm border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        defaultValue={item.Writing}
                        {...register("Writing1")}
                        className="w-full rounded-lg p-2 text-sm border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        defaultValue={item.Speaking}
                        {...register("Speaking1")}
                        className="w-full rounded-lg p-2 text-sm border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        defaultValue={item.Overall}
                        {...register("Overall1")}
                        className="w-full rounded-lg p-2 text-sm border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        defaultValue={item.Totalscore}
                        {...register("Totalscore1")}
                        className="w-full rounded-lg p-2 text-sm border"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-row">
                        <button
                          type="button"
                          onClick={() => editproficencytest(item.id)}
                          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => settestid("")}
                          className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <CldUploadWidget
                        uploadPreset="fm_upload"
                        onSuccess={handleUploadSuccess}
                            options={{
      resourceType: "auto", // allows image, video, raw (PDF falls under 'raw')
      clientAllowedFormats: ["image", "pdf"], // allow both images and PDFs
      maxFileSize: 10485760,}}
                      >
                        {({ open }) => (
                          <button
                            onClick={() => open()}
                            className="flex w-40 gap-2 items-center justify-center text-white bg-green-600 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                          >
                            <Upload />
                            Upload Files
                          </button>
                        )}
                      </CldUploadWidget>
                    </td>
                       <td className="px-2 py-2">
                      <div className="flex flex-row gap-1">
                            <PDFDownloadLink
                                                document={<PDFDocument docImage={item.Docs} />}
                                                fileName="Document.pdf"
                                              >
                        <button className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
                          Download <Download />
                        </button>
                        </PDFDownloadLink>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr
                    key={index}
                    className="odd:bg-white  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">
                      {item.Testname.length > 0 ? item.Testname : "None"}
                    </td>
                    <td className="px-6 py-4">
                      {item.Listening.length > 0 ? item.Listening : "None"}
                    </td>
                    <td className="px-6 py-4">
                      {item.Reading.length > 0 ? item.Reading : "None"}
                    </td>
                    <td className="px-6 py-4">
                      {item.Writing.length > 0 ? item.Writing : "None"}
                    </td>
                    <td className="px-6 py-4">
                      {item.Speaking.length > 0 ? item.Speaking : "None"}
                    </td>
                    <td className="px-6 py-4">
                      {item.Overall?.length > 0 ? item.Overall : "None"}
                    </td>
                    <td className="px-6 py-4">
                      {item.Totalscore.length > 0 ? item.Totalscore : "None"}
                    </td>
                    <td className="px-6 py-4">
                      <Pen
                        className="cursor-pointer hover:text-green-500"
                        onClick={() => settestid(item.id)}
                      />
                    </td>
                    <td className="px-2 py-4">
                      <div className="flex flex-row gap-1">
                        <button
                          onClick={() => setViewingDoc(item.Docs)}
                          className="flex items-center gap-2 text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                          View <Eye />
                        </button>
                      </div>
                    </td>
                    <td className="px-2 py-4">
                      <div className="flex flex-row gap-1">
                         <PDFDownloadLink
                                                document={<PDFDocument docImage={item.Docs} />}
                                                fileName="Document.pdf"
                                              >
                        <button className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
                          Download <Download />
                        </button>
                        </PDFDownloadLink>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
      {viewingDoc && (
        <div className="mt-5 dm-sans p-5 border shadow-md rounded-md bg-white">
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

export default Proficencytest;
