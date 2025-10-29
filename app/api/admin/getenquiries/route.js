export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";


export async function GET(res) {
  try {
    const getbranch = await prisma.enquiry.findMany({
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
      },
    });
    return new Response(JSON.stringify(getbranch), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ Error: "Error Fetching " }), {
      status: 500,
    });
  }
}
