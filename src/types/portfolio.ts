export interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    images: string[];
    category: 'house-project' | 'house-interior';
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