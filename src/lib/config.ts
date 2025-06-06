import { config as dotenvConfig } from 'dotenv';
import { z } from 'zod';

dotenvConfig();

const configSchema = z.object({
  database: z.object({
    url: z.string().url()
  }),
  email: z.object({
    host: z.string(),
    port: z.number(),
    user: z.string(),
    pass: z.string(),
    from: z.string().email()
  })
});

export const config = configSchema.parse({
  database: {
    url: process.env.DATABASE_URL
  },
  email: {
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    from: process.env.EMAIL_FROM
  }
}); 