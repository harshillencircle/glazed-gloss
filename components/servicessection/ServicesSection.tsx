import { StoryblokServerComponent } from "@storyblok/react/rsc";
import Link from "next/link";

export default function ServicesSection({ blok }: any) {

  console.log("ServicesSection blok:", blok);
  return (
    <section className="relative bg-[#F2F0EA] flex flex-wrap justify-center items-center px-14 py-20 gap-20">
      <div className="w-[473px] h-[296px] flex flex-col justify-center items-start gap-10">
        <div className="space-y-7">
          <h2 className="font-termina font-medium text-[14px] text-[#7A5238] leading-[100%] tracking-[0] uppercase">{blok.headline}</h2>
          <h2 className="font-ivypresto font-normal text-[52px] leading-[100%] tracking-[0] uppercase">{blok.title}</h2>
          <p className="text-[16px] font-light font-termina leading-[100%] tracking-[0]">{blok.description}</p>
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

      <div className="relative">
        {blok.cards?.map((card: any) => (
          <StoryblokServerComponent blok={card} key={card._uid} />
        ))}
      </div>
    </section>
  );
}
