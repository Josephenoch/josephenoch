import nodemailer from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

const smtpSettings = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT as string),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

export const handleEmailFire = async (data: Options) => {
  const transporter = nodemailer.createTransport({
    ...smtpSettings,
  });

  return await transporter.sendMail({
    
    from: process.env.SMTP_USER,
    ...data,
  });
};