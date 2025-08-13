import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      Comapanyname,
      Position,
      StartingDate,
      EndingDate,
      TotalExperince,
      userId,
      StudentId,
      Docs,
    } = body;

    const createworkexp = await prisma.workexp.create({
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

    return new Response(JSON.stringify(createworkexp), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error adding work experince:", error);

    return new Response(
      JSON.stringify({ error: "Failed to add  work experince" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
