import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic"; // ✅ Prevents Next.js from static generation



export async function GET() {
  try {
    const getbranch = await prisma.branch.findMany({
      select: {
        id: true,
        Branchname: true,
      },
    });

    return new Response(JSON.stringify(getbranch), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching branches:", error);

    return new Response(
      JSON.stringify({ error: "Error fetching branches" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
