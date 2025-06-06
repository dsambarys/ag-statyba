import type { PageLoad } from './$types';
import type { PortfolioItem } from '../../../types/portfolio';

// This is a mock data function - replace with actual data fetching
const getMockProjects = (): PortfolioItem[] => {
    return [
        {
            id: 'modern-villa-2023',
            title: 'Modern Villa Vilnius',
            description: 'Contemporary villa design with sustainable features',
            images: ['/images/portfolio/house1.jpg'],
            category: 'house-project',
            details: {
                area: 220,
                location: 'Vilnius',
                year: 2023,
                style: 'Modern'
            },
            featured: true
        },
        {
            id: 'eco-house-2023',
            title: 'Eco-Friendly House',
            description: 'Sustainable family home with natural materials',
            images: ['/images/portfolio/house2.jpg'],
            category: 'house-project',
            details: {
                area: 180,
                location: 'Kaunas',
                year: 2023,
                style: 'Eco'
            },
            featured: true
        }
    ];
};

export const load: PageLoad = async () => {
    const projects = getMockProjects();
    
    return {
        projects
    };
}; 