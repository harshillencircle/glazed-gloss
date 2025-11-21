import { storyblokEditable } from "@storyblok/react";

export default function PlaySection({ blok }: any) {
    return (
        <section {...storyblokEditable(blok)}>
            <div>
                play
            </div>
        </section>
    );
}