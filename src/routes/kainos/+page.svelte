<script lang="ts">
	import ThemeLanguageControls from '$lib/components/ThemeLanguageControls.svelte';
	export let data;

	let selectedTier = null;
	let showContactForm = false;

	const handleTierSelect = (tier) => {
		selectedTier = tier;
		showContactForm = true;
	};

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
                <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all">
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
                        Pasirinkti
                    </button>
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

        <!-- Contact Form Modal -->
        {#if showContactForm}
            <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-lg w-full">
                    <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Užsakyti projektą</h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                        Pasirinktas paketas: <span class="font-semibold">{selectedTier?.type}</span>
                        <br />
                        Kaina: <span class="font-semibold">{formatPrice(selectedTier?.price || 0)}</span>
                    </p>
                    <form class="space-y-4">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Vardas</label>
                            <input
                                type="text"
                                id="name"
                                class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">El. paštas</label>
                            <input
                                type="email"
                                id="email"
                                class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Telefono numeris</label>
                            <input
                                type="tel"
                                id="phone"
                                class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Žinutė</label>
                            <textarea
                                id="message"
                                rows="4"
                                class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <div class="flex justify-end space-x-4">
                            <button
                                type="button"
                                on:click={() => showContactForm = false}
                                class="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
                            >
                                Atšaukti
                            </button>
                            <button
                                type="submit"
                                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Siųsti
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        {/if}
    </div>
</div>