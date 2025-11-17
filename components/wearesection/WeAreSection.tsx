import { renderRichText, storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";

export default function WeAreSection({ blok }: any) {

    console.log(blok.description);

    return (
        <section
            {...storyblokEditable(blok)}
            className="flex bg-[#F2F0EA] pr-[100px] gap-2.5"
        >
            {/* LEFT IMAGES */}
            <div className="relative w-full flex">

                {/* Main Lady Image */}
                <Image
                    src={blok.left_image.filename}
                    alt="Lady Image"
                    width={760}
                    height={827}
                    className="object-cover"
                />

                {/* Phone Frame */}
                <div className="absolute top-[350px] left-[650px] w-[220px] h-[450px]">
                    <Image
                        src={blok.phone_frame.filename}
                        alt="Phone Frame"
                        width={220}
                        height={450}
                        className="relative "
                    />

                    {/* <Image
                        src={blok.phone_video.filename}
                        alt="Phone video"
                        width={200}
                        height={400}
                        className="absolute top-0 left-0
                        object-cover rounded-xl z-10"
                    /> */}

                    {/* Video Inside the Phone */}
                    <video
                        src="./AQOLMTeBvvXeZqHTqFCCaLIFNuX7IBBTiWatwSSk3J5lGWb66SQ0pZk6jFNAhX-l_kvd70hihPyyXKhM7-_ywrWhz5mDWXbPOi1Fme4-ezgif.com-video-to-gif-converter.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-[30px] left-[23px] w-[180px] h-[390px] object-cover rounded-xl"
                    ></video>
                </div>
            </div>

            {/* RIGHT TEXT CONTENT */}
            <div className="w-full md:w-1/2 flex flex-col py-24 gap-10">

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
                <div className="w-fit bg-[#DFF624] rounded-[10px] px-6 py-2.5">
                    <Link
                        href={blok.button_link.cached_url}
                        className="text-[16px] text-black font-termina font-normal uppercase "
                    >
                        {blok.button_text}
                    </Link>
                </div>

            </div>
        </section>
    );
}
