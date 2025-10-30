export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { userId, BranchName } = body;

    // Build the where clause dynamically
    const whereClause = {
      Movetostudent: true,
    };

    // If BranchName is provided, fetch data by branch
    if (BranchName) {
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

      // Filter by multiple admin IDs
      whereClause.userId = { in: adminIds };
    } 
    // If userId is provided, fetch data by specific user
    else if (userId) {
      whereClause.userId = userId;
    } 
    // If neither is provided, return error
    else {
      return NextResponse.json(
        { error: "Either userId or BranchName is required" },
        { status: 400 }
      );
    }

    // Fetch enquiries based on the where clause
    const getbranch = await prisma.enquiry.findMany({
      where: whereClause,
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
        Enquirystatus: true,
        updatedAt: true,
        Movetostudent: true,
      },
    });

    return NextResponse.json(getbranch, { status: 200 });
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    return NextResponse.json(
      { error: "Error Fetching enquiries" },
      { status: 500 }
    );
  }
}