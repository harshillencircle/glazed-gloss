"use client";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SocialSection({ blok }: any) {
  const imagesBlocks = blok.images || [];

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative flex flex-col justify-center items-center px-5 md:px-[100px] py-10 gap-7 overflow-hidden"
    >

      <div className="absolute -z-1 -top-90 md:-top-60 -right-120 md:-right-10">
        <Image src={blok.bg_image.filename} alt="Background Image" width={600} height={400} className="object-cover opacity-10" />
      </div>

      <div className="absolute -z-1 -bottom-150 md:-bottom-100 -left-70 md:-left-20 rotate-60">
        <Image src={blok.bg_image.filename} alt="Background Image" width={700} height={400} className="object-cover opacity-10" />
      </div>

      <h3 className="text-4xl font-ivypresto font-normal text-center uppercase">
        {blok.title}
      </h3>

      <div className="flex gap-5">
        {imagesBlocks.map((imgBlock: any) => {
          const images = imgBlock.images || [];

          if (images.length === 1) {
            const img = images[0];
            return (
              <div key={imgBlock._uid} className="w-[163px] md:w-[313px]">
                <Image
                  src={img.filename}
                  alt={img.alt || ""}
                  width={313}
                  height={476}
                  className="w-[163px] md:w-[313px] h-[270px] md:h-[476px] object-cover rounded-[10px]"
                  priority
                />
              </div>
            );
          }

          if (images.length === 2) {
            return (
              <div
                key={imgBlock._uid}
                {...storyblokEditable(imgBlock)}
                className="flex flex-col gap-2.5 md:gap-5"
              >
                {images.map((img: any, i: number) => (
                  <div key={i} className="w-[163px] md:w-[313px]">
                    <Image
                      src={img.filename}
                      alt={img.alt || ""}
                      width={313}
                      height={228}
                      className="w-[163px] md:w-[313px] h-[130px] md:h-[228px] object-cover rounded-[10px]"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* <Swiper
        spaceBetween={20}
        centeredSlides={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: imagesBlocks.length,
            centeredSlides: false,
          },
        }}
        className="w-full"
      >
        {imagesBlocks.map((imgBlock: any) => {
          const images = imgBlock.images || [];

          return (
            <SwiperSlide
              key={imgBlock._uid}
              className="flex justify-center w-auto!"
            >
              {images.length === 1 && (
                <div className="w-[163px] md:w-[313px]">
                  <Image
                    src={images[0].filename}
                    width={313}
                    height={476}
                    alt={images[0].alt ?? ""}
                    className="w-full h-[270px] md:h-[476px] object-cover rounded-[10px]"
                  />
                </div>
              )}

              {images.length === 2 && (
                <div className="flex flex-col gap-2.5 md:gap-5 w-[163px] md:w-[313px]">
                  {images.map((img: any, i: any) => (
                    <Image
                      key={i}
                      src={img.filename}
                      width={313}
                      height={228}
                      alt={img.alt ?? ""}
                      className="w-full h-[130px] md:h-[228px] object-cover rounded-[10px]"
                    />
                  ))}
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </section>
  );
}
