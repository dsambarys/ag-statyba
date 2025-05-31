import type { markdownPost } from "../../../../types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
    const slug = params.slug;

    const markdownPost: markdownPost = await import(
        `../../../../posts/${slug}.md`
    );

    return {
        metadata: markdownPost.metadata,
        post: markdownPost.default
    };
};