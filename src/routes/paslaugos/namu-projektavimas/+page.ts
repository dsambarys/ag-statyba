import type { Load } from '@sveltejs/kit';
import type { ServiceDetail } from '../../../types/services';

export const load: Load = async () => {
    const service: ServiceDetail = {
        title: 'Namų projektavimas',
        description: 'Kuriame išskirtinius ir funkcionalius namų projektus, pritaikytus prie jūsų poreikių ir sklypo ypatumų. Nuo modernių iki tradicinių namų – kiekvienas projektas unikalus.',
        features: [
            'Architektūrinė koncepcija',
            'Eskizinis projektavimas',
            'Techninis projektavimas',
            'Konstrukcijų projektavimas',
            'Inžinerinių sistemų projektavimas',
            'Energetinio naudingumo projektavimas',
            'Sklypo planavimas',
            'Projektų derinimas institucijose'
        ],
        process: [
            {
                order: 1,
                title: 'Pirminė konsultacija',
                description: 'Susitikimas, poreikių analizė, sklypo galimybių įvertinimas, biudžeto aptarimas.'
            },
            {
                order: 2,
                title: 'Koncepcijos kūrimas',
                description: 'Architektūrinės idėjos formavimas, eskizų rengimas, 3D vizualizacijos.'
            },
            {
                order: 3,
                title: 'Projektavimas',
                description: 'Techninio projekto rengimas, konstrukcijų ir inžinerinių sistemų projektavimas.'
            },
            {
                order: 4,
                title: 'Derinimas',
                description: 'Projekto derinimas su institucijomis, statybos leidimo gavimas.'
            },
            {
                order: 5,
                title: 'Projekto pridavimas',
                description: 'Galutinis projekto dokumentacijos parengimas ir pridavimas.'
            }
        ],
        benefits: [
            'Daugiau nei 10 metų projektavimo patirtis',
            'Inovatyvūs ir energetiškai efektyvūs sprendimai',
            'Individualus požiūris į kiekvieną projektą',
            'Profesionali architektų komanda',
            'Projektų įgyvendinimas laiku',
            'Pagalba derinant projektus institucijose'
        ],
        imageUrl: '/images/services/house-design.jpg'
    };

    return {
        service
    };
}; 