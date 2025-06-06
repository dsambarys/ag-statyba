<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";
    import type { ServicePageData } from '../../../types/services';
    
    export let data: ServicePageData;

    const additionalServices = [
        {
            title: 'Statybos priežiūra',
            description: 'Profesionali statybos darbų priežiūra, užtikrinanti kokybišką projekto įgyvendinimą.',
            features: [
                'Statybos darbų koordinavimas',
                'Kokybės kontrolė',
                'Dokumentacijos tvarkymas',
                'Darbų atitikties tikrinimas'
            ],
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>`
        },
        {
            title: 'Projektų derinimas',
            description: 'Pagalba derinant projektus su institucijomis ir gaunant reikiamus leidimus.',
            features: [
                'Dokumentų paruošimas',
                'Bendravimas su institucijomis',
                'Leidimų gavimas',
                'Teisinė konsultacija'
            ],
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>`
        },
        {
            title: 'Teritorijos planavimas',
            description: 'Kompleksinis teritorijos planavimas ir projektavimas.',
            features: [
                'Sklypo analizė',
                'Teritorijos koncepcija',
                'Infrastruktūros planavimas',
                'Aplinkos pritaikymas'
            ],
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>`
        },
        {
            title: 'Interjero projektavimas',
            description: 'Funkcionalus ir estetiškas vidaus erdvių projektavimas.',
            features: [
                'Erdvių planavimas',
                'Medžiagų parinkimas',
                'Baldų išdėstymas',
                'Apšvietimo sprendimai'
            ],
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>`
        }
    ];

    const specializedServices = [
        {
            title: 'Kraštovaizdžio architektūra',
            description: 'Aplinkos projektavimas ir želdinių planavimas'
        },
        {
            title: 'Renovacijos projektai',
            description: 'Pastatų atnaujinimo ir modernizavimo projektai'
        },
        {
            title: 'Statinių ekspertizė',
            description: 'Techninė pastatų būklės analizė ir vertinimas'
        },
        {
            title: 'Energetinis sertifikavimas',
            description: 'Pastatų energetinio naudingumo vertinimas'
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
            <h1 class="text-4xl font-bold text-gray-900 mb-4">{data.service.title}</h1>
            <div class="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">{data.service.description}</p>
        </div>

        <!-- Main Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {#each additionalServices as service}
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

        <!-- Specialized Services -->
        <div class="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 class="text-2xl font-semibold mb-8 text-center">Specializuotos paslaugos</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {#each specializedServices as service}
                    <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 class="font-semibold mb-2">{service.title}</h3>
                        <p class="text-gray-600 text-sm">{service.description}</p>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Process Steps -->
        <div class="mb-16">
            <h2 class="text-2xl font-semibold mb-8 text-center">Darbo procesas</h2>
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
            <h2 class="text-2xl font-semibold mb-4">Reikia kitų paslaugų?</h2>
            <p class="text-gray-600 mb-6">Susisiekite su mumis ir aptarsime jūsų poreikius</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href="/kontaktai" 
                    class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Susisiekti
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