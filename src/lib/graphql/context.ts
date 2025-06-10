import type { Pool } from 'pg';

export interface Context {
    db: Pool;
    token: string;
} 