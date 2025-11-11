// ...existing code...
"use client";
import { storyblokEditable } from "@storyblok/react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function getImageSrc(asset: any) {
    if (!asset) return undefined;
    // common Storyblok asset properties
    return asset.filename ?? asset.file ?? asset.url ?? asset.URL ?? asset.File ?? (asset.filename_full ?? undefined) ?? (asset.id ? `https://a.storyblok.com/f/${asset.id}` : undefined);
}

export default function Navbar({ blok }: { blok?: any }) {
    const [isOpen, setIsOpen] = useState(false);

    // normalize field names (accept both snake_case and PascalCase)
    const menuItems = blok?.menu_items ?? blok?.Menu_Items ?? [];
    const logoAsset = blok?.logo ?? blok?.Logo;
    const logoSrc = getImageSrc(logoAsset);
    const phone = blok?.phone_number ?? blok?.Phone_Number ?? "";
    const ctaText = blok?.cta_button_text ?? blok?.Cta_Text ?? "";
    const ctaLink =
        blok?.cta_button_link?.cached_url ??
        blok?.cta_button_link?.url ??
        blok?.Cta_Link?.cached_url ??
        blok?.Cta_Link?.url ??
        "/";

    return (
        <nav {...storyblokEditable(blok)} className="w-full bg-[#FAF9F6] sticky top-0 z-10">
            <div className="">
                <div className="flex justify-between items-center h-20 md:h-[140px] px-5 md:px-24">
                    {/* left */}
                    <div className="flex items-center gap-4">
                        {/* Mobile menu toggle */}
                        <button onClick={() => setIsOpen(!isOpen)} className="flex justify-center items-center text-[16px] font-termina font-normal gap-2 uppercase">
                            <Image
                                src="/menu 1.svg"
                                alt="Menu Icon"
                                width={30}
                                height={30}
                            />
                            <span className="hidden md:inline">Menu
                                {/* {isOpen ? "Menu" : "Menu"} */}
                            </span>
                        </button>

                        {/* Desktop menu items */}
                        <div className="hidden md:flex items-center gap-6">
                            {Array.isArray(menuItems) &&
                                menuItems.map((item: any) => (
                                    <Link key={item._uid ?? item.id ?? Math.random()} href={item.link?.cached_url ?? item.link?.url ?? item.link ?? item.Link ?? "#"} className="text-sm">
                                        {item.label ?? item.Label ?? "Menu"}
                                    </Link>
                                ))}
                        </div>
                    </div>

                    {/* center - logo */}
                    <div className="flex justify-center">
                        <Link href="/">
                            {logoSrc ? (
                                <Image src={logoSrc} alt={logoAsset?.alt ?? logoAsset?.Alt ?? "Logo"} width={148} height={40} className="mx-auto max-md:w-[70px] max-md:h-[63px]" />
                            ) : (
                                <span className="text-xl font-bold">GLANED GLOSS</span>
                            )}
                        </Link>
                    </div>

                    {/* right - phone + CTA */}
                    <div className="max-md:hidden flex justify-end items-center gap-4">
                        <div className="flex justify-center items-center text-[16px] font-termina font-medium gap-2 uppercase">
                            <Image
                                src="/phone.svg"
                                alt="Menu Icon"
                                width={24}
                                height={24}
                            />
                            {phone && <a href={`tel:${phone}`} className="text-sm">{phone}</a>}
                        </div>
                        <div className="flex justify-center items-center text-[16px] font-termina font-normal gap-2 uppercase">
                            <Link href={ctaLink} className="bg-[#E5FF32] text-black px-7 py-2.5 rounded-[10px]">
                                {ctaText || "Hire"}
                            </Link>
                        </div>

                    </div>
                    <div className="md:hidden block">
                        <Image src="/tabler_search.svg" alt="Search" width={28} height={28} />
                    </div>
                </div>

                {/* mobile menu */}
                {isOpen && (
                    <div>
                        {Array.isArray(menuItems) &&
                            menuItems.map((item: any) => (
                                <Link key={item._uid ?? item.id ?? Math.random()} href={item.link?.cached_url ?? item.link?.url ?? item.link ?? "#"} className="block py-2">
                                    {item.label ?? item.Label ?? "Menu"}
                                </Link>
                            ))}
                    </div>
                )}
            </div>
        </nav>
    );
}