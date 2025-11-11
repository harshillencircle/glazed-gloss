import { StoryblokServerComponent } from "@storyblok/react/rsc";
import Link from "next/link";

export default function ServicesSection({ blok }: any) {

  const serviceCard = blok.cards?.find((card: any) => card.component === "service_card");
  const gridImage = blok.cards?.find((card: any) => card.component === "grid_image");

  return (
    <section className="relative bg-[#F2F0EA] flex max-md:flex-wrap justify-center items-center px-14 py-20 xl:gap-20">
      <div className="w-[473px] h-[296px] flex flex-col justify-center items-start gap-10">
        <div className="space-y-7">
          <h2 className="font-termina font-medium text-xs md:text-[14px] text-[#7A5238] leading-[100%] tracking-[0] uppercase">{blok.headline}</h2>
          <h2 className="font-ivypresto font-normal text-4xl md:text-[52px] leading-[100%] tracking-[0] uppercase">{blok.title}</h2>
          <p className="text-[16px] text-[#4D4D4D] font-light font-termina leading-[100%] tracking-[0]">{blok.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href={blok.cta_primary_link} className="bg-[#DFF624] hover:bg-white hover:border hover:border-black hover:opacity-100 text-[16px] font-normal font-termina px-7 py-2.5 rounded-[10px] leading-[100%] tracking-[0] uppercase">
            {blok.cta_primary_text || "Hire glazed"}
          </Link>
          <Link
            href={blok.cta_secondary_link}
            className="opacity-100 border border-black hover:border-none rounded-[10px] px-7 py-2.5 font-termina font-normal text-[16px] leading-[100%] tracking-[0] text-center uppercase hover:bg-[#DFF624] transition-colors"
          >
            {blok.cta_secondary_text || "Hire glazed"}
          </Link>
        </div>
      </div>

      <div>
        <div className="relative items-center">
          {gridImage && (
            <div>
              <StoryblokServerComponent blok={gridImage} />
            </div>
          )}

          {serviceCard && (
            <div>
              <StoryblokServerComponent blok={serviceCard} />
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center items-start gap-5">
          {/* First column: first 2 tags */}
          <div className="flex flex-wrap justify-center gap-5">
            {blok.service_tags?.slice(0, 2).map((tag: string, i: number) => (
              <span
                key={i}
                className="text-[10px] font-termina font-normal border hover:border-none hover:bg-white rounded-[10px] leading-[100%] tracking-[0%] px-4 py-[11px] uppercase text-center cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {blok.service_tags?.slice(2).map((tag: string, i: number) => (
              <span
                key={i + 2}
                className="text-[10px] font-termina font-normal border hover:border-none hover:bg-white rounded-[10px] leading-[100%] tracking-[0%] px-4 py-[11px] uppercase text-center cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
