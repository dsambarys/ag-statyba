import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import dotenv from 'dotenv';

dotenv.config();

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use .env file
});

// Create a Drizzle ORM client with schema
export const db = drizzle(pool, { schema });

// Export pool if you need raw queries
export { pool };
