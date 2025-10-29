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

    // Fetch all applications linked to those admin IDs
    const applications = await prisma.application.findMany({
      where: {
        AdminId: { in: adminIds }, // adjust if your linking field is named differently
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
        AdminId: true,
        userId: true,
        Movetovisa: true,
      },
    });

    return NextResponse.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
