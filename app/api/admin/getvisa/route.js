import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { AdminId } = body;
  try {
    const getvisa = await prisma.visa.findMany({
      where: {
        AdminId: AdminId,
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
        Visastatus:true
      },
    });
    return new Response(JSON.stringify(getvisa), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ Error: "Error Fetching " }), {
      status: 500,
    });
  }
}
