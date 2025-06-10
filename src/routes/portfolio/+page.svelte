<script lang="ts">
    import { t } from '$lib/i18n/translate';
    import ThemeLanguageControls from '$lib/components/ThemeLanguageControls.svelte';

    const projects = [
        {
            title: 'Modernus vieno aukšto namas',
            category: 'Gyvenamieji namai',
            description: 'Šiuolaikinis vieno aukšto namas su plokščiu stogu',
            image: '/images/portfolio/1.jpg'
        },
        {
            title: 'Dviejų aukštų namas',
            category: 'Gyvenamieji namai',
            description: 'Erdvus dviejų aukštų namas su garažu',
            image: '/images/portfolio/2.jpg'
        },
        {
            title: 'SIP Namas',
            category: 'SIP Namai',
            description: 'Energetiškai efektyvus SIP technologijos namas',
            image: '/images/portfolio/3.jpg'
        }
    ];
</script>

<ThemeLanguageControls />

<div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="max-w-[1200px] mx-auto px-4 py-16">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">{t('portfolio.title')}</h1>

        <!-- Portfolio Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each projects as project}
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div class="relative h-64 bg-gray-200">
                        <img
                            src={project.image}
                            alt={project.title}
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="p-6">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {project.title}
                        </h2>
                        <p class="text-blue-600 dark:text-blue-400 mb-4">{project.category}</p>
                        <p class="text-gray-600 dark:text-gray-400">{project.description}</p>
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