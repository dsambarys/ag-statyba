<script lang="ts">
    import { onMount } from 'svelte';
    import { loadStripe } from '@stripe/stripe-js';
    import { STRIPE_PUBLIC_KEY } from '$env/static/public';

    export let amount: number;
    export let currency: string = 'eur';
    export let onSuccess: (paymentIntentId: string) => void;
    export let onError: (error: Error) => void;

    let stripe: any;
    let elements: any;
    let cardElement: any;
    let paymentIntentId: string;
    let loading = false;
    let error: string | null = null;

    onMount(async () => {
        try {
            stripe = await loadStripe(STRIPE_PUBLIC_KEY);
            elements = stripe.elements();
            cardElement = elements.create('card');
            cardElement.mount('#card-element');
        } catch (err) {
            error = 'Failed to initialize payment form';
            onError(err);
        }
    });

    async function handleSubmit() {
        if (!stripe || !elements) return;

        loading = true;
        error = null;

        try {
            // Create payment intent
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'create',
                    amount,
                    currency
                })
            });

            const { clientSecret, paymentIntentId: id } = await response.json();
            paymentIntentId = id;

            // Confirm payment
            const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: cardElement,
                    }
                }
            );

            if (stripeError) {
                throw new Error(stripeError.message);
            }

            if (paymentIntent.status === 'succeeded') {
                onSuccess(paymentIntentId);
            }
        } catch (err) {
            error = err.message;
            onError(err);
        } finally {
            loading = false;
        }
    }
</script>

<div class="payment-form">
    <div class="form-group">
        <label for="card-element">Card Details</label>
        <div id="card-element" class="card-element"></div>
    </div>

    {#if error}
        <div class="error-message">{error}</div>
    {/if}

    <button 
        on:click={handleSubmit} 
        disabled={loading}
        class="submit-button"
    >
        {loading ? 'Processing...' : `Pay ${amount} ${currency.toUpperCase()}`}
    </button>
</div>

<style>
    .payment-form {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .card-element {
        padding: 12px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        background: white;
    }

    .error-message {
        color: #dc3545;
        margin: 10px 0;
        padding: 10px;
        border-radius: 4px;
        background: #f8d7da;
    }

    .submit-button {
        width: 100%;
        padding: 12px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    .submit-button:disabled {
        background: #ccc;
        cursor: not-allowed;
    }

    .submit-button:hover:not(:disabled) {
        background: #0056b3;
    }
</style> 