import { storyblokEditable } from "@storyblok/react";

export default function TrustSection({ blok }: any) {
    return (
        <section {...storyblokEditable(blok)} className="flex flex-col justify-center items-center px-5 md:px-24 py-20 gap-10"  >
            <h2 className="text-[36px] md:text-[52px] font-ivypresto font-normal text-center uppercase">
                {blok.title}
            </h2>

            <div className="flex max-xl:flex-wrap max-md:flex-col justify-center items-center gap-7">

                {blok.trusts?.map((trust: any, index: any) => (
                    <div key={trust._uid} className="flex max-md:flex-col justify-center items-center gap-7 w-full md:w-auto">

                        {index !== 0 && (
                            <>
                                <div className="hidden xl:block w-0 h-[152px] border border-black"></div>
                                <div className="block md:hidden w-full border border-black"></div>
                            </>
                        )}

                        <div key={trust._uid} className="flex flex-col justify-between items-center w-[286px] h-[152px] px-7 md:px-0">

                            <h2 className="text-[12px] font-termina font-normal uppercase">
                                {trust.label}
                            </h2>

                            <h1 className="text-[52px] md:text-[64px] text-[#7A5238] font-ivypresto font-normal uppercase">
                                {trust.value}
                            </h1>

                            <h5 className="text-sm font-termina font-normal text-center uppercase">
                                {trust.description}
                            </h5>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}