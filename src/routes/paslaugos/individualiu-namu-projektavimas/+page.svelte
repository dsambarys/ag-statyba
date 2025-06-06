<script lang="ts">
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <!-- Left Column -->
            <div class="space-y-8">
                <!-- Features -->
                <div class="bg-gray-50 p-8 rounded-lg">
                    <h2 class="text-2xl font-semibold mb-6">Paslaugos apima</h2>
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
            </div>

            <!-- Right Column -->
            <div class="space-y-8">
                <!-- Process Steps -->
                <div class="bg-white">
                    <h2 class="text-2xl font-semibold mb-8">Projektavimo eiga</h2>
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
            <p class="text-gray-600 mb-6">Susisiekite su mumis aptarti jūsų projekto detalių</p>
            <a 
                href="/kontaktai" 
                class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Susisiekti
            </a>
        </div>
    </div>
</div> 