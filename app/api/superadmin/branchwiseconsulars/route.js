import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { BranchName } = body;

    const getconsular = await prisma.user.findMany({
      where: {
        BranchName: BranchName, // ✅ Correct filter
        Role: "Admin",
      },
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
    console.error(error);
    return new Response(
      JSON.stringify({ Error: "Error Fetching Branches" }),
      { status: 500 }
    );
  }
}
