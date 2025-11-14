import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

export default function WorkSection({ blok }: any) {

    console.log(blok.tabs);
    return (
        <section {...storyblokEditable} className="px-[55px] py-20">
            <div className="flex justify-between items-center">
                <h2 className="font-ivypresto font-normal text-[52px] text-center uppercase">{blok.title}</h2>
                <div className="bg-[#DFF624] px-7 py-2.5 rounded-[10px]">
                    <Link href={blok.view_all_link} className="font-termina font-normal text-[16px] text-center uppercase">{blok.view_all_text}</Link>
                </div>
            </div>

            <div>
                {blok.tabs?.map((tag: any) => (
                    <li>{tag.tab_label}</li>
                ))}
            </div>
        </section>
    );
}