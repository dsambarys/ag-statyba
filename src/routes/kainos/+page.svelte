<script lang="ts">
	import ThemeLanguageControls from '$lib/components/ThemeLanguageControls.svelte';
	import ServiceImage from '$lib/components/ServiceImage.svelte';
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	export let data;

	let selectedTier = null;
	let showContactForm = false;
	let name = '';
	let email = '';
	let phone = '';
	let message = '';
	let processing = false;
	let successMessage = '';
	let errorMessage = '';
	let recaptchaToken = '';

	// Initialize reCAPTCHA
	onMount(async () => {
		const script = document.createElement('script');
		script.src = 'https://www.google.com/recaptcha/api.js?render=6LcXXX...'; // Replace with your site key
		script.async = true;
		document.head.appendChild(script);
		await new Promise(resolve => script.onload = resolve);
	});

	// Handle tier selection
	const handleTierSelect = (tier) => {
		selectedTier = tier;
		showContactForm = true;
		message = `Susidomėjau ${tier.type} paketu už ${formatPrice(tier.price)}`;
		successMessage = '';
		errorMessage = '';
	};

	// Handle form submission
	async function handleSubmit(e: Event) {
		e.preventDefault();
		processing = true;
		errorMessage = '';
		successMessage = '';

		if (!name || !email || !message) {
			errorMessage = 'Prašome užpildyti visus būtinus laukus';
			processing = false;
			return;
		}

		try {
			// Execute reCAPTCHA
			recaptchaToken = await new Promise((resolve, reject) => {
				// @ts-ignore
				grecaptcha.ready(() => {
					// @ts-ignore
					grecaptcha.execute('6LcXXX...', { action: 'submit' }) // Replace with your site key
						.then(resolve)
						.catch(reject);
				});
			});

			const form = e.target as HTMLFormElement;
			const formData = new FormData(form);
			formData.append('recaptchaToken', recaptchaToken);

			const response = await fetch(form.action, {
				method: 'POST',
				body: formData
			});

			const result = await response.json();

			if (result.success) {
				successMessage = result.message;
				showContactForm = false;
				resetForm();
			} else {
				errorMessage = result.error || 'Įvyko klaida siunčiant užklausą. Bandykite dar kartą.';
			}
		} catch (error) {
			errorMessage = 'Įvyko klaida siunčiant užklausą. Bandykite dar kartą.';
		} finally {
			processing = false;
		}
	}

	function resetForm() {
		name = '';
		email = '';
		phone = '';
		message = '';
		selectedTier = null;
		recaptchaToken = '';
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

        {#if successMessage}
            <div class="bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400 p-4 rounded-lg mb-8 text-center">
                {successMessage}
            </div>
        {/if}

        <!-- Pricing Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {#each data.pricingTiers as tier}
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all overflow-hidden">
                    <!-- Image -->
                    <div class="aspect-w-16 aspect-h-9">
                        <ServiceImage
                            src={tier.image}
                            alt={tier.type}
                            className="w-full h-full"
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
                            Susisiekti
                        </button>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Contact Form Modal -->
        {#if showContactForm}
            <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-lg w-full">
                    <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Susisiekite su mumis</h2>
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

                    <form on:submit={handleSubmit} class="space-y-6" method="POST">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Vardas *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                bind:value={name}
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            />
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">El. paštas *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                bind:value={email}
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            />
                        </div>

                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Telefonas</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                bind:value={phone}
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                        </div>

                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Žinutė *</label>
                            <textarea
                                id="message"
                                name="message"
                                bind:value={message}
                                rows="4"
                                class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                required
                            ></textarea>
                        </div>

                        <div class="flex justify-end space-x-4">
                            <button
                                type="button"
                                on:click={() => showContactForm = false}
                                class="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                Atšaukti
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                            >
                                {processing ? 'Siunčiama...' : 'Siųsti'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        {/if}

        <!-- Additional Information -->
        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-16">
            <h2 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{data.additionalInfo.featuresTitle}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each data.additionalInfo.features as feature}
                    <div>
                        <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                        <p class="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    :global(body) {
        @apply bg-white dark:bg-gray-900;
    }
</style>