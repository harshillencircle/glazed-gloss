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

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-termina",
});

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

    // Debug - open browser console to inspect full blok & resolved values
    if (typeof window !== "undefined") {
        // eslint-disable-next-line no-console
        console.log("Navbar blok (raw):", blok);
        // eslint-disable-next-line no-console
        console.log("Navbar resolved:", { menuItems, logoSrc, phone, ctaText, ctaLink });
    }

    return (
        <nav {...storyblokEditable(blok)} className="w-full bg-[#FAF9F6] sticky top-0 z-10">
            <div className="h-[140px] px-24">
                <div className="flex justify-between items-center">
                    {/* left */}
                    <div className="flex items-center gap-4">
                        {/* Mobile menu toggle */}
                        <button onClick={() => setIsOpen(!isOpen)} className={`flex justify-center items-center text-[16px] font-normal gap-2 uppercase ${montserrat.variable}`}>
                            <Image
                                src="/menu 1.svg"
                                alt="Menu Icon"
                                width={30}
                                height={30}
                            />
                            {isOpen ? "Menu" : "Menu"}
                        </button>

                        {/* Desktop menu items */}
                        <div className="md:flex items-center gap-6">
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
                                // using <img> keeps it simple until next.config.js is configured for external domains
                                <img src={logoSrc} alt={logoAsset?.alt ?? logoAsset?.Alt ?? "Logo"} width={148} height={40} className="mx-auto" />
                            ) : (
                                <span className="text-xl font-bold">GLANED GLOSS</span>
                            )}
                        </Link>
                    </div>

                    {/* right - phone + CTA */}
                    <div className="flex justify-end items-center gap-4">
                        <div className={`flex justify-center items-center text-[16px] font-medium gap-2 uppercase ${montserrat.variable}`}>
                            <Image
                                src="/phone.svg"
                                alt="Menu Icon"
                                width={24}
                                height={24}
                            />
                            {phone && <a href={`tel:${phone}`} className="text-sm">{phone}</a>}
                        </div>
                        <div className={`flex justify-center items-center text-[16px] font-normal gap-2 uppercase ${montserrat.variable}`}>
                            <Link href={ctaLink} className="bg-[#E5FF32] text-black px-7 py-2.5 rounded-[10px]">
                                {ctaText || "Hire"}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* mobile menu */}
                {isOpen && (
                    <div className="py-2">
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
// ...existing code...