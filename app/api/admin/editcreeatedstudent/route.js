export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, Studentstatus } = body;

    const updatecreatedstudent = await prisma.createstudent.update({
      where: {
        id: id,
      },
      data: {
        Studentstatus
        
      },
    });

    return new Response(JSON.stringify(updatecreatedstudent), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating created student :", error);

    if (error.code === "P2025") {
      return new Response(
        JSON.stringify({ error: "created student not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: "Error updating created student " }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
