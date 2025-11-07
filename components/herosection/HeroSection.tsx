import { storyblokEditable } from "@storyblok/react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-termina",
});

export default function HeroSection({ blok }: any) {
    return (
        <section
            {...storyblokEditable(blok)}
            className="relative h-[734px] flex flex-col justify-center items-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${blok.background_video?.filename})` }}
        >
            <div className={`absolute top-0 px-24 py-2.5 gap-2.5 ${montserrat.variable}`}>
                <h5 className="text-xs md:text-[16px] font-light text-white leading-[100%] tracking-[0] text-center">{blok.headline}</h5>
            </div>

            <div className="gap-10">
                {blok.subheadline?.filename && (
                    <img src={blok.subheadline.filename} alt="Sub-Heading" width={1312} height={360} className="text-2xl text-gray-200 object-cover" />
                )}
                <button className={`text-[16px] mt-6 bg-[#DFF624] text-black font-normal text-center rounded-[10px] px-7 py-2.5 gap-2.5 uppercase ${montserrat.variable}`}>
                    {blok.button}
                </button>
            </div>
        </section>
    );
}
