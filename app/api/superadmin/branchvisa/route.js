export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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

    // Fetch all visa records linked to those admin IDs
    const visas = await prisma.visa.findMany({
      where: {
        AdminId: { in: adminIds }, // make sure this matches your schema field name
      },
      select: {
        id: true,
        Branch: true,
        Intake: true,
        Country: true,
        Applylevel: true,
        Mobilenumber: true,
        Email: true,
        Name: true,
        createdAt: true,
        updatedAt: true,
        AdminId: true,
        userId: true,
        Visastatus:true
      },
    });

    return NextResponse.json( visas );
  } catch (error) {
    console.error("Error fetching visas:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
