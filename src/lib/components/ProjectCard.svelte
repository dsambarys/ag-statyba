<script lang="ts">
    import type { PortfolioItem } from '../../types/portfolio';
    
    export let project: PortfolioItem;
</script>

<a href="/portfolio/{project.category}/{project.id}" class="group">
    <div class="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
        <img 
            src={project.images[0]} 
            alt={project.title}
            class="h-64 w-full object-cover"
        />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h3 class="text-xl font-semibold text-white">{project.title}</h3>
            <div class="mt-2 flex flex-wrap gap-2">
                {#if project.details.area}
                    <span class="text-sm text-gray-200">{project.details.area} m²</span>
                {/if}
                {#if project.details.location}
                    <span class="text-sm text-gray-200">| {project.details.location}</span>
                {/if}
                {#if project.details.year}
                    <span class="text-sm text-gray-200">| {project.details.year}</span>
                {/if}
            </div>
        </div>
    </div>
</a> 