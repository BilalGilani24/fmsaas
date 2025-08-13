const { PrismaClient, Role } = require("@prisma/client"); // Import Role
const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      Email,
      Password,
      Name,
      Mobile,
      BranchName,
      Role: userRole = Role.Superadmin, // Default to Role.Admin
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
        Role: userRole, // Use Role from Prisma
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
