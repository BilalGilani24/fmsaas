export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req, res) {
  try {
    const body = await req.json();
    const {
      Qualification,
      id,
      Subject,
      Institute,
      Grade,
      Backlogs,
      YearStarting,
      Yearpassing,
      Docs,
    } = body;

    const updateacademicdetail = await prisma.academicdetail.update({
      where: {
        id: id,
      },
      data: {
        Qualification,
        Subject,
        Institute,
        Grade,
        Backlogs,
        YearStarting,
        Yearpassing,
        Docs,
      },
    });

    return new Response(JSON.stringify(updateacademicdetail), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating Enquiry:", error);

    if (error.code === "P2025") {
      return new Response(JSON.stringify({ error: "Enquiry not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Error updating Enquiry" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
