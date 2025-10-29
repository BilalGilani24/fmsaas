export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, Secoundpayment, Secounddocs, SecoundpaymentMethod } = body;

    const updatesconsultancyinvoice = await prisma.consultancyinvoice.update({
      where: {
        id: id,
      },
      data: {
        Secoundpayment,
        Secounddocs,
         SecoundpaymentMethod
      },
    });

    return new Response(JSON.stringify(updatesconsultancyinvoice), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating consultancy invoice :", error);

    if (error.code === "P2025") {
      return new Response(
        JSON.stringify({ error: "suggested consultancy invoice not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: "Error updating consultancy invoice " }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
