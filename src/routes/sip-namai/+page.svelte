<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";
    export let data;
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
            <h1 class="text-4xl font-bold text-gray-900 mb-4">SIP Namai</h1>
            <div class="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Modernūs, energetiškai efektyvūs ir greitai statomi namai, naudojant struktūrinių izoliuotų plokščių (SIP) technologiją.
            </p>
        </div>

        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {#each data.benefits as benefit}
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-500 transition-all">
                    <div class="flex items-center mb-4">
                        <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                            {@html benefit.icon}
                        </div>
                        <h3 class="ml-4 text-xl font-semibold">{benefit.title}</h3>
                    </div>
                    <p class="text-gray-600">{benefit.description}</p>
                </div>
            {/each}
        </div>

        <!-- Technical Features -->
        <div class="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 class="text-2xl font-semibold mb-8 text-center">Techninės charakteristikos</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each data.features as feature}
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <h3 class="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                        <div class="flex items-baseline">
                            <span class="text-3xl font-bold text-blue-600">{feature.value}</span>
                            {#if feature.unit}
                                <span class="ml-2 text-gray-500">{feature.unit}</span>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Construction Process -->
        <div class="mb-16">
            <h2 class="text-2xl font-semibold mb-8 text-center">Statybos procesas</h2>
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {#each data.constructionStages as stage}
                    <div class="relative">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xl">
                                {stage.order}
                            </div>
                            {#if stage.order < data.constructionStages.length}
                                <div class="hidden lg:block w-full h-0.5 bg-blue-100"></div>
                            {/if}
                        </div>
                        <h3 class="text-lg font-semibold mb-2">{stage.title}</h3>
                        <p class="text-gray-600 mb-2">{stage.description}</p>
                        <span class="text-sm text-blue-600 font-medium">{stage.duration}</span>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Image Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div class="bg-gray-100 rounded-lg overflow-hidden h-96">
                <img
                    src="/images/sip/construction.jpg"
                    alt="SIP namo statyba"
                    class="w-full h-full object-cover"
                />
            </div>
            <div class="flex flex-col justify-center">
                <h2 class="text-2xl font-semibold mb-4">Kodėl verta rinktis SIP namus?</h2>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <span class="text-green-500 mr-3">✓</span>
                        <span>Trumpas statybos laikas - namas pastatomas per 2-3 mėnesius</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-green-500 mr-3">✓</span>
                        <span>Puikios šiluminės charakteristikos - mažos šildymo išlaidos</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-green-500 mr-3">✓</span>
                        <span>Aukšta konstrukcijų kokybė dėl gamyklinės gamybos</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-green-500 mr-3">✓</span>
                        <span>Galimybė statyti bet kuriuo metų laiku</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-green-500 mr-3">✓</span>
                        <span>Ilgaamžiškumas ir minimali priežiūra</span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- FAQ Section -->
        <div class="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 class="text-2xl font-semibold mb-8 text-center">Dažniausiai užduodami klausimai</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-semibold mb-2">Kiek laiko tarnauja SIP namai?</h3>
                    <p class="text-gray-600">SIP namų tarnavimo laikas yra 50+ metų, tinkamai prižiūrint gali tarnauti dar ilgiau.</p>
                </div>
                <div>
                    <h3 class="font-semibold mb-2">Ar galima statyti žiemą?</h3>
                    <p class="text-gray-600">Taip, SIP technologija leidžia vykdyti statybas bet kuriuo metų laiku.</p>
                </div>
                <div>
                    <h3 class="font-semibold mb-2">Ar SIP namai atsparūs ugniai?</h3>
                    <p class="text-gray-600">SIP plokštės atitinka visus priešgaisrinės saugos reikalavimus ir yra apdorotos antipireninėmis medžiagomis.</p>
                </div>
                <div>
                    <h3 class="font-semibold mb-2">Kokia apdaila galima?</h3>
                    <p class="text-gray-600">Galima naudoti bet kokią išorės ir vidaus apdailą - tinkavimą, dailylentes, plyteles ir kt.</p>
                </div>
            </div>
        </div>

        <!-- Contact Section -->
        <div class="text-center bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h2 class="text-2xl font-semibold mb-4">Susidomėjote SIP namais?</h2>
            <p class="text-gray-600 mb-6">Susisiekite su mumis ir aptarsime jūsų būsimo namo projektą</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href="/kontaktai" 
                    class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Susisiekti
                </a>
                <a 
                    href="/portfolio/namu-projektai" 
                    class="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                    Peržiūrėti projektus
                </a>
            </div>
        </div>
    </div>
</div>