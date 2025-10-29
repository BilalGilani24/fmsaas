export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";


export async function GET() {
  try {
    const users = await prisma.user.findMany({
      where: {
        Role: {
          in: ["Admin", "Superadmin"],
        },
      },
      select: {
        id: true,
        Name: true,
        Email: true,
        BranchName:true
      },
    });

    return new Response(JSON.stringify(users), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
