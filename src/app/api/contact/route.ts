import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to you (portfolio owner)
    const mailOptionsToOwner = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Message from Portfolio: ${email}`,
      text: `You have received a new message from your portfolio contact form.\n\nFrom: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Message from Portfolio</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p style="margin-bottom: 10px;"><strong>From:</strong> ${email}</p>
              <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
            <p style="margin-bottom: 20px;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3b82f6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      `,
    };

    // Confirmation email to sender
    const mailOptionsToSender = {
      from: `"Website Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for getting in touch!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank You for Contacting Me</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p style="margin-bottom: 10px;">Hi ${name},</p>
            <p style="margin-bottom: 20px;">Thanks for your message! I will get back to you soon.</p>
            <p style="margin-bottom: 10px;">If you want to contact me immediately, call:</p>
            <ul style="margin-bottom: 20px;">
              <li>9566195492</li>
              <li>9962453404</li>
            </ul>
            <p style="margin-bottom: 10px;">Best,<br/>Manikandan</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptionsToOwner);
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
