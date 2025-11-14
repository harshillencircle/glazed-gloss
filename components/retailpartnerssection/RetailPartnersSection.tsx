import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { storyblokEditable } from "@storyblok/react";

export default function RetailPartnersSection({ blok }: any) {

    const rows = [
        blok.partner_logos.slice(0, 5),   // Row 1
        blok.partner_logos.slice(5, 10),  // Row 2
        blok.partner_logos.slice(10, 15), // Row 3
        blok.partner_logos.slice(15),     // Row 4
    ];

    return (
        <section
            {...storyblokEditable(blok)}
            className="flex flex-col items-center bg-[#8D8D8D] py-5 md:py-10 gap-7 overflow-hidden"
        >
            {/* Header */}
            <h2 className="text-[#DFF624] text-4xl md:text-[52px] font-ivypresto font-normal text-center uppercase">
                {blok.title}
            </h2>

            {/* Logos Grid */}
            <div className="flex flex-col w-[1070px] md:w-full  px-24 gap-7 md:gap-10">
                {rows.map((row, index) => (
                    <div
                        key={index}
                        className={`flex w-full items-center gap-10 md:gap-20
                                 ${index === 3 ? "justify-center" : "justify-between"}`}
                    >
                        {row.map((logo: any) => (
                            <StoryblokServerComponent blok={logo} key={logo._uid} />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
