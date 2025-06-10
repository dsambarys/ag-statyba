<script lang="ts">
    import { t } from '$lib/i18n/translate';
    import ThemeLanguageControls from '$lib/components/ThemeLanguageControls.svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    // Project data (in a real app, this would come from a database or API)
    const projects = {
        moldavitas: {
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
                '/images/projects/moldavitas/1.jpg',
                '/images/projects/moldavitas/2.jpg',
                '/images/projects/moldavitas/3.jpg',
                '/images/projects/moldavitas/4.jpg'
            ],
            description: `
                Modernus vieno aukšto namas su plokščiu stogu, idealiai tinkantis šiuolaikinei šeimai. 
                Erdvus 195.81 m² plotas suteikia komfortą ir funkcionalumą. Namas turi 8 kambarius, 
                įskaitant erdvų svetainės ir virtuvės kompleksą, miegamuosius ir darbo zonas.
                
                Išskirtinis fasado dizainas su dideliais langais užtikrina puikų natūralų apšvietimą 
                ir harmoniją su aplinka. Namo architektūra pabrėžia šiuolaikiškumą ir eleganciją.
            `
        },
        peridotas: {
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
                '/images/projects/peridotas/1.jpg',
                '/images/projects/peridotas/2.jpg',
                '/images/projects/peridotas/3.jpg',
                '/images/projects/peridotas/4.jpg'
            ],
            description: `
                Dviejų aukštų modernus namas su šlaitiniu stogu ir integruotu garažu. 210.5 m² plotas 
                paskirstytas per du aukštus, suteikiant optimalų erdvės išplanavimą. Pirmame aukšte 
                įrengta erdvi svetainė, virtuvė ir pagalbinės patalpos, antrame - miegamieji ir darbo zonos.
                
                Išskirtinis fasado dizainas derina modernias medžiagas ir klasikines formas. Didelės 
                stiklinės konstrukcijos užtikrina puikų natūralų apšvietimą ir ryšį su aplinka.
            `
        },
        alabastras: {
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
                '/images/projects/alabastras/1.jpg',
                '/images/projects/alabastras/2.jpg',
                '/images/projects/alabastras/3.jpg',
                '/images/projects/alabastras/4.jpg'
            ],
            description: `
                Modernus vieno aukšto namas su plokščiu stogu ir integruota stogine. 185.3 m² plotas 
                optimaliai išplanuotas, sukuriant erdvią ir patogią gyvenamąją aplinką. Namas turi 
                7 kambarius, įskaitant svetainę, virtuvę, miegamuosius ir darbo zonas.
                
                Išskirtinis fasado dizainas su kontrastingomis medžiagomis ir didelėmis stiklinėmis 
                konstrukcijomis sukuria modernų ir elegantišką vaizdą. Integruota stoginė suteikia 
                papildomą funkcionalumą ir architektūrinį akcentą.
            `
        }
    };

    let currentProject: any;
    let currentImageIndex = 0;

    onMount(() => {
        const projectId = $page.params.id;
        currentProject = projects[projectId as keyof typeof projects];
    });

    function nextImage() {
        if (currentProject) {
            currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
        }
    }

    function previousImage() {
        if (currentProject) {
            currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
        }
    }
</script>

<ThemeLanguageControls />

<div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="max-w-[1200px] mx-auto px-4 py-16">
        {#if currentProject}
            <!-- Project Header -->
            <div class="mb-8">
                <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">{currentProject.name}</h1>
                <div class="flex flex-wrap gap-2">
                    {#each currentProject.categories as category}
                        <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                            {category}
                        </span>
                    {/each}
                </div>
            </div>

            <!-- Image Gallery -->
            <div class="relative aspect-video mb-8 bg-gray-200 rounded-lg overflow-hidden">
                <img
                    src={currentProject.images[currentImageIndex]}
                    alt={`${currentProject.name} - ${currentImageIndex + 1}`}
                    class="w-full h-full object-cover"
                />
                
                <!-- Navigation Arrows -->
                <button
                    on:click={previousImage}
                    class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                >
                    ←
                </button>
                <button
                    on:click={nextImage}
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full"
                >
                    →
                </button>

                <!-- Image Counter -->
                <div class="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {currentProject.images.length}
                </div>
            </div>

            <!-- Thumbnail Gallery -->
            <div class="grid grid-cols-4 gap-4 mb-8">
                {#each currentProject.images as image, index}
                    <button
                        on:click={() => currentImageIndex = index}
                        class="relative aspect-video bg-gray-200 rounded-lg overflow-hidden {currentImageIndex === index ? 'ring-2 ring-blue-500' : ''}"
                    >
                        <img
                            src={image}
                            alt={`${currentProject.name} - ${index + 1}`}
                            class="w-full h-full object-cover"
                        />
                    </button>
                {/each}
            </div>

            <!-- Project Details -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Specifications -->
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('projects.specifications')}</h2>
                    <div class="space-y-4">
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">{t('projects.area')}</span>
                            <span class="font-medium text-gray-900 dark:text-white">{currentProject.specs.area} m²</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">{t('projects.rooms')}</span>
                            <span class="font-medium text-gray-900 dark:text-white">{currentProject.specs.rooms}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">{t('projects.floors')}</span>
                            <span class="font-medium text-gray-900 dark:text-white">{currentProject.specs.floors}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">{t('projects.roof')}</span>
                            <span class="font-medium text-gray-900 dark:text-white">{currentProject.specs.roof}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">{t('projects.dimensions')}</span>
                            <span class="font-medium text-gray-900 dark:text-white">{currentProject.specs.dimensions}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">{t('projects.garage')}</span>
                            <span class="font-medium text-gray-900 dark:text-white">{currentProject.specs.garage}</span>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('projects.description')}</h2>
                    <div class="prose dark:prose-invert max-w-none">
                        {#each currentProject.description.trim().split('\n\n') as paragraph}
                            <p class="mb-4 text-gray-600 dark:text-gray-400">{paragraph}</p>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Contact Button -->
            <div class="mt-8 text-center">
                <a
                    href="/kontaktai"
                    class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                    {t('projects.contact_us')}
                </a>
            </div>
        {:else}
            <div class="text-center text-gray-600 dark:text-gray-400">
                {t('projects.not_found')}
            </div>
        {/if}
    </div>
</div>

<style>
    :global(body) {
        @apply bg-white dark:bg-gray-900;
    }
</style> 