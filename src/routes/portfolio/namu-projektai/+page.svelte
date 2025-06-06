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
        <h1 class="text-4xl font-bold mb-4">Namų Projektai</h1>
        <p class="text-lg text-gray-600 max-w-3xl">
            Atraskite mūsų sukurtus namų projektus, kurie atspindi modernią architektūrą 
            ir funkcionalumą. Kiekvienas projektas yra unikalus ir pritaikytas prie 
            klientų poreikių.
        </p>
    </div>

    <!-- Search and Filters -->
    <div class="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
            type="text"
            placeholder="Ieškoti projektų..."
            bind:value={searchQuery}
            class="p-2 border rounded-lg"
        />
        <select
            bind:value={filters.style}
            class="p-2 border rounded-lg"
        >
            <option value="">Visi stiliai</option>
            <option value="Modern">Modernus</option>
            <option value="Eco">Ekologiškas</option>
            <option value="Traditional">Tradicinis</option>
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
            <p class="text-xl text-gray-600">Projektų nerasta pagal pasirinktus filtrus.</p>
        </div>
    {/if}
</div>