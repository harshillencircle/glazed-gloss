import { renderRichText, storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export default function WeDoSection({ blok }: any) {

    return (
        <section {...storyblokEditable(blok)} className="relative flex bg-[#8D8D8D] pr-[55px] mt-15 pl-10 pb-20 gap-10">
            <div className="relative z-1 -top-15">
                <Image src={blok.left_image.filename} alt="Tower Image" width={288} height={975} className="object-cover" />
            </div>

            <div className="flex flex-col gap-7">
                <div className="flex flex-col pt-15 gap-7">
                    <h2 className="text-sm text-[#FAF9F6] font-termina font-medium uppercase">
                        {blok.title}
                    </h2>

                    <h2 className="text-[52px] text-[#DFF624] font-ivypresto font-normal uppercase">
                        {blok.subtitle}
                    </h2>
                </div>

                <div className="flex gap-7">
                    {blok.service_items?.map((item: any) => (
                        <div key={item._uid} className="flex flex-col w-[158px] gap-3.5">
                            <h4 className="text-xl text-[#FAF9F6] font-ivypresto font-normal uppercase">
                                {item.heading}
                            </h4>
                            <div className="flex flex-col text-sm text-[#FAF9F6] font-termina font-normal uppercase gap-3.5"
                                dangerouslySetInnerHTML={{
                                    __html: renderRichText(item.sub_items) || "",
                                }}
                            ></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}