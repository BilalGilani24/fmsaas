"use client";
import { Download, Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import useUserStore from "@/app/store/userid";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Consultancy = () => {
const downloadPDF = async () => {
  const input = document.getElementById("invoice-section");
  if (!input) return;

  const canvas = await html2canvas(input);
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("consultancy-invoice.pdf");
};
  const { userId, initializeUser, branchConsulars, fetchBranchConsulars } =
    useUserStore();
    const [paymentdetails,setpaymentdetails]=useState([])
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  
  const formvalues = watch();
  useEffect(() => {
    initializeUser();
    fetchBranchConsulars();
  }, [initializeUser, userId]);
  const [getstudent, setstudent] = useState([]);

  let singlebranchname = branchConsulars.map((item) => item.BranchName)[0];
  const fetchstudents = async () => {
    try {
      const res = await axios.post("/api/admin/getstudents", {
        AdminId: userId,
      });
      setstudent(res.data);
    } catch (error) {
      toast.error("Error Fetching Students");
      console.log(error);
    }
  };
const getsecoundpayment=async()=>{
  try {
    const res= await axios.post("/api/admin/getsecoundconsultancyinvoice",{
      StudentId: formvalues.name
    })
    setpaymentdetails(res.data)
  } catch (error) {
    toast.error("Error fetching payment details")
  }
}
const updatesecoundpayment=async(id)=>{
  try {
    await axios.put("/api/admin/editconsultancyinvoice",{
      id:id,
      Secoundpayment:formvalues.fee,
      SecoundpaymentMethod:formvalues.paymentMethod
    
    })
    toast.success("Secound payment created successfully")
    
  } catch (error) {
    toast.error("Error updating secound payment")
    console.log(error)
  }
}

  const createrecipt = async () => {
    try {
      await axios.post("/api/admin/consultancyinvoice", {
        Name:  getstudent.find((s) => s.id === formvalues.name)?.Name || "",
        Phonenumber: formvalues.phone,
        Email: formvalues.email,
        PaymentMethod: formvalues.paymentMethod,
        Paymentstatus: formvalues.paymentStatus,
        Country: formvalues.country,
        Consultancyfee: formvalues.fee,
        userId: userId,
        StudentId: formvalues.name,
        Branchname: formvalues.branch,
        Universityname :formvalues.university
      });
      toast.success("Invoice Created Successfully");
      reset();
    
    } catch (error) {
      toast.error("Error creating invoice");
    }
  };
  useEffect(() => {
    fetchstudents();
  
  }, [userId]);
  useEffect(() => {

  if (formvalues.name) {
    getsecoundpayment();
  }
}, [formvalues.name, getstudent]);
  
  return (
    <div>
      <div class="bg-white p-8 ml-52 border mt-5 rounded-lg shadow-md">
        <div class="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
          <div class="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div class="flex relative flex-col justify-center self-stretch bg-gray-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
              <div class="w-[100px] h-[100px] aspect-auto">
                <Image src={"/invo.png"} width={90} height={100} alt="pics" />
              </div>
            </div>
            <div class="flex flex-col self-stretch my-auto min-w-[240px]">
              <div class="text-base text-gray-800">Consultancy Invoice</div>
              <div class="mt-2 text-sm text-red-500">
                PLEASE CHOOSE CORRECT OPTIONS AND AMOUNT
              </div>
            </div>
          </div>
        </div>
  

<form >          <div class="grid grid-cols-2 gap-6 mb-10">
            <div id="input" class="relative">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Name
              </label>
              <select
                {...register("name")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="">Choose Name</option>
                {getstudent?.map((student, index) => (
                  <option key={index} value={student.id}>
                    {student.Name}
                  </option>
                ))}
              </select>
            </div>

            <div id="input" class="relative">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Branch
              </label>
              <select
                {...register("branch")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="">Choose Name</option>
                <option value={singlebranchname}>{singlebranchname}</option>
              </select>
            </div>

            <div id="input" class="relative">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Phone Number
              </label>
              <select
                {...register("phone")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="">Choose Phone Number</option>
                {getstudent?.map((student, index) => (
                  <option key={index} value={student.Mobile}>
                    {student.Mobile}
                  </option>
                ))}
              </select>
            </div>

            <div id="input" class="relative">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an Email
              </label>
              <select
                {...register("email")}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="">Choose Email</option>
                {getstudent?.map((student, index) => (
                  <option key={index} value={student.Email}>
                    {student.Email}
                  </option>
                ))}
              </select>
            </div>

            <div id="input" class="relative">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Payment Method
              </label>
              <select
                {...register("paymentMethod")}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="">Choose Payment Method</option>
                <option value="Cash">Cash</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Visacard">Visacard</option>
                <option value="Sadapay">Sadapay</option>
                <option value="Nayapay">Nayapay</option>
                <option value="Easypaisa">Easypaisa</option>
              </select>
            </div>

            <div id="input" class="relative">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Payment Status
              </label>
              <select
                {...register("paymentStatus")}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="">Choose Payment Status</option>
                <option value="Paid">Paid</option>
                <option value="Half-Paid">Half-Paid</option>
              </select>
            </div>

            <div id="input" class="relative">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Country
              </label>
              <select
                {...register("country")}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option value="">Choose Country</option>
                <option value="United States">USA</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <div id="input" class="relative">
              <label class="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter University Name
              </label>
              <input
                type="text"
                {...register("university")}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 ml-2 p-2.5"
                placeholder="Oxford University"
              />
            </div>

            <div id="input" class="relative">
              <label class="block mb-2 ml-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter Consultancy Fee Amount
              </label>
              <input
                type="text"
                {...register("fee")}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 ml-2 p-2.5"
                placeholder="20000"
              />
            </div>
{paymentdetails.map((item, index) => 
  item.Consultancyfee !== "" 
    ? <p key={item.id || index} className="mt-9">
        Previous paid amount: {item.Consultancyfee} PKR
      </p> 
    : null
)}
          </div>

          <div class="sm:flex sm:flex-row-reverse flex gap-4 ">
            <button
              class="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-blue-500 hover:bg-violet-600 text-white"
              type="button"
     onClick={async () => {
    const existingPayment = paymentdetails.find(
      (item) => item.Consultancyfee !== ""
    );
    if (existingPayment) {
      await updatesecoundpayment(existingPayment.id); // ✅ Await the async call
    } else {
      await createrecipt(); // ✅ Await this too
    }
  }}
            >
<div class="flex gap-2 items-center">Create Reciept</div>             
            </button>
          </div>
        </form>
      </div>
      {/* ss */}
      
      <div id="invoice-section" className="min-h-screen flex items-center justify-center ml-52 py-10">
        <div className="max-w-4xl dm-sans mx-auto border bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-6 mb-6">
            <div>
              <div className="bg-red-600 w-auto h-auto p-3 ">
                {/* <Image src="/fm-logo.png" width={200} height={200} alt="pcs" /> */}
                 <img
    src="/fm-logo.png"
    alt="FM Logo"
    width={200}
    height={100}
    crossOrigin="anonymous"
  />
              </div>
              <h1 className="text-3xl mt-5 font-bold text-red-600">INVOICE</h1>
            </div>
            <div className="mt-[70px]">
              <p className="text-lg text-gray-500">Invoice Date</p>
              <p className="font-bold">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Client Info */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800">Invoice To:</h2>
            <p className="text-gray-700">
              Name:{" "}
              {getstudent.find((s) => s.id === formvalues.name)?.Name || ""}
            </p>
            <p className="text-gray-700">Phone: {formvalues.phone}</p>
            <p className="text-gray-700">Email: {formvalues.email}</p>
            <p className="text-gray-700">Branch: {singlebranchname}</p>
          </div>

          <div>
            <h1 className="text-md font-bold">
              Service Type: Consultancy Charges
            </h1>
          </div>

          {/* Payment Summary */}
          <div className="flex justify-between items-center border-t pt-6 mt-6">
            <div>
              <p className="font-bold">
                Payment Method:{" "}
                <span className="text-gray-600 font-medium">
                  {formvalues.paymentMethod}
                </span>
              </p>
              <p className="font-bold mt-1">
                Payment Status:{" "}
                <span className="text-gray-600 font-medium">
                  {formvalues.paymentStatus}
                </span>
              </p>
            </div>
            <div className="text-right">
              <h3 className="text-red-600 text-xl font-bold">
                Total: PKR {formvalues.fee}
              </h3>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="mt-6 text-sm text-gray-600">
            <p className="font-bold">
              Terms & Conditions: Fm-Consultants only charge Twenty Thousand
              advance and Twenty Thousand on the time of visa applying
            </p>
          </div>

          {/* Footer */}
          <div className="mt-10 text-center text-gray-700">
            <p className="text-lg font-semibold text-red-600">Thank You</p>
            <div className="mt-4 flex flex-row gap-5 justify-center">
              <div className="flex flex-row items-center justify-center gap-2">
                <Phone color="red" /> +92-3218453460
              </div>
              <div className="flex flex-row gap-2 justify-center items-center">
                <Mail color="red" /> info@fmglobaledu.com
              </div>
              <div className="flex flex-row gap-2 justify-center items-center">
                <Globe color="red" /> www.fmglobaledu.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-[-20px] mb-10 ml-96">
              <button
  onClick={downloadPDF}
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2 ml-52 "
>
  <Download size={18} /> Download PDF
</button>
      </div>

    </div>
  );
};

export default Consultancy;
