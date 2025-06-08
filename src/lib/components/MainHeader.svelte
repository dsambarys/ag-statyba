<script lang="ts">
	import Logo from "./svg/Logo.svelte";
	import { currentLanguage, setLanguage } from '$lib/stores/language';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { t } from '$lib/i18n/translate';

	const toggleLanguage = () => {
		setLanguage($currentLanguage === 'lt' ? 'en' : 'lt');
	};
</script>

<header class="fixed z-10 top-0 w-full shadow-md inset-x-0 border-b bg-white dark:bg-gray-900 dark:border-gray-800 transition-colors duration-200">
    <nav class="flex items-center justify-between max-w-5xl mx-auto px-4 h-24">
        <!-- Left section - Logo -->
        <a href="/" class="flex items-center gap-2 font-bold">
            <Logo className="w-12 h-12" />
            <span class="text-black dark:text-white transition-colors duration-200">agstatyba.lt</span>
        </a>
        
        <!-- Center section - Main navigation -->
        <div class="flex space-x-1 items-center">
            <!-- Dropdown for Paslaugos -->
            <div class="relative group">
                <a href="/paslaugos" class="lock text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                    {t('nav.services')}
                </a>
                <div class="absolute hidden group-hover:block bg-white dark:bg-gray-900 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg transition-colors duration-200">
                    <a href="/paslaugos/statybos-darbai" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                        {t('nav.services_submenu.construction')}
                    </a>
                    <a href="/paslaugos/namu-projektavimas" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                        {t('nav.services_submenu.house_design')}
                    </a>
                    <a href="/paslaugos/interjero-prieziura" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                        {t('nav.services_submenu.interior_design')}
                    </a>
                    <a href="/paslaugos/autorine-prieziura" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                        {t('nav.services_submenu.author_supervision')}
                    </a>
                    <a href="/paslaugos/konsultacijos" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                        {t('nav.services_submenu.consultations')}
                    </a>
                    <a href="/paslaugos/namo-samata" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                        {t('nav.services_submenu.house_estimate')}
                    </a>
                    <a href="/paslaugos/kitos-paslaugos" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                        {t('nav.services_submenu.other_services')}
                    </a>
                </div>
            </div>
            <!-- Dropdown for Portfolio -->
            <div class="relative group">
                <a href="/portfolio" class="lock text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                    {t('nav.portfolio')}
                </a>
                <div class="absolute hidden group-hover:block bg-white dark:bg-gray-900 min-w-40 shadow-lg z-10 mx-5 my-2 mr-5 ml-5 rounded-lg transition-colors duration-200">
                    <a href="/portfolio/namu-projektai" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                        {t('nav.portfolio_submenu.house_projects')}
                    </a>
                    <a href="/portfolio/namu-interjerai" class="block text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                        {t('nav.portfolio_submenu.house_interiors')}
                    </a>
                </div>
            </div>
            <a href="/sip-namai" class="lock text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                {t('nav.sip_houses')}
            </a>
            <a href="/kainos" class="lock text-black dark:text-white px-4 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                {t('nav.prices')}
            </a>
        </div>

        <!-- Right section - Kontaktai, Theme Toggle, and Language Switcher -->
        <div class="flex items-center space-x-4">
            <a href="/kontaktai" class="lock text-black dark:text-white px-6 py-3 no-underline text-left hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 font-medium">
                {t('nav.contacts')}
            </a>
            
            <!-- Theme Toggle Button -->
            <button
                on:click={toggleTheme}
                class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle dark mode"
            >
                {#if $theme === 'dark'}
                    <!-- Sun icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                {:else}
                    <!-- Moon icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                {/if}
            </button>

            <!-- Language Switcher -->
            <button
                on:click={toggleLanguage}
                class="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle language"
            >
                <span class="text-lg">{$currentLanguage === 'lt' ? '🇱🇹' : '🇬🇧'}</span>
            </button>
        </div>
    </nav>
</header>