import { STRIPE_PUBLIC_KEY } from '$env/static/public';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
});

export async function createPaymentIntent(amount: number, currency: string = 'eur') {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents
            currency,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return {
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id,
        };
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw new Error('Failed to create payment intent');
    }
}

export async function confirmPayment(paymentIntentId: string) {
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        return paymentIntent.status === 'succeeded';
    } catch (error) {
        console.error('Error confirming payment:', error);
        throw new Error('Failed to confirm payment');
    }
}

export async function handleWebhook(payload: string, signature: string) {
    try {
        const event = stripe.webhooks.constructEvent(
            payload,
            signature,
            'your_webhook_secret' // Replace with your webhook secret
        );

        switch (event.type) {
            case 'payment_intent.succeeded':
                // Handle successful payment
                return { success: true, event: event.type };
            case 'payment_intent.payment_failed':
                // Handle failed payment
                return { success: false, event: event.type };
            default:
                return { success: false, event: 'unknown' };
        }
    } catch (error) {
        console.error('Webhook error:', error);
        throw new Error('Webhook handling failed');
    }
} 