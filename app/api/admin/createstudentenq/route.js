export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const {
      FirstName,
      LastName,
      Emailaddress,
      Gender,
      Intrestedcountry,
      DOB,
      userId,
      Intake,
      Applylevel,
      Test,
      Branchname,
      Source,
      Mobilenumber,
      Alternativenumber,
      Intrestedcourse,
      Appointmentdate,
      Appointmenttime,
      Appointmentremarks,
      Followupdate,
      Followuptime,
      Followupremarks,
      Studentstatus,
      AdminId,
    } = body;

    // Create a new enquiry in the database
    const createenquiry = await prisma.createstudent.create({
      data: {
        FirstName,
        LastName,
        Emailaddress,
        Gender,
        Intrestedcountry,
        DOB,
        userId,
        Intake,
        Applylevel,
        Test,
        Branchname,
        Source,
        Mobilenumber,
        Alternativenumber,
        Intrestedcourse,
        Appointmentdate,
        Appointmenttime,
        Appointmentremarks,
        Followupdate,
        Followuptime,
        Followupremarks,
        Studentstatus: "",
        AdminId,
        Movetoapplication:true
      },
    });

    return new Response(JSON.stringify(createenquiry), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating student enquiry:", error);

    return new Response(
      JSON.stringify({ error: "Failed to create student enquiry" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
