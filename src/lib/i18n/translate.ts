import { get } from 'svelte/store';
import { currentLanguage } from '../stores/language';
import { translations } from './translations';

export function t(key: string): string {
    const lang = get(currentLanguage);
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }
    
    return typeof value === 'string' ? value : key;
} 