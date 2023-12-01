import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  try {
    const { email, subject, message } = await req.json();
    console.log(typeof email);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "werhaniwassim7@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOption = {
      from: email,
      to: "werhaniwassim7@gmail.com",
      subject: subject,
      html: `
      <h3>Hello Wassim</h3>
      <li> Sender: ${email}</li>
      <li> title: ${subject}</li>
      <li> message: ${message}</li> 
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send" }, { status: 500 });
  }
}
