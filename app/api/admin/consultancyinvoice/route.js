export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json(); 
    const {
      
      Name,
      Phonenumber,
      Email,
      PaymentMethod,
      Paymentstatus,
      Country,
      Consultancyfee,
      userId,
      StudentId,
      Branchname,
      Status,
      Docs,
      Universityname,
      Secoundpayment,
  Secounddocs ,
   SecoundpaymentMethod
    } = body;

    const createconsultancyinvoice = await prisma.consultancyinvoice.create({
      data: {
        
        Name,
        Phonenumber,
        Email,
        PaymentMethod,
        Paymentstatus,
        Country,
        Consultancyfee,
        userId,
        StudentId,
        Branchname,
        Status: "",
        Docs:"",
        Universityname,
        Secounddocs:"",
        Secoundpayment:"",
        SecoundpaymentMethod:""
      },
    });

    return new Response(JSON.stringify(createconsultancyinvoice), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error consultancy invoice:", error);

    return new Response(
      JSON.stringify({ error: "Failed to consultancy invoice" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
