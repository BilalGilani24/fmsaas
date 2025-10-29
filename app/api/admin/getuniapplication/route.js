export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { applicationId } = body;

    const getuniapplication = await prisma.studentapplication.findMany({
      where: {
        applicationId: applicationId,
      },
      select: {
    Intake:true,
    Applylevel:true,
    id:true,
    Course:true,
    Universityname:true,
    Applicationresult:true,
    Resultdoc:true
      },
    });

    return new Response(JSON.stringify(getuniapplication), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ Error: "Error fetchin University Applications" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
