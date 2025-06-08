<script lang="ts">
    export let data;
</script>

<div class="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">SIP Namai</h1>
            <div class="w-24 h-0.5 bg-gray-300 dark:bg-gray-700 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Modernūs, energetiškai efektyvūs ir greitai statomi namai, naudojant struktūrinių izoliuotų plokščių (SIP) technologiją.
            </p>
        </div>

        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {#each data.benefits as benefit}
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all">
                    <div class="flex items-center mb-4">
                        <div class="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-300">
                            {@html benefit.icon}
                        </div>
                        <h3 class="ml-4 text-xl font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">{benefit.description}</p>
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
                    src="/images/sip/c71913c94023d0d6bef6d68f66aed311_XL-860x484.jpg"
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