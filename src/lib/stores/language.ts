import { writable } from 'svelte/store';

type Language = 'lt' | 'en';

export const currentLanguage = writable<Language>('lt');

export const setLanguage = (lang: Language) => {
    currentLanguage.set(lang);
}; 