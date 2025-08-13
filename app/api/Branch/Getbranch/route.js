import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(res) {
  try {
    const getbranch = await prisma.branch.findMany({
      select: {
        id: true,
        Branchname: true,
      },
    });
    return new Response(JSON.stringify(getbranch), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ Error: "Error Fetching Branches" }), {
      status: 500,
    });
  }
}
