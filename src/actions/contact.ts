"use server";

import mailer from "@/lib/mailer";
import env from "@/env";

interface EmailMessage {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({
  name,
  email,
  message,
}: Readonly<EmailMessage>) {
  return mailer.sendMail({
    from: `${name} | dijker website <${env.GMAIL_EMAIL}>`,
    to: env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `Dijker website bericht van ${name}`,
    html: `
      <p>V
      <p>${message}</p>
      <p>Reply to: ${email}</p>
    `,
  });
}
