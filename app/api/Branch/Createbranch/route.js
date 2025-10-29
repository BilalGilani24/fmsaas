export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { Branchname } = body;

    if (!Branchname) {
      return NextResponse.json(
        { error: "Enter Branch Name" },
        { status: 400 }
      );
    }

    const createbranch = await prisma.branch.create({
      data: { Branchname },
    });

    return NextResponse.json(createbranch, { status: 201 });
  } catch (error) {
    console.error("Error creating branch:", error);
    return NextResponse.json(
      { error: "Failed to create Branch" },
      { status: 500 }
    );
  }
}
