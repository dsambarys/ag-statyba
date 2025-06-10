<script lang="ts">
	import { t } from '$lib/i18n/translate';
	import { currentLanguage, setLanguage } from '$lib/stores/language';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let isDarkMode = false;

	onMount(() => {
		if (browser) {
			// Check if user has a theme preference in localStorage
			const storedTheme = localStorage.getItem('theme');
			isDarkMode = storedTheme === 'dark' || 
				(!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
			
			updateTheme(isDarkMode);
		}
	});

	const toggleLanguage = () => {
		setLanguage($currentLanguage === 'lt' ? 'en' : 'lt');
	};

	const toggleTheme = () => {
		isDarkMode = !isDarkMode;
		updateTheme(isDarkMode);
	};

	const updateTheme = (dark: boolean) => {
		if (browser) {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
			if (dark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	};
</script>

<div class="fixed top-4 right-4 z-50 flex space-x-2">
	<!-- Language Switcher -->
	<button
		on:click={toggleLanguage}
		class="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2"
		aria-label={t('common.switchLanguage')}
	>
		<span class="font-medium">{$currentLanguage === 'lt' ? '🇱🇹 LT' : '🇬🇧 EN'}</span>
	</button>

	<!-- Theme Toggle -->
	<button
		on:click={toggleTheme}
		class="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
		aria-label={t('common.toggleTheme')}
	>
		{#if isDarkMode}
			<!-- Sun icon -->
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
			</svg>
		{:else}
			<!-- Moon icon -->
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
			</svg>
		{/if}
	</button>
</div> 