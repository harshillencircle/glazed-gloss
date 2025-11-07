import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function GridImage({ blok }: any) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {blok.grid_image?.map((imgBlock: any) => (
        <StoryblokServerComponent blok={imgBlock} key={imgBlock._uid} />
      ))}
    </div>
  );
}
