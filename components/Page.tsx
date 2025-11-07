import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Page({ blok }: { blok: any }) {
    return (
        <div>
            {blok?.title && <h1>{blok.title}</h1>}
            {Array.isArray(blok?.body) &&
                blok.body.map((child: any, i: number) => (
                    <StoryblokServerComponent blok={child} key={i} />
                ))}
        </div>
    );
}