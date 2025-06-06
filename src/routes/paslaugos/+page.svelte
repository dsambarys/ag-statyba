<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";
    import { fade } from 'svelte/transition';
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

<div class="min-h-screen bg-white">
    <!-- Header Section -->
    <div class="w-full text-center py-20 bg-white">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">ARCHITEKTO PASLAUGOS</h1>
        <div class="flex justify-center">
            <div class="w-24 h-0.5 bg-gray-300"></div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 md:px-6 lg:px-8 mb-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Left Column - Services Description -->
            <div class="space-y-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-6">Kokias paslaugas teikiame?</h2>
                <p class="text-lg text-gray-600 leading-relaxed">
                    Mūsų architektų paslaugos apima platų spektrą – nuo konsultacijų, idėjų eskizų, 
                    galimybių studijų iki techninių darbo projektų rengimo, statybos leidimo gavimo, 
                    autorinės priežiūros statybų metu. Stengiamės, kad mūsų suprojektuoti 
                    sprendiniai dar ilgai džiugintų klientus, būtų optimalūs, protingi, estetiški, 
                    novatoriški ir svarbiausia – funkcionalūs.
                </p>
            </div>

            <!-- Right Column - Services Links -->
            <div class="bg-gray-50 p-8 rounded-lg">
                <nav class="space-y-4">
                    <a href="/paslaugos/individualiu-namu-projektavimas" 
                       class="flex items-center justify-between p-4 hover:bg-white rounded-lg transition-all duration-300 group">
                        <span class="text-lg text-gray-700 group-hover:text-gray-900">Individualių namų projektavimas</span>
                        <span class="text-gray-400 group-hover:text-gray-600">→</span>
                    </a>
                    <a href="/paslaugos/interjero-dizainas" 
                       class="flex items-center justify-between p-4 hover:bg-white rounded-lg transition-all duration-300 group">
                        <span class="text-lg text-gray-700 group-hover:text-gray-900">Interjero dizainas</span>
                        <span class="text-gray-400 group-hover:text-gray-600">→</span>
                    </a>
                    <a href="/paslaugos/autorine-prieziura" 
                       class="flex items-center justify-between p-4 hover:bg-white rounded-lg transition-all duration-300 group">
                        <span class="text-lg text-gray-700 group-hover:text-gray-900">Autorinė priežiūra</span>
                        <span class="text-gray-400 group-hover:text-gray-600">→</span>
                    </a>
                    <a href="/paslaugos/konsultacijos" 
                       class="flex items-center justify-between p-4 hover:bg-white rounded-lg transition-all duration-300 group">
                        <span class="text-lg text-gray-700 group-hover:text-gray-900">Konsultacijos</span>
                        <span class="text-gray-400 group-hover:text-gray-600">→</span>
                    </a>
                    <a href="/paslaugos/namo-samata" 
                       class="flex items-center justify-between p-4 hover:bg-white rounded-lg transition-all duration-300 group">
                        <span class="text-lg text-gray-700 group-hover:text-gray-900">Namo sąmata</span>
                        <span class="text-gray-400 group-hover:text-gray-600">→</span>
                    </a>
                    <a href="/paslaugos/kitos-paslaugos" 
                       class="flex items-center justify-between p-4 hover:bg-white rounded-lg transition-all duration-300 group">
                        <span class="text-lg text-gray-700 group-hover:text-gray-900">Kitos paslaugos</span>
                        <span class="text-gray-400 group-hover:text-gray-600">→</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</div>

<style>
    :global(body) {
        background-color: white;
    }
</style>

    