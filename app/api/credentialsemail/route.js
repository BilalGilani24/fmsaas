import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email, username, and password are required." }),
        { status: 400 }
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,           // SSL port
      secure: true,        // true for port 465
      auth: {
        user: "Enquire@fmglobaledu.com",
        pass: "Fmc@$123456",
      },
    });

    // Email content
    const mailOptions = {
      from: "Enquire@fmglobaledu.com",
     
      to: email,
      subject: "Your Account Credentials",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <p>Dear User,</p>
          <p>Your account has been created successfully. Here are your login credentials:</p>
          <ul>
            <li><b>Username:</b> ${username}</li>
            <li><b>Password:</b> ${password}</li>
          </ul>
          <p>Please keep this information safe and do not share it with anyone.</p>
          <br/>
          <p>Best regards,<br/>FM Global Education Team</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Credentials email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending credentials email:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send credentials email.",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
