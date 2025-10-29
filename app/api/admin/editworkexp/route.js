export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req) {
  try {
    const body = await req.json();
    const {
        id,
      Comapanyname,
      Position,
      StartingDate,
      EndingDate,
      TotalExperince,
      userId,
      StudentId,
      Docs,
    } = body;

    const updateworkexp = await prisma.workexp.update({
          where: {
        id: id
      },
      data: {
        Comapanyname,
        Position,
        StartingDate,
        EndingDate,
        TotalExperince,
        userId,
        StudentId,
        Docs,
      },
    });

    return new Response(JSON.stringify(updateworkexp), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating work experince:", error);

    return new Response(
      JSON.stringify({ error: "Failed to update work experince" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
