export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors
import prisma from "@/lib/prisma";


export async function POST(req) {
  try {
    const body = await req.json();
    const {
     Universityname,
  Intake,         
  Country,        
      userId,
      StudentId,
    } = body;

    const suggesteduniversity = await prisma.suggesteduniversity.create({
      data: {
         Universityname,
  Intake,         
  Country,        
      userId,
      StudentId,
      },
    });

    return new Response(JSON.stringify(suggesteduniversity), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error adding suggested university:", error);

    return new Response(
      JSON.stringify({ error: "Failed to add suggested university" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
