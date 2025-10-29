export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { Universityname, Course, Intake, Applylevel, applicationId } = body;

    const universityapplication = await prisma.studentapplication.create({
      data: {
        Universityname,
        Course,
        Intake,
        Applylevel,
        applicationId,
        Applicationresult:"",
        Resultdoc:""
      },
    });

    return new Response(JSON.stringify(universityapplication), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating university application:", error);

    return new Response(
      JSON.stringify({ error: "Failed to create university application" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
