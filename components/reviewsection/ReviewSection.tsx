"use client";

import { renderRichText, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ReviewSection({ blok }: any) {

    return (
        <section {...storyblokEditable(blok)} className="w-full flex flex-col justify-center items-center bg-[#8D8D8D] px-5 md:px-[100px] py-20 gap-10 overflow-hidden">
            <div className="flex flex-col justify-center items-start md:items-center gap-10">
                <h2 className="text-[12px] md:text-sm text-[#FAF9F6] font-termina font-medium uppercase">
                    {blok.label}
                </h2>

                <h2 className="text-[36px] md:text-[52px] text-[#DFF624] font-ivypresto text-start md:text-center font-normal uppercase">
                    {blok.heading}
                </h2>

                <h5 className="w-auto max-w-[950px] text-[16px] text-[#FAF9F6] font-termina text-start md:text-center font-light">
                    {blok.description}
                </h5>
            </div>

            <div className="w-screen">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    freeMode={true}
                    centeredSlides={true}
                    initialSlide={Math.floor((blok.reviews?.length || 1) / 2)}
                    grabCursor={true}
                    breakpoints={{
                        768: {
                            spaceBetween: 40,
                        }
                    }}
                >
                    {blok.reviews?.map((review: any) => (
                        <SwiperSlide key={review._uid} className="w-[300px]! md:w-[371px]!">
                            <div className="flex flex-col bg-white w-[300px] md:w-[371px] h-auto p-5 md:p- gap-2.5 md:gap-5">
                                <div className="flex gap-5">
                                    <Image src={review.image.filename} alt="Review Image" width={80} height={80} className="object-cover rounded-[10px] w-[80px] h-[80px]" />

                                    <div className="flex flex-col justify-center items-start gap-3.5">
                                        <h4 className="text-[16px] md:text-xl font-ivypresto font-normal uppercase">
                                            {review.name}
                                        </h4>

                                        <Image src={review.star_image.filename} alt="Star Image" width={136} height={24} className="object-cover" />
                                    </div>
                                </div>

                                <h5 className="text-[16px] font-termina font-light"
                                    dangerouslySetInnerHTML={{
                                        __html: renderRichText(review.message) || "",
                                    }}
                                ></h5>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}