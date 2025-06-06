import type { Load } from '@sveltejs/kit';

interface SipBenefit {
    title: string;
    description: string;
    icon: string;
}

interface SipFeature {
    title: string;
    value: string;
    unit?: string;
}

interface SipStage {
    order: number;
    title: string;
    description: string;
    duration: string;
}

export const load = async () => {
    const benefits = [
        {
            title: 'Energetinis efektyvumas',
            description: 'SIP namų šilumos izoliacijos savybės leidžia sutaupyti iki 60% šildymo išlaidų.',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
        },
        {
            title: 'Greita statyba',
            description: 'Dėl gamyklinės gamybos ir paprastos surinkimo technologijos, statybos procesas yra ženkliai greitesnis.',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
        },
        {
            title: 'Ekologiškumas',
            description: 'Naudojamos ekologiškos medžiagos ir efektyvus resursų panaudojimas statybos procese.',
            icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
        }
    ];

    const features = [
        { title: 'Šilumos perdavimo koeficientas', value: '0.11', unit: 'W/m²K' },
        { title: 'Sienos storis', value: '174-294', unit: 'mm' },
        { title: 'Garso izoliacija', value: '45-50', unit: 'dB' }
    ];

    const constructionStages = [
        {
            order: 1,
            title: 'Projektavimas',
            description: 'Namo projekto paruošimas ir adaptavimas SIP technologijai',
            duration: '2-3 savaitės'
        },
        {
            order: 2,
            title: 'Pamatai',
            description: 'Pamatų įrengimas pagal projektą',
            duration: '2-3 savaitės'
        },
        {
            order: 3,
            title: 'Gamyba',
            description: 'SIP skydų gamyba gamykloje pagal projektą',
            duration: '3-4 savaitės'
        }
    ];

    return {
        benefits,
        features,
        constructionStages
    };
}; 