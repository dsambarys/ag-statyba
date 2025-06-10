import { eq } from 'drizzle-orm';
import { db } from '../db';
import { contacts } from '../db/schema';
import { sendEmail } from '../email';
import { CreateContactInput } from './types';
import { verifyToken, hashPassword, comparePasswords, generateToken, createSession, validateSession, deleteSession } from '$lib/auth/utils';
import type { JWTPayload } from '$lib/auth/utils';
import type { Context } from './context';

export const resolvers = {
  Query: {
    contacts: async (_parent: any, { status }: { status?: string }, context: Context) => {
      try {
        if (!context.token) {
          throw new Error('Not authenticated');
        }

        const payload = verifyToken(context.token);
        const userResult = await context.db.query(
          'SELECT role FROM users WHERE id = $1',
          [payload.userId]
        );

        if (userResult.rows[0]?.role !== 'ADMIN') {
          throw new Error('Not authorized');
        }

        const query = status
          ? 'SELECT * FROM contacts WHERE status = $1 ORDER BY created_at DESC'
          : 'SELECT * FROM contacts ORDER BY created_at DESC';
        const values = status ? [status] : [];

        const result = await context.db.query(query, values);
        return result.rows;
      } catch (error) {
        console.error('Error in contacts resolver:', error);
        throw error;
      }
    },
    contact: async (_parent: any, { id }: { id: string }, context: Context) => {
      const session = await validateSession(context.db, context.token);
      if (!session || session.role !== 'ADMIN') {
        throw new Error('Unauthorized');
      }

      const result = await context.db.query(
        'SELECT * FROM contacts WHERE id = $1',
        [id]
      );
      return result.rows[0] || null;
    },
    me: async (_parent: any, _args: any, context: Context) => {
      try {
        if (!context.token) {
          throw new Error('Not authenticated');
        }

        const payload = verifyToken(context.token);
        const result = await context.db.query(
          'SELECT id, email, role FROM users WHERE id = $1',
          [payload.userId]
        );

        if (result.rows.length === 0) {
          throw new Error('User not found');
        }

        return result.rows[0];
      } catch (error) {
        console.error('Error in me resolver:', error);
        throw error;
      }
    }
  },
  Mutation: {
    createContact: async (_parent: any, { input }: { input: any }, context: Context) => {
      try {
        const { name, email, phone, subject, message } = input;
        const result = await context.db.query(
          'INSERT INTO contacts (name, email, phone, subject, message, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
          [name, email, phone, subject, message, 'PENDING']
        );

        return result.rows[0];
      } catch (error) {
        console.error('Error in createContact resolver:', error);
        throw error;
      }
    },
    updateContactStatus: async (_parent: any, { id, status }: { id: string, status: string }, context: Context) => {
      try {
        if (!context.token) {
          throw new Error('Not authenticated');
        }

        const payload = verifyToken(context.token);
        const userResult = await context.db.query(
          'SELECT role FROM users WHERE id = $1',
          [payload.userId]
        );

        if (userResult.rows[0]?.role !== 'ADMIN') {
          throw new Error('Not authorized');
        }

        const result = await context.db.query(
          'UPDATE contacts SET status = $1 WHERE id = $2 RETURNING *',
          [status, id]
        );

        if (result.rows.length === 0) {
          throw new Error('Contact not found');
        }

        return result.rows[0];
      } catch (error) {
        console.error('Error in updateContactStatus resolver:', error);
        throw error;
      }
    },
    login: async (_parent: any, { input }: { input: any }, context: Context) => {
      try {
        const { email, password } = input;
        const result = await context.db.query(
          'SELECT * FROM users WHERE email = $1',
          [email]
        );

        if (result.rows.length === 0) {
          throw new Error('Invalid credentials');
        }

        const user = result.rows[0];
        const isValid = await comparePasswords(password, user.password_hash);

        if (!isValid) {
          throw new Error('Invalid credentials');
        }

        const token = generateToken(user.id);
        return {
          token,
          user: {
            id: user.id,
            email: user.email,
            role: user.role
          }
        };
      } catch (error) {
        console.error('Error in login resolver:', error);
        throw error;
      }
    },
    register: async (_parent: any, { input }: { input: any }, context: Context) => {
      const { email, password } = input;

      // Check if user already exists
      const existingUser = await context.db.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      );

      if (existingUser.rows.length > 0) {
        throw new Error('Email already in use');
      }

      const passwordHash = await hashPassword(password);

      const result = await context.db.query(
        `INSERT INTO users (email, password_hash, role)
         VALUES ($1, $2, 'USER')
         RETURNING *`,
        [email, passwordHash]
      );

      const user = result.rows[0];
      const token = await createSession(context.db, user.id);

      return {
        token,
        user: {
          id: user.id,
          email: user.email,
          role: user.role
        }
      };
    },
    logout: async (_parent: any, _args: any, context: Context) => {
      try {
        if (!context.token) {
          throw new Error('Not authenticated');
        }

        // In a real application, you might want to invalidate the token here
        await deleteSession(context.db, context.token);
        return true;
      } catch (error) {
        console.error('Error in logout resolver:', error);
        throw error;
      }
    }
  }
}; 