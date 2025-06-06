<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";

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

<header class="fixed z-10 top-0 w-full shadow-md inset-x-0 border-b bg-white dark:bg-dark-background dark:border-gray-800">
    <nav class="flex items-center justify-between max-w-5xl mx-auto px-4 h-24">
        <a href="/" class="flex items-center gap-2 font-bold">
            <Logo className="w-12 h-12" />
            <span class="text-black ">agstatyba.lt</span>
        </a>
        <div class="flex space-x-1 items-center">
            <!-- Dropdown for Paslaugos -->
            <div class="relative group">
                <a href="/paslaugos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                    Paslaugos
                </a>
                <div class="absolute hidden group-hover:block bg-gray-50 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg">
                    <a href="/paslaugos/staybos-darbai" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Statybos darbai</a>
                    <a href="/paslaugos/namu-projektavimas" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų projektavimas</a>
                    <a href="/paslaugos/interjero-prieziura" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Interjero dizainas</a>
                    <a href="/paslaugos/autorine-prieziura" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Autorinė priežiūra</a>
                    <a href="/paslaugos/konsultacija" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Konsultacija</a>
                    <a href="/paslaugos/namo-samata" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namo sąmata</a>
                    <a href="/paslaugos/kitos-paslaugos" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Kitos paslaugos</a>
                </div>
            </div>
            <div class="relative group">
                <a href="/portfolio" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                    Portfolio
                </a>
                <div class="absolute hidden group-hover:block bg-gray-50 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg">
                    <a href="/portfolio/namu-projektai" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų projektai</a>
                    <a href="/portfolio/namu-interjerai" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų interjerai</a>
                </div>
            </div>
            <a href="/sip-namai" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                SIP namai
            </a>
            <a href="/kainos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Kainos
            </a>
            <a href="/konsultacijos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Konsultacijos
            </a>
            <a href="/kontaktai" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Kontaktai
            </a>
        </div>
    </nav>
</header>

<div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">{data.additionalInfo.title}</h1>
            <div class="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 max-w-4xl mx-auto">
                {data.additionalInfo.description}
            </p>
        </div>

        <!-- Pricing Table -->
        <div class="mb-16 overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr class="bg-gray-50">
                        <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tipas***</th>
                        {#each data.pricingTiers as tier}
                            <th class="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                                {tier.type}
                            </th>
                        {/each}
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">Kaina</td>
                        {#each data.pricingTiers as tier}
                            <td class="px-6 py-4 text-center">
                                <div class="text-2xl font-bold text-gray-900">
                                    {formatPrice(tier.price)}
                                </div>
                                <div class="text-sm text-gray-500">+ PVM + SK*</div>
                            </td>
                        {/each}
                    </tr>
                    <tr>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">Aprašymas</td>
                        {#each data.pricingTiers as tier}
                            <td class="px-6 py-4 text-center text-sm text-gray-500">
                                {tier.description}
                            </td>
                        {/each}
                    </tr>
                    <tr>
                        <td class="px-6 py-4 text-sm font-medium text-gray-900">Veiksmai</td>
                        {#each data.pricingTiers as tier}
                            <td class="px-6 py-4 text-center">
                                <button
                                    on:click={() => handleTierSelect(tier)}
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Sužinoti daugiau
                                </button>
                            </td>
                        {/each}
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Instructions -->
        <div class="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 class="text-2xl font-semibold mb-6">Kaip užsakyti projektą?</h2>
            <div class="prose max-w-none">
                <p class="text-gray-600 mb-6">{data.additionalInfo.instructions}</p>
                <div class="flex items-center space-x-2 text-gray-500 text-sm">
                    <span>*</span>
                    <p>{data.additionalInfo.note}</p>
                </div>
            </div>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Kokybės garantija</h3>
                <p class="text-gray-600">Užtikriname aukščiausią projektavimo kokybę ir atitikimą visiems standartams.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Greitas aptarnavimas</h3>
                <p class="text-gray-600">Projektus įgyvendiname laiku, laikydamiesi sutartų terminų.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Profesionalios konsultacijos</h3>
                <p class="text-gray-600">Teikiame išsamias konsultacijas visais projektavimo klausimais.</p>
            </div>
        </div>

        <!-- Contact Section -->
        <div class="text-center bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h2 class="text-2xl font-semibold mb-4">Turite klausimų?</h2>
            <p class="text-gray-600 mb-6">Susisiekite su mumis ir mielai atsakysime į visus jūsų klausimus</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href={`mailto:${data.additionalInfo.contactEmail}`}
                    class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Siųsti užklausą
                </a>
                <a 
                    href="/kontaktai" 
                    class="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                    Kontaktai
                </a>
            </div>
        </div>
    </div>
</div>

{#if showContactForm && selectedTier}
    <!-- Modal -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-lg max-w-2xl w-full p-8">
            <div class="flex justify-between items-start mb-6">
                <h3 class="text-2xl font-semibold">{selectedTier.type}</h3>
                <button 
                    on:click={() => showContactForm = false}
                    class="text-gray-400 hover:text-gray-500"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <div class="mb-6">
                <div class="text-3xl font-bold text-gray-900 mb-2">
                    {formatPrice(selectedTier.price)}
                    <span class="text-sm font-normal text-gray-500">+ PVM + SK*</span>
                </div>
                <p class="text-gray-600">{selectedTier.description}</p>
            </div>

            <div class="mb-6">
                <h4 class="font-semibold mb-3">Į kainą įskaičiuota:</h4>
                <ul class="space-y-2">
                    {#each selectedTier.features as feature}
                        <li class="flex items-start">
                            <span class="text-green-500 mr-2">✓</span>
                            <span>{feature}</span>
                        </li>
                    {/each}
                </ul>
            </div>

            <div class="flex justify-end space-x-4">
                <button 
                    on:click={() => showContactForm = false}
                    class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                    Uždaryti
                </button>
                <a 
                    href={`mailto:${data.additionalInfo.contactEmail}?subject=Užklausa dėl ${selectedTier.type}`}
                    class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Siųsti užklausą
                </a>
            </div>
        </div>
    </div>
{/if}