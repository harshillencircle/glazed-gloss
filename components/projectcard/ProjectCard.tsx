import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ blok }: any) {
    return (
        <section {...storyblokEditable(blok)} className="flex gap-7">
            <div className="flex flex-col gap-4.5">
                <div className="w-[330px] h-[395px] object-cover">
                    <Image src={blok.project_image.filename} alt="Project Card Image" width={330} height={395} className="object-cover h-full"/>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2.5">
                        <h4 className="text-xl text-[#FAF9F6] font-ivypresto font-normal uppercase">{blok.project_title}</h4> 
                        <h4 className="text-[16px] text-[#DFF624] font-termina font-normal uppercase">{blok.service_type}</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={blok.case_study_link} className="text-[16px] text-white font-termina font-normal uppercase">view case study</Link>
                        <div className="w-[150px] h-0.5 bg-[#DFF624]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}