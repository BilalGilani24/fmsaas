export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, Visastatus, Doc, Deferreason } = body;

    const Visa = await prisma.visa.update({
      where: {
        id: id,
      },
      data: {
        Visastatus,
        Doc,
        Deferreason,
      },
    });

    return new Response(JSON.stringify(Visa), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating visa status :", error);

    if (error.code === "P2025") {
      return new Response(JSON.stringify({ error: "visa status not  found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ error: "Error updating visa status " }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
