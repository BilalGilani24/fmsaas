"use client";
import axios from "axios";
import { Eye, Pen, Upload, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { CldUploadWidget } from "next-cloudinary";

const Applicationmodal = (props) => {
  const [getdata, setdata] = useState([]);
  const [getid, setid] = useState(null);
  const [picImage, setImage] = useState();

  const handleUploadSuccess = (result) => {
    const imageUrl = result.info.secure_url;
    setImage(imageUrl);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const getapplications = async () => {
    try {
      const res = await axios.post("/api/admin/getuniapplication", {
        applicationId: props.applicationID,
      });
      setdata(res.data);
    } catch (error) {
      toast.error("Error fetching the student application");
    }
  };

  useEffect(() => {
    if (props.applicationID) {
      getapplications();
    }
  }, [props.applicationID]);

  const onSubmit = async (data) => {
    try {
      console.log("Submitting Data:", data);
      await axios.put("/api/admin/edituniapplication", {
        id: getid,
        ...data,
        Resultdoc: picImage,
      });
      toast.success("Student Application Updated Successfully");
      setid(null);
      getapplications();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update application");
    }
  };

  const handleEdit = (item) => {
    setid(item.id);
    reset({
      Universityname: item.Universityname,
      Course: item.Course,
      Intake: item.Intake,
      Applylevel: item.Applylevel,
      Applicationresult: item.Applicationresult, // ✅ Correct key
    });
    setImage(item.Resultdoc); // optionally load existing doc
  };

  return (
    <div>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-6xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Student Created Applications
              </h3>
              <button
                type="button"
                onClick={() => props.setviewapplicationmodal((pre) => !pre)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <X color="red" />
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th className="px-6 py-3 w-32">
                        <div className="w-28">University</div>
                      </th>
                      <th className="px-6 py-3 w-28">
                        <div className="w-32">Course</div>
                      </th>
                      <th className="px-6 py-3">
                        <div className="w-20">Intake</div>
                      </th>
                      <th className="px-6 py-3 w-44">
                        <div className="w-28">Apply Level</div>
                      </th>
                      <th className="px-6 py-3">
                        <div className="w-20">Status</div>
                      </th>
                      <th className="px-6 py-3">
                        <div className="w-20">View Doc</div>
                      </th>
                      <th className="px-6 py-3">
                        <div className="w-20">Action</div>
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {getdata.map((item) =>
                      item.id === getid ? (
                        <tr key={item.id} className="bg-white dark:bg-gray-800">
                          <td className="px-2 py-2">
                            <input
                              {...register("Universityname", { required: true })}
                              className="w-40 px-2 py-1 border border-black rounded-sm"
                            />
                          </td>
                          <td className="px-2 py-2">
                            <input
                              {...register("Course", { required: true })}
                              className="w-40 px-2 py-1 border border-black rounded-sm"
                            />
                          </td>
                          <td className="px-2 py-2">
                            <input
                              {...register("Intake", { required: true })}
                              type="month"
                              className="w-40 px-2 py-1 border rounded-sm"
                            />
                          </td>
                          <td className="px-2 py-2">
                            <select
                              {...register("Applylevel", { required: true })}
                              className="w-40 px-2 py-1 border rounded-sm"
                            >
                              <option value="">Select Apply Level</option>
                              <option value="PHD">PHD</option>
                              <option value="Under Graduate">Under Graduate</option>
                              <option value="Post Graduate">Post Graduate</option>
                              <option value="Foundation course">Foundation Course</option>
                              <option value="Language course">Language Course</option>
                            </select>
                          </td>
                          <td className="px-2 py-2">
                            <select
                              {...register("Applicationresult", { required: true })}
                              className="w-40 px-2 py-1 border rounded-sm"
                            >
                              <option value="">Select Status</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </td>
                          <td className="px-2 py-2">
                            <CldUploadWidget
                              uploadPreset="fm_upload"
                              onSuccess={handleUploadSuccess}
                            >
                              {({ open }) => (
                                <button
                                  onClick={() => open()}
                                  className="flex w-40 gap-2 items-center justify-center text-white bg-green-600 hover:bg-gray-900 font-small rounded-sm text-sm h-8 px-5 py-2.5"
                                >
                                  <Upload />
                                  Upload Doc
                                </button>
                              )}
                            </CldUploadWidget>
                          </td>
                          <td className="px-2 py-2">
                              {item.Resultdoc ? (
    <button
      onClick={() => window.open(item.Resultdoc, "_blank")}
      className="text-blue-600 ml-4 hover:underline flex items-center gap-1"
    >
      <Eye size={18} />
      View
    </button>
  ) : (
    <span className="text-gray-400">No Doc</span>
  )}
                          </td>
                          <td className="px-2 py-2">
                            <button
                              onClick={handleSubmit(onSubmit)}
                              className="text-green-600 font-semibold w-24 border border-green-600 h-8"
                            >
                              Update
                            </button>
                          </td>
                          <td className="px-2 py-2">
                            <button
                              onClick={() => setid(null)}
                              className="ml-2 text-red-600"
                            >
                              <X size={24} />
                            </button>
                          </td>
                        </tr>
                      ) : (
                        <tr key={item.id} className="bg-white dark:bg-gray-800">
                          <td className="px-6 py-4 w-32">{item.Universityname}</td>
                          <td className="px-6 py-4 w-32">{item.Course}</td>
                          <td className="px-6 py-4 w-32">{item.Intake}</td>
                          <td className="px-6 py-4 w-32">{item.Applylevel}</td>
                          <td className="px-6 py-4 w-32">{item.Applicationresult||"Pending"}</td>
                          <td className="px-6 py-4 w-32">
                              {item.Resultdoc ? (
    <button
      onClick={() => window.open(item.Resultdoc, "_blank")}
      className="text-blue-600 hover:underline flex items-center gap-1"
    >
      <Eye size={18} />
      View
    </button>
  ) : (
    <span className="text-gray-400">No Doc</span>
  )}
                          </td>
                          <td className="px-6 py-4 w-32">
                            <button
                              onClick={() => handleEdit(item)}
                              className="text-blue-600"
                            >
                              <Pen size={16} />
                            </button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicationmodal;
