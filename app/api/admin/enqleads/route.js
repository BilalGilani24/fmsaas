export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const {  userId } = body;

    if (!userId) {
      return new Response(JSON.stringify({ success: false, error: "userId is required" }), {
        status: 400,
      });
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
        const count = await prisma.enquiry.count({
          where: {
            Intrestedcountry: country,
            userId:  userId,
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
