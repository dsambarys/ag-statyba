import { createPaymentIntent, confirmPayment } from '$lib/services/paymentAuth';
import type { PaymentIntent } from 'stripe';

interface PaymentInput {
    amount: number;
    currency: string;
    paymentMethodId?: string;
}

interface PaymentConfirmationInput {
    paymentIntentId: string;
}

export const paymentResolvers = {
    Query: {
        async getPaymentStatus(_: any, { paymentIntentId }: { paymentIntentId: string }) {
            try {
                const isConfirmed = await confirmPayment(paymentIntentId);
                return {
                    success: isConfirmed,
                    paymentIntentId,
                    status: isConfirmed ? 'succeeded' : 'failed'
                };
            } catch (error) {
                console.error('Error getting payment status:', error);
                throw new Error('Failed to get payment status');
            }
        }
    },

    Mutation: {
        async createPayment(_: any, { input }: { input: PaymentInput }) {
            try {
                const { clientSecret, paymentIntentId } = await createPaymentIntent(
                    input.amount,
                    input.currency
                );

                return {
                    success: true,
                    clientSecret,
                    paymentIntentId,
                    amount: input.amount,
                    currency: input.currency
                };
            } catch (error) {
                console.error('Error creating payment:', error);
                throw new Error('Failed to create payment');
            }
        },

        async confirmPayment(_: any, { input }: { input: PaymentConfirmationInput }) {
            try {
                const isConfirmed = await confirmPayment(input.paymentIntentId);
                return {
                    success: isConfirmed,
                    paymentIntentId: input.paymentIntentId,
                    status: isConfirmed ? 'succeeded' : 'failed'
                };
            } catch (error) {
                console.error('Error confirming payment:', error);
                throw new Error('Failed to confirm payment');
            }
        }
    }
};

// Type definitions for GraphQL schema
export const paymentTypes = `
    type Payment {
        success: Boolean!
        clientSecret: String
        paymentIntentId: String!
        amount: Float
        currency: String
        status: String
    }

    input PaymentInput {
        amount: Float!
        currency: String!
        paymentMethodId: String
    }

    input PaymentConfirmationInput {
        paymentIntentId: String!
    }

    type Query {
        getPaymentStatus(paymentIntentId: String!): Payment!
    }

    type Mutation {
        createPayment(input: PaymentInput!): Payment!
        confirmPayment(input: PaymentConfirmationInput!): Payment!
    }
`; 