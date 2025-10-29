import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"; // ✅ Prevents static generation issues



export async function PUT(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const { id, Branchname } = body;

    // Validate inputs
    if (!id || !Branchname) {
      return new Response(
        JSON.stringify({ error: "Branch ID and Branch Name are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Update the branch in the database
    const updatedBranch = await prisma.branch.update({
      where: { id },
      data: { Branchname },
    });

    return new Response(JSON.stringify(updatedBranch), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating branch:", error);

    // Handle case where branch ID does not exist
    if (error.code === "P2025") {
      return new Response(JSON.stringify({ error: "Branch not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ error: "Error updating branch" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
