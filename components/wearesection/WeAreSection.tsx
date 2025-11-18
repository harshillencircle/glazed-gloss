import { renderRichText, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function WeAreSection({ blok }: any) {

    return (
        <section
            {...storyblokEditable(blok)}
            className="relative z-1 flex max-xl:flex-col justify-center items-center bg-[#F2F0EA] xl:pr-[100px] gap-2.5 md:gap-10 overflow-hidden"
        >
            {/* BACKGROUND IMAGE */}
            <div className="absolute -z-10 -bottom-15 -left-20 opacity-10 -rotate-6">
                <Image
                    src="/pattern.png"
                    alt="background pattern"
                    width={300}
                    height={300}
                    className="h-auto"
                />
            </div>

            {/* LEFT IMAGES */}
            <div className="relative w-full flex flex-col justify-center max-xl:items-center md:justify-start">

                {/* Main Lady Image */}
                <Image
                    src={blok.left_image.filename}
                    alt="Lady Image"
                    width={760}
                    height={827}
                    className="object-cover max-lg:w-full h-auto"
                />

                {/* Phone Frame */}
                <div className="absolute left-[36%] lg:left-[40%] -bottom-[20%] sm:-bottom-[30%] lg:-bottom-[20%] xl:top-[188px] xl:left-[650px] w-[130px] sm:w-[260px] h-[220px] sm:h-[450px]">
                    <Image
                        src={blok.phone_frame.filename}
                        alt="Phone Frame"
                        width={220}
                        height={450}
                        className="relative z-1"
                    />

                    {/* <Image
                        src={blok.phone_video.filename}
                        alt="Phone video"
                        width={180}
                        height={390}
                        className="absolute top-[30px] left-[23px] w-[180px] h-[390px]
                            object-cover rounded-xl z-10"
                    /> */}

                    {/* Video Inside the Phone */}
                    <video
                        src="./AQOLMTeBvvXeZqHTqFCCaLIFNuX7IBBTiWatwSSk3J5lGWb66SQ0pZk6jFNAhX-l_kvd70hihPyyXKhM7-_ywrWhz5mDWXbPOi1Fme4-ezgif.com-video-to-gif-converter.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute left-[10.5%] -bottom-[12%] sm:top-[30px] sm:left-[23px] w-[110px] sm:w-[180px] h-[230px] sm:h-[390px] object-cover rounded-xl"
                    ></video>
                </div>
            </div>

            <div className="absolute -z-10 top-[25%] -right-60 opacity-10 -rotate-30">
                <Image
                    src="/pattern.png"
                    alt="background pattern"
                    width={400}
                    height={400}
                    className="h-auto"
                />
            </div>

            {/* RIGHT TEXT CONTENT */}
            < div className="w-full xl:w-1/2 flex flex-col justify-center px-5 max-xl:pt-[200px] py-24 gap-5 md:gap-10" >

                <div className="flex flex-col gap-7">
                    <h2 className="text-sm text-[#7A5238] font-termina font-medium uppercase  ">
                        {blok.section_label}
                    </h2>

                    <h2 className="text-4xl md:text-[42px] font-ivypresto font-normal uppercase">
                        {blok.title}
                    </h2>

                    {/* Description */}
                    <div className="prose md:prose-lg max-w-none text-[16px] text-gray-600 font-termina font-light"
                        dangerouslySetInnerHTML={{
                            __html: renderRichText(blok.description) || "",
                        }}
                    ></div>
                </div>

                <div className="flex flex-col max-md:justify-center max-md:items-center">
                    {/* Signature */}
                    <div className="w-[240px]">
                        <Image
                            src={blok.signature_image.filename}
                            alt="Signature"
                            width={200}
                            height={80}
                            className="object-contain h-[72px]"
                        />
                    </div>

                    {/* Button */}
                    <div className="w-[250px] md:w-fit bg-[#DFF624] rounded-[10px] text-center px-6 py-2.5">
                        <Link
                            href={blok.button_link.cached_url}
                            className="text-[16px] text-black font-termina font-normal uppercase "
                        >
                            {blok.button_text}
                        </Link>
                    </div>
                </div>

            </div >
        </section >
    );
}
