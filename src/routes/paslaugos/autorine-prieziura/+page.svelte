<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";
    import type { ServicePageData } from '../../../types/services';
    
    export let data: ServicePageData;
</script>

<div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
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