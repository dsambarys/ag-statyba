import type { Load } from '@sveltejs/kit';
import type { ServiceDetail } from '../../../types/services';

export const load: Load = async () => {
    const service: ServiceDetail = {
        title: 'Interjero dizainas',
        description: 'Profesionalus interjero dizaino paslaugos, kuriančios funkcionalias ir estetiškas erdves jūsų namams.',
        features: [
            'Interjero koncepcijos kūrimas',
            'Erdvių planavimas',
            'Spalvų ir medžiagų parinkimas',
            'Baldų ir apšvietimo sprendimai',
            'Vizualizacijų rengimas',
            'Techninė dokumentacija'
        ],
        process: [
            {
                order: 1,
                title: 'Konsultacija',
                description: 'Susitikimas su klientu, poreikių ir stiliaus aptarimas, biudžeto planavimas.'
            },
            {
                order: 2,
                title: 'Koncepcija',
                description: 'Interjero idėjos vystymas, eskizų ir nuotaikos lentos kūrimas.'
            },
            {
                order: 3,
                title: 'Projektavimas',
                description: 'Detalus erdvių planavimas, medžiagų parinkimas, 3D vizualizacijos.'
            },
            {
                order: 4,
                title: 'Įgyvendinimas',
                description: 'Projekto priežiūra, konsultacijos statybos metu.'
            }
        ],
        benefits: [
            'Individualus požiūris į kiekvieną projektą',
            'Funkcionalūs ir estetiški sprendimai',
            'Profesionali komanda',
            'Dėmesys detalėms',
            'Šiuolaikiškos tendencijos'
        ],
        imageUrl: '/images/services/interior-design.jpg'
    };

    return {
        service
    };
}; 