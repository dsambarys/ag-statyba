import pg from 'pg';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { Pool } = pg;

// Use environment variables from SvelteKit's environment or fallback to defaults
const pool = new Pool({
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'admin',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: 5432,
    database: process.env.POSTGRES_DB || 'postgres'
});

async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
}

async function initDb() {
    try {
        // First, create the database if it doesn't exist
        const dbName = process.env.POSTGRES_DB || 'ag_statyba';
        await pool.query(`
            SELECT 'CREATE DATABASE ${dbName}'
            WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '${dbName}')
        `);

        // Connect to the specific database
        const dbPool = new Pool({
            ...pool.options,
            database: dbName
        });

        // Read and execute schema
        const schemaPath = join(__dirname, '..', 'src', 'lib', 'db', 'schema.sql');
        const schema = readFileSync(schemaPath, 'utf-8');
        await dbPool.query(schema);

        // Create admin user with hashed password
        const hashedPassword = await hashPassword('admin123');
        await dbPool.query(
            'INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3) ON CONFLICT (email) DO NOTHING',
            ['admin@example.com', hashedPassword, 'ADMIN']
        );

        console.log('Database initialized successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
}

initDb(); 