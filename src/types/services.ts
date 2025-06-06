export interface ServiceDetail {
    title: string;
    description: string;
    features?: string[];
    process?: ProcessStep[];
    benefits?: string[];
    imageUrl?: string;
}

export interface ProcessStep {
    title: string;
    description: string;
    order: number;
}

export interface ServicePageData {
    service: ServiceDetail;
} 