import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { AdminId } = body;

    if (!AdminId) {
      return new Response(JSON.stringify({ success: false, error: "AdminId is required" }), {
        status: 400,
      });
    }

    const countries = ["United Kingdom", "Australia", "Canada", "Malaysia","United States"];

    const results = await Promise.all(
      countries.map(async (country) => {
        const count = await prisma.enroll.count({
          where: {
            Appliedcountry: country,
            AdminId: AdminId,
          },
        });

        return {
          country,
          count,
        };
      })
    );

    return new Response(JSON.stringify(results), {
      status: 200,
    });
  } catch (error) {
    console.error("Error getting defer counts:", error);
    return new Response(JSON.stringify({ success: false, error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
