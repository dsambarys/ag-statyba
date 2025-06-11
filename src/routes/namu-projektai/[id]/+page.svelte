<script lang="ts">
    import { t } from '$lib/i18n/translate';
    import { page } from '$app/stores';
    import ThemeLanguageControls from '$lib/components/ThemeLanguageControls.svelte';
    import { onMount } from 'svelte';

    const projects = {
        'moldavitas': {
            name: 'Moldavitas',
            categories: ['Modernūs namai', 'Plokščias stogas', 'Vieno aukšto namai'],
            specs: {
                area: 195.81,
                rooms: 8,
                floors: 1,
                roof: 'Plokščias',
                dimensions: '14.48 x 26.54 x 4.35',
                garage: 'Nėra'
            },
            images: [
                'https://placehold.co/800x600?text=Moldavitas+1',
                'https://placehold.co/800x600?text=Moldavitas+2',
                'https://placehold.co/800x600?text=Moldavitas+3',
                'https://placehold.co/800x600?text=Moldavitas+4'
            ],
            description: 'Modernus vieno aukšto namas su plokščiu stogu, idealiai tinkantis šiuolaikinei šeimai. Erdvus ir funkcionalus projektas su didelėmis stiklinėmis sienomis, užtikrinančiomis maksimalų natūralios šviesos kiekį.'
        },
        'peridotas': {
            name: 'Peridotas',
            categories: ['Modernūs namai', 'Dviejų aukštų namai', 'Namai su šlaitiniu stogu'],
            specs: {
                area: 210.5,
                rooms: 9,
                floors: 2,
                roof: 'Šlaitinis',
                dimensions: '15.2 x 28.6 x 8.45',
                garage: 'Yra'
            },
            images: [
                'https://placehold.co/800x600?text=Peridotas+1',
                'https://placehold.co/800x600?text=Peridotas+2',
                'https://placehold.co/800x600?text=Peridotas+3',
                'https://placehold.co/800x600?text=Peridotas+4'
            ],
            description: 'Dviejų aukštų šiuolaikinis namas su šlaitiniu stogu ir integruotu garažu. Puikiai subalansuotas erdvių išplanavimas, didelė terasa ir modernūs architektūriniai sprendimai.'
        },
        'alabastras': {
            name: 'Alabastras',
            categories: ['Modernūs namai', 'Plokščias stogas', 'Vieno aukšto namai', 'Namai su stogine'],
            specs: {
                area: 185.3,
                rooms: 7,
                floors: 1,
                roof: 'Plokščias',
                dimensions: '13.8 x 24.6 x 4.2',
                garage: 'Nėra'
            },
            images: [
                'https://placehold.co/800x600?text=Alabastras+1',
                'https://placehold.co/800x600?text=Alabastras+2',
                'https://placehold.co/800x600?text=Alabastras+3',
                'https://placehold.co/800x600?text=Alabastras+4'
            ],
            description: 'Modernus vieno aukšto namas su plokščiu stogu ir erdvia stogine automobiliams. Išskirtinis fasado dizainas ir optimizuotas vidaus išplanavimas sukuria jaukią ir funkcionalią gyvenamąją erdvę.'
        }
    };

    let currentImageIndex = 0;
    let project: any;

    $: {
        const id = $page.params.id;
        project = projects[id];
    }

    const nextImage = () => {
        currentImageIndex = (currentImageIndex + 1) % project.images.length;
    };

    const previousImage = () => {
        currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    };

    const selectImage = (index: number) => {
        currentImageIndex = index;
    };
</script>

<ThemeLanguageControls />

<div class="min-h-screen bg-[#f9fafb] dark:bg-gray-900 py-20">
    <div class="max-w-[1200px] mx-auto px-5">
        {#if project}
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Image Gallery -->
                <div class="relative">
                    <div class="aspect-w-4 aspect-h-3 mb-4">
                        <img
                            src={project.images[currentImageIndex]}
                            alt={`${project.name} - ${currentImageIndex + 1}`}
                            class="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    
                    <!-- Navigation Arrows -->
                    <button
                        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                        on:click={previousImage}
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                        on:click={nextImage}
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <!-- Thumbnail Navigation -->
                    <div class="flex space-x-2 mt-4">
                        {#each project.images as _, index}
                            <button
                                class="flex-1 aspect-w-4 aspect-h-3"
                                class:opacity-50={currentImageIndex !== index}
                                on:click={() => selectImage(index)}
                            >
                                <img
                                    src={project.images[index]}
                                    alt={`${project.name} - ${index + 1}`}
                                    class="w-full h-full object-cover rounded-lg shadow-sm"
                                />
                            </button>
                        {/each}
                    </div>
                </div>

                <!-- Project Details -->
                <div>
                    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.name}</h1>
                    
                    <!-- Categories -->
                    <div class="flex flex-wrap gap-2 mb-6">
                        {#each project.categories as category}
                            <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                {category}
                            </span>
                        {/each}
                    </div>

                    <!-- Description -->
                    <p class="text-gray-600 dark:text-gray-300 mb-8">
                        {project.description}
                    </p>

                    <!-- Specifications -->
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('projects.specifications')}</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p class="text-gray-500 dark:text-gray-400">{t('projects.area')}</p>
                                <p class="font-medium text-gray-900 dark:text-white">{project.specs.area} m²</p>
                            </div>
                            <div>
                                <p class="text-gray-500 dark:text-gray-400">{t('projects.rooms')}</p>
                                <p class="font-medium text-gray-900 dark:text-white">{project.specs.rooms}</p>
                            </div>
                            <div>
                                <p class="text-gray-500 dark:text-gray-400">{t('projects.floors')}</p>
                                <p class="font-medium text-gray-900 dark:text-white">{project.specs.floors}</p>
                            </div>
                            <div>
                                <p class="text-gray-500 dark:text-gray-400">{t('projects.roof')}</p>
                                <p class="font-medium text-gray-900 dark:text-white">{project.specs.roof}</p>
                            </div>
                            <div>
                                <p class="text-gray-500 dark:text-gray-400">{t('projects.dimensions')}</p>
                                <p class="font-medium text-gray-900 dark:text-white">{project.specs.dimensions} m</p>
                            </div>
                            <div>
                                <p class="text-gray-500 dark:text-gray-400">{t('projects.garage')}</p>
                                <p class="font-medium text-gray-900 dark:text-white">{project.specs.garage}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/kontaktai"
                            class="flex-1 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                        >
                            {t('projects.contact_us')}
                        </a>
                        <a
                            href={`tel:${$page.data.contactInfo?.phone}`}
                            class="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-center"
                        >
                            {t('projects.call_us')}
                        </a>
                    </div>
                </div>
            </div>
        {:else}
            <div class="text-center py-20">
                <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('projects.not_found')}</h1>
                <a
                    href="/namu-projektai"
                    class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4"
                >
                    {t('projects.back_to_projects')}
                </a>
            </div>
        {/if}
    </div>
</div>

<style>
    :global(body) {
        @apply bg-[#f9fafb] dark:bg-gray-900;
    }
</style> 