<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";
    import type { ServicePageData } from '../../../types/services';
    import ServiceImage from '$lib/components/ServiceImage.svelte';
    import { serviceImages } from '$lib/data/serviceImages';
    
    export let data: ServicePageData;

    const costCategories = [
        {
            title: 'Statybinės medžiagos',
            items: ['Pamatų medžiagos', 'Sienos ir perdangos', 'Stogo medžiagos', 'Langai ir durys', 'Apdailos medžiagos']
        },
        {
            title: 'Statybos darbai',
            items: ['Žemės darbai', 'Pamatų įrengimas', 'Mūro darbai', 'Stogo įrengimas', 'Apdailos darbai']
        },
        {
            title: 'Inžinerinės sistemos',
            items: ['Šildymo sistema', 'Vandentiekis', 'Elektros instaliacija', 'Vėdinimo sistema', 'Nuotekų sistema']
        },
        {
            title: 'Papildomos išlaidos',
            items: ['Projektavimas', 'Leidimai', 'Geodeziniai matavimai', 'Techninė priežiūra', 'Transporto išlaidos']
        }
    ];

    const estimateTypes = [
        {
            title: 'Preliminari sąmata',
            description: 'Apytikslė statybos kaštų sąmata, padedanti susidaryti bendrą vaizdą apie projekto biudžetą.',
            suitable: 'Tinka pradiniam planavimui'
        },
        {
            title: 'Detali sąmata',
            description: 'Išsami sąmata su tiksliais medžiagų kiekiais ir darbų įkainiais.',
            suitable: 'Tinka statybos pradžiai'
        },
        {
            title: 'Konkursinė sąmata',
            description: 'Sąmata, skirta rangovų pasiūlymams palyginti ir deryboms vesti.',
            suitable: 'Tinka rangovų konkursui'
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
                    <a href="/paslaugos/konsultacijos" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Konsultacijos</a>
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

<div class="min-h-screen bg-white py-39 px-4 sm:px-6 lg:px-8">
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
                    <h2 class="text-2xl font-semibold mb-6">Sąmatos sudarymo paslaugos</h2>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <span class="text-green-500 mr-3">✓</span>
                            <span>Detalus medžiagų kiekių skaičiavimas</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-500 mr-3">✓</span>
                            <span>Darbų kaštų įvertinimas</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-500 mr-3">✓</span>
                            <span>Statybos etapų planavimas</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-500 mr-3">✓</span>
                            <span>Biudžeto optimizavimas</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-500 mr-3">✓</span>
                            <span>Finansinė konsultacija</span>
                        </li>
                    </ul>
                </div>

                <!-- Estimate Types -->
                <div class="bg-white p-8 rounded-lg border border-gray-100">
                    <h2 class="text-2xl font-semibold mb-6">Sąmatų tipai</h2>
                    <div class="space-y-6">
                        {#each estimateTypes as type}
                            <div class="p-6 bg-gray-50 rounded-lg">
                                <h3 class="font-semibold text-lg mb-2">{type.title}</h3>
                                <p class="text-gray-600 mb-2">{type.description}</p>
                                <span class="text-sm text-blue-600">{type.suitable}</span>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Benefits -->
                <div class="bg-gray-50 p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6">Kodėl verta užsakyti sąmatą?</h2>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <span class="text-blue-500 mr-3">•</span>
                            <span>Tikslus projekto biudžeto planavimas</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-500 mr-3">•</span>
                            <span>Išvengiama nenumatytų išlaidų</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-500 mr-3">•</span>
                            <span>Efektyvus resursų paskirstymas</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-500 mr-3">•</span>
                            <span>Skaidrus projekto finansavimas</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-8">
                <!-- Process Steps -->
                <div class="bg-white">
                    <h2 class="text-2xl font-semibold mb-8">Sąmatos rengimo eiga</h2>
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <span class="text-xl font-semibold">1</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-2">Projekto analizė</h3>
                                <p class="text-gray-600">Išsami projekto dokumentacijos peržiūra</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <span class="text-xl font-semibold">2</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-2">Kiekių skaičiavimas</h3>
                                <p class="text-gray-600">Detalus medžiagų ir darbų apimčių nustatymas</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <span class="text-xl font-semibold">3</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-2">Kaštų vertinimas</h3>
                                <p class="text-gray-600">Rinkos kainų analizė ir sąmatos sudarymas</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                <span class="text-xl font-semibold">4</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-2">Optimizavimas</h3>
                                <p class="text-gray-600">Biudžeto optimizavimas ir alternatyvų pasiūlymai</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cost Categories -->
                <div class="bg-gray-50 p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6">Sąmatos sudėtis</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {#each costCategories as category}
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <h3 class="font-semibold mb-3">{category.title}</h3>
                                <ul class="space-y-2">
                                    {#each category.items as item}
                                        <li class="text-sm text-gray-600 flex items-center">
                                            <span class="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            {item}
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Image if available -->
                <div class="relative">
                    <ServiceImage
                        src={data.service.image || serviceImages.costEstimation.path}
                        alt={serviceImages.costEstimation.alt.lt}
                        className="w-full h-64 md:h-96"
                    />
                </div>
            </div>
        </div>

        <!-- Contact Section -->
        <div class="text-center bg-gray-50 p-8 rounded-lg">
            <h2 class="text-2xl font-semibold mb-4">Norite sužinoti savo projekto kainą?</h2>
            <p class="text-gray-600 mb-6">Susisiekite su mumis ir gaukite profesionalią namo sąmatą</p>
            <a 
                href="/kontaktai" 
                class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Susisiekti
            </a>
        </div>
    </div>
</div>