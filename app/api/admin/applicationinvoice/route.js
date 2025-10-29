export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";
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
      Applicationfee,
      userId,
      StudentId,
      Branchname,
      Status,
      Docs,
      Universityname 
    } = body;

    const createconsultancyinvoice = await prisma.applicationinvoice.create({
      data: {
        
        Name,
        Phonenumber,
        Email,
        PaymentMethod,
        Paymentstatus,
        Country,
        Applicationfee,
        userId,
        StudentId,
        Branchname,
        Status: "",
        Docs:"",
        Universityname 
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
