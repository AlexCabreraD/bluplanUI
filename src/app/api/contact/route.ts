import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, serviceType, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "BluPlan Studio <admin@bluplanstudio.com>",
      to: "admin@bluplanstudio.com",
      subject: `New Contact Form Submission${serviceType ? `: ${serviceType}` : ""}`,
      replyTo: email,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; font-family: 'Rajdhani', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; max-width: 600px; border: 1px solid #e0e0e0;">
          <!-- Header -->
          <tr>
            <td style="background-color: #0012BA; padding: 40px 20px; text-align: center;">
              <div style="color: #ffffff; font-size: 36px; font-weight: 700; margin: 0 0 10px 0; letter-spacing: 2px; font-family: 'Rajdhani', Arial, sans-serif;">BluPlan Studio</div>
              <h1 style="color: #ffffff; font-size: 20px; font-weight: 400; margin: 0; opacity: 0.95;">New Contact Form Submission</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px; background-color: #ffffff;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <!-- Name -->
                <tr>
                  <td style="padding-bottom: 24px;">
                    <div style="font-weight: 600; color: #0012BA; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">NAME</div>
                    <div style="color: #333333; padding: 14px; background-color: #f9f9f9; border-left: 4px solid #0012BA; font-size: 15px;">${name}</div>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding-bottom: 24px;">
                    <div style="font-weight: 600; color: #0012BA; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">EMAIL</div>
                    <div style="color: #0012BA; padding: 14px; background-color: #f9f9f9; border-left: 4px solid #0012BA; font-size: 15px;">
                      ${email}
                    </div>
                  </td>
                </tr>

                ${
                  phone
                    ? `
                <!-- Phone -->
                <tr>
                  <td style="padding-bottom: 24px;">
                    <div style="font-weight: 600; color: #0012BA; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">PHONE</div>
                    <div style="color: #0012BA; padding: 14px; background-color: #f9f9f9; border-left: 4px solid #0012BA; font-size: 15px;">
                      ${phone}
                    </div>
                  </td>
                </tr>
                `
                    : ""
                }

                ${
                  serviceType
                    ? `
                <!-- Service Type -->
                <tr>
                  <td style="padding-bottom: 24px;">
                    <div style="font-weight: 600; color: #0012BA; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">SERVICE TYPE</div>
                    <div style="color: #333333; padding: 14px; background-color: #f9f9f9; border-left: 4px solid #0012BA; font-size: 15px;">${serviceType}</div>
                  </td>
                </tr>
                `
                    : ""
                }

                <!-- Message -->
                <tr>
                  <td style="padding-bottom: 0;">
                    <div style="font-weight: 600; color: #0012BA; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">MESSAGE</div>
                    <div style="color: #333333; padding: 14px; background-color: #f9f9f9; border-left: 4px solid #0012BA; font-size: 15px; white-space: pre-wrap;">${message}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #2d2d2d; padding: 30px 20px; text-align: center;">
              <p style="color: #ffffff; margin: 0 0 15px 0; font-size: 13px;">This message was sent from the BluPlan Studio contact form</p>
              <p style="color: #e5e5e5; margin: 8px 0; font-size: 13px;">1223 3rd Ave Suite F and E, Chula Vista, CA 91911</p>
              <p style="color: #FFA500; margin: 8px 0; font-size: 13px; font-weight: 600;">(619) 830-8110</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
