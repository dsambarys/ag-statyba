<script lang="ts">
    import { fade } from 'svelte/transition';
    import ThemeLanguageControls from '$lib/components/ThemeLanguageControls.svelte';
</script>

<ThemeLanguageControls />

<div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Header Section -->
    <div class="w-full text-center py-20 bg-white dark:bg-gray-900">
        <h1 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">ARCHITEKTO PASLAUGOS</h1>
        <div class="flex justify-center">
            <div class="w-24 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
        </div>
    </div>

    <!-- Services Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Service Cards -->
            <a href="/paslaugos/statybos-darbai" class="group">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Statybos darbai</h3>
                    <p class="text-gray-600 dark:text-gray-300">Profesionalūs statybos darbai, atliekami pagal aukščiausius standartus</p>
                </div>
            </a>
            
            <a href="/paslaugos/namu-projektavimas" class="group">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Namų projektavimas</h3>
                    <p class="text-gray-600 dark:text-gray-300">Individualių namų projektavimas pagal jūsų poreikius</p>
                </div>
            </a>
            
            <a href="/paslaugos/interjero-prieziura" class="group">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Interjero dizainas</h3>
                    <p class="text-gray-600 dark:text-gray-300">Profesionalus interjero dizainas ir projektavimas</p>
                </div>
            </a>
            
            <a href="/paslaugos/autorine-prieziura" class="group">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Autorinė priežiūra</h3>
                    <p class="text-gray-600 dark:text-gray-300">Projekto įgyvendinimo priežiūra ir kokybės kontrolė</p>
                </div>
            </a>
            
            <a href="/paslaugos/konsultacijos" class="group">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Konsultacija</h3>
                    <p class="text-gray-600 dark:text-gray-300">Profesionalios konsultacijos statybų ir projektavimo klausimais</p>
                </div>
            </a>
            
            <a href="/paslaugos/namo-samata" class="group">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Namo sąmata</h3>
                    <p class="text-gray-600 dark:text-gray-300">Detalus projekto kaštų apskaičiavimas ir planavimas</p>
                </div>
            </a>
            
            <a href="/paslaugos/kitos-paslaugos" class="group">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Kitos paslaugos</h3>
                    <p class="text-gray-600 dark:text-gray-300">Papildomos statybos ir projektavimo paslaugos</p>
                </div>
            </a>
        </div>
    </div>
</div>

<style>
    :global(body) {
        @apply bg-white dark:bg-gray-900;
    }
</style>

    