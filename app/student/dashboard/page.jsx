'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  GraduationCap,
  ScrollText,
  BriefcaseBusiness,
  School,
  Files,
  FileUser,
  TicketsPlane,
  Bell,
} from "lucide-react";
import useUserStore from "@/app/store/userid";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
   const { userId, initializeUser, fetchBranchConsulars ,adminId} = useUserStore();
  
const [getacademic, setacademic] = useState([]);
const [getproficency, setproficency] = useState([]);
const [getworkexp, setworkexp] = useState([]);
const [suggested, setsuggested] = useState([]);
const [visa, setvisa] = useState([]);
const [applicaitonnum,setapplicationnum]=useState([])
const academic = async () => {
  try {
    // Use Promise.all so all requests run in parallel
    const [res, proficencyRes, workexpRes, suggestedRes,applicationcount,visalength] = await Promise.all([
      axios.post('/api/student/academicdoc', { StudentId: userId }),
      axios.post('/api/student/proficencydoc', { StudentId: userId }),
      axios.post('/api/student/workexpdoc', { StudentId: userId }),
      axios.post('/api/student/suggesteduni', { StudentId: userId }),
      axios.post('/api/student/application', { StudentId: userId }),
         axios.post('/api/student/visa', { userId: userId })
    ]);

    // Now set state with actual data
    setacademic(res.data);
    setproficency(proficencyRes.data);
    setworkexp(workexpRes.data);
    setsuggested(suggestedRes.data);
setapplicationnum(applicationcount.data)
setvisa(visalength.data)
  } catch (error) {
    toast.error("Error fetching the academic records");
  }
};
console.log(visa)

useEffect(() => {
  initializeUser();
  if (userId) {
    academic();
  }
}, [userId]);

  const sections = [
    {
      id: 1,
      number: "01",
      title: "Academy Details",
      status: (
        <span className={`${getacademic?"bg-green-100":"bg-red-100"} text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300`}>
          {getacademic?"Submitted":"Pending"}
        </span>
      ),
      description:
        " Provide and manage your academic qualifications, degrees, certifications, and transcripts.",
      icon: <GraduationCap size={50} className="text-red-500" />,
    },
    {
      id: 2,
      number: "02",
      title: "Proficiency Test",
      status: (
        <span className={`${getacademic?"bg-green-100":"bg-red-100"} text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300`}>
          {getproficency?"Submitted":"Pending"}
        </span>
      ),
      description:
        "Provide the details of your test scores for your academic or immigration process",
      icon: <ScrollText size={50} className="text-red-500" />,
    },
    {
      id: 3,
      number: "03",
      title: "Work Experience",
      status: (
       <span className={`${getacademic?"bg-green-100":"bg-red-100"} text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300`}>
          {getworkexp?"Submitted":"Pending"}
        </span>
      ),
      description:
        "Provide your professional experience here by adding details about your employment history",
      icon: <BriefcaseBusiness size={50} className="text-red-500" />,
    },
    {
      id: 4,
      number: "04",
      title: "Suggested University",
      status: (
       <span className={`${suggested?"bg-green-100":"bg-red-100"} text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300`}>
          {suggested?"Added":"Pending"}
        </span>
      ),
      description:
        "Provide the names of the universities and country to find the best fit for your future studies",
      icon: <School size={50} className="text-red-500" />,
    },
  ];

  const details = [
    {
      id: 5,
      number: "05",
      title: "Documents",
      icon: <Files size={50} className="text-red-500" />,
      status: (
        <span className={`${getacademic && getproficency?"bg-green-100":"bg-red-100"} text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300`}>
          {getacademic && getproficency?"Completed":"Pending"}
        </span>
      ),
      description:
        "Provide documents, including academic transcripts, identification, and other relevant paperwork. ",
    },
    {
      id: 6,
      number: "06",
      title: "Applications",
      icon: <FileUser size={50} className="text-red-500" />,
      status: (
        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Application Processed - ( {applicaitonnum} )
        </span>
      ),
      description:
        "Monitor the status of your visa application. This section provides important information about the current stage of your application",
    },
    {
      id: 7,
      number: "07",
      title: "Visa",
      icon: <TicketsPlane size={50} className="text-red-500" />,
      status: (
        <span className={`${visa===0?"bg-red-100":"bg-green-100"} text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300`}>
          {visa===0?"Not applied":"Applied"}
        </span>
      ),
      description:
        " Monitor the status of your visa application. This section provides important information about the current stage of your application",
    },
  ];

  return (
    <div className="flex flex-col dm-sans gap-10">
      {/* Logo Image */}
      <div className="flex justify-center ml-80 mt-5">
        <Image
          src={"/Dash.svg"}
          width={800}
          height={100}
          alt="dash"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-row ml-36 mt-[-40px] justify-between items-center">
        <h1 className="text-2xl dm-sans ml-64">Personal/Academic Details</h1>
        <div className="flex border  bg-white  shadow-md rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out">
          <div className=" flex rounded-full absolute mt-[-10px] w-6 h-6 text-white justify-center items-center bg-red-700">
            5
          </div>

          <div className="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-3">
            <a
              title="Go to about me page"
              className="text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0"
            >
              <Bell />
            </a>
          </div>
        </div>
      </div>
      {/* Cards Section */}
      <div className="flex flex-row ml-96 mt-[-30px] items-center gap-3">
        {sections.map((section) => (
          <div
            key={section.id}
            className="w-64 cursor-pointer bg-white shadow-md border rounded-md p-9 space-y-3 relative overflow-hidden"
          >
            <div className="w-24 h-24 bg-red-500 rounded-full absolute -right-5 -top-7">
              <p className="absolute bottom-6 left-7 text-white text-2xl">
                {section.number}
              </p>
            </div>
            <div className="fill-violet-500 w-12">{section.icon}</div>
            <div className="dm-sans">{section.status}</div>
            <h1 className="font-bold text-1xl">{section.title}</h1>
            <p className="text-sm text-zinc-500 text-left  leading-6">
              {section.description}
            </p>
          </div>
        ))}
      </div>

      {/* Sub-Headers */}
      <div className="flex flex-row mt-[-20px]">
        <h1 className="text-2xl dm-sans ml-96">Documents Details</h1>
        <h1 className="text-2xl dm-sans ml-40">Applications</h1>
        <h1 className="text-2xl dm-sans ml-52">Visa Details</h1>
      </div>

      {/* Details Section */}
      <div className="flex flex-row ml-96 mt-[-20px] gap-3 mb-10">
        {details.map((detail) => (
          <div
            key={detail.id}
            className="w-[345px] cursor-pointer bg-white shadow-lg border rounded-md p-9 space-y-3 relative overflow-hidden"
          >
            <div className="w-24 h-24 bg-red-500 rounded-full absolute -right-5 -top-7">
              <p className="absolute bottom-6 left-7 text-white text-2xl">
                {detail.number}
              </p>
            </div>
            <div className="fill-violet-500 w-12">{detail.icon}</div>
            <h1 className="font-bold text-1xl">{detail.title}</h1>
            <div>{detail.status}</div>
            <p className="text-sm text-zinc-500 leading-6">
              {detail.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
