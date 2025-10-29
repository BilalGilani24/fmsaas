export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const body = await req.json();
    const {
      Qualification,
      Subject,
      Institute,
      Grade,
      Backlogs,
      YearStarting,
      Yearpassing,
      Docs,
      userId,
      StudentId,
    } = body;

    const Addacademicdetails = await prisma.academicdetail.create({
      data: {
        Qualification,
        Subject,
        Institute,
        Grade,
        Backlogs,
        YearStarting,
        Yearpassing,
        Docs,
        userId,
        StudentId,
      },
    });

    return new Response(JSON.stringify(Addacademicdetails), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error adding student academic details:", error);

    return new Response(
      JSON.stringify({ error: "Failed to add student academic details" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
