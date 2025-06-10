<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";
    import type { ServicePageData } from '../../../types/services';
    
    export let data: ServicePageData;

    const maintenanceServices = [
        {
            title: 'Reguliari priežiūra',
            description: 'Periodinė interjero elementų priežiūra ir valymas',
            features: [
                'Paviršių valymas ir priežiūra',
                'Baldų priežiūra',
                'Tekstilės priežiūra',
                'Grindų priežiūra'
            ],
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>`
        },
        {
            title: 'Atnaujinimas',
            description: 'Interjero elementų atnaujinimas ir restauracija',
            features: [
                'Baldų restauracija',
                'Sienų atnaujinimas',
                'Grindų atnaujinimas',
                'Apšvietimo atnaujinimas'
            ],
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>`
        },
        {
            title: 'Sezoninė priežiūra',
            description: 'Interjero pritaikymas sezoniniams pokyčiams',
            features: [
                'Tekstilės keitimas',
                'Apšvietimo reguliavimas',
                'Klimato kontrolė',
                'Augalų priežiūra'
            ],
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>`
        },
        {
            title: 'Skubus aptarnavimas',
            description: 'Operatyvus reagavimas į interjero problemas',
            features: [
                'Skubūs remontai',
                'Dėmių šalinimas',
                'Gedimų taisymas',
                'Konsultacijos'
            ],
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>`
        }
    ];

    const maintenancePlans = [
        {
            title: 'Bazinis planas',
            features: [
                'Mėnesinė interjero apžiūra',
                'Paviršių valymas',
                'Baldų priežiūra',
                'Grindų priežiūra'
            ],
            recommended: false
        },
        {
            title: 'Standartinis planas',
            features: [
                'Dvisavaitinė interjero priežiūra',
                'Tekstilės priežiūra',
                'Augalų priežiūra',
                'Smulkus remontas',
                'Sezoninė adaptacija'
            ],
            recommended: true
        },
        {
            title: 'Premium planas',
            features: [
                'Savaitinė interjero priežiūra',
                'Prioritetinis aptarnavimas',
                'Neriboti smulkūs remontai',
                'Reguliarus atnaujinimas',
                'Konsultacijos 24/7'
            ],
            recommended: false
        }
    ];
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
                    <a href="/paslaugos/statybos-darbai" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Statybos darbai</a>
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
            <a href="/kontaktai" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Kontaktai
            </a>
        </div>
    </nav>
</header>

<div class="min-h-screen bg-white py-39 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">{data.service.title}</h1>
            <div class="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">{data.service.description}</p>
        </div>

        <!-- Main Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {#each maintenanceServices as service}
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-500 transition-all">
                    <div class="flex items-center mb-4">
                        <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                            {@html service.icon}
                        </div>
                        <h3 class="ml-4 text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p class="text-gray-600 mb-4">{service.description}</p>
                    <ul class="space-y-2">
                        {#each service.features as feature}
                            <li class="flex items-start">
                                <span class="text-green-500 mr-2">✓</span>
                                <span class="text-gray-600">{feature}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>

        <!-- Process Steps -->
        <div class="mb-16">
            <h2 class="text-2xl font-semibold mb-8 text-center">Priežiūros procesas</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {#each data.service.process as step}
                    <div class="relative">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xl">
                                {step.order}
                            </div>
                            {#if step.order < data.service.process.length}
                                <div class="hidden md:block w-full h-0.5 bg-blue-100"></div>
                            {/if}
                        </div>
                        <h3 class="text-lg font-semibold mb-2">{step.title}</h3>
                        <p class="text-gray-600">{step.description}</p>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Maintenance Plans -->
        <div class="mb-16">
            <h2 class="text-2xl font-semibold mb-8 text-center">Priežiūros planai</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {#each maintenancePlans as plan}
                    <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-200 relative {plan.recommended ? 'border-blue-500' : ''}">
                        {#if plan.recommended}
                            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                                    Rekomenduojama
                                </span>
                            </div>
                        {/if}
                        <h3 class="text-xl font-semibold mb-4 text-center {plan.recommended ? 'text-blue-600' : ''}">{plan.title}</h3>
                        <ul class="space-y-3 mb-6">
                            {#each plan.features as feature}
                                <li class="flex items-start">
                                    <span class="text-green-500 mr-2">✓</span>
                                    <span class="text-gray-600">{feature}</span>
                                </li>
                            {/each}
                        </ul>
                        <div class="text-center">
                            <a 
                                href="/kontaktai" 
                                class="inline-block w-full py-2 px-4 rounded-lg {plan.recommended ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-colors"
                            >
                                Pasirinkti planą
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Benefits -->
        <div class="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 class="text-2xl font-semibold mb-8 text-center">Kodėl rinktis mus?</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each data.service.benefits as benefit}
                    <div class="flex items-start">
                        <span class="text-blue-500 mr-3 text-xl">•</span>
                        <span class="text-gray-700">{benefit}</span>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Contact Section -->
        <div class="text-center bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h2 class="text-2xl font-semibold mb-4">Reikia interjero priežiūros?</h2>
            <p class="text-gray-600 mb-6">Susisiekite su mumis ir aptarsime jūsų interjero priežiūros poreikius</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href="/kontaktai" 
                    class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Gauti pasiūlymą
                </a>
                <a 
                    href="tel:+37060000000" 
                    class="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                    Skambinti dabar
                </a>
            </div>
        </div>
    </div>
</div>