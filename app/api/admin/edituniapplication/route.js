export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req) {
  try {
    const body = await req.json();
    const {
      id,
   Course,
   Applylevel,
   Intake,
   Universityname,
   Resultdoc,
   Applicationresult
    
    } = body;

    const updateuniapplication = await prisma.studentapplication.update({
      where: {
        id: id,
      },
      data: {
     
       Course,
   Applylevel,
   Intake,
   Universityname,
    Resultdoc,
   Applicationresult
      },
    });

    return new Response(JSON.stringify(updateuniapplication), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating Proficency test :", error);

    if (error.code === "P2025") {
      return new Response(JSON.stringify({ error: "University Application Not Found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Error updating university application " }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
