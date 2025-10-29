export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import prisma from "@/lib/prisma";


export async function PUT(req) {
  try {
    const body = await req.json();
    const {
      id,
      Testname,
     Listening,
      Reading,
      Writing,
      Speaking,
      Overall,
      Totalscore,
      Docs
    
    } = body;

    const updateproficencytest = await prisma.proficencytest.update({
      where: {
        id: id,
      },
      data: {
     
      Testname,
     Listening,
      Reading,
      Writing,
      Speaking,
      Overall,
      Totalscore,
      Docs
      },
    });

    return new Response(JSON.stringify(updateproficencytest), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating Proficency test :", error);

    if (error.code === "P2025") {
      return new Response(JSON.stringify({ error: "Proficency test not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Error updating proficency test " }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
