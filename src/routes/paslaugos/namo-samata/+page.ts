import type { Load } from '@sveltejs/kit';
import type { ServiceDetail } from '../../../types/services';

export const load: Load = async () => {
    const service: ServiceDetail = {
        title: 'Namo sąmata',
        description: 'Profesionalus ir detalus statybos kaštų apskaičiavimas, padėsiantis tiksliai suplanuoti jūsų namo statybos biudžetą ir išvengti nenumatytų išlaidų.',
        features: [
            'Detalus medžiagų kiekių skaičiavimas',
            'Darbų kaštų įvertinimas',
            'Statybos etapų išlaidų planavimas',
            'Medžiagų alternatyvų analizė',
            'Rangos darbų įkainių analizė',
            'Papildomų išlaidų įvertinimas',
            'Dokumentacijos paruošimas',
            'Biudžeto optimizavimo rekomendacijos'
        ],
        process: [
            {
                order: 1,
                title: 'Projekto analizė',
                description: 'Detalus projekto dokumentacijos nagrinėjimas, specifinių reikalavimų ir sprendinių identifikavimas.'
            },
            {
                order: 2,
                title: 'Kiekių skaičiavimas',
                description: 'Tikslus reikalingų medžiagų ir darbų apimčių apskaičiavimas pagal projektą.'
            },
            {
                order: 3,
                title: 'Kainų analizė',
                description: 'Rinkos kainų tyrimas, rangovų pasiūlymų analizė, optimaliausių sprendimų paieška.'
            },
            {
                order: 4,
                title: 'Sąmatos sudarymas',
                description: 'Detalios sąmatos paruošimas su medžiagų, darbų ir papildomų išlaidų specifikacija.'
            },
            {
                order: 5,
                title: 'Optimizavimas',
                description: 'Biudžeto optimizavimo pasiūlymai, alternatyvių sprendimų pateikimas.'
            }
        ],
        benefits: [
            'Tikslus biudžeto planavimas',
            'Potencialių išlaidų rizikų numatymas',
            'Skaidrus kainų pateikimas',
            'Profesionali rinkos analizė',
            'Biudžeto optimizavimo galimybės',
            'Pagalba derybose su rangovais'
        ],
        imageUrl: '/images/services/cost-estimation.jpg'
    };

    return {
        service
    };
}; 