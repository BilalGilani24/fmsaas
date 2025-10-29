export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { id } = body;

    const applications = await prisma.application.findUnique({
      where: { id: id },
    });

    if (!applications) {
      return new Response(JSON.stringify({ error: "application not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    await prisma.visa.create({
      data: {
        Name: applications.FirstName + " " + applications.LastName,
        Email: applications.Emailaddress,
        Mobilenumber: applications.Mobilenumber,
        Country: applications.Intrestedcountry,
        Intake: applications.Intake,
        Applylevel: applications.Applylevel,
        Branch: applications.Branchname,
        Visastatus:"",
        userId: applications.userId,
        AdminId: applications.AdminId,
        Doc:"",
        Deferreason:"",
        Course:applications.Intrestedcourse
      },
    });

    return new Response(
      JSON.stringify({ message: "Moved to visa successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error moving enquiry:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
export async function PUT(req) {
  try {
    const body = await req.json();
    const { id } = body;

    await prisma.application.update({
      where: { id },
      data: {
       Movetovisa: false
      },
    });

    return new Response(JSON.stringify({
      message: 'Movetovisa set to false successfully',
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in PUT /movetovisa:', error);
    return new Response(JSON.stringify({ error: 'Failed to update Movetovisa' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}