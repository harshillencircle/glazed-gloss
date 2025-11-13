import { StoryblokServerComponent } from "@storyblok/react/rsc";
import Image from "next/image";
import type { CSSProperties } from "react";

const desktopPositions = [
  { top: 0, left: 66.3 },
  { top: 23.75, left: 430 },
  { top: 273.5, left: 202.72 },
  { top: 253.5, left: 489.27 },
];

const mobilePositions = [
  { top: 0, left: 66.3 },
  { top: 40.75, left: 235 },
  { top: 130.5, left: 102.72 },
  { top: 130.5, left: 235.27 },
];

export default function GridImage({ blok }: any) {

  return (
    <div className="relative flex h-[250px] w-full items-center justify-center md:h-[500px]">
      {blok.grid_image?.map((imgBlock: any, index: number) => {
        const desktop = desktopPositions[index];
        const mobile = mobilePositions[index];
        if (!desktop || !mobile) return null;

        return (
          <div
            key={imgBlock._uid}
            className="grid-img absolute overflow-hidden rounded-[10px] shadow-lg transition-all duration-500"
            style={
              {
                "--top-desktop": `${desktop.top}px`,
                "--left-desktop": `${desktop.left}px`,
                "--top-mobile": `${mobile.top}px`,
                "--left-mobile": `${mobile.left}px`,
              } as CSSProperties
            }
          >
            <StoryblokServerComponent blok={imgBlock} />
          </div>

        );
      })}
      {/* <div className="absolute z-10 top-[40%] right-0">
        <Image src="/pattern.png" alt="" width={261} height={189} />
      </div> */}
    </div>
  );
}
