import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function GridImage({ blok }: any) {
  // 🖥️ Desktop positions
  const desktopPositions = [
    { top: 0, left: 66.3 },
    { top: 23.75, left: 430 },
    { top: 273.5, left: 202.72 },
    { top: 253.5, left: 489.27 },
  ];

  // 📱 Mobile positions
  const mobilePositions = [
    { top: 0, left: 66.3 },
    { top: 40.75, left: 235 },
    { top: 130.5, left: 102.72 },
    { top: 130.5, left: 235.27 },
  ];

  // const mobilePositions = [
  //   { top: 0, left: 0 }, 
  //   { top: 40.75, left: 170 },
  //   { top: 130.5, left: 50 },
  //   { top: 130.5, left: 190 },
  // ];

  return (
    <div className="relative h-[250px] md:h-[500px] mt-10 sm:mt-0 overflow-visible flex justify-center mx-auto">
      {blok.grid_image?.map((imgBlock: any, index: number) => {
        const pos = desktopPositions[index];
        const mobilePos = mobilePositions[index];
        if (!pos || !mobilePos) return null;

        return (
          <div
            key={imgBlock._uid}
            className="absolute rounded-[10px] overflow-hidden grid-img transition-all duration-500"
            style={
              {
                "--top-desktop": `${pos.top}px`,
                "--left-desktop": `${pos.left}px`,
                "--top-mobile": `${mobilePos.top}px`,
                "--left-mobile": `${mobilePos.left}px`,
              } as React.CSSProperties
            }
          >
            <StoryblokServerComponent blok={imgBlock} />
          </div>
        );
      })}
    </div>
  );
}
