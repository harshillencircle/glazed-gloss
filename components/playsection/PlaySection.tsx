"use client";

import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PlaySection({ blok }: any) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="flex justify-center items-center bg-[#F2F0EA] py-15 gap-7 md:gap-10"
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        centeredSlides={true}
        initialSlide={Math.floor((blok.plays?.length || 1) / 2)}
        grabCursor={true}
        breakpoints={{
          768: {
            spaceBetween: 40,
          },
        }}
      >
        {blok.plays?.map((play: any) => (
          <SwiperSlide key={play._uid} className="w-[300px]! md:w-[342px]!">
            <div key={play._uid} className="relative w-[300px] md:w-[342px] h-[480px] md:h-[532px]">
              <Image
                src={play.image.filename}
                alt={play.image.alt}
                width={342}
                height={532}
                className="object-cover rounded-[10px] w-[300px] md:w-[342px] h-[480px] md:h-[532px]"
              />

              <div className="absolute bottom-20 left-5 right-5 bg-white p-2.5 rounded-[10px]">
                <p className=" text-[16px] text-[#222222] font-termina font-light ">{play.description}</p>
              </div>

              <div className="flex justify-end items-end gap-2">
                <Image
                  src="./Group 3.svg"
                  alt="Audio"
                  width={40}
                  height={40}
                  className="absolute bottom-5 right-16"
                />

                <Image
                  src="./Group 2.svg"
                  alt="Mute/Unmute"
                  width={40}
                  height={40}
                  className="absolute bottom-5 right-5"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
