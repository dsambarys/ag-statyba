import type { Load } from '@sveltejs/kit';
import type { ServiceDetail } from '../../../types/services';

export const load: Load = async () => {
    const service: ServiceDetail = {
        title: 'Konsultacijos',
        description: 'Profesionalios architektų ir statybos specialistų konsultacijos, padėsiančios priimti teisingus sprendimus jūsų projekto įgyvendinimui.',
        features: [
            'Pirminė nemokama konsultacija',
            'Projekto galimybių analizė',
            'Statybos proceso konsultacijos',
            'Techninės konsultacijos',
            'Dokumentų tvarkymo pagalba',
            'Medžiagų parinkimas',
            'Biudžeto planavimas',
            'Rangovų rekomendacijos'
        ],
        process: [
            {
                order: 1,
                title: 'Susitikimo planavimas',
                description: 'Patogaus laiko suderinimas, pagrindinių klausimų aptarimas.'
            },
            {
                order: 2,
                title: 'Poreikių analizė',
                description: 'Išsamus pokalbis apie projekto viziją, poreikius ir galimybes.'
            },
            {
                order: 3,
                title: 'Sprendimų pasiūlymai',
                description: 'Konkrečių sprendimų ir rekomendacijų pateikimas.'
            },
            {
                order: 4,
                title: 'Veiksmų planas',
                description: 'Aiškaus veiksmų plano sudarymas tolimesniam projekto vystymui.'
            }
        ],
        benefits: [
            'Patyrę architektai ir statybos specialistai',
            'Nemokama pirminė konsultacija',
            'Lankstus konsultacijų grafikas',
            'Aiškūs ir praktiški patarimai',
            'Galimybė konsultuotis nuotoliniu būdu',
            'Individualizuoti sprendimai'
        ],
        image: '/images/services/consultation.jpg'
    };

    return {
        service
    };
}; 