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

    // Fetch all consultancy invoices linked to those admin IDs
    const consultancyInvoices = await prisma.consultancyinvoice.findMany({
      where: {
        userId: { in: adminIds }, // change if your linking field is named differently
      },
      select: {
        id: true,
        Name: true,
        Universityname: true,
        StudentId: true,
        Phonenumber: true,
        Email: true,
        Branchname: true,
        Country: true,
        PaymentMethod: true,
        Paymentstatus: true,
        Status: true,
        Consultancyfee: true,
        Docs: true,
        createdAt: true,
        updatedAt: true,
        Secounddocs: true,
        Secoundpayment: true,
        SecoundpaymentMethod: true,
      },
    });

    return NextResponse.json({ consultancyInvoices });
  } catch (error) {
    console.error("Error fetching consultancy invoices:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
