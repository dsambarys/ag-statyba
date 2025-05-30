<script lang="ts">
	import MainHeader from '$lib/components/MainHeader.svelte';
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
    import '../app.css';
</script>


<ThemeInitializer>
	<MainHeader/>
	<main>
		<slot />
	</main>
</ThemeInitializer>
