export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";


export async function POST(req) {
  try {
    const body = await req.json();
    const {  StudentId } = body;

    const getconsultancyinvoice = await prisma.consultancyinvoice.findMany({
      where: {
         StudentId:  StudentId,
      },
      select: {
        Name:true,
        Universityname:true,
        id:true,
        StudentId:true,
        Phonenumber:true,
        Email:true,
        Branchname:true,
        Country:true,
        PaymentMethod:true,
        Paymentstatus:true,
        Status:true,
        Consultancyfee:true,
        Docs:true,
        createdAt:true,
        updatedAt:true,
        Secounddocs:true,
        Secoundpayment:true
      },
    });

    return new Response(JSON.stringify(getconsultancyinvoice), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ Error: "Error Fetching Data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
