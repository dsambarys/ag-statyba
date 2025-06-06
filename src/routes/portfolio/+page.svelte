<script lang="ts">
    import type { PortfolioItem } from '../../types/portfolio';
    
    export let data: { projects: PortfolioItem[] };
</script>

<div class="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Mūsų projektai</h1>
            <div class="w-24 h-0.5 bg-gray-300 mx-auto mb-8"></div>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Susipažinkite su mūsų įgyvendintais projektais - nuo individualių namų iki komercinių patalpų
            </p>
        </div>

        <!-- Portfolio Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each data.projects as project}
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        class="w-full h-64 object-cover"
                    />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
                        <p class="text-gray-600 mb-4">{project.description}</p>
                        <div class="flex flex-wrap gap-2">
                            {#each project.tags as tag}
                                <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                    {tag}
                                </span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>