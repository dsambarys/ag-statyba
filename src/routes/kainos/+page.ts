import type { Load } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

interface PricingTier {
    type: string;
    price: number;
    description: string;
    features: string[];
    note?: string;
    image: string;
}

interface Feature {
    title: string;
    description: string;
}

export const load: Load = async () => {
    try {
        const pricingTiers: PricingTier[] = [
            {
                type: 'Tipinis vienbutis',
                price: 3700,
                description: 'Standartinis tipinio namo projektas',
                features: [
                    'Architektūrinė dalis',
                    'Konstrukcinė dalis',
                    'Vandentiekio ir nuotekų dalis',
                    'Šildymo dalis',
                    'Elektrotechnikos dalis',
                    'Vėdinimo dalis'
                ],
                image: '/images/services/gyvenamuju-namu-projektavimas-ma1007-galerija-1170951948.jpg'
            },
            {
                type: 'Tipinis dvibutis',
                price: 3900,
                description: 'Standartinis dvibučio namo projektas',
                features: [
                    'Architektūrinė dalis',
                    'Konstrukcinė dalis',
                    'Vandentiekio ir nuotekų dalis',
                    'Šildymo dalis',
                    'Elektrotechnikos dalis',
                    'Vėdinimo dalis'
                ],
                image: '/images/services/gyvenamuju-namu-projektavimas-ma1007-galerija-3703207664.jpg'
            },
            {
                type: 'Individualus iki 100 m²',
                price: 4000,
                description: 'Individualus projektas namams iki 100 m²',
                features: [
                    'Individualus projektavimas',
                    'Architektūrinė dalis',
                    'Konstrukcinė dalis',
                    'Inžinerinės dalys',
                    'Projekto derinimas',
                    'Autorinė priežiūra'
                ],
                image: '/images/placeholder-service.svg'
            },
            {
                type: 'Individualus vienbutis iki 300 m²',
                price: 4300,
                description: 'Individualus projektas didesniems namams',
                features: [
                    'Individualus projektavimas',
                    'Architektūrinė dalis',
                    'Konstrukcinė dalis',
                    'Inžinerinės dalys',
                    'Projekto derinimas',
                    'Autorinė priežiūra'
                ],
                image: '/images/placeholder-service.svg'
            },
            {
                type: 'Individualus dvibutis iki 300 m²',
                price: 4600,
                description: 'Individualus dvibučio namo projektas',
                features: [
                    'Individualus projektavimas',
                    'Architektūrinė dalis',
                    'Konstrukcinė dalis',
                    'Inžinerinės dalys',
                    'Projekto derinimas',
                    'Autorinė priežiūra'
                ],
                image: '/images/placeholder-service.svg'
            }
        ];

        const additionalInfo = {
            title: 'Namo projekto kaina',
            description: 'Norėdami sužinoti, kiek kainuoja namo projektas, kokia projekto sudėtis, kas įskaičiuota į kainą, o kas dar papildomai kainuotu – šioje skiltyje rasite bendriniu atveju taikomas projektavimo kainas. Norint gauti individualaus namo projekto kainos pasiūlymą – parašykite mums laišką į info@akubu.lt',
            instructions: 'Laiške paminėkite, kokios kvadratūros bei stilistikos namo norite, iš ko norite statyti, pridėkite sklypo dokumentus (nekilnojamojo turto registro duomenų bazės išrašas, kadastrinis sklypo planas, detalusis planas/ formavimo pertvarkymo projektas). Taip galėsime pilnai įvertinti darbų apimtis ir pateikti projektavimo darbų pasiūlymą.',
            note: '* Kainos nurodytos be PVM + SK (statybos kaina)',
            contactEmail: 'info@akubu.lt',
            features: [
                {
                    title: 'Projektavimo terminai',
                    description: 'Tipinio namo projektas - 2-3 mėnesiai, individualaus - 3-4 mėnesiai'
                }
            ]
        };

        return {
            pricingTiers,
            additionalInfo
        };
    } catch (err) {
        console.error('Error loading Kainos page:', err);
        throw error(500, 'Failed to load pricing information');
    }
};