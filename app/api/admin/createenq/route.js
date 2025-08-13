import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
      Enquirystatus,
    } = body;

    // Create a new enquiry in the database
    const createenquiry = await prisma.enquiry.create({
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
        Enquirystatus: "",
        Movetostudent:true
      },
    });

    return new Response(JSON.stringify(createenquiry), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating enquiry:", error);

    return new Response(JSON.stringify({ error: "Failed to create enquiry" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
