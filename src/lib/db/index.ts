import { Pool } from 'pg';
import { dev } from '$app/environment';

const pool = new Pool({
    user: dev ? 'postgres' : process.env.POSTGRES_USER,
    password: dev ? 'postgres' : process.env.POSTGRES_PASSWORD,
    host: dev ? 'localhost' : process.env.POSTGRES_HOST,
    port: 5432,
    database: dev ? 'ag_statyba' : process.env.POSTGRES_DB,
});

// Test the connection
pool.connect((err, client, release) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log('Database connected successfully');
    });
});

export { pool as db }; 