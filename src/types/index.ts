import type { ComponentType } from "svelte";

export type markdownPost = {
    metadata: {
        title: string;
        imgUrl: string;
        publishedAt: string;
        summary: string;
    };
    default: ComponentType;
} 