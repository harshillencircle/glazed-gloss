import { storyblokEditable } from "@storyblok/react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import Image from "next/image";
import Link from "next/link";

export default function WorkSection({ blok }: any) {

    return (
        <section {...storyblokEditable(blok)} className="relative flex flex-col px-[55px] py-20 gap-10 md:gap-2.5 overflow-hidden">
            <div className="flex justify-center md:justify-between items-center">
                <h2 className="font-ivypresto font-normal text-4xl md:text-[52px] text-center uppercase">{blok.title}</h2>
                <div className="max-md:hidden bg-[#DFF624] px-7 py-2.5 rounded-[10px]">
                    <Link href={blok.view_all_link} className="font-termina font-normal text-[16px] text-center uppercase">{blok.view_all_text}</Link>
                </div>
            </div>

            {/* MOBILE DROPDOWN */}
            <details className="md:hidden w-full relative">
                <summary className="flex justify-center items-center text-[12px] font-termina uppercase cursor-pointer gap-5">
                    Featured
                    <Image src="./weui_arrow-filled.svg" alt="dropdown" width={12} height={24} className="object-cover" />
                </summary>

                <div className="absolute mt-2 left-0 right-0 bg-white shadow-xl rounded-lg z-1">
                    {blok.tabs?.map((tab: any) => (
                        <Link
                            key={tab._uid}
                            href={`#${tab.tab_id}`}
                            className="block w-full px-4 py-3 text-[12px] font-termina uppercase hover:bg-gray-100 "
                        >
                            {tab.tab_label}
                        </Link>
                    ))}
                </div>
            </details>

            <div className="hidden md:flex justify-between items-center py-2.5 overflow-hidden">
                {blok.tabs?.map((tab: any) => (
                    <Link key={tab._uid} href={`#${tab.tab_id}`} className={`text-xl font-termina font-normal uppercase}`}>{tab.tab_label}</Link>
                ))}
            </div>

            <div className="flex justify-between overflow-x-auto gap-2.5 md:overflow-visible">
                {blok.projects?.map((project: any) => (
                    <div key={project._uid} className="flex shrink-0 w-full max-w-[330px] md:w-auto">
                        <StoryblokServerComponent blok={project} />
                    </div>
                ))}
            </div>

            <div className="flex shrink-0 md:hidden justify-center items-center">
                <Link
                    href={blok.view_all_link}
                    className="bg-[#DFF624] px-6 py-3 text-black font-termina uppercase rounded-md"
                >
                    {blok.view_all_text}
                </Link>
            </div>

            <div className="absolute -z-10 w-full h-[462px] md:h-[368px] bg-[#8D8D8D] bottom-0 left-0 right-0">
            </div>
        </section>
    );
}