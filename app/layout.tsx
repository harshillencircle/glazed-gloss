import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import Page from "@/components/Page";
import HeroSection from "@/components/herosection/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import ServicesSection from "@/components/servicessection/ServicesSection";
import GridImage from "@/components/gridimage/GridImage";
import ServiceCard from "@/components/servicecard/ServiceCard";
import ImageBlock from "@/components/Image/imageblok";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GLANED GLOSS",
  description: "A glossy Next.js template with Geist UI and Tailwind CSS.",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_TOKEN || process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero_section: HeroSection,
    navbar: Navbar,
    services_section: ServicesSection,
    service_card: ServiceCard,
    grid_image: GridImage,
    image: ImageBlock,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoryblokProvider>
          {children}
        </StoryblokProvider>
      </body>
    </html>
  );
}
