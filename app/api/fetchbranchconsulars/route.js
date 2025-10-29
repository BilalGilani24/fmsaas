export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";


export async function POST(req) {
  try {
    const body = await req.json();
    const { BranchName } = body;
    const Branchconsulars = await prisma.user.findMany({
      where: {
        BranchName: BranchName,
      },
      select: {
        Name: true,
        Email: true,
        Mobile: true,
        Status: true,
        Password: true,
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
