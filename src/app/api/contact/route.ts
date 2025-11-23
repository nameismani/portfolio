import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const phone1 = process.env.CONTACT_PHONE_1 || "";
    const phone2 = process.env.CONTACT_PHONE_2 || "";

    const phoneHtml = `
      <p>If you want to contact me immediately, call:</p>
      <ul>
        ${phone1 ? `<li>${phone1}</li>` : ""}
        ${phone2 ? `<li>${phone2}</li>` : ""}
      </ul>
    `;

    // Email to yourself (in HTML)
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New contact form from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation email to user (in HTML)
    await transporter.sendMail({
      from: `"Website Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for getting in touch!",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for your message! I will get back to you soon.</p>
        ${phoneHtml}
        <p>Best,<br/>Manikandan</p>
      `,
    });

    return NextResponse.json({ message: "Emails sent" }, { status: 200 });
  } catch (error) {
    console.error("Email error", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}
