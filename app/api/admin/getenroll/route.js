import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { AdminId } = body;
  try {
    const getvisa = await prisma.enroll.findMany({
      where: {
        AdminId: AdminId,
      },
      select: {
        id: true,
        Branch:true,
        Name:true,
        Email:true,
        Mobilenumber:true,
        Enrollintake:true,
        Course:true,
        Appliedcountry:true,
        Applylevel:true,
        Approveletter:true,
        isEnrolled:true
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
