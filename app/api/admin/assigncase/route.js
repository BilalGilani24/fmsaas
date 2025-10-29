export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(req) {
  try {
    const body = await req.json();
    const { userId, AdminId,StudentId } = body;



 

    // ===== Createstudent (single record expected) =====
    const student = await prisma.createstudent.findFirst({
      where: { userId },
      select: { id: true },
    });

    if (!student) {
      return new Response(
        JSON.stringify({ error: "Student not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    await prisma.createstudent.update({
      where: { id: student.id },
      data: { AdminId },
    });

    await prisma.user.update({
      where: { id: userId },
      data: { AdminId },
    });

    // ===== Academicdetail =====
    const academicCount = await prisma.academicdetail.count({ where: { StudentId } });
    if (academicCount > 0) {
      await prisma.academicdetail.updateMany({
        where: { StudentId },
        data: { userId },
      });
    }

    // ===== Proficencytest =====
    const profTestCount = await prisma.proficencytest.count({ where: { StudentId } });
    if (profTestCount > 0) {
      await prisma.proficencytest.updateMany({
        where: { StudentId},
        data: { userId },
      });
    }

    // ===== Workexp =====
    const workExpCount = await prisma.workexp.count({ where: { StudentId } });
    if (workExpCount > 0) {
      await prisma.workexp.updateMany({
        where: { StudentId },
        data: { userId },
      });
    }

    // ===== Suggesteduniversity =====
    const suggestedUniCount = await prisma.suggesteduniversity.count({ where: { StudentId} });
    if (suggestedUniCount > 0) {
      await prisma.suggesteduniversity.updateMany({
        where: {StudentId},
        data: { userId },
      });
    }

    // ===== Application =====
    const applicationCount = await prisma.application.count({ where: { userId } });
    if (applicationCount > 0) {
      await prisma.application.updateMany({
        where: { userId },
        data: { AdminId },
      });
    }

     const visaCount = await prisma.application.count({ where: { userId } });
    if (visaCount > 0) {
      await prisma.visa.updateMany({
        where: { userId },
        data: { AdminId },
      });
    }

    return new Response(
      JSON.stringify({ message: "Case assigned successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error assigning case:", error);

    if (error.code === "P2025") {
      return new Response(
        JSON.stringify({ error: "Record not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Error assigning case" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
