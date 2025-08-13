"use client";
import React, { useState } from "react";
import {
  PDFDownloadLink,
  PDFViewer,
  Page,
  View,
  Image,
  StyleSheet,
  Document,
} from "@react-pdf/renderer";
import { Download, Eye, Pen, Upload, X } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: "auto",
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

const Singlestudentdetail = ({ getacademic,getstudentacademic  }) => {
  const [viewingDoc, setViewingDoc] = useState(null);
  const [getid, setid] = useState();
  const [picImage, setImage] = useState();
  const { register, watch } = useForm({
    defaultValues: {
      Qualification: "",
      Subject: "",
      Institute: "",
      Grade: "",
      Backlogs: "",
      YearStarting: "",
      Yearpassing: "",
    },
  });
  const formData = watch();
  const handleUploadSuccess = (result) => {
    const imageUrl = result.info.secure_url;
    setImage(imageUrl);
  };

  const editacademicdetails = async (id) => {
    try {
      const payload = {
        id,
        Docs: picImage,
        ...Object.entries(formData).reduce(
          (acc, [key, value]) => (value ?? "" ? { ...acc, [key]: value } : acc),
          {}
        ),
      };

      await axios.put("/api/admin/editacademicdetails", payload);

      toast.success("Successfully Updated Records");
      setid("");
      getstudentacademic()
    } catch (error) {
      toast.error("Error updating records");
      console.error("Error updating academic details:", error);
    }
  };

  return (
    <div className="ml-90">
      <div className="relative w-[1000px] dm-sans mt-5 border bg-white overflow-x-auto shadow-md sm:rounded-lg">
        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Qualification
              </th>
              <th scope="col" className="px-6 py-3">
                Subjects/Major/Degree
              </th>
              <th scope="col" className="px-6 py-3">
                College/Board/University
              </th>
              <th scope="col" className="px-6 py-3">
                Percentage/Grade
              </th>
              <th scope="col" className="px-6 py-3">
                Backlogs/Compartment
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="w-24">Starting Year</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className=" w-24">Passing Year</div>
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                {getid?.length > 1
                  ? "Upload New Document"
                  : "View Document / Download"}
              </th>
            </tr>
          </thead>
          <tbody>
            {getacademic.map((item, index) =>
              item.id == getid ? (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className=" py-4  w-72">
                    <select
                      {...register("Qualification")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option>Select Qualification</option>
                      <option value="Matric">Matric</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Under Graduate">Under Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                      <option value="PHD">PHD</option>
                    </select>
                  </td>
                  <td className="px-6 py-6  ">
                    <input
                      type="text"
                      {...register("Subject")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Science"
                      required
                    />
                  </td>
                  <td className="px-6 py-6  ">
                    <input
                      type="text"
                      {...register("Institute")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Iqra University"
                      required
                    />
                  </td>
                  <td className="px-6 py-6  ">
                    <input
                      type="text"
                      {...register("Grade")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="90%"
                      required
                    />
                  </td>
                  <td className="px-6 py-6  ">
                    <input
                      type="text"
                      {...register("Backlogs")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      required
                    />
                  </td>
                  <td className="px-6 py-6  ">
                    <input
                      type="date"
                      {...register("YearStarting")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      required
                    />
                  </td>
                  <td className="px-6 py-6  ">
                    <input
                      type="date"
                      {...register("Yearpassing")}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="0"
                      required
                    />
                  </td>
                  <td className="px-6 py-6  ">
                    <div className="flex flex-row ">
                      <button
                        type="button"
                        onClick={() => editacademicdetails(item.id)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Update
                      </button>
                      <button
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={() => setid("")}
                      >
                        cancel
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-6  ">
    <CldUploadWidget
  uploadPreset="fm_upload"

  onSuccess={handleUploadSuccess}
>
  {({ open }) => (
    <button
    
   
     onClick={() => open()}
      className="flex w-44 gap-2 items-center justify-center text-white bg-green-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      <Upload />
      Upload Files
    </button>
  )}
</CldUploadWidget>
                  </td>
                </tr>
              ) : (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{item.Qualification}</td>
                  <td className="px-6 py-4">{item.Subject}</td>
                  <td className="px-6 py-4">{item.Institute}</td>
                  <td className="px-6 py-4">{item.Grade}%/CPGA</td>
                  <td className="px-6 py-4">{item.Backlogs}</td>
                  <td className="px-6 py-4">{item.YearStarting}</td>
                  <td className="px-6 py-4">{item.Yearpassing}</td>
                  <td className="px-6 py-4">
                    <Pen
                      className=" cursor-pointer   hover: text-green-500"
                      onClick={() => setid(item.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-row gap-1">
                      <button
                        onClick={() => setViewingDoc(item.Docs)}
                        className="flex items-center justify-center gap-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        <span>View</span>
                        <Eye />
                      </button>

                      <PDFDownloadLink
                        document={<PDFDocument docImage={item.Docs} />}
                        fileName="Document.pdf"
                      >
                        <button className="flex items-center justify-center gap-2 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                          <span>Download</span>
                          <Download />
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
    </div>
  );
};

export default Singlestudentdetail;
