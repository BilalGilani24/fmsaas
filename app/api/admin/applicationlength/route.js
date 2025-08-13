import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { AdminId } = body;
  try {
    const getapplications = await prisma.application.findMany({
      where: {
        AdminId: AdminId,
        Movetovisa:true
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
        AdminId:true,
        userId:true,
        Movetovisa:true
        
      },
    });
    return new Response(JSON.stringify(getapplications), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ Error: "Error Fetching " }), {
      status: 500,
    });
  }
}
