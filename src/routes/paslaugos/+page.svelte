<script lang="ts">
    import { fade } from 'svelte/transition';
</script>

<div class="min-h-screen bg-white">
    <!-- Header Section -->
    <div class="w-full text-center py-20 bg-white">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">ARCHITEKTO PASLAUGOS</h1>
        <div class="flex justify-center">
            <div class="w-24 h-0.5 bg-gray-300"></div>
        </div>
    </div>

    <!-- Services Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Service Cards -->
            <a href="/paslaugos/statybos-darbai" class="group">
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4">Statybos darbai</h3>
                    <p class="text-gray-600">Profesionalūs statybos darbai, atliekami pagal aukščiausius standartus</p>
                </div>
            </a>
            
            <a href="/paslaugos/namu-projektavimas" class="group">
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4">Namų projektavimas</h3>
                    <p class="text-gray-600">Individualių namų projektavimas pagal jūsų poreikius</p>
                </div>
            </a>
            
            <a href="/paslaugos/interjero-prieziura" class="group">
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4">Interjero dizainas</h3>
                    <p class="text-gray-600">Profesionalus interjero dizainas ir projektavimas</p>
                </div>
            </a>
            
            <a href="/paslaugos/autorine-prieziura" class="group">
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4">Autorinė priežiūra</h3>
                    <p class="text-gray-600">Projekto įgyvendinimo priežiūra ir kokybės kontrolė</p>
                </div>
            </a>
            
            <a href="/paslaugos/konsultacijos" class="group">
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4">Konsultacija</h3>
                    <p class="text-gray-600">Profesionalios konsultacijos statybų ir projektavimo klausimais</p>
                </div>
            </a>
            
            <a href="/paslaugos/namo-samata" class="group">
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4">Namo sąmata</h3>
                    <p class="text-gray-600">Detalus projekto kaštų apskaičiavimas ir planavimas</p>
                </div>
            </a>
            
            <a href="/paslaugos/kitos-paslaugos" class="group">
                <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-500 transition-all">
                    <h3 class="text-xl font-semibold mb-4">Kitos paslaugos</h3>
                    <p class="text-gray-600">Papildomos statybos ir projektavimo paslaugos</p>
                </div>
            </a>
        </div>
    </div>
</div>

<style>
    :global(body) {
        background-color: white;
    }
</style>

    