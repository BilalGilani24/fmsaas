export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req, res) {
  try {
    const body = await req.json();
    const {
      Testname,
      Listening,
      Reading,
      Writing,
      Speaking,
      Overall,
      Totalscore,
      userId,
      StudentId,
      Docs
    } = body;

    const createproficencytest = await prisma.proficencytest.create({
      data: {
        Testname,
        Listening,
        Reading,
        Writing,
        Speaking,
        Overall,
        Totalscore,
        userId,
        StudentId,
        Docs
      },
    });

    return new Response(JSON.stringify(createproficencytest), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error adding proficency test:", error);

    return new Response(
      JSON.stringify({ error: "Failed to add  proficency test" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
