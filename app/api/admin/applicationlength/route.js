import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { AdminId } = await req.json();

    if (!AdminId) {
      return new Response(
        JSON.stringify({ error: "AdminId is required" }),
        { status: 400 }
      );
    }

    const getapplications = await prisma.application.findMany({
      where: {
        AdminId,
        Movetovisa: true,
      },
      select: {
        id: true,
        Branchname: true,
        Gender: true,
        DOB: true,
        Intake: true,
        Intrestedcountry: true,
        Applylevel: true,
        Test: true,
        Mobilenumber: true,
        Alternativenumber: true,
        Intrestedcourse: true,
        Emailaddress: true,
        FirstName: true,
        LastName: true,
        createdAt: true,
        updatedAt: true,
        AdminId: true,
        userId: true,
        Movetovisa: true,
      },
    });

    return new Response(JSON.stringify(getapplications), { status: 200 });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching applications" }),
      { status: 500 }
    );
  }
}
