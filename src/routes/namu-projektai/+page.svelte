<!-- src/routes/namu-projektai/+page.svelte -->
<script lang="ts">
    import { t } from '$lib/i18n/translate';
    import ThemeLanguageControls from '$lib/components/ThemeLanguageControls.svelte';

    const projects = [
        {
            id: 'moldavitas',
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
            ]
        },
        {
            id: 'peridotas',
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
            ]
        },
        {
            id: 'alabastras',
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
            ]
        }
    ];
</script>

<ThemeLanguageControls />

<div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="max-w-[1200px] mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">{t('projects.title')}</h1>

        <!-- Project Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each projects as project}
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <!-- Project Image Carousel -->
                    <div class="relative h-64 bg-gray-200">
                        <img
                            src={project.images[0]}
                            alt={project.name}
                            class="w-full h-full object-cover"
                        />
                    </div>

                    <!-- Project Info -->
                    <div class="p-6">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.name}</h2>
                        
                        <!-- Categories -->
                        <div class="flex flex-wrap gap-2 mb-4">
                            {#each project.categories as category}
                                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                                    {category}
                                </span>
                            {/each}
                        </div>

                        <!-- Specifications -->
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">{t('projects.area')}</span>
                                <span class="font-medium text-gray-900 dark:text-white">{project.specs.area} m²</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">{t('projects.rooms')}</span>
                                <span class="font-medium text-gray-900 dark:text-white">{project.specs.rooms}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">{t('projects.floors')}</span>
                                <span class="font-medium text-gray-900 dark:text-white">{project.specs.floors}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">{t('projects.roof')}</span>
                                <span class="font-medium text-gray-900 dark:text-white">{project.specs.roof}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">{t('projects.dimensions')}</span>
                                <span class="font-medium text-gray-900 dark:text-white">{project.specs.dimensions}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">{t('projects.garage')}</span>
                                <span class="font-medium text-gray-900 dark:text-white">{project.specs.garage}</span>
                            </div>
                        </div>

                        <!-- View Details Button -->
                        <a
                            href={`/namu-projektai/${project.id}`}
                            class="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                            {t('projects.view_details')}
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    :global(body) {
        @apply bg-white dark:bg-gray-900;
    }
</style> 