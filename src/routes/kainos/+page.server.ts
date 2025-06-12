import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { RECAPTCHA_SECRET_KEY } from '$env/static/private';

async function verifyRecaptcha(token: string): Promise<boolean> {
    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
        });

        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return false;
    }
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        const recaptchaToken = formData.get('recaptchaToken');

        // Validate reCAPTCHA
        if (!recaptchaToken || typeof recaptchaToken !== 'string') {
            return fail(400, {
                error: 'reCAPTCHA verification required'
            });
        }

        const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
        if (!isValidRecaptcha) {
            return fail(400, {
                error: 'reCAPTCHA verification failed'
            });
        }

        // Validate other fields
        if (!name || !email || !message) {
            return fail(400, {
                error: 'Visi laukai yra privalomi'
            });
        }

        if (typeof email !== 'string' || !email.includes('@')) {
            return fail(400, {
                error: 'Neteisingas el. pašto formatas'
            });
        }

        try {
            // Here you would typically send an email or store the contact request in a database
            // For now, we'll just return a success message
            return {
                success: true,
                message: 'Žinutė sėkmingai išsiųsta'
            };
        } catch (error) {
            console.error('Error processing contact form:', error);
            return fail(500, {
                error: 'Nepavyko išsiųsti žinutės. Bandykite vėliau.'
            });
        }
    }
} satisfies Actions; 