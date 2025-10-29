export const dynamic = "force-dynamic"; // ✅ Prevents static optimization errors

import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

function generateRandomPassword(length = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// 📧 Send credentials email
async function sendCredentialsEmail(to, firstName, email, password) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // ✅ Hostinger SMTP
    port: 465,
    secure: true,
    auth: {
      user: 'Enquire@fmglobaledu.com', // ✅ Your Hostinger email
      pass: 'Fmc@$123456',     // ⚠️ Replace with real password
    },
  });

  const mailOptions = {
    from: 'Enquire@fmglobaledu.com',
    to: to,
    subject: 'Your Student Portal Credentials',
    html: `
      <h3>Hello ${firstName},</h3>
      <p>Your account has been created successfully. Here are your login credentials:</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Password:</b> ${password}</p>
      <br/>
      <p>Please keep these credentials safe and do not share them with anyone.</p>
      <p>Best Regards,<br/>FM Global Education Team</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { id } = body;

    const enquiry = await prisma.enquiry.findUnique({
      where: { id: id },
    });

    if (!enquiry) {
      return new Response(JSON.stringify({ error: 'Enquiry not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const randomPassword = generateRandomPassword();

    // ✅ Create the user
    const newUser = await prisma.user.create({
      data: {
        Email: enquiry.Emailaddress,
        Password: randomPassword,
        Name: enquiry.FirstName + " " + enquiry.LastName,
        Mobile: enquiry.Mobilenumber,
        BranchName: enquiry.Branchname,
        Status: true,
        Role: 'Student',
        AdminId: enquiry.userId,
      },
    });

    // ✅ Create student
    await prisma.createstudent.create({
      data: {
        FirstName: enquiry.FirstName,
        LastName: enquiry.LastName,
        Emailaddress: enquiry.Emailaddress,
        Gender: enquiry.Gender,
        Intrestedcountry: enquiry.Intrestedcountry,
        DOB: enquiry.DOB,
        Intake: enquiry.Intake,
        Applylevel: enquiry.Applylevel,
        Test: enquiry.Test,
        Mobilenumber: enquiry.Mobilenumber,
        Alternativenumber: enquiry.Alternativenumber,
        Intrestedcourse: enquiry.Intrestedcourse,
        Branchname: enquiry.Branchname,
        Source: enquiry.Source,
        Appointmentdate: enquiry.Appointmentdate,
        Appointmenttime: enquiry.Appointmenttime,
        Appointmentremarks: enquiry.Appointmentremarks,
        Followupdate: enquiry.Followupdate,
        Followuptime: enquiry.Followuptime,
        Followupremarks: enquiry.Followupremarks,
        Studentstatus: "",
        userId: newUser.id,
        AdminId: enquiry.userId,
        Movetoapplication: true,
      },
    });

    // 📧 Send credentials email
    await sendCredentialsEmail(
      enquiry.Emailaddress,
      enquiry.FirstName,
      enquiry.Emailaddress,
      randomPassword
    );

    return new Response(
      JSON.stringify({ message: 'Moved to Student successfully. Credentials sent via email.', password: randomPassword }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error moving enquiry:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// ✅ PUT: Only set Movetostudent to false
export async function PUT(req) {
  try {
    const body = await req.json();
    const { id } = body;

    await prisma.enquiry.update({
      where: { id },
      data: { Movetostudent: false },
    });

    return new Response(
      JSON.stringify({ message: 'Movetostudent set to false successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in PUT /movetostudent:', error);
    return new Response(JSON.stringify({ error: 'Failed to update Movetostudent' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
