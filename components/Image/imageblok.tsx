import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

type Props = {
  blok: {
    media?: {
      filename: string;
      alt?: string;
      fieldtype?: string;
    };
    alt_text?: string;
    width?: number;
    height?: number;
    rounded?: boolean;
    full_width?: boolean;
    object_fit?: "cover" | "contain" | "fill";
  };
};

export default function ImageBlock({ blok }: Props) {
  const file = blok.media?.filename;
  if (!file) return null;

  const isVideo =
    file.endsWith(".mp4") ||
    file.endsWith(".webm") ||
    file.endsWith(".mov") ||
    file.endsWith(".ogg");

  const isGif = file.endsWith(".gif");

  const width = blok.width || 1200;
  const height = blok.height || 800;

  const rounded = blok.rounded ? "rounded-lg" : "";
  const fit = blok.object_fit || "cover";
  const fullWidth = blok.full_width ? "w-full" : "";

  return (
    <div
      {...storyblokEditable(blok)}
      className={`flex justify-center ${fullWidth} my-4`}
    >
      {isVideo ? (
        <video
          src={file}
          autoPlay
          loop
          muted
          playsInline
          className={`${rounded} ${fullWidth} object-${fit}`}
        />
      ) : isGif ? (
        <img
          src={file}
          alt={blok.alt_text || blok.media?.alt || "Media"}
          className={`${rounded} ${fullWidth} object-${fit}`}
          width={width}
          height={height}
        />
      ) : (
        <Image
          src={file}
          alt={blok.alt_text || blok.media?.alt || "Media"}
          width={width}
          height={height}
          className={`${rounded} ${fullWidth} object-${fit}`}
        />
      )}
    </div>
  );
}
