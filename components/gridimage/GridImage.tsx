import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function GridImage({ blok }: any) {

  const positions = [
    {top: 0, left: 66.3 },
    {top: 23.75, left: 430 },
    {top: 273.5, left: 202.72 },
    {top: 253.5, left: 489.27 },
  ];

  //  const Mobilepositions = [
  //   {top: 0, left: 66.3 },
  //   {top: 40.75, left: 235 },
  //   {top: 130.5, left: 102.72 },
  //   {top: 130.5, left: 235.27 },
  // ];

  // card left: 65px and top: 115px

  return (
    <div className="h-[500px]">
      {blok.grid_image?.map((imgBlock: any, index: number) => {
        const pos = positions[index];
        if (!pos) return null;

        return (
          <div
            key={imgBlock._uid}
            className="absolute rounded-[10px] overflow-hidden"
            style={{
              top: `${pos.top}px`,
              left: `${pos.left}px`,
            }}
          >
            <StoryblokServerComponent blok={imgBlock} />
          </div>
        );
      })}
    </div>
  );
}
