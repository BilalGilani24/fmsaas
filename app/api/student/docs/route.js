export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { StudentId } = body;

  try {
    // Fetch academic details
    const academicdetails = await prisma.academicdetail.findMany({
      where: { StudentId },
    });

    // Fetch proficiency tests
    const proficiencytests = await prisma.proficencytest.findMany({
      where: { StudentId },
    });

    // Conditions
    const hasTwoOrMoreAcademic = academicdetails.length >= 2;
    const hasOneOrMoreProficiency = proficiencytests.length >= 1;

    return new Response(
      JSON.stringify({
        academic: hasTwoOrMoreAcademic,
        proficiency: hasOneOrMoreProficiency,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ Error: "Error Fetching" }), {
      status: 500,
    });
  }
}
