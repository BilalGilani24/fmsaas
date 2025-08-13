import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { id } = body;

    const students = await prisma.createstudent.findUnique({
      where: { id: id },
    });

    if (!students) {
      return new Response(JSON.stringify({ error: "Students not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    await prisma.application.create({
      data: {
        FirstName: students.FirstName,
        LastName: students.LastName,
        Emailaddress: students.Emailaddress,
        Gender: students.Gender,
        Intrestedcountry: students.Intrestedcountry,
        DOB: students.DOB,
        Intake: students.Intake,
        Applylevel: students.Applylevel,
        Test: students.Test,
        Mobilenumber: students.Mobilenumber,
        Alternativenumber: students.Alternativenumber,
        Intrestedcourse: students.Intrestedcourse,
        Branchname: students.Branchname,
        createdAt: students.createdAt,
        updatedAt: students.updatedAt,
        userId: students.userId,
        AdminId: students.AdminId,
        Movetovisa:true
      },
    });

  
    return new Response(
      JSON.stringify({ message: "Moved to application successfully" }),
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

    await prisma.createstudent.update({
      where: { id },
      data: {
       Movetoapplication: false
      },
    });

    return new Response(JSON.stringify({
      message: 'Movetoapplication set to false successfully',
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in PUT /movetostudent:', error);
    return new Response(JSON.stringify({ error: 'Failed to update Movetostudent' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}