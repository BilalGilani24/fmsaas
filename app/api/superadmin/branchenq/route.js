import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { BranchName } = body;

    if (!BranchName) {
      return NextResponse.json(
        { error: "Branch name is required" },
        { status: 400 }
      );
    }

    // Fetch all Admins for the given BranchName
    const admins = await prisma.user.findMany({
      where: {
        BranchName: BranchName,
        Role: "Admin",
      },
      select: {
        id: true,
      },
    });

    // Extract admin IDs
    const adminIds = admins.map((admin) => admin.id);

    if (adminIds.length === 0) {
      return NextResponse.json(
        { message: "No admins found for this branch." },
        { status: 404 }
      );
    }

    // Fetch all enquiries linked to those admin IDs
    const enquiries = await prisma.enquiry.findMany({
      where: {
        userId: { in: adminIds }, // ✅ Correct filter for multiple IDs
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

    return NextResponse.json( enquiries );
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
