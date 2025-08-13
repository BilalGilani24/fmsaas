import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { StudentId } = body; // Expecting an array of IDs

    if (!Array.isArray(StudentId) || StudentId.length === 0) {
      return new Response(
        JSON.stringify({ error: "StudentIds array is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const results = [];

    // Use a different variable name for the loop
    for (const id of StudentId) {
      const academicCount = await prisma.academicdetail.count({
        where: { StudentId: id },
      });

      const proficiencyCount = await prisma.proficencytest.count({
        where: { StudentId: id },
      });

      const workExpCount = await prisma.workexp.count({
        where: { StudentId: id },
      });

      const isValid =
        academicCount >= 3 &&
        proficiencyCount >= 1 &&
        workExpCount >= 1;

      results.push({ StudentId: id, result: isValid });
    }

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Error Fetching Data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
