'use client';

import { renderRichText, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function WeDoSection({ blok }: any) {

    return (
        <section {...storyblokEditable(blok)}
            className="relative flex max-md:flex-col justify-center items-center bg-[#8D8D8D] px-[15px] md:pr-[55px] mt-15 md:pl-10 pb-20 md:gap-10">

            <div className="relative z-1 -top-15 hidden md:flex shrink-0 w-[288px] min-w-[288px] h-[975px]">
                <Image
                    src={blok.left_image.filename}
                    alt="Tower Image"
                    width={288}
                    height={975}
                    className="object-cover rounded-[10px]"
                />
            </div>

            <div className="relative z-1 -top-15 flex md:hidden shrink-0 w-[316px] min-w-[316px] h-[520px]">
                <Image
                    src={blok.mobile_image.filename}
                    alt="Tower Image"
                    width={316}
                    height={520}
                    className="rounded-[10px]"
                />
            </div>

            <div className="flex flex-col max-md:justify-center max-md:items-center gap-7 w-full overflow-hidden">
                <div className="flex flex-col flex-wrap md:pt-15 gap-7">
                    <h2 className="text-sm text-[#FAF9F6] font-termina font-medium uppercase">
                        {blok.title}
                    </h2>

                    <h2 className="text-[36px] md:text-[52px] text-[#DFF624] font-ivypresto font-normal uppercase">
                        {blok.subtitle}
                    </h2>
                </div>

                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={28}
                    slidesPerView="auto"
                    breakpoints={{
                        768: { slidesPerView: "auto" },
                    }}
                    className="pb-10! swiper-overflow-fix w-full!"
                >
                    {blok.service_items?.map((item: any) => (
                        <SwiperSlide key={item._uid} className="h-auto w-auto!">
                            <div className="flex flex-col gap-3.5 max-w-[158px]">
                                <h4 className="text-xl text-[#FAF9F6] font-ivypresto font-normal uppercase">
                                    {item.heading}
                                </h4>
                                <div
                                    className="flex flex-col text-sm text-[#FAF9F6] font-termina font-normal uppercase gap-3.5"
                                    dangerouslySetInnerHTML={{
                                        __html: renderRichText(item.sub_items) || "",
                                    }}
                                ></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>

    );
}