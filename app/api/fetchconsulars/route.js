import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const getconsular = await prisma.user.findMany({
      select: {
        Name: true,
        Email: true,
        Mobile: true,
        Status: true,
        Password: true,
        BranchName: true,
      },
    });
    return new Response(JSON.stringify(getconsular), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ Error: "Error Fetching Branches" }), {
      status: 500,
    });
  }
}
