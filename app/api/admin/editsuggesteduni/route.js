export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, Universityname, Intake, Country } = body;

    const updatesuggesteduniversity = await prisma.suggesteduniversity.update({
      where: {
        id: id,
      },
      data: {
        Universityname,
        Intake,
        Country,
      },
    });

    return new Response(JSON.stringify(updatesuggesteduniversity), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating suggested university :", error);

    if (error.code === "P2025") {
      return new Response(
        JSON.stringify({ error: "suggested university not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: "Error updating suggested university " }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
