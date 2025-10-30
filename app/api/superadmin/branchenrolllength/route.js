export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { BranchName } = body;

    if (!BranchName) {
      return NextResponse.json(
        { success: false, error: "BranchName is required" },
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
        { success: false, message: "No admins found for this branch." },
        { status: 404 }
      );
    }

    const countries = [
      "United States",
      "United Kingdom",
      "Canada",
      "Malaysia",
      "Australia",
      "Finland",
      "Lithuania",
      "Spain",
      "Ireland",
      "France",
      "Germany",
      "Sweden",
      "Romania",
      "UAE",
    ];

    const results = await Promise.all(
      countries.map(async (country) => {
        const count = await prisma.enroll.count({
          where: {
            Appliedcountry: country,
            AdminId: { in: adminIds },
          },
        });

        return {
          country,
          count,
        };
      })
    );

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error("Error getting enroll counts:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}