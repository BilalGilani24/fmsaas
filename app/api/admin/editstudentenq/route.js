export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";

export async function PUT(req) {
  try {
    const body = await req.json();
    const {
      id,
      Gender,
      DOB,
      Mobilenumber,
      Test,
      Applylevel,
      Intake,
      Intrestedcountry,
      FirstName,
      LastName,
      Source,
      Emailaddress,
      Intrestedcourse,
      Studentstatus,
      Appointmentremarks,
    } = body;

    const updateenquiries = await prisma.createstudent.update({
      where: {
        id: id,
      },
      data: {
        Gender,
        DOB,
        Intake,
        Intrestedcountry,
        Applylevel,
        Test,
        Mobilenumber,
        FirstName,
        LastName,
        Source,
        Emailaddress,
        Intrestedcourse,
        Studentstatus,
        Appointmentremarks,
      },
    });

    return new Response(JSON.stringify(updateenquiries), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating Enquiry:", error);

    if (error.code === "P2025") {
      return new Response(JSON.stringify({ error: "Enquiry not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Error updating Enquiry" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
