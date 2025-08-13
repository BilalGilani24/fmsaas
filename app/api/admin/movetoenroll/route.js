import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { id } = body;

    const Enrollapplication = await prisma.visa.findUnique({
      where: { id: id },
    });

    if (!Enrollapplication) {
      return new Response(JSON.stringify({ error: "application not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    await prisma.enroll.create({
      data: {
        Name: Enrollapplication.Name,
        Email: Enrollapplication.Email,
        Mobilenumber: Enrollapplication.Mobilenumber,
        Appliedcountry: Enrollapplication.Country,
        Enrollintake: Enrollapplication.Intake,
        Applylevel: Enrollapplication.Applylevel,
        Branch: Enrollapplication.Branch,
        userId: Enrollapplication.userId,
        AdminId: Enrollapplication.AdminId,
        Approveletter:Enrollapplication.Doc,
        Course:Enrollapplication.Course
      },
    });

    return new Response(
      JSON.stringify({ message: "Moved to enroll successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error moving enroll:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
