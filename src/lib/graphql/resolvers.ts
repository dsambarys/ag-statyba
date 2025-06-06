import { eq } from 'drizzle-orm';
import { db } from '../db';
import { contacts } from '../db/schema';
import { sendEmail } from '../email';
import { CreateContactInput } from './types';

export const resolvers = {
  Query: {
    contacts: async () => {
      return await db.select().from(contacts);
    },
    contact: async (_, { id }) => {
      const result = await db.select().from(contacts).where(eq(contacts.id, id));
      return result[0] || null;
    }
  },
  Mutation: {
    createContact: async (_, { input }: { input: CreateContactInput }) => {
      try {
        const [contact] = await db.insert(contacts).values({
          name: input.name,
          email: input.email,
          phone: input.phone,
          subject: input.subject,
          message: input.message
        }).returning();

        // Send notification email
        await sendEmail({
          subject: `New Contact Form Submission: ${input.subject}`,
          text: `
            Name: ${input.name}
            Email: ${input.email}
            Phone: ${input.phone || 'Not provided'}
            Subject: ${input.subject}
            Message: ${input.message}
          `
        });

        return {
          success: true,
          message: 'Contact form submitted successfully',
          contact
        };
      } catch (error) {
        console.error('Error creating contact:', error);
        return {
          success: false,
          message: 'Failed to submit contact form',
          contact: null
        };
      }
    }
  }
}; 