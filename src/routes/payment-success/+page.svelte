<script lang="ts">
	import { onMount } from 'svelte';
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_PUBLISHABLE_KEY } from '$env/static/public';

	let status = 'loading';
	let message = '';

	onMount(async () => {
		const stripe = await loadStripe(PUBLIC_STRIPE_PUBLISHABLE_KEY);
		const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');

		if (!clientSecret) {
			status = 'error';
			message = 'Payment information not found.';
			return;
		}

		const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

		switch (paymentIntent.status) {
			case 'succeeded':
				status = 'success';
				message = 'Apmokėjimas sėkmingas! Ačiū už jūsų užsakymą.';
				break;
			case 'processing':
				status = 'processing';
				message = 'Jūsų mokėjimas apdorojamas.';
				break;
			case 'requires_payment_method':
				status = 'error';
				message = 'Mokėjimas nepavyko. Bandykite dar kartą.';
				break;
			default:
				status = 'error';
				message = 'Įvyko klaida. Bandykite dar kartą.';
				break;
		}
	});
</script>

<div class="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
	<div class="max-w-md w-full text-center">
		{#if status === 'loading'}
			<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
			<p class="text-gray-600 dark:text-gray-300">Tikrinama mokėjimo būsena...</p>
		{:else if status === 'success'}
			<div class="text-green-500 dark:text-green-400 text-6xl mb-4">✓</div>
			<h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ačiū!</h1>
			<p class="text-gray-600 dark:text-gray-300 mb-8">{message}</p>
		{:else if status === 'processing'}
			<div class="text-yellow-500 dark:text-yellow-400 text-6xl mb-4">⟳</div>
			<h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Apdorojama</h1>
			<p class="text-gray-600 dark:text-gray-300 mb-8">{message}</p>
		{:else}
			<div class="text-red-500 dark:text-red-400 text-6xl mb-4">✕</div>
			<h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Klaida</h1>
			<p class="text-gray-600 dark:text-gray-300 mb-8">{message}</p>
		{/if}

		<a
			href="/kainos"
			class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
		>
			Grįžti į kainų puslapį
		</a>
	</div>
</div> 