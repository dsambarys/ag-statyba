import nodemailer from 'nodemailer';
import { config } from './config';
import { dev } from '$app/environment';

export async function sendEmail(to: string, subject: string, text: string) {
    if (!config.email && dev) {
        console.log('Email sending is disabled in development mode');
        console.log('Would have sent:', { to, subject, text });
        return;
    }

    if (!config.email) {
        throw new Error('Email configuration is not set up');
    }

    const transporter = nodemailer.createTransport({
        host: config.email.host,
        port: config.email.port,
        secure: config.email.secure,
        auth: {
            user: config.email.user,
            pass: config.email.pass
        }
    });

    await transporter.sendMail({
        from: config.email.from,
        to,
        subject,
        text
    });
} 