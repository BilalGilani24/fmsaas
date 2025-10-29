export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { StudentId } = body;

    const getstudentproficencytest = await prisma.proficencytest.findMany({
      where: {
        StudentId: StudentId,
      },
      select: {
        Testname:true,
        Listening:true,
        Reading:true,
        Writing:true,
        Speaking:true,
        Overall:true,
        Totalscore:true,
        id:true,
        Docs:true,
      },
    });

    return new Response(JSON.stringify(getstudentproficencytest), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ Error: "Error Fetching Data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
