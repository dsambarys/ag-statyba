import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { dev } from '$app/environment';

const JWT_SECRET = dev ? 'development-secret' : process.env.JWT_SECRET;
const SALT_ROUNDS = 10;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET must be set in production');
}

export interface JWTPayload {
    userId: number;
    email: string;
    role: string;
}

export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, SALT_ROUNDS);
};

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
};

export const generateToken = (payload: JWTPayload): string => {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: '7d'
    });
};

export const verifyToken = (token: string): JWTPayload => {
    try {
        return jwt.verify(token, JWT_SECRET) as JWTPayload;
    } catch (error) {
        throw new Error('Invalid token');
    }
};

export const createSession = async (db: any, userId: number): Promise<string> => {
    const token = generateToken({ userId, email: '', role: '' }); // We'll update these values after querying the user
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now

    await db.query(
        'INSERT INTO sessions (user_id, token, expires_at) VALUES ($1, $2, $3)',
        [userId, token, expiresAt]
    );

    return token;
};

export const validateSession = async (db: any, token: string): Promise<JWTPayload | null> => {
    try {
        const result = await db.query(
            `SELECT s.*, u.email, u.role 
             FROM sessions s 
             JOIN users u ON s.user_id = u.id 
             WHERE s.token = $1 AND s.expires_at > NOW()`,
            [token]
        );

        if (result.rows.length === 0) {
            return null;
        }

        const session = result.rows[0];
        return {
            userId: session.user_id,
            email: session.email,
            role: session.role
        };
    } catch (error) {
        console.error('Error validating session:', error);
        return null;
    }
};

export const deleteSession = async (db: any, token: string): Promise<void> => {
    await db.query('DELETE FROM sessions WHERE token = $1', [token]);
}; 