<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";
    import type { ServicePageData } from '../../../types/services';
    
    export let data: ServicePageData;
</script>

<header class="fixed z-10 top-0 w-full shadow-md inset-x-0 border-b bg-white dark:bg-gray-900 dark:border-gray-700">
    <nav class="flex items-center justify-between max-w-5xl mx-auto px-4 h-24">
        <a href="/" class="flex items-center gap-2 font-bold">
            <Logo className="w-12 h-12" />
            <span class="text-black dark:text-white">agstatyba.lt</span>
        </a>
        <div class="flex space-x-1 items-center">
            <!-- Dropdown for Paslaugos -->
            <div class="relative group">
                <a href="/paslaugos" class="lock text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    Paslaugos
                </a>
                <div class="absolute hidden group-hover:block bg-white dark:bg-gray-800 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg">
                    <a href="/paslaugos/statybos-darbai" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Statybos darbai</a>
                    <a href="/paslaugos/namu-projektavimas" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Namų projektavimas</a>
                    <a href="/paslaugos/interjero-prieziura" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Interjero dizainas</a>
                    <a href="/paslaugos/autorine-prieziura" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Autorinė priežiūra</a>
                    <a href="/paslaugos/konsultacijos" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Konsultacijos</a>
                    <a href="/paslaugos/namo-samata" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Namo sąmata</a>
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

        <!-- Main Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <!-- Left Column - Main Description -->
            <div class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-800">Kodėl svarbi autorinė priežiūra?</h2>
                <p class="text-gray-600 leading-relaxed">
                    Autorinė priežiūra užtikrina, kad statybos darbai būtų atliekami tiksliai pagal projektą.
                    Tai padeda išvengti klaidų, užtikrina kokybę ir padeda laiku identifikuoti galimus iššūkius.
                </p>
                <div class="space-y-4">
                    <h3 class="text-xl font-semibold text-gray-800">Pagrindiniai privalumai:</h3>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>Užtikrinama aukšta statybos darbų kokybė</li>
                        <li>Laiku sprendžiamos iškilusios problemos</li>
                        <li>Išvengiama brangiai kainuojančių klaidų</li>
                        <li>Garantuojamas projekto vizijos išpildymas</li>
                    </ul>
                </div>
            </div>

            <!-- Right Column - Process Steps -->
            <div class="bg-gray-50 p-8 rounded-lg space-y-6">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">Autorinės priežiūros procesas</h2>
                <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">1</div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Reguliarūs vizitai</h3>
                            <p class="text-gray-600">Periodiškai tikriname statybos eigą ir darbų atitikimą projektui</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">2</div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Dokumentacija</h3>
                            <p class="text-gray-600">Vedame išsamų statybos darbų žurnalą ir fiksuojame pastabas</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">3</div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Konsultacijos</h3>
                            <p class="text-gray-600">Teikiame rekomendacijas ir sprendžiame iškilusius klausimus</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">4</div>
                        <div>
                            <h3 class="font-semibold text-gray-800">Kokybės kontrolė</h3>
                            <p class="text-gray-600">Užtikriname, kad visi darbai atitiktų kokybės standartus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>