import type { Load } from '@sveltejs/kit';
import type { PortfolioItem } from '../../../types/portfolio';

// This is a mock data function - replace with actual data fetching
const getMockInteriors = (): PortfolioItem[] => {
    return [
        {
            id: 'modern-interior-2023',
            title: 'Modernaus Namo Interjeras',
            description: 'Šiuolaikiškas ir elegantiškas interjero dizainas',
            images: ['/images/portfolio/interior1.jpg'],
            category: 'house-interior',
            details: {
                area: 180,
                location: 'Vilnius',
                year: 2023,
                style: 'Modern'
            },
            featured: true
        },
        {
            id: 'scandinavian-2023',
            title: 'Skandinaviškas Interjeras',
            description: 'Šviesus ir jaukus skandinaviško stiliaus interjeras',
            images: ['/images/portfolio/interior2.jpg'],
            category: 'house-interior',
            details: {
                area: 120,
                location: 'Kaunas',
                year: 2023,
                style: 'Scandinavian'
            },
            featured: true
        }
    ];
};

export const load: Load = async () => {
    const projects = getMockInteriors();
    
    return {
        projects
    };
}; 