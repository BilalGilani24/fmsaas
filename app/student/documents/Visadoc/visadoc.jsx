import { CloudUpload } from "lucide-react";
import React from "react";

const Visadoc = () => {
  return (
    <>
      <div className="flex ml-[255px]  flex-col mt-5 ">
        <h1 className="mb-5 lexend-deca text-3xl">Visa Documents</h1>
        <div className=" flex gap-5 mb-9 flex-col justify-center p-5 rounded-md bg-white shadow-md border w-[800px] h-auto">
         

          <div className="flex flex-row justify-center items-center gap-3">
            <div className="flex flex-col ">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
Upload Passport
                
              </label>
              <input
                class="block w-[600px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                PNG,JPG or PDF
              </p>
            </div>
            <div>
              <button
                type="button"
                className="focus:outline-none mt-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex items-center space-x-2"
              >
                <CloudUpload />
                <span>Upload</span>
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-3">
            <div className="flex flex-col ">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
Upload CNIC <strong>(Front and Back)</strong>
              
              </label>
              <input
                class="block w-[600px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                PNG,JPG or PDF
              </p>
            </div>
            <div>
              <button
                type="button"
                className="focus:outline-none mt-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex items-center space-x-2"
              >
                <CloudUpload />
                <span>Upload</span>
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center gap-3">
            <div className="flex flex-col ">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload Bank Statement
              </label>
              <input
                class="block w-[600px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                PNG,JPG or PDF
              </p>
            </div>
            <div>
              <button
                type="button"
                className="focus:outline-none mt-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex items-center space-x-2"
              >
                <CloudUpload />
                <span>Upload</span>
              </button>
            </div>
          </div>

 

        
        </div>
      </div>
    </>
  );
};

export default Visadoc;
