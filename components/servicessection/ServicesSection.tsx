import { StoryblokServerComponent } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection({ blok }: any) {

  const serviceCard = blok.cards?.find((card: any) => card.component === "service_card");
  const gridImage = blok.cards?.find((card: any) => card.component === "grid_image");

  return (
    <section className="relative bg-[#F2F0EA] flex max-xl:flex-wrap justify-center items-center px-7 md:px-14 pt-10 pb-15 md:py-20 xl:gap-20">
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

      <div className="w-full">
        <div className="relative">
          {blok.cards?.map((card: any) => (
            <StoryblokServerComponent blok={card} key={card._uid} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-start gap-5">
          {/* First column: first 2 tags */}
          <div className="flex flex-wrap justify-center gap-5 max-md:hidden">
            {blok.service_tags?.slice(0, 2).map((tag: string, i: number) => (
              <Link
                key={i}
                href="/"
                className="text-[10px] font-termina font-normal border hover:border-none hover:bg-white rounded-[10px] leading-[100%] tracking-[0%] px-4 py-[11px] uppercase text-center"
              >
                {tag}
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-5 max-md:hidden">
            {blok.service_tags?.slice(2).map((tag: string, i: number) => (
              <Link
                key={i + 2}
                href="/"
                className="text-[10px] font-termina font-normal border hover:border-none hover:bg-white rounded-[10px] leading-[100%] tracking-[0%] px-4 py-[11px] uppercase text-center cursor-pointer"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Mobile dropdown */}
          <details className="relative w-[300px] max-w-xs md:hidden group transition-all duration-300">
            <summary className="list-none flex items-center justify-between px-4 py-3 bg-white border rounded-[10px] text-[10px] font-termina uppercase cursor-pointer shadow-sm select-none">
              <span>{blok.service_tags?.[0] || "Select Service"}</span>
              <Image src="/Vector.svg" alt="Dropdown Icon" width={12} height={24} />
            </summary>

            <div className="mt-2 border-t border-gray-200 bg-white rounded-[10px] shadow-inner">
              {blok.service_tags?.map((tag: string, i: number) => (
                <Link
                  key={i}
                  href="/"
                  className="block text-[10px] font-termina uppercase px-4 py-3 hover:bg-gray-100 text-center transition"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </details>

        </div>
      </div>

    </section>
  );
}
