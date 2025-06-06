import type { Load } from '@sveltejs/kit';
import type { ServiceDetail } from '../../../types/services';

export const load: Load = async () => {
    const service: ServiceDetail = {
        title: 'Autorinė priežiūra',
        description: 'Profesionali projekto įgyvendinimo priežiūra, užtikrinanti, kad statybos darbai būtų atliekami pagal projektą ir aukščiausius kokybės standartus.',
        features: [
            'Reguliarūs objekto patikrinimai',
            'Projekto sprendinių įgyvendinimo kontrolė',
            'Konsultacijos statybos metu',
            'Dokumentų ir brėžinių tikslinimas',
            'Bendradarbiavimas su rangovais',
            'Kokybės kontrolė'
        ],
        process: [
            {
                order: 1,
                title: 'Statybų pradžia',
                description: 'Susitikimas objekte, darbų plano aptarimas, pagrindinių gairių nustatymas.'
            },
            {
                order: 2,
                title: 'Reguliari priežiūra',
                description: 'Periodiniai vizitai į objektą, atliktų darbų patikra, konsultacijos.'
            },
            {
                order: 3,
                title: 'Problemų sprendimas',
                description: 'Operatyvus reagavimas į iškilusius klausimus, sprendimų paieška.'
            },
            {
                order: 4,
                title: 'Kokybės užtikrinimas',
                description: 'Galutinė darbų patikra, atitikimo projektui vertinimas.'
            }
        ],
        benefits: [
            'Projekto įgyvendinimo kokybės užtikrinimas',
            'Profesionali patirtis ir žinios',
            'Operatyvus problemų sprendimas',
            'Sklandus bendradarbiavimas su rangovais',
            'Laiko ir resursų taupymas'
        ],
        imageUrl: '/images/services/supervision.jpg'
    };

    return {
        service
    };
}; 