<script lang="ts">
    import {darkmode} from "$lib/stores/darkmode";
	import { slide } from "svelte/transition";
	import Moon from "./svg/Moon.svelte";
	import Sun from "./svg/Sun.svelte";

    let inTransition = {
        duration: 400, delay: 500
    }
    let outTransition = {
        duration: 400
    }

    function toggleDarkMode() {
    if ($darkmode) {
        $darkmode = false;
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        $darkmode = true;
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    }
    
</script>
<button class="p-2 text-purple-800 dark:text-yellow" on:click={toggleDarkMode}>
	{#if $darkmode}
        <div in:slide={inTransition} out:slide={outTransition}>
            <Sun className = "w-8 h-8 fill-current"/>
        </div>
	{:else}
        <div in:slide={inTransition} out:slide={outTransition}>
            <Moon className = "w-8 h-8 fill-current"/>
        </div>
	{/if}
</button>

            	
    