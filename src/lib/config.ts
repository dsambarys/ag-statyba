import { z } from 'zod';
import { dev } from '$app/environment';

const configSchema = z.object({
    database: z.object({
        url: z.string().default('postgres://postgres:postgres@localhost:5432/ag_statyba')
    }),
    email: z.object({
        host: z.string().default('smtp.gmail.com'),
        port: z.number().default(587),
        secure: z.boolean().default(false),
        user: z.string().default('noreply@example.com'),
        pass: z.string().default('app-specific-password'),
        from: z.string().default('AG Statyba <noreply@example.com>')
    }).optional()
});

// In development, use default values
const defaultConfig = {
    database: {
        url: 'postgres://postgres:postgres@localhost:5432/ag_statyba'
    },
    email: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        user: 'noreply@example.com',
        pass: 'app-specific-password',
        from: 'AG Statyba <noreply@example.com>'
    }
};

export const config = configSchema.parse(dev ? defaultConfig : {
    database: {
        url: process.env.DATABASE_URL
    },
    email: process.env.EMAIL_HOST ? {
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        from: process.env.EMAIL_FROM
    } : undefined
}); 