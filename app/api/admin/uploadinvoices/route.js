export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, Docs,Secounddocs } = body;

    const updatesconsultancyinvoice = await prisma.consultancyinvoice.update({
      where: {
        id: id,
      },
      data: {
    Docs,
       Secounddocs 
      },
    });

    return new Response(JSON.stringify(updatesconsultancyinvoice), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating consultancy invoice docs :", error);

    if (error.code === "P2025") {
      return new Response(
        JSON.stringify({ error: "updating consultancy invoice docs" }),
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
