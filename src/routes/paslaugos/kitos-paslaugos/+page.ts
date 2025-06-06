import type { Load } from '@sveltejs/kit';
import type { ServiceDetail } from '../../../types/services';

export const load: Load = async () => {
    const service: ServiceDetail = {
        title: 'Kitos Paslaugos',
        description: 'Papildomos architektūros ir statybos paslaugos, pritaikytos individualiems jūsų poreikiams.',
        features: [
            'Statybos priežiūra',
            'Projektų derinimas',
            'Teritorijos planavimas',
            'Interjero projektavimas',
            'Kraštovaizdžio architektūra',
            'Renovacijos projektai',
            'Statinių ekspertizė',
            'Energetinis sertifikavimas'
        ],
        process: [
            {
                order: 1,
                title: 'Poreikių aptarimas',
                description: 'Išsiaiškiname jūsų specifinius poreikius ir projekto reikalavimus.'
            },
            {
                order: 2,
                title: 'Pasiūlymo paruošimas',
                description: 'Paruošiame individualų pasiūlymą su kainomis ir terminais.'
            },
            {
                order: 3,
                title: 'Darbų vykdymas',
                description: 'Atliekame darbus pagal sutartą planą ir terminus.'
            },
            {
                order: 4,
                title: 'Kokybės užtikrinimas',
                description: 'Užtikriname aukštą darbų kokybę ir atitikimą reikalavimams.'
            }
        ],
        benefits: [
            'Profesionalūs specialistai',
            'Platus paslaugų spektras',
            'Lankstus grafikas',
            'Konkurencingos kainos',
            'Greitas aptarnavimas',
            'Kokybės garantija'
        ],
        imageUrl: '/images/services/other-services.jpg'
    };

    return {
        service
    };
}; 