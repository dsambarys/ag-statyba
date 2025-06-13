<script lang="ts">
    import ThemeLanguageControls from '$lib/components/ThemeLanguageControls.svelte';
    import ServiceImage from '$lib/components/ServiceImage.svelte';
    import { page } from '$app/stores';
</script>

<ThemeLanguageControls />

<div class="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Konsultacijos</h1>
            <div class="w-24 h-0.5 bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Profesionalios konsultacijos namų statybos ir interjero klausimais
            </p>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <!-- Image -->
            <div class="relative aspect-w-16 aspect-h-9">
                <ServiceImage
                    src="/images/services/consultation.jpg"
                    alt="Konsultacijos"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            <!-- Content -->
            <div class="space-y-8">
                <div>
                    <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Konsultacijų paslaugos</h2>
                    <p class="text-gray-600 dark:text-gray-300">
                        Siūlome profesionalias konsultacijas įvairiais namų statybos ir interjero klausimais. Mūsų patyrę specialistai padės jums:
                    </p>
                    <ul class="mt-4 space-y-2">
                        <li class="flex items-start">
                            <span class="text-green-500 dark:text-green-400 mr-3">✓</span>
                            <span class="text-gray-600 dark:text-gray-300">Išsiaiškinti statybos technologijas ir medžiagas</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-500 dark:text-green-400 mr-3">✓</span>
                            <span class="text-gray-600 dark:text-gray-300">Pasirinkti tinkamiausią namo projektą</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-500 dark:text-green-400 mr-3">✓</span>
                            <span class="text-gray-600 dark:text-gray-300">Optimizuoti statybos biudžetą</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-500 dark:text-green-400 mr-3">✓</span>
                            <span class="text-gray-600 dark:text-gray-300">Išspręsti interjero planavimo klausimus</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Konsultacijos vyksta:</h2>
                    <ul class="space-y-2">
                        <li class="flex items-start">
                            <span class="text-blue-500 dark:text-blue-400 mr-3">•</span>
                            <span class="text-gray-600 dark:text-gray-300">Mūsų biure</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-500 dark:text-blue-400 mr-3">•</span>
                            <span class="text-gray-600 dark:text-gray-300">Jūsų namuose</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-blue-500 dark:text-blue-400 mr-3">•</span>
                            <span class="text-gray-600 dark:text-gray-300">Online per vaizdo konferenciją</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Konsultacijos kaina:</h2>
                    <p class="text-gray-600 dark:text-gray-300">
                        Konsultacijos kaina priklauso nuo konsultacijos trukmės ir sudėtingumo. Detalesnę informaciją galite gauti susisiekę su mumis.
                    </p>
                </div>

                <div class="pt-6">
                    <a
                        href="/kontaktai"
                        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Susisiekti
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    :global(body) {
        @apply bg-white dark:bg-gray-900;
    }
</style> 