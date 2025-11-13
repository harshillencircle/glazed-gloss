import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  blok: {
    media?: { filename: string; alt?: string; fieldtype?: string };
    alt_text?: string;
    width?: number | string;
    height?: number | string;
    width_mobile?: number | string;
    height_mobile?: number | string;
    rounded?: boolean;
    full_width?: boolean;
    object_fit?: "cover" | "contain" | "fill";
  };
};

export default function ImageBlock({ blok }: Props) {
  const file = blok.media?.filename;
  if (!file) return null;

  const parsePx = (value?: string | number) =>
    typeof value === "string" ? parseInt(value.replace("px", ""), 10) : value;

  const width = parsePx(blok.width);
  const height = parsePx(blok.height);
  const widthMobile = parsePx(blok.width_mobile);
  const heightMobile = parsePx(blok.height_mobile);

  const rounded = blok.rounded;
  const fit = blok.object_fit;
  const fullWidth = blok.full_width;

  const fallbackWidth = width ?? widthMobile ?? 640;
  const fallbackHeight = height ?? heightMobile ?? 480;

  const cssVars = {
    "--img-w": width ? `${width}px` : undefined,
    "--img-h": height ? `${height}px` : undefined,
    "--img-w-mobile": widthMobile ? `${widthMobile}px` : undefined,
    "--img-h-mobile": heightMobile ? `${heightMobile}px` : undefined,
  } satisfies Record<string, string | undefined>;

  const sizes = fullWidth
    ? "(min-width: 1280px) 800px, (min-width: 768px) 60vw, 100vw"
    : "(min-width: 1024px) 480px, (min-width: 768px) 60vw, 90vw";

  const roundedClass = rounded ? "rounded-[10px]" : "";
  const fitClass = fit ? `object-${fit}` : "object-cover";

  return (
    <div
      {...storyblokEditable(blok)}
      className={`storyblok-image flex justify-center items-center ${fullWidth ? "w-full" : ""}`}
      style={cssVars as CSSProperties}
    >
      <Image
        src={file}
        alt={blok.alt_text || blok.media?.alt || "Media"}
        width={fallbackWidth}
        height={fallbackHeight}
        sizes={sizes}
        className={`${roundedClass} ${fitClass}`}
      />
    </div>
  );
}
