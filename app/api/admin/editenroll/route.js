export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, isEnrolled } = body;

    const Enroll = await prisma.enroll.update({
      where: {
        id: id,
      },
      data: {
        isEnrolled
      },
    });

    return new Response(JSON.stringify(Enroll), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating student enroll :", error);

    if (error.code === "P2025") {
      return new Response(
        JSON.stringify({ error: "student enroll not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: "Error updating suggested university " }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
