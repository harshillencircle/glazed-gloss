import { storyblokEditable } from "@storyblok/react";
import { Montserrat } from "next/font/google";

export default function HeroSection({ blok }: any) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="relative h-[734px] flex flex-col justify-center items-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${blok.background_video?.filename})` }}
        >
            <div className="absolute top-0 font-termina px-24 py-2.5 gap-2.5">
                <h5 className="text-xs md:text-[16px] font-light text-white leading-[100%] tracking-[0] text-center">{blok.headline}</h5>
            </div>

            <div className="p-5 space-y-10">
                {blok.subheadline?.filename && (
                    <img src={blok.subheadline.filename} alt="Sub-Heading" width={1312} height={360} className="object-cover" />
                )}
                <button className="text-[16px] bg-[#DFF624] text-black font-termina font-normal text-center rounded-[10px] px-7 py-2.5 gap-2.5 uppercase cursor-pointer">
                    {blok.button}
                </button>
            </div>
        </section>
    );
}
