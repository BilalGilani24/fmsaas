import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { id } = body;
    const Branchconsulars = await prisma.user.findMany({
      where: {
        id: id,
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
    return new Response(JSON.stringify(Branchconsulars), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
