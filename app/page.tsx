import { getStory } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import Image from "next/image";

export default async function Home() {
  const story = await getStory("home");

  if (!story) {
    return <div>Story not found</div>;
  }
  return (
    <div>
      <StoryblokServerComponent blok={story.content} />
    </div>
  );
}
