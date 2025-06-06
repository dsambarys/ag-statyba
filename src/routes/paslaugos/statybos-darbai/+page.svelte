<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";
    import type { ServicePageData } from '../../../types/services';
    
    export let data: ServicePageData;
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

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <!-- Left Column -->
            <div class="space-y-8">
                <!-- Features -->
                <div class="bg-gray-50 p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6">Teikiamos paslaugos</h2>
                    <ul class="space-y-4">
                        {#each data.service.features || [] as feature}
                            <li class="flex items-start">
                                <span class="text-green-500 mr-3">✓</span>
                                <span>{feature}</span>
                            </li>
                        {/each}
                    </ul>
                </div>

                <!-- Benefits -->
                <div class="bg-gray-50 p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6">Kodėl rinktis mus?</h2>
                    <ul class="space-y-4">
                        {#each data.service.benefits || [] as benefit}
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-3">•</span>
                                <span>{benefit}</span>
                            </li>
                        {/each}
                    </ul>
                </div>

                <!-- Quality Guarantee -->
                <div class="bg-blue-50 p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6">Kokybės garantija</h2>
                    <p class="text-gray-700 mb-4">
                        Visiems statybos darbams suteikiame garantiją. Mūsų komanda dirba tik su 
                        aukščiausios kokybės medžiagomis ir naudoja modernią įrangą.
                    </p>
                    <ul class="space-y-3">
                        <li class="flex items-center">
                            <span class="text-blue-600 mr-3">✓</span>
                            <span>5 metų garantija pagrindiniams statybos darbams</span>
                        </li>
                        <li class="flex items-center">
                            <span class="text-blue-600 mr-3">✓</span>
                            <span>2 metų garantija apdailos darbams</span>
                        </li>
                        <li class="flex items-center">
                            <span class="text-blue-600 mr-3">✓</span>
                            <span>Reguliari darbų kokybės kontrolė</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-8">
                <!-- Process Steps -->
                <div class="bg-white">
                    <h2 class="text-2xl font-semibold mb-8">Statybos eiga</h2>
                    <div class="space-y-6">
                        {#each data.service.process || [] as step}
                            <div class="flex items-start">
                                <div class="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                                    <span class="text-xl font-semibold">{step.order}</span>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p class="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Additional Services -->
                <div class="bg-gray-50 p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6">Papildomos paslaugos</h2>
                    <ul class="space-y-4">
                        <li class="flex items-center">
                            <span class="text-gray-400 mr-3">→</span>
                            <span>Statybos projekto valdymas</span>
                        </li>
                        <li class="flex items-center">
                            <span class="text-gray-400 mr-3">→</span>
                            <span>Medžiagų tiekimas ir logistika</span>
                        </li>
                        <li class="flex items-center">
                            <span class="text-gray-400 mr-3">→</span>
                            <span>Statybos dokumentacijos tvarkymas</span>
                        </li>
                        <li class="flex items-center">
                            <span class="text-gray-400 mr-3">→</span>
                            <span>Techninė priežiūra</span>
                        </li>
                    </ul>
                </div>

                <!-- Image if available -->
                {#if data.service.imageUrl}
                    <img 
                        src={data.service.imageUrl} 
                        alt={data.service.title}
                        class="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                {/if}
            </div>
        </div>

        <!-- Contact Section -->
        <div class="text-center bg-gray-50 p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-4">Susidomėjote?</h2>
            <p class="text-gray-600 mb-6">Susisiekite su mumis aptarti jūsų statybos projekto detalių</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href="/kontaktai" 
                    class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Susisiekti
                </a>
                <a 
                    href="/paslaugos/namo-samata" 
                    class="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                    Sužinoti kainą
                </a>
            </div>
        </div>
    </div>
</div>