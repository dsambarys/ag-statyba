<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";
    import type { ServicePageData } from '../../../types/services';
    
    export let data: ServicePageData;

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

<div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">{data.service.title}</h1>
            <div class="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">{data.service.description}</p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {#each specializedServices as service}
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <h3 class="text-xl font-semibold mb-4">{service.title}</h3>
                    <p class="text-gray-600">{service.description}</p>
                </div>
            {/each}
        </div>

        <!-- Additional Information -->
        <div class="max-w-4xl mx-auto">
            <div class="bg-gray-50 p-8 rounded-lg mb-12">
                <h2 class="text-2xl font-semibold mb-6">Papildomos paslaugos</h2>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <span class="text-green-500 mr-3">✓</span>
                        <span>Projektų derinimas su institucijomis</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-green-500 mr-3">✓</span>
                        <span>Statybos techninė priežiūra</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-green-500 mr-3">✓</span>
                        <span>Projektų ekspertizė</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-green-500 mr-3">✓</span>
                        <span>Konsultacijos statybos klausimais</span>
                    </li>
                </ul>
            </div>

            <!-- Contact Section -->
            <div class="text-center">
                <h2 class="text-2xl font-semibold mb-4">Reikalinga kita paslauga?</h2>
                <p class="text-gray-600 mb-6">Susisiekite su mumis ir aptarkime jūsų poreikius</p>
                <a 
                    href="/kontaktai" 
                    class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Susisiekti
                </a>
            </div>
        </div>
    </div>
</div>