export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    images: string[];
    category: 'namo-projektas' | 'namo-interjeras';
    details: {
        area?: number;  // Square meters
        location?: string;
        year?: number;
        style?: string;
    };
    featured: boolean;
}

export interface ProjectFilters {
    style?: string;
    year?: number;
    minArea?: number;
    maxArea?: number;
} 