import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { AdminId } = body;
  try {
    const getstudents = await prisma.createstudent.findMany({
      where: {
        AdminId: AdminId,
      },
      select: {
        id: true,
            Movetoapplication:true,
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
        Appointmentdate: true,
        Appointmenttime: true,
        Appointmentremarks: true,
        Followupdate: true,
        Followupremarks: true,
        Followuptime: true,
        Emailaddress: true,
        FirstName: true,
        LastName: true,
        Source: true,
        createdAt: true,
       Studentstatus:true,
        updatedAt: true,
        AdminId:true,
        userId:true,
    
        
      },
    });
    return new Response(JSON.stringify(getstudents), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ Error: "Error Fetching " }), {
      status: 500,
    });
  }
}
