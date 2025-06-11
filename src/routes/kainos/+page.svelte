<script lang="ts">
	import ThemeLanguageControls from '$lib/components/ThemeLanguageControls.svelte';
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_PUBLISHABLE_KEY } from '$env/static/public';
	export let data;

	let selectedTier = null;
	let showContactForm = false;
	let showPaymentForm = false;
	let stripe;
	let elements;
	let paymentElement;
	let clientSecret;
	let processing = false;
	let errorMessage = '';

	// Initialize Stripe
	async function initializeStripe() {
		stripe = await loadStripe(PUBLIC_STRIPE_PUBLISHABLE_KEY);
	}

	// Handle tier selection
	const handleTierSelect = async (tier) => {
		selectedTier = tier;
		showPaymentForm = true;
		await initializeStripe();
		await createPaymentIntent(tier.price);
	};

	// Create payment intent
	async function createPaymentIntent(amount: number) {
		try {
			const response = await fetch('/api/create-payment-intent', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ amount })
			});

			const data = await response.json();
			if (data.error) {
				throw new Error(data.error);
			}

			clientSecret = data.clientSecret;
			const { elements: stripeElements } = await stripe.elements({
				clientSecret,
				appearance: {
					theme: 'stripe',
					variables: {
						colorPrimary: '#3b82f6'
					}
				}
			});

			paymentElement = stripeElements.create('payment');
			paymentElement.mount('#payment-element');
		} catch (error) {
			console.error('Error:', error);
			errorMessage = 'Failed to initialize payment. Please try again.';
		}
	}

	// Handle payment submission
	async function handleSubmit(e: Event) {
		e.preventDefault();
		processing = true;
		errorMessage = '';

		try {
			const { error } = await stripe.confirmPayment({
				elements: paymentElement,
				confirmParams: {
					return_url: `${window.location.origin}/payment-success`
				}
			});

			if (error) {
				throw error;
			}
		} catch (error) {
			console.error('Error:', error);
			errorMessage = error.message || 'An error occurred during payment.';
		} finally {
			processing = false;
		}
	}

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat('lt-LT', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(price);
	};
</script>

<ThemeLanguageControls />

<div class="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">{data.additionalInfo.title}</h1>
            <div class="w-24 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                {data.additionalInfo.description}
            </p>
        </div>

        <!-- Pricing Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {#each data.pricingTiers as tier}
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all overflow-hidden">
                    <!-- Image -->
                    <div class="aspect-w-16 aspect-h-9">
                        <img
                            src={tier.image}
                            alt={tier.type}
                            class="w-full h-full object-cover"
                        />
                    </div>
                    
                    <!-- Content -->
                    <div class="p-8">
                        <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{tier.type}</h3>
                        <p class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                            {formatPrice(tier.price)}
                        </p>
                        <ul class="space-y-4 mb-8">
                            {#each tier.features as feature}
                                <li class="flex items-start">
                                    <span class="text-green-500 dark:text-green-400 mr-3">✓</span>
                                    <span class="text-gray-600 dark:text-gray-300">{feature}</span>
                                </li>
                            {/each}
                        </ul>
                        {#if tier.note}
                            <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">{tier.note}</p>
                        {/if}
                        <button
                            on:click={() => handleTierSelect(tier)}
                            class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Apmokėti
                        </button>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Additional Information -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-16">
            <h2 class="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">Papildoma informacija</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each data.additionalInfo.features as feature}
                    <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                        <p class="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Payment Form Modal -->
        {#if showPaymentForm}
            <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-lg w-full">
                    <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Apmokėjimas</h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                        Pasirinktas paketas: <span class="font-semibold">{selectedTier?.type}</span>
                        <br />
                        Kaina: <span class="font-semibold">{formatPrice(selectedTier?.price || 0)}</span>
                    </p>

                    {#if errorMessage}
                        <div class="bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 p-4 rounded-lg mb-6">
                            {errorMessage}
                        </div>
                    {/if}

                    <form on:submit={handleSubmit} class="space-y-6">
                        <div id="payment-element" class="mb-6"></div>
                        
                        <div class="flex justify-end space-x-4">
                            <button
                                type="button"
                                on:click={() => showPaymentForm = false}
                                class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                disabled={processing}
                            >
                                Atšaukti
                            </button>
                            <button
                                type="submit"
                                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={processing}
                            >
                                {processing ? 'Apdorojama...' : 'Apmokėti'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    :global(body) {
        @apply bg-white dark:bg-gray-900;
    }
</style>