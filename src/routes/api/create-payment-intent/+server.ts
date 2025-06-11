import { json } from '@sveltejs/kit';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16'
});

export async function POST({ request }) {
    try {
        const { amount, currency = 'eur' } = await request.json();

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        return json({ error: 'Failed to create payment intent' }, { status: 500 });
    }
} 