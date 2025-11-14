import { storyblokEditable } from "@storyblok/react";

export default function CapabilitiesSection({ blok }: any) {

    return (
        <section {...storyblokEditable(blok)} className="overflow-hidden">
            <div className="w-full max-w-full flex justify-center items-center bg-[#DFF624] py-3.5 gap-3.5">
                <h5 className="font-termina font-normal text-sm md:text-[14px] uppercase text-center whitespace-nowrap marquee">
                    {blok.highlight_text}
                </h5>
                <h5 className="font-termina font-normal text-sm md:text-[14px] uppercase text-center whitespace-nowrap marquee">
                    {blok.highlight_text}
                </h5>
            </div>
        </section>
    );
}
