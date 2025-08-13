import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(req) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return new Response(JSON.stringify({ error: "Branch ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const deletebranch = await prisma.branch.delete({
      where: {
        id: id,
      },
    });

    return new Response(JSON.stringify(deletebranch), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting branch:", error);

    return new Response(JSON.stringify({ error: "Error deleting branch" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
