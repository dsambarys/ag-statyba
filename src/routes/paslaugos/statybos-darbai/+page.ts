import type { Load } from '@sveltejs/kit';
import type { ServiceDetail } from '../../../types/services';

export const load: Load = async () => {
    const service: ServiceDetail = {
        title: 'Statybos darbai',
        description: 'Profesionalūs statybos darbai, atliekami pagal aukščiausius kokybės standartus. Nuo pamatų iki raktų įteikimo – patikima statyba jūsų namams.',
        features: [
            'Namų statyba nuo pamatų iki raktų',
            'Pamatų įrengimas',
            'Mūro darbai',
            'Stogų įrengimas',
            'Vidaus apdailos darbai',
            'Inžinerinių sistemų montavimas',
            'Fasado darbai',
            'Teritorijos tvarkymas'
        ],
        process: [
            {
                order: 1,
                title: 'Projekto analizė',
                description: 'Detalus projekto dokumentacijos nagrinėjimas, darbų apimties nustatymas, medžiagų poreikio skaičiavimas.'
            },
            {
                order: 2,
                title: 'Paruošiamieji darbai',
                description: 'Statybvietės paruošimas, reikalingų leidimų gavimas, medžiagų ir įrangos organizavimas.'
            },
            {
                order: 3,
                title: 'Pagrindiniai statybos darbai',
                description: 'Pamatų liejimas, sienų mūrijimas, stogo įrengimas, langų ir durų montavimas.'
            },
            {
                order: 4,
                title: 'Vidaus darbai',
                description: 'Inžinerinių sistemų įrengimas, apdailos darbai, santechnikos montavimas.'
            },
            {
                order: 5,
                title: 'Teritorijos tvarkymas',
                description: 'Aplinkos sutvarkymas, trinkelių klojimas, apželdinimas.'
            }
        ],
        benefits: [
            'Patyrusi statybininkų komanda',
            'Kokybės garantija visiems darbams',
            'Griežta darbų kontrolė',
            'Skaidrūs įkainiai',
            'Darbų atlikimas laiku',
            'Profesionali technika ir įranga'
        ],
        imageUrl: '/images/services/construction.jpg'
    };

    return {
        service
    };
}; 