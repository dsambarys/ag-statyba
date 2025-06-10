import { eq } from 'drizzle-orm';
import { db } from '../db';
import { contacts } from '../db/schema';
import { sendEmail } from '../email';
import { CreateContactInput } from './types';
import { hashPassword, comparePasswords, createSession, validateSession, deleteSession } from '$lib/auth/utils';
import type { JWTPayload } from '$lib/auth/utils';
import type { Context } from './context';

export const resolvers = {
  Query: {
    contacts: async (_parent: any, { status }: { status?: string }, context: Context) => {
      const session = await validateSession(context.db, context.token);
      if (!session || session.role !== 'ADMIN') {
        throw new Error('Unauthorized');
      }

      const query = status
        ? 'SELECT * FROM contacts WHERE status = $1 ORDER BY created_at DESC'
        : 'SELECT * FROM contacts ORDER BY created_at DESC';
      const values = status ? [status] : [];

      const result = await context.db.query(query, values);
      return result.rows;
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
      const session = await validateSession(context.db, context.token);
      if (!session) {
        return null;
      }

      const result = await context.db.query(
        'SELECT * FROM users WHERE id = $1',
        [session.userId]
      );
      return result.rows[0] || null;
    }
  },
  Mutation: {
    createContact: async (_parent: any, { input }: { input: any }, context: Context) => {
      const { name, email, phone, subject, message } = input;

      const result = await context.db.query(
        `INSERT INTO contacts (name, email, phone, subject, message)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
        [name, email, phone, subject, message]
      );

      return result.rows[0];
    },
    updateContactStatus: async (_parent: any, { id, status }: { id: string, status: string }, context: Context) => {
      const session = await validateSession(context.db, context.token);
      if (!session || session.role !== 'ADMIN') {
        throw new Error('Unauthorized');
      }

      const result = await context.db.query(
        `UPDATE contacts
         SET status = $1
         WHERE id = $2
         RETURNING *`,
        [status, id]
      );

      if (result.rows.length === 0) {
        throw new Error('Contact not found');
      }

      return result.rows[0];
    },
    login: async (_parent: any, { input }: { input: any }, context: Context) => {
      const { email, password } = input;

      const result = await context.db.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      );

      const user = result.rows[0];
      if (!user) {
        throw new Error('Invalid email or password');
      }

      const validPassword = await comparePasswords(password, user.password_hash);
      if (!validPassword) {
        throw new Error('Invalid email or password');
      }

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
      if (!context.token) {
        return true;
      }

      await deleteSession(context.db, context.token);
      return true;
    }
  }
}; 