import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test the connection
pool.connect()
    .then(() => console.log('Database connected successfully'))
    .catch(err => {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    });

export const db = drizzle(pool, { schema }); 