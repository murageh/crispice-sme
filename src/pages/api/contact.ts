import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_ORIGINS = [
    'https://crispice.murageh.co.ke',
    'https://crispice.netlify.app',
    process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '',
].filter(Boolean);

const RECAPTCHA_SCORE_THRESHOLD = 0.5;

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: unknown): string {
    if (typeof value !== 'string') return '';
    return value.trim().replace(/[<>]/g, '');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const origin = req.headers.origin || req.headers.referer || '';
    const isAllowedOrigin = ALLOWED_ORIGINS.some(o => origin.startsWith(o));
    if (!isAllowedOrigin) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    const name = sanitize(req.body?.name);
    const email = sanitize(req.body?.email);
    const message = sanitize(req.body?.message);
    const recaptchaToken = typeof req.body?.recaptchaToken === 'string' ? req.body.recaptchaToken : '';

    if (!name || name.length > 100) {
        return res.status(400).json({ message: 'Invalid name' });
    }
    if (!email || !isValidEmail(email) || email.length > 254) {
        return res.status(400).json({ message: 'Invalid email address' });
    }
    if (!message || message.length < 10 || message.length > 2000) {
        return res.status(400).json({ message: 'Message must be between 10 and 2000 characters' });
    }
    if (!recaptchaToken) {
        return res.status(400).json({ message: 'CAPTCHA token missing' });
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < RECAPTCHA_SCORE_THRESHOLD) {
        return res.status(400).json({ message: 'CAPTCHA verification failed' });
    }

    try {
        await resend.emails.send({
            from: 'contact@crispice.murageh.co.ke',
            to: 'crispicetech@gmail.com',
            replyTo: email,
            subject: `Contact form: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Resend error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
