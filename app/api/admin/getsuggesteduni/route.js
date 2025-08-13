import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { StudentId } = body;

    const getsuggesteduniversity = await prisma.suggesteduniversity.findMany({
      where: {
        StudentId: StudentId,
      },
      select: {
      id:true,
      Universityname:true,
      Intake:true,
      Country:true
      }
    });

    return new Response(JSON.stringify(getsuggesteduniversity ), {
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
