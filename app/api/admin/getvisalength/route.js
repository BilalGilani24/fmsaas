export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";


export async function POST(req) {
  try {
    const { AdminId } = await req.json();

    if (!AdminId) {
      return new Response(
        JSON.stringify({ error: "AdminId is required" }),
        { status: 400 }
      );
    }

    // Corrected the Visastatus filter
    const getvisa = await prisma.visa.findMany({
      where: {
        AdminId,
        Visastatus: {
          in: ["Applied", "Not Applied"],
        },
      },
      select: {
        id: true,
        Branch: true,
        Intake: true,
        Country: true,
        Applylevel: true,
        Mobilenumber: true,
        Email: true,
        Name: true,
        createdAt: true,
        updatedAt: true,
        AdminId: true,
        userId: true,
        Visastatus: true,
      },
    });

    return new Response(JSON.stringify(getvisa), { status: 200 });
  } catch (error) {
    console.error("Error fetching visas:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching visas" }),
      { status: 500 }
    );
  }
}
