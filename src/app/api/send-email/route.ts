// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {

  const { name, email, number, subject, message } = await request.json();

  // Configure the SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
    },
    debug: true,
    logger:true,
    auth: {
      user: process.env.EMAIL_USER, // Sender email from environment variables
      pass: process.env.EMAIL_PASS, // Sender email password from environment variables
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Use the email from the form as the sender
      to: process.env.EMAIL_USER, // Receiver email
      replyTo: email,
      sender: email,
      subject: `New Message from ${name} - ${subject}`, // Subject of the email
      text: `You have received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nPhone: ${number}\nSubject: ${subject}\nMessage: ${message}`,
    });

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
