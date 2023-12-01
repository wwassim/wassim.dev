import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
  //   const { email, subject, message } = await req.json();
  //   console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["werhaniwassim6@gmail.com"],
      subject: "hello",
      react: (
        <>
          <p>New message submitted:</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
