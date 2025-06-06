<script lang="ts">
    import type { ServicePageData } from '../../../types/services';
    
    export let data: ServicePageData;

    const consultationTypes = [
        {
            title: 'Architektūrinė konsultacija',
            description: 'Namo projekto, dizaino sprendimų ir galimybių aptarimas',
            duration: '60 min.',
            format: 'Gyvai arba nuotoliniu būdu'
        },
        {
            title: 'Techninė konsultacija',
            description: 'Statybos procesų, medžiagų ir techninių sprendimų aptarimas',
            duration: '60 min.',
            format: 'Gyvai arba nuotoliniu būdu'
        },
        {
            title: 'Dokumentų konsultacija',
            description: 'Statybos dokumentų, leidimų ir teisinių aspektų aptarimas',
            duration: '45 min.',
            format: 'Gyvai arba nuotoliniu būdu'
        }
    ];

    const commonQuestions = [
        {
            question: 'Kiek kainuoja namo statyba?',
            answer: 'Aptarsime preliminarų biudžetą, įvairius kaštų aspektus ir optimizavimo galimybes.'
        },
        {
            question: 'Nuo ko pradėti statybas?',
            answer: 'Patarsime dėl pirmųjų žingsnių, dokumentų tvarkymo ir projekto planavimo.'
        },
        {
            question: 'Kokias medžiagas rinktis?',
            answer: 'Rekomenduosime tinkamiausias medžiagas pagal jūsų poreikius ir biudžetą.'
        },
        {
            question: 'Kaip išsirinkti rangovą?',
            answer: 'Patarsime, į ką atkreipti dėmesį renkantis rangovus ir kaip užtikrinti kokybę.'
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

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <!-- Left Column -->
            <div class="space-y-8">
                <!-- Features -->
                <div class="bg-gray-50 p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6">Konsultacijų paslaugos</h2>
                    <ul class="space-y-4">
                        {#each data.service.features || [] as feature}
                            <li class="flex items-start">
                                <span class="text-green-500 mr-3">✓</span>
                                <span>{feature}</span>
                            </li>
                        {/each}
                    </ul>
                </div>

                <!-- Consultation Types -->
                <div class="space-y-4">
                    {#each consultationTypes as type}
                        <div class="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
                            <div class="flex justify-between items-start mb-4">
                                <h3 class="text-lg font-semibold">{type.title}</h3>
                                <div class="text-sm text-gray-500">{type.duration}</div>
                            </div>
                            <p class="text-gray-600 mb-3">{type.description}</p>
                            <div class="flex items-center text-sm text-gray-500">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                {type.format}
                            </div>
                        </div>
                    {/each}
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
            </div>

            <!-- Right Column -->
            <div class="space-y-8">
                <!-- Process Steps -->
                <div class="bg-white">
                    <h2 class="text-2xl font-semibold mb-8">Konsultacijos eiga</h2>
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

                <!-- Common Questions -->
                <div class="bg-gray-50 p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6">Dažniausiai aptariami klausimai</h2>
                    <div class="space-y-6">
                        {#each commonQuestions as item}
                            <div class="bg-white p-4 rounded-lg">
                                <h3 class="font-semibold mb-2">{item.question}</h3>
                                <p class="text-gray-600 text-sm">{item.answer}</p>
                            </div>
                        {/each}
                    </div>
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
            <p class="text-gray-600 mb-6">Užsiregistruokite nemokamam pirminiam pokalbiui</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href="/kontaktai" 
                    class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Registruotis konsultacijai
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