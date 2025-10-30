export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { BranchName } = body;

    if (!BranchName) {
      return NextResponse.json(
        { error: "BranchName is required" },
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

    // Fetch applications based on admin IDs
    const getapplications = await prisma.application.findMany({
      where: {
        AdminId: { in: adminIds },
        Movetovisa: true,
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

    return NextResponse.json(getapplications, { status: 200 });
  } catch (error) {
    console.error("Error fetching applications:", error);
    return NextResponse.json(
      { error: "Error fetching applications" },
      { status: 500 }
    );
  }
}