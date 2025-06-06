<script lang="ts">
	import Logo from "$lib/components/svg/Logo.svelte";
    import type { PortfolioItem, ProjectFilters } from '../../../types/portfolio';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<header class="fixed z-10 top-0 w-full shadow-md inset-x-0 border-b bg-white dark:bg-dark-background dark:border-gray-800">
    <nav class="flex items-center justify-between max-w-5xl mx-auto px-4 h-24">
        <a href="/" class="flex items-center gap-2 font-bold">
            <Logo className="w-12 h-12" />
            <span class="text-black ">agstatyba.lt</span>
        </a>
        <div class="flex space-x-1 items-center">
            <!-- Dropdown for Paslaugos -->
            <div class="relative group">
                <a href="/paslaugos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                    Paslaugos
                </a>
                <div class="absolute hidden group-hover:block bg-gray-50 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg">
                    <a href="/paslaugos/staybos-darbai" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Statybos darbai</a>
                    <a href="/paslaugos/namu-projektavimas" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų projektavimas</a>
                    <a href="/paslaugos/interjero-prieziura" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Interjero dizainas</a>
                    <a href="/paslaugos/autorine-prieziura" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Autorinė priežiūra</a>
                    <a href="/paslaugos/konsultacija" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Konsultacija</a>
                    <a href="/paslaugos/namo-samata" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namo sąmata</a>
                    <a href="/paslaugos/kitos-paslaugos" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Kitos paslaugos</a>
                </div>
            </div>
            <div class="relative group">
                <a href="/portfolio" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                    Portfolio
                </a>
                <div class="absolute hidden group-hover:block bg-gray-50 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg">
                    <a href="/portfolio/namu-projektai" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų projektai</a>
                    <a href="/portfolio/namu-interjerai" class="block text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">Namų interjerai</a>
                </div>
            </div>
            <a href="/sip-namai" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                SIP namai
            </a>
            <a href="/kainos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Kainos
            </a>
            <a href="/konsultacijos" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Konsultacijos
            </a>
            <a href="/kontaktai" class="lock text-black px-4 py-3 no-underline text-left hover:bg-gray-200 transition-colors">
                Kontaktai
            </a>
        </div>
    </nav>
</header>

<script lang="ts">
    import type { PortfolioItem, ProjectFilters } from '../../../types/portfolio';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    
    export let data: { projects: PortfolioItem[] };
    
    let filters: ProjectFilters = {};
    let searchQuery = '';
    
    $: filteredProjects = data.projects.filter(project => {
        if (searchQuery && !project.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        if (filters.style && project.details.style !== filters.style) {
            return false;
        }
        if (filters.year && project.details.year !== filters.year) {
            return false;
        }
        if (filters.minArea && (!project.details.area || project.details.area < filters.minArea)) {
            return false;
        }
        if (filters.maxArea && (!project.details.area || project.details.area > filters.maxArea)) {
            return false;
        }
        return true;
    });
</script>

<div class="max-w-7xl mx-auto px-4 py-12">
    <div class="mb-12">
        <h1 class="text-4xl font-bold mb-4">Namų Interjerai</h1>
        <p class="text-lg text-gray-600 max-w-3xl">
            Susipažinkite su mūsų sukurtais interjerų projektais, kurie paverčia namus 
            jaukia ir stilinga erdve. Kiekvienas interjeras atspindi unikalų savininko 
            charakterį ir gyvenimo būdą.
        </p>
    </div>

    <!-- Search and Filters -->
    <div class="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
            type="text"
            placeholder="Ieškoti interjerų..."
            bind:value={searchQuery}
            class="p-2 border rounded-lg"
        />
        <select
            bind:value={filters.style}
            class="p-2 border rounded-lg"
        >
            <option value="">Visi stiliai</option>
            <option value="Modern">Modernus</option>
            <option value="Scandinavian">Skandinaviškas</option>
            <option value="Contemporary">Šiuolaikinis</option>
            <option value="Minimalist">Minimalistinis</option>
        </select>
        <select
            bind:value={filters.year}
            class="p-2 border rounded-lg"
        >
            <option value="">Visi metai</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
        </select>
        <button
            on:click={() => {
                filters = {};
                searchQuery = '';
            }}
            class="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
            Išvalyti filtrus
        </button>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredProjects as project (project.id)}
            <ProjectCard {project} />
        {/each}
    </div>

    {#if filteredProjects.length === 0}
        <div class="text-center py-12">
            <p class="text-xl text-gray-600">Interjerų nerasta pagal pasirinktus filtrus.</p>
        </div>
    {/if}
</div>