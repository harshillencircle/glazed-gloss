import StoryblokClient from "storyblok-js-client";

const client = new StoryblokClient({
    accessToken: process.env.STORYBLOK_PREVIEW_TOKEN || process.env.STORYBLOK_ACCESS_TOKEN,
    cache: {
        clear: "auto",
        type: "memory",
    },
});

export async function getStory(
    slug: "home",
    params: Record<string, any> = { version: "draft" }
) {
    try {
        const response = await client.get(`cdn/stories/${slug}`, params);
        return response?.data?.story ?? null;
    } catch (error) {
        return null;
    }
}

export default client;