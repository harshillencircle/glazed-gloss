import { storyblokEditable } from "@storyblok/react";

export default function HeroSection({ blok }: any) {

    const customSectionStyles = `
        w-full 
        h-[550px] 
        flex 
        flex-col 
        justify-center 
        items-center
        gap-7
        md:gap-10
        px-[30px]
        md:px-[100px]
        py-20
        bg-cover
        bg-center
    `;

    const defaultSectionStyles = `
        relative 
        h-[734px]
        flex 
        flex-col 
        justify-center 
        items-center 
        text-center  
        bg-cover 
        bg-center
    `;

    const customHeadlineStyles = `
        font-ivypresto 
        font-normal 
        text-[36px]
        md:text-[52px] 
        text-[#DFF624]
        leading-[100%] 
        uppercase 
        tracking-[0] 
        text-center
    `;

    const defaultHeadlineStyles = `
        absolute 
        top-0
        font-termina 
        text-xs 
        md:text-[16px] 
        font-light 
        text-white 
        leading-[100%] 
        tracking-[0] 
        text-center
        px-24 
        py-2.5
    `;

    const customContentStyles = `
        flex 
        flex-col 
        justify-center 
        items-center
        gap-10
    `;

    const defaultContentStyles = `
        flex 
        flex-col 
        justify-center 
        items-center 
        p-5 
        gap-10
    `;

    const isCustom = blok.variant === "custom";

    return (
        <section
            {...storyblokEditable(blok)}
            className={isCustom ? customSectionStyles : defaultSectionStyles}
            style={{ backgroundImage: `url(${blok.background_video?.filename})` }}
        >

            <h5 className={isCustom ? customHeadlineStyles : defaultHeadlineStyles}>
                {blok.headline}
            </h5>

            <div className={isCustom ? customContentStyles : defaultContentStyles}>
                {blok.subheadline?.filename && (
                    <img src={blok.subheadline.filename} alt="Sub-Heading" width={1312} height={360} className="object-cover" />
                )}

                <h5 className="text-[16px] text-[#FAF9F6] text-center font-termina font-medium">
                    {blok.subheadline_text}
                </h5>

                <button className="text-[16px] bg-[#DFF624] text-black font-termina font-normal text-center rounded-[10px] px-7 py-2.5 gap-2.5 uppercase cursor-pointer">
                    {blok.button}
                </button>
            </div>
        </section>
    );
}
