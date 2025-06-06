import type { Load } from '@sveltejs/kit';
import type { ServiceDetail } from '../../../types/services';

export const load: Load = async () => {
    const service: ServiceDetail = {
        title: 'Individualių namų projektavimas',
        description: 'Profesionalus individualių namų projektavimas, apimantis visus etapus nuo idėjos iki techninio projekto.',
        features: [
            'Architektūrinė koncepcija ir eskizinis projektas',
            'Techninis darbo projektas',
            'Statybą leidžiančio dokumento gavimas',
            'Konstrukcijų projektavimas',
            'Inžinerinių sistemų projektavimas',
            'Sklypo planavimas ir teritorijos tvarkymas'
        ],
        process: [
            {
                order: 1,
                title: 'Poreikių analizė',
                description: 'Susitikimas su klientu, poreikių ir pageidavimų aptarimas, sklypo galimybių analizė.'
            },
            {
                order: 2,
                title: 'Eskizinis projektas',
                description: 'Architektūrinės idėjos vystymas, eskizų rengimas, 3D vizualizacijos.'
            },
            {
                order: 3,
                title: 'Techninis projektas',
                description: 'Detalių techninių brėžinių rengimas, dokumentacijos ruošimas.'
            },
            {
                order: 4,
                title: 'Statybos leidimas',
                description: 'Projekto derinimas su institucijomis, statybą leidžiančio dokumento gavimas.'
            }
        ],
        benefits: [
            'Unikalus ir funkcionalus namo projektas',
            'Profesionali komanda',
            'Visapusiška pagalba projekto metu',
            'Efektyvus energijos naudojimas',
            'Modernūs sprendimai'
        ],
        imageUrl: '/images/services/house-design.jpg'
    };

    return {
        service
    };
}; 