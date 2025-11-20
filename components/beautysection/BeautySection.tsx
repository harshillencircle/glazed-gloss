import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function BeautySection({ blok }: any) {

    return (
        <section {...storyblokEditable(blok)} className="flex max-lg:flex-col justify-center items-center bg-[#F2F0EA] px-5 md:px-[100px] py-20 gap-10 md:gap-[55px] overflow-hidden">
            <div className="flex flex-col gap-7">
                <h2 className="text-[12px] md:text-sm text-[#7A5238] font-termina font-medium uppercase">
                    {blok.label}
                </h2>

                <h2 className="text-[36px] md:text-[52px] font-ivypresto font-normal uppercase">
                    {blok.heading}
                </h2>

                <div className="flex flex-col gap-4.5">
                    {blok.numbered_list?.map((item: any) => (
                        <div key={item._uid} className="bg-[#FAF9F6] flex justify-start items-center gap-5 px-5 py-2.5 rounded-[10px]">
                            <h1 className="text-[64px] text-[#7A5238] font-ivypresto font-normal uppercase">
                                {item.number}
                            </h1>

                            <div className="flex flex-col justify-center items-start gap-1.5">
                                <h4 className="text-xl text-[#7A5238] font-ivypresto font-normal uppercase">
                                    {item.title}
                                </h4>
                                <h6 className="text-[12px] text-[#4D4D4D] font-termina font-light">
                                    {item.description}
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center md:justify-start items-center">
                    <Link href={blok.button_link} className="bg-[#DFF624] items-center rounded-[10px] px-7 py-2.5 text-[16px] font-termina font-normal uppercase">{blok.button_text}
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-10">

                <div className="hidden md:flex justify-center items-center py-2.5 gap-10">
                    {blok.tabs?.map((tab: any, index: any) => (

                        <Link key={index} href={`#${tab.tab_id}`} className="text-xl font-termina font-normal items-center uppercase">
                            {tab}
                        </Link>
                    ))}
                </div>

                {/* MOBILE DROPDOWN */}
                <details className="md:hidden w-full relative">
                    <summary className="flex justify-center items-center text-[12px] font-termina uppercase cursor-pointer gap-5">
                        Stock
                        <Image src="./weui_arrow-filled.svg" alt="dropdown" width={12} height={24} className="object-cover" />
                    </summary>

                    <div className="absolute mt-2 left-0 right-0 bg-white shadow-xl rounded-lg z-1">
                        {blok.tabs?.map((tab: any, index: any) => (
                            <Link
                                key={index}
                                href={`#${tab.tab_id}`}
                                className="block w-full px-4 py-3 text-[12px] font-termina uppercase hover:bg-gray-100 "
                            >
                                {tab}
                            </Link>
                        ))}
                    </div>
                </details>

                <div className="flex w-full overflow-x-auto gap-7 md:overflow-visible">
                    {blok.tab_images?.map((img: any) => (
                        <div key={img._uid} className="flex shrink-0">
                            <Image src={img.image?.filename} alt="Tab Images" width={197} height={486} className="object-cover rounded-[10px] w-[300px] md:w-[197px] h-[365px] md:h-[486px]" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}