import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

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

  const rounded = blok.rounded ? "rounded-[10px]" : "";
  const fit = blok.object_fit || "cover";
  const fullWidth = blok.full_width;

  return (
    <div
      {...storyblokEditable(blok)}
      className={`storyblok-image flex justify-center items-center ${fullWidth ? "w-full" : ""}`}
      style={
        {
          "--img-w": width ? `${width}px` : "auto",
          "--img-h": height ? `${height}px` : "auto",
          "--img-w-mobile": widthMobile ? `${widthMobile}px` : "auto",
          "--img-h-mobile": heightMobile ? `${heightMobile}px` : "auto",
        } as React.CSSProperties
      }
    >
      <Image
        src={file}
        alt={blok.alt_text || blok.media?.alt || "Media"}
        width={widthMobile || 600}
        height={heightMobile || 400}
        className={`${rounded} object-${fit} h-auto`}
      />
    </div>
  );
}
