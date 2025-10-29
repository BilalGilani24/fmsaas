export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";


export async function POST(req) {
  const body = await req.json();
  const { StudentId } = body;

  try {
    const Uni = await prisma.suggesteduniversity.findMany({
      where: {
        StudentId: StudentId,
      }
    });

    if (Uni.length >= 1) {
      return new Response(JSON.stringify(true), { status: 200 });
    }

    return new Response(JSON.stringify(false), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ Error: "Error Fetching" }), {
      status: 500,
    });
  }
}
