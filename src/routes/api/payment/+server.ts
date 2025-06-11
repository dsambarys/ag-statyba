import { json } from '@sveltejs/kit';
import { createPaymentIntent, confirmPayment, handleWebhook } from '$lib/services/paymentAuth';

export async function POST({ request }) {
    try {
        const { amount, currency, action } = await request.json();

        switch (action) {
            case 'create':
                const paymentIntent = await createPaymentIntent(amount, currency);
                return json(paymentIntent);
            
            case 'confirm':
                const { paymentIntentId } = await request.json();
                const confirmed = await confirmPayment(paymentIntentId);
                return json({ success: confirmed });
            
            default:
                return json({ error: 'Invalid action' }, { status: 400 });
        }
    } catch (error) {
        console.error('Payment API error:', error);
        return json({ error: 'Payment processing failed' }, { status: 500 });
    }
}

export async function PUT({ request }) {
    try {
        const signature = request.headers.get('stripe-signature');
        if (!signature) {
            return json({ error: 'No signature provided' }, { status: 400 });
        }

        const payload = await request.text();
        const result = await handleWebhook(payload, signature);
        return json(result);
    } catch (error) {
        console.error('Webhook error:', error);
        return json({ error: 'Webhook processing failed' }, { status: 500 });
    }
} 