import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, university,country } = await req.json();

    if (!email || !university|| !country) {
      return new Response(
        JSON.stringify({ error: "university and country required." }),
        { status: 400 }
      );
    }

    // Nodemailer transporter with Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "Enquire@fmglobaledu.com",
        pass: "Fmc@$123456",
      },
    });

    // HTML email layout
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 700px;">

  <!-- Appointment message (TOP) -->
  <div style="margin-bottom: 25px;">
    <p>Dear Student,</p>
    <p>Your appointment is scheduled at <b>${university}</b>.</p>
    <p>Appointment Remarks: ${country}</p>
    <p>We look forward to seeing you.</p>

    <br/>
    <p>Best regards,<br/><b>FM Global Education Team</b></p>
  </div>

  <hr style="margin: 25px 0; border: none; border-top: 1px solid #ccc;" />

  <!-- FM Consultants Footer -->
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <!-- Left: FM Logo -->
      <td style="width: 200px; vertical-align: top; border-right: 1px solid #ccc; padding-right: 20px;">
        <img src="https://www.fmglobaledu.com/storage/settings/1722761762.png" alt="FM Consultants" style="max-width: 150px; margin-bottom: 10px;" />
        <p style="font-size: 12px; color: #666; margin: 0;">
          <b>FM Consultants</b><br/>
          Overseas Education Consultant
        </p>
      </td>

      <!-- Right: Contact Info -->
      <td style="vertical-align: top; padding-left: 20px;">
        <h3 style="margin: 0; color: #1a4a7a;">M. Salman Mansoor</h3>
        <p style="margin: 2px 0; color: #1a4a7a; font-size: 14px;">Branch Manager Islamabad</p>
        <p style="margin: 2px 0; font-size: 13px; color: #333;">Mob: 0092-319-8453460</p>

        <h4 style="margin-top: 20px; color: #1a4a7a;">Islamabad Office:</h4>
        <p style="margin: 2px 0; font-size: 13px;">
          Office No 6-18, Ground Floor, Parkland Business Centre,<br/>
          I-8 Markaz, Islamabad, Pakistan.
        </p>
        <p style="margin: 2px 0; font-size: 13px;">
          Email: <a href="mailto:salman@fmglobaledu.com">salman@fmglobaledu.com</a><br/>
          Web: <a href="https://www.fmglobaledu.com">www.fmglobaledu.com</a><br/>
          Facebook: <a href="https://www.facebook.com/FMConsultantsIslamabad">FM Consultants Islamabad</a><br/>
          WhatsApp/Viber: 0092-319-8453460
        </p>
      </td>
    </tr>
  </table>

</div>


    `;

    // Email details
    const mailOptions = {
      from: "Enquire@fmglobaledu.com",
      to: email,
      subject: "Application Status",
      html: htmlContent,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending  email:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send  email.",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
