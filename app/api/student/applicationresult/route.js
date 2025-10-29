export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { userId } = body;

  try {
    // Step 1: Get all application IDs for the user
    const applications = await prisma.application.findMany({
      where: { userId },
      select: { id: true },
    });

    if (!applications.length) {
      return new Response(JSON.stringify([]), { status: 200 });
    }

    const applicationIds = applications.map((app) => app.id);

    // Step 2: Fetch student applications linked to those application IDs
    const studentApplications = await prisma.studentapplication.findMany({
      where: {
        applicationId: { in: applicationIds }, // assuming FK is `applicationId`
      },
      select: {
        Universityname: true,
        Course: true,
        Intake: true,
        Applylevel: true,
        Applicationresult: true,
        Resultdoc: true,
      },
    });

    return new Response(JSON.stringify(studentApplications), { status: 200 });
  } catch (error) {
    console.error("Error fetching student applications:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching student applications" }),
      { status: 500 }
    );
  }
}
