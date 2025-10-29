export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json(); // Parsing the request body
    const { AdminId } = body; // Extracting the `id` from the request body

    // Fetching students with matching AdminId and Role.Student
    const getstudent = await prisma.user.findMany({
      where: {
        AdminId: AdminId,
        Role: Role.Student,
      },
      select: {
        Name: true,
        BranchName: true,
        Role: true,
        Mobile: true,
        Status: true,
        Email: true,
        id: true,
        Password:true
      },
    });

    return new Response(JSON.stringify(getstudent), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ Error: "Error Fetching Data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
