export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id } = body;

   
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        Status: true,
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        Status: !user.Status,
      },
    });

    return new Response(JSON.stringify(updatedUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating student status:", error);
    return new Response(
      JSON.stringify({ error: "Error updating student status" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
