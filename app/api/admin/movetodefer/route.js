export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { id } = body;

    const deferapplication = await prisma.visa.findUnique({
      where: { id: id },
    });

    if (!deferapplication) {
      return new Response(JSON.stringify({ error: "application not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    await prisma.defer.create({
      data: {
        Name: deferapplication.Name,
        Email: deferapplication.Email,
        Mobilenumber: deferapplication.Mobilenumber,
        Appliedcountry: deferapplication.Country,
        Deferintake: deferapplication.Intake,
        Applylevel: deferapplication.Applylevel,
        Branch: deferapplication.Branch,
        Deferletter :deferapplication.Doc,
        userId: deferapplication.userId,
        AdminId: deferapplication.AdminId,
        Deferreason:deferapplication.Deferreason,
        Course:deferapplication.Course
      },
    });

    return new Response(
      JSON.stringify({ message: "Moved to defer successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error moving defer:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
