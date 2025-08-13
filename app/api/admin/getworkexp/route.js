import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { StudentId } = body;

    const getworkexp = await prisma.workexp.findMany({
      where: {
        StudentId: StudentId,
      },
      select: {
        Comapanyname:true,
        Position:true,
        StartingDate:true,
        EndingDate:true,
        TotalExperince:true,
        userId:true,
        StudentId:true,
        Docs: true,
        id:true
      },
    });

    return new Response(JSON.stringify(getworkexp), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ Error: "Error fetchin work exp" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
