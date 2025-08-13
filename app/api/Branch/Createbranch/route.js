import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the request body
    const { Branchname } = body;

    // Validate the Branchname field
    if (!Branchname) {
      return new Response(JSON.stringify({ error: "Enter Branch Name" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create a new branch in the database
    const createbranch = await prisma.branch.create({
      data: { Branchname },
    });

    return new Response(JSON.stringify(createbranch), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating branch:", error);

    return new Response(JSON.stringify({ error: "Failed to create Branch" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
