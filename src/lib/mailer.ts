import nodemailer from "nodemailer";
import env from "@/env";

const mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: env.GMAIL_EMAIL,
    pass: env.GMAIL_APP_PASSWORD,
  },
});

export default mailer;
