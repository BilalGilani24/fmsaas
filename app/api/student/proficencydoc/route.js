export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { StudentId } = body;

  try {
    const proficencytests = await prisma.proficencytest.findMany({
      where: {
        StudentId: StudentId,
      },
    });

    if (proficencytests.length >= 1) {
      return new Response(JSON.stringify(true), { status: 200 });
    }

    return new Response(JSON.stringify(false), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ Error: "Error Fetching" }), {
      status: 500,
    });
  }
}
