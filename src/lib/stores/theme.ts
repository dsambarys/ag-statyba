import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

// Get initial theme from localStorage or system preference
const getInitialTheme = (): Theme => {
    if (browser) {
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            return savedTheme;
        }
        // Check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
};

// Create the store
export const theme = writable<Theme>(getInitialTheme());

// Update theme and save to localStorage
export const toggleTheme = () => {
    theme.update(currentTheme => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        if (browser) {
            localStorage.setItem('theme', newTheme);
            document.documentElement.classList.toggle('dark', newTheme === 'dark');
        }
        return newTheme;
    });
};

// Initialize theme on client side
if (browser) {
    theme.subscribe(value => {
        document.documentElement.classList.toggle('dark', value === 'dark');
    });
} 