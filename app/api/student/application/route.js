export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { userId } = body;

  try {
    const applicationCount = await prisma.application.count({
      where: {
        userId: userId,
      },
    });

    return new Response(JSON.stringify(applicationCount), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ Error: "Error Fetching" }), {
      status: 500,
    });
  }
}
