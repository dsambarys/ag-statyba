import type { Load } from '@sveltejs/kit';
import type { ServiceDetail } from '../../../types/services';

export const load: Load = async () => {
    const service: ServiceDetail = {
        title: 'Interjero priežiūra',
        description: 'Profesionali interjero priežiūra ir atnaujinimas, užtikrinantis ilgalaikį jūsų erdvių grožį ir funkcionalumą.',
        features: [
            'Reguliari interjero priežiūra',
            'Baldų atnaujinimas',
            'Sienų ir lubų priežiūra',
            'Grindų priežiūra ir atnaujinimas',
            'Apšvietimo sistemų priežiūra',
            'Tekstilės priežiūra',
            'Sezoninė interjero adaptacija',
            'Smulkus remontas ir atnaujinimas'
        ],
        process: [
            {
                order: 1,
                title: 'Būklės įvertinimas',
                description: 'Atliekame detalų interjero būklės vertinimą ir nustatome priežiūros poreikius.'
            },
            {
                order: 2,
                title: 'Priežiūros planas',
                description: 'Paruošiame individualų priežiūros planą pagal jūsų interjero specifiką.'
            },
            {
                order: 3,
                title: 'Reguliari priežiūra',
                description: 'Vykdome reguliarius priežiūros darbus pagal suderintą grafiką.'
            },
            {
                order: 4,
                title: 'Kokybės kontrolė',
                description: 'Reguliariai tikriname atliktų darbų kokybę ir interjero būklę.'
            }
        ],
        benefits: [
            'Profesionalūs specialistai',
            'Modernios priežiūros technologijos',
            'Ekologiškos priežiūros priemonės',
            'Lankstus aptarnavimo grafikas',
            'Operatyvus reagavimas',
            'Ilgalaikė interjero vertės išsaugojimas'
        ],
        imageUrl: '/images/services/interior-maintenance.jpg'
    };

    return {
        service
    };
}; 