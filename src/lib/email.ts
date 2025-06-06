import nodemailer from 'nodemailer';
import { config } from './config';

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: config.email.port === 465,
  auth: {
    user: config.email.user,
    pass: config.email.pass
  }
});

interface SendEmailParams {
  subject: string;
  text: string;
  html?: string;
}

export const sendEmail = async ({ subject, text, html }: SendEmailParams) => {
  await transporter.sendMail({
    from: config.email.from,
    to: config.email.user,
    subject,
    text,
    html
  });
}; 