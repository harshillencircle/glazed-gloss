import { storyblokEditable } from "@storyblok/react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import Link from "next/link";

export default function WorkSection({ blok }: any) {

    return (
        <section {...storyblokEditable(blok)} className="relative flex flex-col px-[55px] py-20 gap-2.5  overflow-hidden">
            <div className="flex justify-between items-center">
                <h2 className="font-ivypresto font-normal text-[52px] text-center uppercase">{blok.title}</h2>
                <div className="bg-[#DFF624] px-7 py-2.5 rounded-[10px]">
                    <Link href={blok.view_all_link} className="font-termina font-normal text-[16px] text-center uppercase">{blok.view_all_text}</Link>
                </div>
            </div>

            <div className="flex justify-between items-center py-2.5 overflow-hidden">
                {blok.tabs?.map((tab: any) => (
                    <button key={tab._uid} className={`text-xl font-termina font-normal uppercase}`}>{tab.tab_label}</button>
                ))}
            </div>

            <div className="flex justify-between items-center gap-2.5">
                {blok.projects?.map((project: any) => (
                    <StoryblokServerComponent blok={project} key={project._uid} />
                ))}
            </div>

            <div className="absolute -z-10 w-[1554px] h-[368px] bg-[#8D8D8D] bottom-0 left-0 right-0">
            </div>
        </section>
    );
}