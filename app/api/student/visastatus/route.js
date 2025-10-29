export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { userId } = body;

  try {
    const studentvisa = await prisma.visa.findMany({
      where: {
        userId: userId, // correct placement
      },
      select: {
        Name: true,
        Email: true,
        Mobilenumber: true,
        Country: true,
        Branch: true,
        Intake: true,
        Visastatus: true,
        Doc: true,
        Deferreason: true,
        Applylevel: true,
        Course: true,
      },
    });

    return new Response(JSON.stringify(studentvisa), { status: 200 });
  } catch (error) {
    console.error("Error fetching student visa application:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching student visa applications" }),
      { status: 500 }
    );
  }
}
