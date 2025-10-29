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

    const getstudents = await prisma.createstudent.findMany({
      where: {
        AdminId,
        Movetoapplication: true,
      },
      select: {
        id: true,
        Movetoapplication: true,
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
        Studentstatus: true,
        createdAt: true,
        updatedAt: true,
        AdminId: true,
        userId: true,
      },
    });

    return new Response(JSON.stringify(getstudents), { status: 200 });
  } catch (error) {
    console.error("Error fetching students:", error);
    return new Response(
      JSON.stringify({ error: "Error fetching students" }),
      { status: 500 }
    );
  }
}
