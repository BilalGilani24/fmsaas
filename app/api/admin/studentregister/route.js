export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { Role } from "@prisma/client";
import prisma from "@/lib/prisma";


export async function POST(req) {
  try {
    const body = await req.json();
    const {
      Email,
      Password,
      Name,
      Mobile,
      BranchName,
      
      Role: userRole = Role.Student,
      AdminId,
    } = body;
    const Active = true;
    const createuser = await prisma.user.create({
      data: {
        Email,
        Password,
        Name,
        Mobile,
        BranchName,
        Status: Active,
        Role: userRole,
        AdminId,
      },
    });

    return new Response(JSON.stringify(createuser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error.message); // Log specific error
    return new Response(JSON.stringify({ error: "Failed to create account" }), {
      status: 500,
    });
  }
}
