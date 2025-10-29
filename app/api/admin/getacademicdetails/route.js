export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { StudentId } = body;

    const getstudentacedmic = await prisma.academicdetail.findMany({
      where: {
        StudentId: StudentId,
      },
      select: {
        Qualification: true,
        id: true,
        Subject: true,
        Institute: true,
        Grade: true,
        Backlogs: true,
        Yearpassing: true,
        YearStarting: true,
        Docs: true,
      },
    });

    return new Response(JSON.stringify(getstudentacedmic), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ Error: "Error Fetching Data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
